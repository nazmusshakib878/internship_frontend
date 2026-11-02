import { Router } from 'express';
import {
  getPrograms,
  getServices,
  getProjects,
} from '../controllers/contentController.js';

const router = Router();

router.get('/programs', getPrograms);
router.get('/services', getServices);
router.get('/projects', getProjects);

export default router;

