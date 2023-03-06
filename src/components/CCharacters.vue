<template>
  <div class="navbar">
    <button class="order" @click="handleOrder">Order By {{ order }}</button>
    <div>
      <button @click="() => page > 1 ? page-- : ''">{{ page > 1 ? `Page ${page - 1}` : '' }}</button>
      <button @click="page++">Page {{ page + 1 }}</button>
    </div>
  </div>
  <div v-for="character in characters" :key="character.id" class="character">
    <CCharacter :character="character" />
  </div>
</template>

<script setup lang="ts">
import type { Characters } from '@/protocols';
import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import CCharacter from './CCharacter.vue';

const order: Ref<string> = ref('Name');
const page: Ref<number> = ref(1);
const characters: Ref<Characters> = ref([]);

function handleOrder() {
  if (order.value === 'Name') {
    characters.value.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
    order.value = 'Id';
  } else {
    if (order.value === 'Id') {
      characters.value.sort((a, b) => a.id - b.id);
      order.value = 'Name';
    }
  }
}

async function fetchCharacters() {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page.value}`);

    characters.value = (await res.json()).results;
    order.value = 'Name';
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
fetchCharacters();
watch(page, fetchCharacters);
</script>

<style scoped lang="scss">
.character {
  width: 90%;
  height: fit-content;
  position: relative;
  margin-bottom: 25px;
}

.navbar {
  width: 85%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    height: 30px;
    display: flex;
    align-items: center;
    border: none;
    background-color: #333;
    color: #b1b1b1;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    transition: all 0.05s linear;
    padding-top: 7px;
    cursor: pointer;

    &:hover {
      box-shadow: inset 0px -4px 5px #5aa927;
      color: white;
      align-items: start;
    }
  }
}
</style>