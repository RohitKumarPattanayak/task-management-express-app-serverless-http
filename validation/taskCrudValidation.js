import { body, query } from "express-validator";

export const getTasksValidation = [
  query("id", "id should not be empty and should be a number")
    .optional()
    .notEmpty()
    .isNumeric(),
];

export const postTaskValidation = [
  body("title", "title should not be empty and should be a string")
    .exists()
    .isString()
    .notEmpty(),
  body("desc", "desc should not be empty and should be a string")
    .exists()
    .isString()
    .notEmpty(),
];

export const putTaskValidation = [
  body("title", "title should not be empty and should be a string")
    .exists()
    .isString()
    .notEmpty(),
  body("desc", "desc should not be empty and should be a string")
    .exists()
    .isString()
    .notEmpty(),
];

export const patchTaskValidation = [
  body("title", "title should not be empty and should be a string")
    .isString()
    .optional()
    .notEmpty(),
  body("desc", "desc should not be empty and should be a string")
    .isString()
    .optional()
    .notEmpty(),
];
