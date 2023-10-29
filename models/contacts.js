import fs from 'fs/promises';
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("models", "contacts.json")
const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const listContacts = async () => {
    const buffer = await fs.readFile(contactsPath);
    return JSON.parse(buffer)
}

export const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contactsOne = contacts.find(item => item.id === contactId)
    return contactsOne;
}

export const addContact = async ({ name, email, phone }) => {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    }
    contacts.push(newContact)
    return newContact
}

export const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId);

    contacts.splice(index, 1)
    await updateContacts(contacts)
    return contactId

}

export const updateContact = async (contactId, {name, email, phone}) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId);
    if (index === -1) {
        return null
    }
    contacts[index] = { contactId, name, email, phone };
    await updateContacts(contacts)
    return contacts[index]
}
