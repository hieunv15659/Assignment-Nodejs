import mongoose from "mongoose";
import { createHmac } from "crypto";

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
    },
});

userSchema.methods = {
    encrytPassword: (password) => {
        if (!password) return false;
        return createHmac("sha256", "abc").update(password).digest("hex");
    },
};

userSchema.pre("save", function (next) {
    this.password = this.encrytPassword(this.password);
    next();
});
export default mongoose.model("User", userSchema);
