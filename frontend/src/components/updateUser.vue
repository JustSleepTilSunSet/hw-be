<template>
  <span>
    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">更新使用者的id</span>
          </div>
          <input v-model="uId" type="text" class="form-control" placeholder="userId" aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">電子信箱</span>
          </div>
          <input type="text" v-model="email" class="form-control" placeholder="email"
            aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">使用者名稱</span>
          </div>
          <input type="text" v-model="uname" class="form-control" placeholder="name"
            aria-describedby="basic-addon1">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-outline-success" @click="submitUpdate">送出</button>
      </div>
    </div>
  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { updateUserById } from '../../apis/hwbackend';
import { HttpStatusCode } from 'axios';
let uId = ref("");
let email = ref("");
let uname = ref("");
interface Data {
  id: string;
  email?: string;
  name?: string;
}
const submitUpdate = async ()=>{
  if(localStorage.getItem("access_token")==null){
    alert('您尚未登入');
    return;
  }
  let data: Data = {
    id: uId.value
  }
  if(email.value.length>0){
    data.email = email.value;
  }
  if(uname.value.length>0){
    data.name = uname.value;
  }
  console.log(JSON.stringify(data,null,2));
  let response = await updateUserById(data,localStorage.getItem("access_token"));
  if(response.status == HttpStatusCode.Forbidden){
    alert("您沒有操作權限");
    return;
  }
}
</script>

<style></style>
