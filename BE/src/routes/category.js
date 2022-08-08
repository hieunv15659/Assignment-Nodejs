import express from 'express';
import { add, list, read} from '../controllers/category';

const router = express.Router();

router.post("/category",add );
router.get("/category/:id", read);
router.get("/category",list );
export default router;

