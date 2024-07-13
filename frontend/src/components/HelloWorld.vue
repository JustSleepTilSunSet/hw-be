<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <ul class="nav">
          <li class="nav-item">
            <button class="nav-link active" @click="hi">註冊</button>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">帳號</span>
            </div>
            <input v-model="account" type="text" class="form-control" placeholder="Username"
              aria-describedby="basic-addon1">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">密碼</span>
            </div>
            <input v-model="password" type="text" class="form-control" placeholder="Password"
              aria-describedby="basic-addon1">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-outline-danger">取消</button>
        </div>
        <div class="col">
          <button type="button" class="btn btn-outline-success" @click="toLogin">登入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
let account = ref("");
let password = ref("");
export default defineComponent({
  setup() {
    const hi = () => {
      console.log("hi");
    }
    const toLogin = () => {
      console.log(account.value);
      console.log(password.value);
    }
    return {
      hi,
      toLogin, account,password
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
