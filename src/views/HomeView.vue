<script setup lang="ts">
import CCharacters from '@/components/CCharacters.vue';

</script>

<template>
  <div class="wrapper">
    <div class="main">
      <CCharacters />
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
  margin-top: 80px;

  .main {
    width: 42%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
