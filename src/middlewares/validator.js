const { validationResult } = require('express-validator');
const { body } = require('express-validator');

const validateInput = (req, res, next) => {
    const errors = validationResult(req); // Extraemos los errores
    if (!errors.isEmpty()) { // Si hay errores, los devolvemos al cliente
    return res.status(400).json({ errors: errors.array() });
    }
    next(); // Caso contrario continuamos al controlador
   };

const loginValidations = [
    body('email')
    .isEmail()
    .withMessage('Ingrese una dirección de correo electrónico válida'),
    body('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres, y solo admite letras y números')
   ];

module.exports = {
    validateInput,
    loginValidations
}