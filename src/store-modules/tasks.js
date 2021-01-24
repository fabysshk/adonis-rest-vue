import { taskService } from '../services';

const tasks = {
  state: {
    tasks: [],
    selecteProject: {},
    selectedTask: {},
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
    updateSelectedProject(state, project) {
      state.selecteProject = project;
    },
    updateSelectedTask(state, task) {
      state.selectedTask = task;
    },
    createTask(state, task) {
      state.tasks.unshift(task);
    },
    updateTask(state, task) {
      state.tasks = state.tasks.map((t) => (t.id === task.id ? task : t));
    },
    deletedTasks(state, project) {
      if (project.id === state.selecteProject.id) {
        state.tasks = [];
        state.selecteProject = {};
      }
    },
    deleteTask(state, task) {
      state.tasks = state.tasks.filter((t) => t.id !== task.id);
    },
    clearTasks(state) {
      state.tasks = [];
      state.selecteProject = {};
    },
  },
  actions: {
    async fetchTasks(ctx, project) {
      const tasks = await taskService.getAll(project);
      ctx.commit('updateTasks', tasks);
      ctx.commit('updateSelectedProject', project);
    },
    async createTask(ctx, newTask) {
      const task = await taskService.create(newTask);
      ctx.commit('createTask', task);
    },
    async updateTask(ctx, updatedTask) {
      const task = await taskService.updated(updatedTask);
      ctx.commit('updateTask', task);
    },
    deletedTasks(ctx, project) {
      ctx.commit('deletedTasks', project);
    },
    async deleteTask(ctx, deletedTask) {
      const task = await taskService.delete(deletedTask);
      ctx.commit('deleteTask', task);
    },
    updateSelectedTask(ctx, task) {
      ctx.commit('updateSelectedTask', task);
    },
    clearTasks(ctx) {
      ctx.commit('clearTasks');
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
    getSelectedProject(state) {
      return state.selecteProject;
    },
    getSelectedTask(state) {
      return state.selectedTask;
    },
  },
};

export { tasks };
