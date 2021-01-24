<template>
  <main>
    <div class="item">
      <CreateProject />
      <Projects />
    </div>
    <div class="item">
      <CreateTask />
      <Tasks />
    </div>
  </main>
</template>

<script>
import Projects from "../components/Projects";
import CreateProject from "../components/CreateProject";
import Tasks from "../components/Tasks";
import CreateTask from "../components/CreateTask";

export default {
  components: { Projects, Tasks, CreateProject, CreateTask }
};
</script>
