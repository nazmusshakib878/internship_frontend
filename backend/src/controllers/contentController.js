import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readJson = (file) => {
  const filePath = path.join(__dirname, '../data', file);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

export const getPrograms = (req, res, next) => {
  try {
    const data = readJson('programs.json');
    res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    next(error);
  }
};

export const getServices = (req, res, next) => {
  try {
    const data = readJson('services.json');
    res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    next(error);
  }
};

export const getProjects = (req, res, next) => {
  try {
    const data = readJson('projects.json');
    res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    next(error);
  }
};

