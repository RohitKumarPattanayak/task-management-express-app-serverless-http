import { validationResult } from "express-validator";
import { CodeError } from "../Handlers/ErrorHandler.js";

const validation = (req, res, next) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      throw new CodeError("validation Error.", 403);
    }
    next();
  } catch (error) {
    return res.status(error.code).json({
      Error: {
        code: error.code,
        message: error.message,
      },
    });
  }
};

export default validation;
