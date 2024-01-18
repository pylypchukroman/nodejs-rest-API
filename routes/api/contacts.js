const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const { contactSchema, updateFavoriteSchema } = require("../../schemas/contactSchema");

const { isValidId } = require("../../middlewares")

router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validateBody(contactSchema), ctrl.addContact);

router.delete('/:contactId',isValidId, ctrl.deleteContact);

router.put('/:contactId', isValidId, validateBody(contactSchema), ctrl.editContact);

router.patch('/:contactId/favorite', validateBody(updateFavoriteSchema), ctrl.updateFavorite);

module.exports = router;
