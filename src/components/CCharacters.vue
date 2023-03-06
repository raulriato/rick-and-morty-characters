<template>
  <div v-for="character in characters" :key="character.id" class="character">
    <CCharacter :character="character" />
  </div>
</template>

<script setup lang="ts">
import type { Characters } from '@/protocols';
import { ref } from 'vue';
import type { Ref } from 'vue';
import CCharacter from './CCharacter.vue';

let characters: Ref<Characters> = ref([]);

async function fetchCharacters() {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character');

    characters.value = (await res.json()).results;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
fetchCharacters();
</script>

<style scoped lang="scss">
.character {
  width: 100%;
  height: fit-content;
  position: relative;
  margin-bottom: 15px;
}
</style>