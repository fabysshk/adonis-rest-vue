<template>
  <v-form v-model="validT" @submit.prevent="onAddTask">
    <v-container>
      <v-layout>
        <v-flex xs12 md10>
          <v-text-field
            v-model="task.description"
            :rules="descriptionRules"
            :counter="10"
            label="description"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md2>
          <v-btn dark @click="onAddTask" :disabled="!validT">add</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreateTask",
  data() {
    return {
      task: {
        description: "",
        project_id: ""
      },
      validT: false,
      descriptionRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ]
    };
  },
  methods: {
    ...mapActions(["createTask"]),
    onAddTask() {
      if (!this.validT) return;
      this.task.project_id = this.getSelectedProject.id;
      this.createTask(this.task);
    }
  },
  computed: {
    ...mapGetters(["getSelectedProject"])
  }
};
</script>

<style scoped></style>
