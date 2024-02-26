import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is not valid"
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"],
        select: false
    },

},
    { timestamps: true }
)

export default mongoose.models.User || mongoose.model('User', userSchema);