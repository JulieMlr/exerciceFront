<template>
  <div>
    <button @click="open = true">
      Ajouter un user
    </button>
    <vue-modaltor
      :visible="open"
      @hideModal="hideModal"
    >
      <template #body>
        <div>
          <form
            id="app"
            :action="'/users'"
            method="post"
          >
            <label for="avatarUrl">avatarUrl</label>
            <input
              id="avatarUrl"
              type="text"
              name="avatarUrl"
            >
            <br>
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
            <label for="gender">Gender</label>
            <input
              id="gender"
              type="text"
              name="gender"
            >
            <br>
            <label for="birthDate">birthDate</label>
            <input
              id="birthDate"
              type="date"
              name="birthDate"
            >
            <br>
            <br>
            <button
              type="button"
              @click="getValue()"
            >
              Ajouter User
            </button>
          </form>
        </div>
      </template>
    </vue-modaltor>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FormAdd',
  data() {
    return {
      open: false,
      userAdd: {
        avatarUrl: '',
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        details: '',
        gender: '',
        birthDate: '',
      },
    };
  },
  methods: {
    getValue() {
      this.userAdd.avatarUrl = document.getElementById('avatarUrl').value;
      this.userAdd.lastName = document.getElementById('nom').value;
      this.userAdd.firstName = document.getElementById('prenom').value;
      this.userAdd.email = document.getElementById('email').value;
      this.userAdd.phone = document.getElementById('phone').value;
      this.userAdd.details = document.getElementById('detail').value;
      this.userAdd.gender = document.getElementById('gender').value;
      this.userAdd.birthDate = document.getElementById('birthDate').value;
      console.log(
        `${this.userAdd.avatarUrl} ${this.userAdd.lastName} ${this.userAdd.firstName} ${this.userAdd.email} ${this.userAdd.phone} ${this.userAdd.details} ${this.userAdd.birthDate}`,
      );
      // this.postData(this.userAdd);
      this.open = false;
    },
    postData(user) {
      axios
        .post('https://ynov-front.herokuapp.com/api/users', user).then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    hideModal() {
      this.open = false;
    },
  },
};
</script>
