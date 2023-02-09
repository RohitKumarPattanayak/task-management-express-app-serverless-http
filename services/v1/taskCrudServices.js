import _ from "lodash";
import {
  get_tasks_by_id,
  get_tasks,
  post_new_task,
  update_task_by_id,
  delete_task_by_id,
  patch_task_by_id,
} from "../../dao/v1/tasksDao.js";

export const get_user_tasks = (req, res) => {
  try {
    const { id } = req.query;
    let result = id ? get_tasks_by_id(id) : get_tasks();
    return res.json(result);
  } catch (error) {
    return res.json({
      Error: {
        code: 403,
        message: "data error",
      },
    });
  }
};

export const post_user_tasks = (req, res) => {
  const { title, desc } = req.body;
  try {
    let result = post_new_task(title, desc);
    return res.json(result);
  } catch (error) {
    return res.json({
      Error: {
        code: error.code,
        message: error.message.message,
      },
    });
  }
};

export const put_user_task = (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;
  try {
    let result = update_task_by_id(id, title, desc);
    return res.json(result);
  } catch (error) {
    return res.json({
      Error: {
        code: error.code,
        message: error.message,
      },
    });
  }
};

export const patch_user_task = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    let result = patch_task_by_id(id, body);
    return res.json(result);
  } catch (error) {
    return res.json({
      Error: {
        code: error.code,
        message: error.message,
      },
    });
  }
};

export const delete_user_task = (req, res) => {
  const { id } = req.params;
  try {
    let result = delete_task_by_id(id);
    return res.json(result);
  } catch (error) {
    return res.json({
      Error: {
        code: error.code,
        message: error.message,
      },
    });
  }
};
