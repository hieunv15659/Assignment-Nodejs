import User from "../models/user";

export const signup = async (req, res) => {
    try {
        const existEmail = await User.findOne({ email: req.body.email }).exec();
        if (existEmail) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            });
        }
        const user = await new User(req.body).save();
        res.status(200).json({
            user: {
                email: user.email,
                name: user.name,
            },
        });
    } catch (error) {
        res.status(400).json({
            message: "Dang ky khong thanh cong",
            error,
        });
    }
};
