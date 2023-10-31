import { HttpError } from "../helpers/index.js";

const ifIsNoResult = (req, res, next) => {
    if (!result) {
        return next(HttpError(404, `Contact with id:${contactId} not found`));
    }
    next();
}

export default ifIsNoResult;