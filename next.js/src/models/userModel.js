import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "plese provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "plese provide a email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "plese provide a email"]
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

const User = mongoose.model.users || mongoose.model("users", userSchema)

export default User;