<template>
  <div class="projects">
    <Project
      v-for="project in getProjects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Project from "./Project";
export default {
  name: "Projects",
  components: { Project },
  methods: {
    ...mapActions(["fetchProjects"])
  },
  computed: {
    ...mapGetters(["getProjects"])
  },
  mounted() {
    this.fetchProjects();
  }
};
</script>

<style scoped></style>
