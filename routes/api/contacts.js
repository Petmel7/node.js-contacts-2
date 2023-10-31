import express from 'express';
import contactsControler from '../../controlers/contacts-controler.js';
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { contactsAddSchema } from "../../schemas/contacts-schemas.js";
import { ifIsNoResult } from "../../middlewares/index.js";

const contactsAddValidate = validateBody(contactsAddSchema);

const router = express.Router();

router.get('/', contactsControler.getContactsAll)

router.get('/:contactId', ifIsNoResult, contactsControler.getContactsById);

router.post('/', isEmptyBody, contactsAddValidate, contactsControler.addContacts)

router.put('/:contactId', isEmptyBody, ifIsNoResult, contactsAddValidate, contactsControler.updateContactsById)

router.delete('/:contactId', ifIsNoResult, contactsControler.deleteContactsById)

export default router;