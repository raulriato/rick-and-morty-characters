<template>
  <RouterLink :to="`character/${character.id}`">
    <div class="wrapper" @mouseover="() => { shown = true; hidden = true }"
      @mouseout="() => { shown = false; hidden = false }">
      <img :src="character.image" alt="loading..." />
      <div class="gradient" />
      <CTitle :title="character.name" :hidden="hidden" />
      <CInfo :name="character.name" :status="character.status" :type="character.type" :species="character.species"
        :gender="character.gender" :shown="shown" />
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Character } from '@/protocols';
import { ref } from 'vue';
import type { Ref } from 'vue';
import CTitle from './CTitle.vue';
import CInfo from './CInfo.vue';

defineProps<{
  character: Character
}>();

const shown: Ref<boolean> = ref(false);
const hidden: Ref<boolean> = ref(false);
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  cursor: pointer;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 3, 51, 0) 0%, rgba(0, 3, 51, 0.26) 90.19%, #333 98%);
    position: absolute;
    top: 0;

    &:hover {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 3, 51, 0.70) 60.19%, #333 98%);
    }

  }

  img {
    width: 100%;
    border-radius: 20px;
  }
}
</style>