<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th />
          <th>
            <button @click="$emit('sortName')">
              <span v-if="trieName === 'desc'"> > </span>
              <span v-if="trieName === 'asc'"> inf </span>
              Nom
            </button>
          </th>
          <th>Email</th>
          <th>Tel</th>
          <th>Genre</th>
          <th>
            <button @click="$emit('sortAge')">
              <span v-if="trieAge === 'desc'"> > </span>
              <span v-if="trieAge === 'asc'"> inf </span>
              Age
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in filter"
          :key="user._id"
        >
          <td style="width:10%">
            <img
              :src="user.avatarUrl"
              style="width:50%"
            >
          </td>
          <td>{{ user.firstName }} {{ user.lastName.toUpperCase() }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.gender }}</td>
          <td>
            {{ new Date(Date.now() - new Date(user.birthDate)
              .getTime()).getFullYear() - 1970 }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    trieAge: String,
    trieName: String,
    filter: Array,
  },
};
</script>
