import Axios from "axios";

const url = "/projects/";

class ProjectService {
  async getAll() {
    try {
      const res = await Axios.get(url);
      return await res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async create(newProject) {
    try {
      const res = await Axios.post(url, newProject);
      return await res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async update(updateProject) {
    try {
      const res = await Axios.patch(
        `projects/${updateProject.id}`,
        updateProject
      );
      return await res.data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(project) {
    try {
      const res = await Axios.delete(`projects/${project.id}`);
      return await res.data;
    } catch (e) {
      throw new Error(e);
    }
  }
}

const projectService = new ProjectService();

export { projectService };
