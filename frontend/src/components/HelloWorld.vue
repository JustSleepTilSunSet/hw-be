<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <ul class="nav">
          <li class="nav-item">
            <register></register>
          </li>
        </ul>
      </div>
      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">帳號</span>
            </div>
            <input v-model="account" type="text" class="form-control" placeholder="Email"
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
            <input type="password" v-model="password" class="form-control" placeholder="Password"
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
import { healthCheck, login } from '../../apis/hwbackend';
import register from './register.vue'
import updateUser from './updateUser.vue'
import { JWTdecode } from '../../apis/helpers'
import { HttpStatusCode } from 'axios';
let account = ref("");
let password = ref("");
export default defineComponent({
  setup() {
    const hi = async () => {
      await healthCheck();
    }
    const toLogin = async () => {
      let res = await login(account.value, password.value);
      if (res.status == HttpStatusCode.InternalServerError) {
        alert("登入失敗");
        return;
      }
      if (res.access_token != null) {
        localStorage.setItem("access_token", res.access_token);
      } else {
        alert("登入失敗");
        return;
      }
      if(res.status == HttpStatusCode.Ok){
        alert("登入成功");
        return;
      }
      // console.log(localStorage.getItem("access_token"));
      // console.log(JWTdecode(res.access_token));
    }

    return {
      hi,
      toLogin,
      account,
      password
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String,
    modal: null
  },
  components: {
    register, updateUser
  }
});
</script>

<style scoped></style>
