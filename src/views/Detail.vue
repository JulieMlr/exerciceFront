<template>
  <div>
    <h1>
      Detail User
    </h1>
    <dl>
      <dd>
        <img
          :src="userDetail.avatarUrl"
          class="image"
        >
      </dd>
      <dt>Nom</dt>
      <dd>{{ userDetail.firstName }} {{ userDetail.lastName }}</dd>
      <dt>Date de Naissance</dt>
      <dd>
        {{ new Date(userDetail.birthDate).getDate() }} /
        {{ new Date(userDetail.birthDate).getMonth() +1 }} /
        {{ new Date(userDetail.birthDate).getFullYear() }}
      </dd>
      <dt>Genre</dt>
      <dd>{{ userDetail.gender }}</dd>
      <dt>Email</dt>
      <dd>{{ userDetail.email }}</dd>
      <dt>Phone</dt>
      <dd>{{ userDetail.phone }}</dd>
      <dt>Detail</dt>
      <dd>{{ userDetail.details }}</dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Detail',

  data() {
    return {
      id: this.$route.params.id, // this is the id from the browser
      userDetail: {},
    };
  },
  created() {
    this.detailUser();
  },
  methods: {
    detailUser() {
      axios(`https://ynov-front.herokuapp.com/api/users/${this.id}`).then(
        ({ data }) => {
          this.userDetail = data.data;
        },
      );
    },
  },
};
</script>

<style scoped>
.image {
  width: 10%;
}
</style>
