import express from 'express';
import contactsControler from '../../controlers/contacts-controler.js';
import { isEmptyBody, isValidId } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { contactsAddSchema, contactUpdateFavoriteSchema } from "../../models/contact.js";

const contactsAddValidate = validateBody(contactsAddSchema);
const contactoUpdateFavoriteSchema = validateBody(contactUpdateFavoriteSchema);

const router = express.Router();

router.get('/', contactsControler.getContactsAll);

router.get('/:contactId', isValidId, contactsControler.getContactsById);

router.post('/', isEmptyBody, contactsAddValidate, contactsControler.addContacts);

router.put('/:contactId', isValidId, isEmptyBody, contactsAddValidate, contactsControler.updateContactsById);

router.patch('/:contactId/favorite', isValidId, isEmptyBody, contactoUpdateFavoriteSchema, contactsControler.updateFavoriteContactsById);

router.delete('/:contactId', isValidId, contactsControler.deleteContactsById);

export default router;