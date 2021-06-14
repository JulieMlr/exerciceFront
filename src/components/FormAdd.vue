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
          <h1> Information New User </h1>
          <form
            id="app"
            :action="'/users'"
            method="post"
          >
            <label for="avatarUrl">avatarUrl </label>
            <input
              id="avatarUrl"
              class="input"
              type="text"
              name="avatarUrl"
            >
            <br>
            <label for="nom">Nom </label>
            <input
              id="nom"
              class="input"
              type="text"
              name="nom"
            >
            <br>
            <label for="prenom">Prenom </label>
            <input
              id="prenom"
              class="input"
              type="text"
              name="prenom"
            >
            <br>
            <label for="email">Email</label>
            <input
              id="email"
              class="input"
              type="email"
              name="email"
            >
            <br>

            <label for="phone">Phone</label>
            <input
              id="phone"
              class="input"
              type="tel"
              name="phone"
            >
            <br>

            <label for="detail">Detail</label>
            <input
              id="detail"
              class="input"
              type="textarea"
              name="detail"
            >
            <br>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
            >
            <label for="female">Female</label>

            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
            >
            <label for="male">Male</label>
            <br>
            <label for="birthDate">birthDate</label>
            <input
              id="birthDate"
              class="input"
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
      if (document.getElementById('female').checked) {
        this.userAdd.gender = document.getElementById('female').value;
      }
      if (document.getElementById('male').checked) {
        this.userAdd.gender = document.getElementById('male').value;
      }
      this.userAdd.birthDate = document.getElementById('birthDate').value;
      this.postData(this.userAdd);
      this.open = false;
    },
    postData(user) {
      axios
        .post('https://ynov-front.herokuapp.com/api/users', user);
    },
    hideModal() {
      this.open = false;
    },
  },
};
</script>

<style>
.input {
  margin-left: 10px;
  border: 1px solid;
}
</style>
