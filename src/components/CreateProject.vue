<template>
  <v-form v-model="valid" @submit.prevent="onCreateProject">
    <v-container>
      <v-layout>
        <v-flex xs12 md10>
          <v-text-field
            v-model="project.title"
            :rules="titleRules"
            :counter="10"
            label="Title"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md2>
          <v-btn dark @click="onCreateProject" :disabled="!valid">add</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CreateProject",
  data() {
    return {
      project: { title: "" },
      valid: false,
      titleRules: [
        v => !!v || "Name is required",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ]
    };
  },

  methods: {
    ...mapActions(["togglePopup", "createProject"]),
    onCreateProject() {
      if (!this.valid) return;
      this.createProject(this.project);
    }
  },
  computed: {
    ...mapGetters([])
  }
};
</script>

<style scoped></style>
