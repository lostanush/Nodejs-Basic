exports.createPostValidator = (req, res, next) => {
    // Validate title
    req.check("title", "Write a title").notEmpty();
    req.check("title", "Title must be between 4 and 150 characters").isLength({ min: 4, max: 150 });

    // Validate body
    req.check("body", "Write a body").notEmpty();
    req.check("body", "Body must be between 4 and 2000 characters").isLength({ min: 4, max: 2000 });

    // Check for validation errors
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors[0].msg; // Accessing the error message correctly
        return res.status(400).json({ error: firstError });
    }

    // Proceed to next middleware or route handler
    next();
};
