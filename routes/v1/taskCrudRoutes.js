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

/**
 * @openapi
 * components:
 *  securitySchemes:
 *      basicAuth:
 *          type: "http"
 *          scheme: "basic"
 * '/api/v1/tasks':
 *  get:
 *     tags:
 *     - TASK MANAGEMENT CRUD API's
 *     basicAuth:
 *     - basicAuth : []
 *     description: Returns all active tasks
 *     parameters:
 *     - in: query
 *       name : id
 *       required: false
 *       schema:
 *          type: integer
 *       description: Numeric ID of the task to get
 *     responses:
 *       200:
 *         description: Returns requested tasks
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  data:
 *                      type: object
 *                      description: status code
 *             example:
 *                {"data":[{"id":1,"title":"rohit","desc":"rohit ka punchnama"}]}
 */
router.get("/", getTasksValidation, validation, get_user_tasks);

/**
 * @openapi
 * components:
 *  securitySchemes:
 *      basicAuth:
 *          type: "http"
 *          scheme: "basic"
 * '/api/v1/tasks':
 *  post:
 *     tags:
 *     - TASK MANAGEMENT CRUD API's
 *     basicAuth:
 *     - basicAuth : []
 *     description: craete a new task
 *     requestBody:
 *       description: task title and description
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type : object
 *              properties:
 *                  title:
 *                    type: string
 *                    description: title of the task
 *                  desc:
 *                    type: string
 *                    description: description of the task
 *              example:
 *               title: "Task 1"
 *               desc : "test description"
 *     responses:
 *       201:
 *         description: Returns success status
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Message:
 *                      type: string
 *                      description: status description
 *             example:
 *                {"Message":"Succesfully posted new task."}
 *       403:
 *         description: validation Error
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Error:
 *                      type: object
 *                      description: status description
 *             example:
 *                {"Error":{"code":403,"message":"validation Error."}}
 */
router.post("/", postTaskValidation, validation, post_user_tasks);
/**
 * @openapi
 * components:
 *  securitySchemes:
 *      basicAuth:
 *          type: "http"
 *          scheme: "basic"
 * '/api/v1/tasks/{id}':
 *  put:
 *     tags:
 *     - TASK MANAGEMENT CRUD API's
 *     basicAuth:
 *     - basicAuth : []
 *     description: update a existing task
 *     parameters:
 *     - in: path
 *       name : id
 *       required: true
 *       schema:
 *          type: integer
 *       description: Numeric ID of the task to update
 *     requestBody:
 *       description: task title and description
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type : object
 *              properties:
 *                  title:
 *                    type: string
 *                    description: title of the task
 *                  desc:
 *                    type: string
 *                    description: description of the task
 *              example:
 *               title: "Task 1"
 *               desc : "test description"
 *     responses:
 *       201:
 *         description: Returns success status
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Message:
 *                      type: string
 *                      description: status description
 *             example:
 *                {"Message":"Succesfully updated the task with id : 1."}
 *       400:
 *         description: Id does;nt exists
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Error:
 *                      type: object
 *                      description: status description
 *             example:
 *                {"Error":{"code":400,"message":"ID does'nt exists."}}
 *       403:
 *         description: validation Error
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Error:
 *                      type: object
 *                      description: status description
 *             example:
 *                {"Error":{"code":403,"message":"validation Error."}}
 */
router.put("/:id", putTaskValidation, validation, put_user_task);

/**
 * @openapi
 * components:
 *  securitySchemes:
 *      basicAuth:
 *          type: "http"
 *          scheme: "basic"
 * '/api/v1/tasks/{id}':
 *  patch:
 *     tags:
 *     - TASK MANAGEMENT CRUD API's
 *     basicAuth:
 *     - basicAuth : []
 *     description: update a existing task
 *     parameters:
 *     - in: path
 *       name : id
 *       required: true
 *       schema:
 *          type: integer
 *       description: Numeric ID of the task to patch
 *     requestBody:
 *       description: task title and description
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *              type : object
 *              properties:
 *                  title:
 *                    type: string
 *                    description: title of the task
 *              example:
 *               title: "Task 1"
 *     responses:
 *       201:
 *         description: Returns success status
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Message:
 *                      type: string
 *                      description: status description
 *             example:
 *                {"Message":"Succesfully updated the task with id : 1."}
 *       400:
 *         description: Id does;nt exists
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Error:
 *                      type: object
 *                      description: status description
 *             example:
 *                {"Error":{"code":400,"message":"ID does'nt exists."}}
 *       403:
 *         description: validation Error
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Error:
 *                      type: object
 *                      description: status description
 *             example:
 *                {"Error":{"code":403,"message":"validation Error."}}
 */
router.patch("/:id", patchTaskValidation, validation, patch_user_task);

/**
 * @openapi
 * components:
 *  securitySchemes:
 *      basicAuth:
 *          type: "http"
 *          scheme: "basic"
 * '/api/v1/tasks/{id}':
 *  delete:
 *     tags:
 *     - TASK MANAGEMENT CRUD API's
 *     basicAuth:
 *     - basicAuth : []
 *     description: update a existing task
 *     parameters:
 *     - in: path
 *       name : id
 *       required: true
 *       schema:
 *          type: integer
 *       description: Numeric ID of the task to delete
 *     responses:
 *       200:
 *         description: Returns success status
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Message:
 *                      type: string
 *                      description: status description
 *             example:
 *                {"Message":"Succesfully deleted the task with id : 1."}
 *       400:
 *         description: Id does;nt exists
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Error:
 *                      type: object
 *                      description: status description
 *             example:
 *                {"Error":{"code":400,"message":"ID does'nt exists."}}
 *       403:
 *         description: validation Error
 *         content:
 *          application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  Error:
 *                      type: object
 *                      description: status description
 *             example:
 *                {"Error":{"code":403,"message":"validation Error."}}
 */

router.delete("/:id", delete_user_task);

export default router;
