<template>
  <div>
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
                  <input type="text" class="form-control" placeholder="姓名" aria-describedby="basic-addon1">
                </div>
              </div>
              <div class="mb-3">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">信箱</span>
                  </div>
                  <input type="text" class="form-control" placeholder="email" aria-describedby="basic-addon1">
                </div>
              </div>
              <div class="mb-3">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">登入用密碼</span>
                  </div>
                  <input  type="password"  class="form-control" placeholder="password" aria-describedby="basic-addon1">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger">返回</button>
            <button type="button" class="btn btn-outline-success" @click="toLogin">註冊</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-white p-3 text-center">
          <button type="button" class="nav-link active" @click="showModal" data-bs-target="#registerModal"
            data-bs-whatever="@fat">註冊</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Modal } from 'bootstrap';

const registerModal = ref<HTMLElement | null>();
let modalInstance: Modal | null = null;

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
</script>

<style></style>
