<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Api',
  data() {
    return {
      message: '',
    };
  },
  created() { this.fetchMessage(); },
  methods: {
    fetchMessage() {
      axios('/api').then(
        ({ data }) => {
          this.message = data.message;
        },
      );
    },
  },
};
</script>
