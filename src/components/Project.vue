<template>
  <v-card class="project">
    <v-toolbar
      @click="onGetTasks"
      v-bind:class="{ cyan: getSelectedProject.id === project.id }"
      dark
    >
      <v-toolbar-title v-if="!isEdit">{{ project.title }}</v-toolbar-title>

      <v-toolbar-title v-if="isEdit">
        <v-text-field v-model="newTitle"></v-text-field>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon v-if="!isEdit" @click="onEdit">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn icon v-if="!isEdit" @click="onDeleted($event)">
        <v-icon>delete</v-icon>
      </v-btn>

      <v-btn icon v-if="isEdit" @click="onSave">
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn icon v-if="isEdit" @click="onCancel">
        <v-icon>cancel</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list-tile-content>
      <v-list-tile-title
        style="background-color: black;text-align: right;color: whitesmoke;padding: 0 15px"
      >
        {{ project.updated_at }}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Project",
  props: ["project"],
  data() {
    return {
      newTitle: "",
      isEdit: false
    };
  },
  methods: {
    ...mapActions([
      "fetchTasks",
      "updateProject",
      "deleteProject",
      "deletedTasks"
    ]),
    onGetTasks() {
      this.fetchTasks(this.project);
    },
    onSave() {
      const updateP = { ...this.project, title: this.newTitle };
      this.updateProject(updateP);
      this.isEdit = false;
    },
    onDeleted(e) {
      e.stopPropagation();
      this.deleteProject(this.project);
      this.deletedTasks(this.project);
    },
    onEdit() {
      this.isEdit = true;
      this.newTitle = this.project.title;
    },
    onCancel() {
      this.isEdit = false;
    }
  },
  computed: {
    ...mapGetters(["getSelectedProject"])
  }
};
</script>

<style lang="scss" scoped>
.project {
  cursor: pointer;
  margin-top: 5px;
}
</style>
