<script setup lang="ts">
import MultiFunctionButton from '../components/MultiFunctionButton/MultiFunctionButton.vue'
import { ButtonVariants } from '../components/MultiFunctionButton/MultiFunctionButtonTypes'
</script>

<template>
  <div class="router-view">
    <MultiFunctionButton :variants="[ButtonVariants.GREEN]" to="/">Wróć</MultiFunctionButton>
  </div>
</template>

<style>
.router-view {
  background-color: rgb(255, 255, 255);
  min-width: 100vw;
  width: 100%;
  min-height: 100vh;
  height: 100%;

  padding: 50px 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
