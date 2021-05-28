<template>
  <div>
    <h1> Detail User </h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>
            avatarUrl
          </th>
          <th>
            Nom
          </th>
          <th>
            Detail
          </th>
          <th>
            Email
          </th>
          <th>
            Genre
          </th>
          <th>
            Phone
          </th>
          <th>
            Age
          </th>
        </tr>
      </thead>
      <tbody>
        <td style="width:10%">
          <img
            :src="userDetail.avatarUrl"
            style="width:50%"
          >
        </td>
        <td>{{ userDetail.firstName }} {{ userDetail.lastName }}</td>
        <td> {{ userDetail.details }}</td>
        <td> {{ userDetail.email }}</td>
        <td> {{ userDetail.gender }}</td>
        <td> {{ userDetail.phone }}</td>
        <td>
          {{ new Date(Date.now() - new Date(userDetail.birthDate)
            .getTime()).getFullYear() - 1970 }}
        </td>
      </tbody>
    </table>
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
          console.log(this.userDetail);
        },
      );
    },
  },
};
</script>
