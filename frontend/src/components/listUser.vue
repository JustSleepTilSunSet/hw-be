<template>
  <div>
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
    </div>
    <div v-for="(item, index) in items" :key="index">
      <div class="row">
        <div class="col-sm">
          {{ item.name }}
        </div>
        <div class="col-sm">
          {{ item.email }}
        </div>
        <div class="col-sm">
          <p v-if="item.isadmin==true" style="color:green">是</p>
          <p v-else style="color:red">否</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getUsers } from '../../apis/hwbackend';
import { HttpStatusCode } from 'axios';


const items = ref();
onMounted(async()=>{
  let access_token = localStorage.getItem("access_token");
  let response = await getUsers(access_token);
  console.log(JSON.stringify(response));
  if(response.status==HttpStatusCode.InternalServerError){
    alert("您無法取得使用者列表，嘗試重新登入或聯絡相關人員");
    return;
  }
  items.value = response.info;
})
</script>

<style></style>
