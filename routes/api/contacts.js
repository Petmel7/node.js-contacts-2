import express from 'express';

import *as contactsService from "../../models/contacts.js";

const router = express.Router()

router.get('/', async (req, res) => {
    const result = await contactsService.listContacts(); 
    res.json(result);
})

router.get('/:contactId', async (req, res) => {
    const result = await contactsService.getContactById(contactId);
    res.json(result);
})

router.post('/', async (req, res) => {
    const result = await contactsService.addContact( {name, email, phone} );
    res.json(result);
})

router.delete('/:contactId', async (req, res) => {
    const result = await contactsService.removeContact(contactId);
    res.json(result);
})

router.put('/:contactId', async (req, res) => {
    const result = await contactsService.updateContact(contactId, { name, email, phone });
    res.json(result);
})



// const invokeAction = async ({ action, contactsId, name, email, phone }) => {
//     switch (action) {
//         case "list":

//         case "get":
//         case "add":
//         case "remove":
//         case "update":
//     }
// }

export default router;