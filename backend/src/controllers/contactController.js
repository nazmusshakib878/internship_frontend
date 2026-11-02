import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storageFile = path.join(__dirname, '../storage/contacts.json');

const ensureStorage = () => {
  const dir = path.dirname(storageFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(storageFile)) {
    fs.writeFileSync(storageFile, JSON.stringify([], null, 2), 'utf8');
  }
};

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required.' });
    }
    if (!email || !email.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'A valid email address is required.' });
    }
    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message content is required.' });
    }

    ensureStorage();
    const data = JSON.parse(fs.readFileSync(storageFile, 'utf8') || '[]');

    const newContact = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    data.unshift(newContact);
    fs.writeFileSync(storageFile, JSON.stringify(data, null, 2), 'utf8');

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! We have received your message.',
      contact: newContact,
    });
  } catch (error) {
    next(error);
  }
};

export const getContacts = async (req, res, next) => {
  try {
    ensureStorage();
    const data = JSON.parse(fs.readFileSync(storageFile, 'utf8') || '[]');
    return res.status(200).json({
      success: true,
      count: data.length,
      contacts: data,
    });
  } catch (error) {
    next(error);
  }
};

