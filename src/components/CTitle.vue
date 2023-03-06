<template>
  <div :class="hidden ? 'hidden' : ''">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: String,
  hidden: boolean
}>();
</script>

<style scoped lang="scss">
div {
  width: 90%;
  position: absolute;
  bottom: 18px;
  
  h1 {
    text-align: center;
    font-size: 20px;
  }
}

.hidden {
  visibility: hidden;
}
</style>