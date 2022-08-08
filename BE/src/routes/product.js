import express from 'express';
import { add, list, read, remove, update } from '../controllers/product';

const router = express.Router();


router.get("/products", list );
router.get("/products/:id", read);
router.post("/products",add );
router.delete("/products/:id", remove );
router.patch("/products/:id", update);

export default router;

