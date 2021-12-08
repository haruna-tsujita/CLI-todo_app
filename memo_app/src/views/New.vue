<template>
  <div class="new">
    <h1>New Memo</h1>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button @click="save">保存</button>
  </div>
</template>

<style scoped>
textarea {
    width: 100%;
    height: 10em;
}
button {
    border: 1px solid #333;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    margin-top: 10px;
}
</style>

<script>
  export default {
    name: "new",
    data: function() {
      return {
        memoBody: ""
      }
    },
    methods: {
        save: function() {
            alert('保存されました');
            this.$router.push("/");
        }
    }
  }
</script>
