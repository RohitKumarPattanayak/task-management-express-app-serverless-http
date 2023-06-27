import { createRequire } from "module";
import _ from "lodash";
import { CodeError } from "../../Handlers/ErrorHandler.js";
const require = createRequire(import.meta.url);

const data = require("../database/data.json");
export const get_tasks_by_id = (id) => {
  return { data: data.filter((itr) => itr["id"] == id) };
};

export const get_tasks = () => {
  return { data: data.task };
};

export const post_new_task = (title, desc) => {
  const duplicate = data.task.filter((itr) => itr["title"] == title);
  if (_.size(duplicate)) {
    throw new CodeError({ message: "title should be unique." }, 403);
  }
  data.task.push({
    id: _.size(data.task) + 1,
    title,
    desc,
  });
  return { Message: "Succesfully posted new task." };
};

export const update_task_by_id = (id, title, desc) => {
  const if_id_exists = data.task.filter((itr) => itr["id"] == id);
  if (_.size(if_id_exists)) {
    data.task.forEach((itr) => {
      if (itr["id"] == id) {
        itr["title"] = title;
        itr["desc"] = desc;
      }
    });
    return {
      Message: `Succesfully updated the task with id : ${id}.`,
    };
  } else {
    throw new CodeError("ID does'nt exists.", 400);
  }
};

export const patch_task_by_id = (id, body) => {
  const if_id_exists = data.task.filter((itr) => itr["id"] == id);
  if (_.size(if_id_exists)) {
    data.task.forEach((itr) => {
      if (itr["id"] == id) {
        itr[Object.keys(body)[0]] = body[Object.keys(body)[0]];
      }
    });
    return {
      Message: `Succesfully patched the task with id : ${id}.`,
    };
  } else {
    throw new CodeError("ID does'nt exists.", 400);
  }
};

export const delete_task_by_id = (id) => {
  const if_id_exists = data.task.filter((itr) => itr["id"] == id);
  if (_.size(if_id_exists)) {
    let delete_index;
    data.task.map((itr, i) => {
      if (itr["id"] == id) {
        delete_index = i;
      }
    });
    data.task.splice(delete_index, 1);
    return {
      Message: `Succesfully deleted the task with id : ${id}.`,
    };
  } else {
    throw new CodeError("ID does'nt exists.", 400);
  }
};
