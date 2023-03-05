<script setup lang="ts">
import { RouterView } from 'vue-router';
import CHeader from '@/components/CHeader.vue';
</script>

<template>
  <CHeader />
  <RouterView />
</template>

<style src="@/assets/styles/globalStyle.scss" lang="scss" />
