
import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [
            /^\S+@\S+\.\S+$/,
            "Por favor, introduce un email válido"
        ]
    },
    password: {
        type: String,
        minlength: [6, "La contraseña debe tener al menos 6 caracteres"],
        required: true,
        select: false,
    },
})

const User = models.User || model('User', userSchema);
export default User;