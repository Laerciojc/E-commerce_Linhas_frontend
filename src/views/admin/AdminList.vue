<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="admin"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AdminList",
  data() {
    return {
      headers: [
        { text: "Nome", align: "start", value: "name" },
        { text: "Nome de usuário", value: "username" },
        { text: "Email", value: "email" },
        { text: "Documento", value: "document" },
        { text: "Telefone", value: "number" },
        { text: "Tipo", value: "type" },
      ],
      admin: [],
    };
  },
  methods: {
    ...mapActions(["GetUsers"]),
  },
  async mounted() {
    this.clients = await this.GetUsers();
  },
};
</script>

<style>
</style>