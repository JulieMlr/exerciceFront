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
        v-model="user.lastName"
        type="text"
        name="nom"
      >
      <br>
      <label for="prenom">Prenom</label>
      <input
        id="prenom"
        v-model="user.firstName"
        type="text"
        name="prenom"
      >
      <br>
      <label for="email">Email</label>
      <input
        id="email"
        v-model="user.email"
        type="email"
        name="email"
      >
      <br>

      <label for="phone">Phone</label>
      <input
        id="phone"
        v-model="user.phone"
        type="tel"
        name="phone"
      >
      <br>

      <label for="detail">Detail</label>
      <input
        id="detail"
        v-model="user.details"
        type="textarea"
        name="detail"
      >
      <br>
      <label for="birthDate">birthDate</label>
      <input
        id="birthDate"
        v-model="user.birthDate"
        type="date"
        name="birthDate"
      >
      <br>
      <button
        type="button"
        @click="getValue()"
      >
        Modifier User
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormUpdate',
  props: {
    user: {
      type: [Object],
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      id: this.$route.params.id, // this is the id from the browser
      userModif: {
        lastName: this.user.lastName,
        firstName: this.user.firstName,
        email: this.user.email,
        phone: this.user.phone,
        details: this.user.details,
        gender: this.user.gender,
        birthDate: this.user.birthDate,
      },
    };
  },
  methods: {
    getValue() {
      this.userModif.lastName = document.getElementById('nom').value;
      this.userModif.firstName = document.getElementById('prenom').value;
      this.userModif.email = document.getElementById('email').value;
      this.userModif.phone = document.getElementById('phone').value;
      this.userModif.details = document.getElementById('detail').value;
      this.userModif.birthDate = document.getElementById('birthDate').value;
      this.putData(this.userModif);
      this.$router.push({ path: '/', params: { message: 'Modification validée' } });
    },
    putData(user) {
      axios
        .put(`https://ynov-front.herokuapp.com/api/users/${this.id}`, user);
    },
  },
};
</script>
