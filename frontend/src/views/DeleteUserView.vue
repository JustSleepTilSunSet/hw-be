<template>
  <div >
    <DeleteUser/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DeleteUser from '@/components/deleteUser.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'DeleteUserView',
  components: {
    DeleteUser
  },
});
</script>
