<template>
  <div >
    <ListUser/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListUser from '@/components/listUser.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'ListUserView',
  components: {
    ListUser
  },
});
</script>
