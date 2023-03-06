<template>
  <div :class="shown ? `wrapper shown` : 'wrapper hidden'">
    <h1>{{ name }} - {{ status }}</h1>
    <span>Species: {{ species }}</span>
    <span>Gender: {{ gender }}</span>
    <span>{{ type ? `Tipo: ${type}` : '' }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
defineProps<{
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  shown: boolean
}>();
</script>

<style scoped lang="scss">
.wrapper {
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  position: absolute;
  bottom: 10px;
  transform: translateY(200px);
  transition: transform 0.15s linear;

  h1 {
    width: 90%;
    font-size: 25px;
    text-align: left;
  }

  span {
    width: 90%;
    font-size: 20px;
    text-align: left;
  }
}

.shown {
  transform: translateY(0);
}

.hidden {
  visibility: hidden;
}
</style>