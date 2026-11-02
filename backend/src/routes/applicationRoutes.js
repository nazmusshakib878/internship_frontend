import { Router } from 'express';
import {
  createApplication,
  getApplications,
  getApplicationById,
} from '../controllers/applicationController.js';

const router = Router();

router.post('/', createApplication);
router.get('/', getApplications);
router.get('/:id', getApplicationById);

export default router;

