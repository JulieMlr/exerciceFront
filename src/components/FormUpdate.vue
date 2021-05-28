<template>
  <div>
    <form
      id="app"
      :action="'/users/' + id"
      method="put"
    >
      <label for="nom">Nom</label>
      <input
        id="nom"
        type="text"
        name="nom"
      >
      <br>
      <label for="prenom">Prenom</label>
      <input
        id="prenom"
        type="text"
        name="prenom"
      >
      <br>
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
      >
      <br>

      <label for="phone">Phone</label>
      <input
        id="phone"
        type="tel"
        name="phone"
      >
      <br>

      <label for="detail">Detail</label>
      <input
        id="detail"
        type="textarea"
        name="detail"
      >
      <br>
      <input
        type="submit"
        value="Modifier"
      >
    </form>
  </div>
</template>

<script>

export default {
  name: 'FormUpdate',
  props: {
    user: Object,
  },
  data() {
    return {
      id: this.$route.params.id, // this is the id from the browser
    };
  },
  methods: {
  },
};
</script>
