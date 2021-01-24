<template>
  <v-toolbar dark>
    <v-toolbar-title>
      <router-link to="/" tag="a">Projects</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat v-if="getToken" @click.prevent="onLogOut">logOut</v-btn>
      <v-btn flat v-if="!getToken">
        <router-link to="/auth" tag="a">auth</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions(["logOut", "clearTasks"]),
    onLogOut() {
      this.logOut();
      this.clearTasks();
    }
  },
  computed: {
    ...mapGetters(["getToken"])
  }
};
</script>

<style lang="scss" scoped>
a {
  color: whitesmoke;
}
</style>
