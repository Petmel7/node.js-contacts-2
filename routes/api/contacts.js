import express from 'express';

import *as contactsService from "../../models/contacts.js";
import { HttpEror } from "../../helpers/index.js";
import Joi from "joi";

const router = express.Router()

const contactsAddSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
});

router.get('/', async (req, res) => {
    try {
        const result = await contactsService.listContacts();
        res.json(result);

    } catch (error) {
        next(error);
    }
})

router.get('/:contactId', async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await contactsService.getContactById(contactId);

        if (!result) {
            throw HttpEror(404, `Contact with id:${contactId} not found`);
        }
        res.json(result);

    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        if (!Object.keys(req.body).length) {
            throw HttpEror(400, "All fields empty");
        }

        const { error } = contactsAddSchema.validate(req.body);
        if (error) {
            throw HttpEror(400, error.message);
        }
        const result = await contactsService.addContact(req.body);
        res.json(result);

    } catch (error) {
        next(error);
    }
})



///
router.put('/:contactId', async (req, res, next) => {
    try {
        if (!Object.keys(req.body).length) {
            throw HttpEror(400, "All fields empty");
        }

        const { error } = contactsAddSchema.validate(req.body);

        if (error) {
            throw HttpEror(400, error.message);
        }

        const { contactId } = req.params;

        const result = await contactsService.updateContact(contactId, req.body);
        if (!result) {
            throw HttpEror(404, `Contact with id:${contactId} not found`);
        }
        res.json(result);

    } catch (error) {
        next(error);
    }
})

router.delete('/:contactId', async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await contactsService.removeContact(contactId);
        if (!result) {
            throw HttpEror(404, `Contact with id:${contactId} not found`);
        }
        res.json({
            message: "Delete success"
        });

    } catch (error) {
        next(error);
    }
})

export default router;