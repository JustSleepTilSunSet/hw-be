<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">使用者名稱</span>
          </div>
          <input type="text" v-model="uId" class="form-control" placeholder="email" aria-describedby="basic-addon1">
          <button type="button" class="btn btn-outline-success" @click="submitUpdate">送出</button>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            名稱
          </div>
          <div class="col-sm">
            信箱
          </div>
          <div class="col-sm">
            是否是管理員
          </div>
        </div>
        <div class="row" v-if="userInfo">
          <div class="col-sm">
            {{ userInfo.name }}
          </div>
          <div class="col-sm">
            {{ userInfo.email }}
          </div>
          <div class="col-sm">
          <p v-if="userInfo.isadmin==true" style="color:green">是</p>
          <p v-else style="color:red">否</p>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getUserById } from '../../apis/hwbackend';
import { HttpStatusCode } from 'axios';
const uId = ref("");
const userInfo = ref();
let access_token = null;
const submitUpdate = async () => {
  access_token = localStorage.getItem("access_token");
  if (access_token == null) {
    alert("您尚未登入");
    return;
  }
  console.log(uId.value);
  console.log(access_token);
  let response = await getUserById(parseInt(uId.value, 10), access_token);
  console.log(response);
  if (response.status == HttpStatusCode.InternalServerError) {
    alert("該功能出現異常，聯絡相關人員。");
    return;
  }
  userInfo.value = response.info;
  console.log(JSON.stringify(userInfo.value));

}
onMounted(async () => {
  access_token = localStorage.getItem("access_token");
  if (access_token == null) {
    alert("您尚未登入");
    return;
  }
})
</script>

<style></style>
