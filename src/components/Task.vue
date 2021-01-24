<template>
  <!--  <div-->
  <!--    class="task"-->
  <!--    @click="onSelectedTask"-->
  <!--    v-bind:class="[-->
  <!--      this.getSelectedTask.id === this.task.id ? 'selected' : '',-->
  <!--      task.complited ? 'complited' : ''-->
  <!--    ]"-->
  <!--  >-->
  <!--    <div v-if="isEdit">-->
  <!--      <input type="text" v-model="newDescription" />-->
  <!--      <button @click="onSave">save</button>-->
  <!--      <button @click="onCancel">X</button>-->
  <!--    </div>-->

  <!--    <div v-if="!isEdit">-->
  <!--      <h3>{{ task.description }}</h3>-->
  <!--      <input type="checkbox" :checked="task.complited" @input="onComplited" />-->

  <!--      <button @click="onEdit">edit</button>-->
  <!--      <button @click="onDeleteTask">delete</button>-->
  <!--    </div>-->
  <!--    <p>{{ task.updated_at }}</p>-->
  <!--  </div>-->
  <v-card class="task">
    <v-toolbar
      @click="onSelectedTask"
      v-bind:class="[
        this.getSelectedTask.id === this.task.id ? 'pink' : '',
        task.complited ? 'complited' : ''
      ]"
    >
      <v-toolbar-title v-if="!isEdit">{{ task.description }}</v-toolbar-title>

      <v-toolbar-title v-if="isEdit">
        <v-text-field v-model="newDescription"></v-text-field>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon v-if="!isEdit" @click="onComplited">
        <v-icon>done</v-icon>
      </v-btn>

      <v-btn icon v-if="!isEdit" @click="onEdit">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn icon v-if="!isEdit" @click.stop="onDeleteTask">
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
      <v-list-tile-title style="text-align: right;padding: 0 15px">
        {{ task.updated_at }}
      </v-list-tile-title>
    </v-list-tile-content>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Task",
  props: { task: {} },
  data() {
    return {
      taskClasses: ["selected", "complited"],
      isEdit: false,
      newDescription: ""
    };
  },
  methods: {
    ...mapActions(["updateTask", "deleteTask", "updateSelectedTask"]),
    onComplited() {
      this.updateTask({ ...this.task, complited: !this.task.complited });
    },
    onDeleteTask() {
      this.deleteTask(this.task);
    },
    onSelectedTask() {
      this.updateSelectedTask(this.task);
    },
    onEdit() {
      this.isEdit = true;
      this.newDescription = this.task.description;
    },
    onCancel() {
      this.isEdit = false;
    },
    onSave() {
      this.updateTask({ ...this.task, description: this.newDescription });
      this.onCancel();
    }
  },
  computed: {
    ...mapGetters(["getSelectedTask"])
  }
};
</script>

<style>
.complited .v-toolbar__title {
  text-decoration: line-through;
}
.task {
  margin-top: 3px;
  cursor: pointer;
}
</style>
