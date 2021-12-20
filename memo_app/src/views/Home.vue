<template>
  <div class="home">
    <ul>
      <li v-for="memo in newest" :key="memo.id">
        <router-link :to="`/edit/${memo.id}`">{{memo.body.split("\n")[0]}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: mapState({
    newest: state => state.memos.slice().reverse()
  })
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    display: block;
    border-bottom: 1px solid #ccc;
    padding: 20px;
    color: inherit;
    text-decoration: none;
    text-align: left;
    margin-bottom: 5px;
  }
</style>
