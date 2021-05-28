<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th />
          <th>
            <button @click="$emit('sortName')">
              <span v-if="trieNom === 'desc'"> > </span>
              <span v-if="trieNom === 'asc'"> inf </span>
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
          :key="user.login.uuid"
        >
          <td><img :src="user.picture.thumbnail"></td>
          <td>{{ user.name.first }} {{ user.name.last.toUpperCase() }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.dob.age }}</td>
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
