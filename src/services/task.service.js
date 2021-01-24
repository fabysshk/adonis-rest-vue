import Axios from "axios";

const url = "/projects";

class TaskService {
  async getAll(project) {
    try {
      const res = await Axios.get(`${url}/${project.id}/tasks`);
      return await res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async create(newTask) {
    try {
      const res = await Axios.post(
        `${url}/${newTask.project_id}/tasks`,
        newTask
      );
      return await res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async updated(updatedTask) {
    try {
      const res = await Axios.patch(`/tasks/${updatedTask.id}`, updatedTask);
      return await res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(task) {
    try {
      const res = await Axios.delete(`/tasks/${task.id}`, task);
      return await res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

const taskService = new TaskService();

export { taskService };
