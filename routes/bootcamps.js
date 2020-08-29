import express from 'express';
import {
  getBootcamps,
  getBootcamp,
  addBootcamp,
  updateBootcamp,
  deleteBootcamp,
} from '../controllers/bootcamps.js';

const router = express.Router();

router.route('/').get(getBootcamps).post(addBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

export default router;
