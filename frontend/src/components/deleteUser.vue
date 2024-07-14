<template>
    <span>
        <div class="row">
            <div class="col">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">刪除的使用者id</span>
                    </div>
                    <input v-model="uId" type="text" class="form-control" placeholder="userId"
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
import { deleteUserById } from '../../apis/hwbackend';
import { HttpStatusCode } from 'axios';
let uId = ref("");
interface Data {
    id: number;
}
const submitUpdate = async () => {
    if (localStorage.getItem("access_token") == null) {
        alert('您尚未登入');
        return;
    }
    let data: Data = {
        id: parseInt(uId.value)
    }
    let isDoubleCheck = confirm("這是一項無法挽回的操作，您確定要執行嗎？");
    if (isDoubleCheck) {
        let response = await deleteUserById(data, localStorage.getItem("access_token"));
        if (response.status == HttpStatusCode.Forbidden) {
            alert("您沒有操作權限");
            return;
        }
        if (response.status == HttpStatusCode.InternalServerError) {
            alert("您的操作未處理，請重新登入或聯絡相關人員。");
            return;
        }
        if (response.status == HttpStatusCode.Ok) {
            alert("已刪除");
            return;
        }

    }
}
</script>

<style></style>