<template>
  <div >
    <QueryUser/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QueryUser from '@/components/queryUser.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'QueryUserView',
  components: {
    QueryUser
  },
});
</script>
