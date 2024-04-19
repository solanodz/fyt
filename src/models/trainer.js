
import { Schema, model, models } from 'mongoose';

const TrainerSchema = new Schema({
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
    // profilePhoto: {
    //     type: String,
    //     required: false,
    // },
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
    },
    instagram: {
        type: String,
        required: false,
    },
    service: {
        type: String,
        required: true,
    },
    yearsExp: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Trainer = models.Trainer || model('Trainer', TrainerSchema);
export default Trainer;