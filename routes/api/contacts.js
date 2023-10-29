import express from 'express';

import *as contactsService from "../../models/contacts.js";

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const result = await contactsService.listContacts();
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

router.get('/:contactId', async (req, res) => {
    try {
        const { contactId } = req.params;
        const result = await contactsService.getContactById(contactId);

        if (!result) {

            const error = new Error(`Contact with id:${contactId} not found`);
            error.status = 404;
            throw error;

            // return res.status(404).json({
            //     message: `Contact with id:${contactId} not found`
            // })
        }

        res.json(result);
    } catch (error) {

        const { status = 500, message = "Server error" } = error;
        res.status(status).json({
            message
        })

        // res.status(500).json({
        //     message: "Server error"
        // })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, email, phone } = req.params;
        const result = await contactsService.addContact({ name, email, phone });
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

router.delete('/:contactId', async (req, res) => {
    try {
        const { contactId } = req.params;
        const result = await contactsService.removeContact(contactId);
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

router.put('/:contactId', async (req, res) => {
    try {
        const { contactId, name, email, phone } = req.params;
        const result = await contactsService.updateContact(contactId, { name, email, phone });
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
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