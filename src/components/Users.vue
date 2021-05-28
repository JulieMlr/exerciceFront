<template>
  <div>
    <Header
      v-model="users"
      :selected="selected"
      :search="search"
      @changeGender="(val) => (selected = val)"
      @changeSearch="(val) => (search = val)"
    />

    <table class="table table-hover">
      <thead>
        <tr>
          <th />
          <th>
            <button @click="sortName">
              <span v-if="trieNom === 'desc'"> > </span>
              <span v-if="trieNom === 'asc'"> inf </span>
              Nom
            </button>
          </th>
          <th>Email</th>
          <th>Tel</th>
          <th>Genre</th>
          <th>
            <button @click="sortAge">
              <span v-if="trieAge === 'desc'"> > </span>
              <span v-if="trieAge === 'asc'"> inf </span>
              Age
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in filterGenred"
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
import Header from './Header.vue';

export default {
  name: 'Users',
  components: {
    Header,
  },
  data() {
    return {
      users: [],
      usersTrie: [],
      selected: 'all',
      trieAge: '',
      trieNom: '',
      search: '',
    };
  },
  computed: {
    searchWords() {
      if (!this.search.length) return [];
      return this.search.toLowerCase().split(' ');
    },
    filterGenred() {
      return (
        this.users
          .filter((user) => {
            if (this.selected === 'all') return true;
            return user.gender === this.selected;
          })
          .filter((user) => {
            if (this.search) {
              const nom = user.name.first + user.name.last;
              return this.searchWords.every((word) => nom
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .includes(word));
            }
            return true;
          })
          // Mettre le sort après les filtres
          .sort((user1, user2) => {
            if (this.trieAge === 'asc') {
              return user1.dob.age - user2.dob.age;
            }
            if (this.trieAge === 'desc') {
              return user2.dob.age - user1.dob.age;
            }
            if (this.trieNom === 'asc') {
              return user1.name.last.localeCompare(user2.name.last);
            }
            if (this.trieNom === 'desc') {
              return user2.name.last.localeCompare(user1.name.last);
            }
						return false;
          })
          .map((user) => {
            const nom = `${user.name.first} ${user.name.last}`;
            const nameFormated = this.searchWords.length
              ? nom.replace(
                new RegExp(this.searchWords.join('|'), 'gi'),
                '<span class=\'highlight\'> $&</span>',
              )
              : nom;
            return {
              ...user,
              nameFormated,
            };
          })
      );
    },
  },
  created() {},
  methods: {
    sortAge() {
      this.trieNom = '';
      if (this.trieAge === 'asc') {
        this.trieAge = 'desc';
        return;
      }
      if (this.trieAge === 'desc') {
        this.trieAge = '';
        return;
      }
      this.trieAge = 'asc';
    },
    sortName() {
      this.trieAge = '';
      if (this.trieNom === 'asc') {
        this.trieNom = 'desc';
        return;
      }
      if (this.trieNom === 'desc') {
        this.trieNom = '';
        return;
      }
      this.trieNom = 'asc';
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
