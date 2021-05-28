<template>
  <div>
    <h1>jQuery example</h1>
    <hr>
    <button
      class="btn btn-primary"
      @click="fetchUser"
    >
      Fetch users
    </button>

    <select v-model="selected" @change="$emit('changeGender', selected)">
      <option value="all">
        Choissisez
      </option>
      <option value="all">
        All
      </option>
      <option value="female">
        Femme
      </option>
      <option value="male">
        Homme
      </option>
    </select>
		<div class="form-outline">
      <input
        v-model="search"
        class="recherche"
        placeholder="recherche"
				@input="$emit('changeSearch', search)"
      >
    </div>
		<!--<span> {{ filter.length }} / {{ users.length }} </span>-->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Header',
  props: {
    users: Array,
    filter: Array,
		selected: String,
		search: String,
  },
  methods: {
    fetchUser() {
      axios('https://randomuser.me/api/?results=20').then(
        ({ data: { results } }) => {
          this.$emit('input', results);
        },
      );
    },
  },
};
</script>
