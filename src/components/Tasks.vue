<template>
  <div class="tasks">
    <Task v-for="task in getTasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "../components/Task";
export default {
  name: "Tasks",
  components: { Task },
  computed: {
    ...mapGetters(["getTasks"])
  }
};
</script>

<style scoped></style>
