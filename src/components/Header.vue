<template>
  <div>
    <h1>jQuery example</h1>
    <hr>
    <select
      v-model="selected"
      @change="$emit('changeGender', selected)"
    >
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

export default {
  name: 'Header',
  props: {
    users: {
      type: [Array],
      default() {
        return [];
      },
    },
    filter: {
      type: [Array],
      default() {
        return [];
      },
    },
    selected: {
      type: [String],
      default() {
        return '';
      },
    },
    search: {
      type: [String],
      default() {
        return '';
      },
    },
  },
};
</script>
