import {body, check, query, validationResult} from "express-validator";


export const checkErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    } else {
        next()
    }
}

export const titleValidation = (req, res, next) => {
    const title = req.body.desiredTitle || req.query.desiredTitle;

    if (!title) {
        return res.status(400).json({error: 'Title is required'});
    }

    req.title = title.trim();

    return check('desiredTitle')
        .isLength({min: 5, max: 20})
        .withMessage('Length should be from 5 to 20 symbols')(req, res, next);
};

export const idValidation = (req, res, next) => {
    const id = req.body.id || req.query.id;

    if (!id) {
        return res.status(400).json({error: 'ID is required'});
    }

    req.id = parseInt(id, 10);

    return check('id')
        .isInt()
        .withMessage('ID should be an integer')(req, res, next);
};




