const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const contactSchema = require("../../schemas/contactSchema")


router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateBody(contactSchema), ctrl.addContact);

router.delete('/:contactId', ctrl.deleteContact);

router.put('/:contactId', validateBody(contactSchema), ctrl.editContact);

module.exports = router;
