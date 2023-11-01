import express from 'express';
import contactsControler from '../../controlers/contacts-controler.js';
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { contactsAddSchema } from "../../schemas/contacts-schemas.js";

const contactsAddValidate = validateBody(contactsAddSchema);

const router = express.Router();

router.get('/', contactsControler.getContactsAll)

router.get('/:contactId', contactsControler.getContactsById);

router.post('/', isEmptyBody, contactsAddValidate, contactsControler.addContacts)

router.put('/:contactId', isEmptyBody, contactsAddValidate, contactsControler.updateContactsById)

router.delete('/:contactId', contactsControler.deleteContactsById)

export default router;