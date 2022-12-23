<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    outline: 0;
    /* background-color: #26292f; */
    background-color: #262626;
    color: #fff;
    font-family: 'Chivo Mono', monospace;
  }

  input[type="submit"] {
    flex: 2;
    /* background: #2f3454; */
    background: #ff6300;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-family: 'Chivo Mono', monospace;
  }
</style>