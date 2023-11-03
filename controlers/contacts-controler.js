
import Contact from "../models/contact.js";
// import *as contactsService from "../models/contacts.js";
import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

const getContactsAll = async (req, res) => {
        const result = await Contact.find();
        res.json(result);
}

// const getContactsById = async (req, res) => {
//         const { contactId } = req.params;
//         const result = await contactsService.getContactById(contactId);
//         if (!result) {
//                 throw HttpError(404, `Contact with id:${contactId} not found`);
//         }

//         res.json(result);
// };

// const addContacts = async (req, res) => {
//         const result = await contactsService.addContact(req.body);

//         res.json(result);
// }

// const updateContactsById = async (req, res) => {
//         const { contactId } = req.params;
//         const result = await contactsService.updateContact(contactId, req.body);
//         if (!result) {
//                 throw HttpError(404, `Contact with id:${contactId} not found`);
//         }

//         res.json(result);
// }

// const deleteContactsById = async (req, res) => {
//         const { contactId } = req.params;
//         const result = await contactsService.removeContact(contactId);
//         if (!result) {
//                 throw HttpError(404, `Contact with id:${contactId} not found`);
//         }
        
//         res.json({
//                 message: "Delete success"
//         });
// }

export default {
        getContactsAll: ctrlWrapper(getContactsAll),
        // getContactsById: ctrlWrapper(getContactsById),
        // addContacts: ctrlWrapper(addContacts),
        // updateContactsById: ctrlWrapper(updateContactsById),
        // deleteContactsById: ctrlWrapper(deleteContactsById)
}