
import { Schema, model, models } from 'mongoose';

const ClientSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "El nombre debe tener al menos 3 caracteres"],
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "El apellido debe tener al menos 3 caracteres"],
    },
    bornDate: {
        type: Date,
        required: true,
    },
    profilePhoto: {
        type: String,
        required: false,
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
    phone: {
        type: String,
        required: true,
    }
});

const Client = models.Client || model('Client', ClientSchema);
export default Client;