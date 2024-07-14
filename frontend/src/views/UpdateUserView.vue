<template>
  <div >
    <HelloWorld/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/updateUser.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'UpdateView',
  components: {
    HelloWorld
  },
});
</script>
