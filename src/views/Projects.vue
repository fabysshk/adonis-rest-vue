<template>
  <div class="projects-page">
    <div class="projects">
      <h2>
        projects: {{ getProjects.length }}
        <button @click="togglePopup(true)">+</button>
      </h2>
      <CreateProject v-if="projectPopup" />
      <Project
        v-for="project in getProjects"
        :key="project.id"
        :project="project"
      />
    </div>

    <div class="tasks">
      <h2>tasks: {{ getTasks.length }}</h2>
      <CreateTask
        v-if="getSelectedProject.id"
        :projectId="getSelectedProject.id"
      />

      <div
        class="task"
        v-for="task in getTasks"
        :key="task.id"
        v-bind:class="{ complited: task.complited }"
      >
        <h2>{{ task.description }}</h2>
        <div>
          <input
            type="checkbox"
            :checked="task.complited"
            @input="onComplited(task)"
          />
          <v-btn color="warning" @click="deleteTask(task)">delete</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CreateProject from "../components/CreateProject";
import CreateTask from "../components/CreateTask";
import Project from "../components/Project";

export default {
  name: "Projects",
  components: { CreateProject, CreateTask, Project },
  comments: { CreateProject },
  methods: {
    ...mapActions([
      "fetchProjects",
      "fetchTasks",
      "togglePopup",
      "updateTask",
      "deleteTask"
    ]),
    onGetTasks(project) {
      this.fetchTasks(project);
    },
    onComplited(task) {
      const updatedTask = task;
      updatedTask.complited = !updatedTask.complited;
      this.updateTask(updatedTask);
    }
  },
  computed: {
    ...mapGetters([
      "getProjects",
      "getTasks",
      "getSelectedProject",
      "projectPopup"
    ])
  },
  mounted() {
    this.fetchProjects();
  },
  filters: {
    date: value => {
      value = value.toLocaleString();
      return value;
    }
  }
};
</script>

<style scoped lang="scss">
.projects-page {
  width: 100%;
  height: 80vh;
  display: flex;
}

.projects,
.tasks {
  flex: 1;
  overflow-y: auto;
}

.projects {
  background: lightgrey;
}

.tasks {
  background: aliceblue;
}

.project {
  border: 1px solid;

  &.selected {
    background: #2c3e50;
    color: whitesmoke;
  }
}

.task {
  border: 1px solid red;

  &.complited {
    background-color: lightgreen;
    text-decoration: line-through;
  }
}
</style>
