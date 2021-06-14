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
    <br>
    <div class="button">
      <FormAdd />
    </div>
  </div>
</template>

<script>
import FormAdd from './FormAdd.vue';

export default {
  name: 'Header',
  components: {
    FormAdd,
  },
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

<style>
.button {
  align-items: flex-start;
    display: flex;
    margin-left: 5%;
}
</style>
