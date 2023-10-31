
import *as contactsService from "../models/contacts.js";
import { ctrlWrapper } from "../decorators/index.js";

const getContactsAll = async (req, res) => {
        const result = await contactsService.listContacts();
        res.json(result);
}

const getContactsById = async (req, res) => {
        const { contactId } = req.params;
        const result = await contactsService.getContactById(contactId);

        res.json(result);
}

const addContacts = async (req, res) => {
        const result = await contactsService.addContact(req.body);
    
        res.json(result);
}

const updateContactsById = async (req, res) => {
        const { contactId } = req.params;
        const result = await contactsService.updateContact(contactId, req.body);
    
        res.json(result);
}

const deleteContactsById = async (req, res) => {
        const { contactId } = req.params;
        const result = await contactsService.removeContact(contactId);
        
        res.json({
            message: "Delete success"
        });
}

export default {
    getContactsAll: ctrlWrapper(getContactsAll),
    getContactsById: ctrlWrapper(getContactsById),
    addContacts: ctrlWrapper (addContacts),
    updateContactsById: ctrlWrapper(updateContactsById),
    deleteContactsById: ctrlWrapper(deleteContactsById)
}