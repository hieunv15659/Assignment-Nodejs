import Product from '../models/product'


export const list = async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm nào"
        })
    }
};
export const read = async (req, res) => {
    const filter = { _id: req.params.id };
    const populate = req.query["_expand"];
    try {
        
        const product = await Product.findOne(filter).select("-__v").populate(populate).exec();
        console.log('product', product);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm",
            error
        });
    }
};
export const add = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}
export const remove = async (req, res) => {
    try {
        const id = req.params.id; 
        const product = await Product.findOneAndDelete({_id: id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}

export const update = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true } )
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: 'Không thêm được sản phẩm'
        })
    }
}