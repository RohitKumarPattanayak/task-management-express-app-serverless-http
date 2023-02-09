import express from "express";
import {
  get_user_tasks,
  post_user_tasks,
  put_user_task,
  delete_user_task,
  patch_user_task,
} from "../../services/v1/taskCrudServices.js";
import {
  getTasksValidation,
  postTaskValidation,
  putTaskValidation,
  patchTaskValidation,
} from "../../validation/taskCrudValidation.js";
import validation from "../../validation/validationMiddleware.js";

const router = express.Router();

router.get("", getTasksValidation, validation, get_user_tasks);
router.post("", postTaskValidation, validation, post_user_tasks);
router.put("/:id", putTaskValidation, validation, put_user_task);
router.patch("/:id", patchTaskValidation, validation, patch_user_task);
router.delete("/:id", delete_user_task);

export default router;
