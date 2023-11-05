import Joi from "joi";
import { Schema, model } from "mongoose";
import { handleSaveError, runValidatorAtUpdate } from "./hooks.js";

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    // genre: {
    //     type: String,
    //     enum: ["fantastic", "love story"],
    //     require: true
    // },
    // releaseYear: {
    //     type: Boolean,
    //     match: /^\d{4}$/,
    //     default: false
    // },
}, { versionKey: false, timestamps: true });

contactSchema.post("save", handleSaveError);

contactSchema.pre("findOneAndUpdate", runValidatorAtUpdate);

contactSchema.post("findOneAndUpdate", handleSaveError);

export const contactsAddSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean().required(),
});

export const contactUpdateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

const Contact = model("contact", contactSchema);

export default Contact;