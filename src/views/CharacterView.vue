<template>
  <div class="wrapper">
    <div v-if="isFetching"></div>
    <div class="character" v-else>
      <img :src="character.image" alt="">
      <div class="info">
        <h1>{{ character.name }} - {{ character.status }}</h1>
        <span>Species: {{ character.species }}</span>
        <span>Gender: {{ character.gender }}</span>
        <span v-if="character.type.length === 0">Type: {{ character.species }}</span>
        <span v-else>Type: {{ character.type }}</span>
        <span>Origin: {{ character.origin.name }}</span>
        <span>Location: {{ character.location.name }}</span>
      </div>
      <div class="episodes"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from 'vue';
import type { Character } from '@/protocols';
import { useRoute } from 'vue-router';

const route = useRoute();
let character: Ref<Character>;
let episodes: Ref<{
  season1: string[],
  season2: string[],
  season3: string[],
  season4: string[],
  season5: string[]
}>;
const isFetching: Ref<boolean> = ref(true);

async function fetchCharacter() {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${route.params.id}`);

    character = await res.json();
    isFetching.value = false;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
fetchCharacter();
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;

  .character {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;

    img {
      width: 37.8%;
      border-radius: 20px;
    }

    .info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;

      h1 {
        font-size: 35px;
      }

      span {
        font-size: 25px;
      }
    }
  }
}
</style>
