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
      <button
        type="button"
        @click="getValue()"
      >
        Récupérer la valeur
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormUpdate',
  props: {
    user: Object,
  },
  data() {
    return {
      id: this.$route.params.id, // this is the id from the browser
      userModif: {
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        details: '',
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
      if (this.userModif.firstName === '') this.userModif.firstName = this.user.firstName;
      if (this.userModif.lastName === '') this.userModif.lastName = this.user.lastName;
      if (this.userModif.email === '') this.userModif.email = this.user.email;
      if (this.userModif.phone === '') this.userModif.phone = this.user.phone;
      if (this.userModif.details === '') this.userModif.details = this.user.details;
      console.log(
        `${this.userModif.lastName} ${this.userModif.firstName} ${this.userModif.email} ${this.userModif.phone} ${this.userModif.details} ${this.userModif.birthDate}`,
      );
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
