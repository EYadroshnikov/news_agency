import {body, validationResult} from "express-validator";


export const checkErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    } else {
        next()
    }
}

export const titleValidation = body('title')
    .trim()
    .isLength({min: 5, max: 20})
    .withMessage('Length should be from 5 to 20 symbols')

export const idValidation = body('id')
    .isInt().withMessage("id should be integer")




