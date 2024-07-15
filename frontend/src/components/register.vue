<template>
  <span>
    <!-- Modal -->
    <div class="modal fade" ref="registerModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">註冊</h5>
            <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">姓名</span>
                  </div>
                  <input type="text" v-model="name" class="form-control" placeholder="姓名" aria-describedby="basic-addon1">
                </div>
              </div>
              <div class="mb-3">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">信箱</span>
                  </div>
                  <input type="text" v-model="email" class="form-control" placeholder="email" aria-describedby="basic-addon1">
                </div>
              </div>
              <div class="mb-3">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">登入用密碼</span>
                  </div>
                  <input type="password" v-model="pwd" class="form-control" placeholder="password" aria-describedby="basic-addon1">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger">返回</button>
            <button type="button" class="btn btn-outline-success" @click="toRegister">註冊</button>
          </div>
        </div>
      </div>
    </div>
        <div class="col-12 text-white p-3 text-center">
          <button type="button" class="nav-link active" @click="showModal" data-bs-target="#registerModal"
            data-bs-whatever="@fat">註冊</button>
        </div>
  </span>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';
import { register } from '../../apis/hwbackend';
import { HttpStatusCode } from 'axios';

const registerModal = ref<HTMLElement | null>();
let modalInstance: Modal | null = null;
const name = ref("");
const pwd = ref("");
const email = ref("");

const showModal = () => {
  if (registerModal.value) {
    if (!modalInstance) {
      modalInstance = new Modal(registerModal.value);
    }
    modalInstance.show();
  }
};

const hideModal = () => {
  if (modalInstance) {
    modalInstance.hide();
  }
};
const toRegister = async () => {
  if(name.value.length == 0 || pwd.value.length == 0 || email.value.length ==0){
    alert("註冊資訊未完整填寫");
    return;
  }
  let response = await register(name.value,pwd.value,email.value);
  if(response.status!=HttpStatusCode.Ok){
    alert("註冊失敗");
    return;
  }else{
    alert("註冊成功!");
    modalInstance?.hide();
    return;
  }
}
</script>

<style></style>
