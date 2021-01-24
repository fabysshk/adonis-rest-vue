import { projectService } from '../services';

const projects = {
  state: {
    projects: [],
    pupup: false,
  },
  mutations: {
    updateProjects(state, projects) {
      state.projects = projects;
    },
    updatePopup(state, bool) {
      state.pupup = bool;
    },
    createProject(state, project) {
      state.projects.unshift(project);
      state.pupup = false;
    },
    updateProject(state, project) {
      state.projects = state.projects.map((p) =>
        p.id === project.id ? project : p
      );
    },
    deletedProject(state, project) {
      state.projects = state.projects.filter((p) => p.id !== project.id);
    },
  },
  actions: {
    async fetchProjects(ctx) {
      const projects = await projectService.getAll();
      ctx.commit('updateProjects', projects);
    },
    togglePopup(ctx, bool) {
      ctx.commit('updatePopup', bool);
    },
    async createProject(ctx, newProject) {
      const project = await projectService.create(newProject);
      ctx.commit('createProject', project);
    },
    async updateProject(ctx, updatedProject) {
      const project = await projectService.update(updatedProject);
      ctx.commit('updateProject', project);
    },
    async deleteProject(ctx, deletedProject) {
      const project = await projectService.delete(deletedProject);
      ctx.commit('deletedProject', project);
    },
  },
  getters: {
    getProjects(state) {
      return state.projects;
    },
    projectPopup(state) {
      return state.pupup;
    },
  },
};

export { projects };
