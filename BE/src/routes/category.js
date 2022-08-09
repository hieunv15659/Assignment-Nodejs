import express from 'express';
import {
    add,
    list,
    read,
    remove,
    update
} from '../controllers/category';

const router = express.Router();

router.post("/category", add);
router.get("/category/:id", read);
router.get("/category", list);
router.delete("/category/:id", remove);
router.patch("/category/:id", update);

export default router;