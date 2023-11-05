
import Contact from "../models/contact.js";
import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

const getContactsAll = async (req, res) => {
        const result = await Contact.find({}, "-createdAt -updatedAt");
        res.json(result);
}

const getContactsById = async (req, res) => {
        const { contactId } = req.params;
        const result = await Contact.findById(contactId);
        if (!result) {
                throw HttpError(404, `Contact with id:${contactId} not found`);
        }

        res.json(result);
};

const addContacts = async (req, res) => {
        const result = await Contact.create(req.body);

        res.status(201).json(result);
}

const updateContactsById = async (req, res) => {
        const { contactId } = req.params;
        const result = await Contact.findByIdAndUpdate(contactId, req.body);
        if (!result) {
                throw HttpError(404, `Contact with id:${contactId} not found`);
        }

        res.json(result);
}

const updateFavoriteContactsById = async (req, res) => {
        const { contactId } = req.params;
        const result = await Contact.findByIdAndUpdate(contactId, req.body);
        if (!result) {
                throw HttpError(404, `Contact with id:${contactId} not found`);
        }

        res.json(result);
}

const deleteContactsById = async (req, res) => {
        const { contactId } = req.params;
        const result = await Contact.findByIdAndDelete(contactId);
        if (!result) {
                throw HttpError(404, `Contact with id:${contactId} not found`);
        }
        
        res.json({
                message: "Delete success"
        });
}

export default {
        getContactsAll: ctrlWrapper(getContactsAll),
        getContactsById: ctrlWrapper(getContactsById),
        addContacts: ctrlWrapper(addContacts),
        updateContactsById: ctrlWrapper(updateContactsById),
        updateFavoriteContactsById: ctrlWrapper(updateFavoriteContactsById),
        deleteContactsById: ctrlWrapper(deleteContactsById)
}