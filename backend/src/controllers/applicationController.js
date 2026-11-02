import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storageFile = path.join(__dirname, '../storage/applications.json');

// Ensure storage file exists
const ensureStorage = () => {
  const dir = path.dirname(storageFile);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(storageFile)) {
    fs.writeFileSync(storageFile, JSON.stringify([], null, 2), 'utf8');
  }
};

export const createApplication = async (req, res, next) => {
  try {
    const { fullName, email, reason, programLevel } = req.body;

    // Validation
    if (!fullName || !fullName.trim()) {
      return res.status(400).json({ success: false, message: 'Full name is required.' });
    }
    if (!email || !email.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'A valid email address is required.' });
    }
    if (!reason || !reason.trim()) {
      return res.status(400).json({ success: false, message: 'Please share your reason or goals for joining.' });
    }

    ensureStorage();
    const data = JSON.parse(fs.readFileSync(storageFile, 'utf8') || '[]');

    const newApplication = {
      id: `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      reason: reason.trim(),
      programLevel: programLevel || 'Web Development Internship',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    data.unshift(newApplication);
    fs.writeFileSync(storageFile, JSON.stringify(data, null, 2), 'utf8');

    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully! Our team will contact you soon.',
      application: newApplication,
    });
  } catch (error) {
    next(error);
  }
};

export const getApplications = async (req, res, next) => {
  try {
    ensureStorage();
    const data = JSON.parse(fs.readFileSync(storageFile, 'utf8') || '[]');
    return res.status(200).json({
      success: true,
      count: data.length,
      applications: data,
    });
  } catch (error) {
    next(error);
  }
};

export const getApplicationById = async (req, res, next) => {
  try {
    ensureStorage();
    const data = JSON.parse(fs.readFileSync(storageFile, 'utf8') || '[]');
    const app = data.find((item) => item.id === req.params.id);

    if (!app) {
      return res.status(400).json({ success: false, message: 'Application not found' });
    }

    return res.status(200).json({ success: true, application: app });
  } catch (error) {
    next(error);
  }
};

