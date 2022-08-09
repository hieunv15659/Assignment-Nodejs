import Category from '../models/category'
import Product from '../models/product';

export const add = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được danh mục'
        })
    }
}
export const list = async (req, res) => {
    try {
        const category = await Category.find().exec()
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}
export const read = async (req, res) => {
    try {
        const category = await Category.findOne({
            _id: req.params.id
        }).exec();
        const products = await Product.find({
            category: category
        }).populate('category').select("-category").exec();
        res.json({
            category,
            products
        });
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findOneAndDelete({
            _id: id
        }).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: 'Không tìm được danh mục'
        })
    }
}

export const update = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        })
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được danh mục'
        })
    }
}