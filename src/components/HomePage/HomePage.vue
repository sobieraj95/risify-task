<script setup lang="ts">
import MultiFunctionButton from '../MultiFunctionButton/MultiFunctionButton.vue'
import { ButtonVariants } from '../MultiFunctionButton/MultiFunctionButtonTypes'
</script>
<template>
  <div class="homepage">
    <div class="homepage__header">Buttony</div>
    <div class="homepage__row">
      <MultiFunctionButton :variants="[ButtonVariants.SMALL, ButtonVariants.DARKORANGE]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton :variants="[ButtonVariants.GREEN]">Wybierz teraz</MultiFunctionButton>
      <MultiFunctionButton :variants="[ButtonVariants.LARGE, ButtonVariants.RED]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        :variants="[ButtonVariants.SMALL, ButtonVariants.DARKGREEN, ButtonVariants.OUTLINED]"
        >Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton :variants="[ButtonVariants.ORANGE, ButtonVariants.OUTLINED]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        disabled
        :variants="[ButtonVariants.LARGE, ButtonVariants.DARKORANGE, ButtonVariants.OUTLINED]"
        >Wybierz teraz</MultiFunctionButton
      >
    </div>
    <div class="homepage__header">HTML Link</div>
    <div class="homepage__row">
      <MultiFunctionButton
        href="https://www.google.pl/"
        :variants="[ButtonVariants.SMALL, ButtonVariants.ORANGE]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton href="https://www.google.pl/" :variants="[ButtonVariants.GREEN]"
        >Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        href="https://www.google.pl/"
        disabled
        :variants="[ButtonVariants.LARGE, ButtonVariants.GREEN]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        href="https://www.google.pl/"
        :variants="[ButtonVariants.SMALL, ButtonVariants.DARKGREEN, ButtonVariants.OUTLINED]"
        >Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        href="https://www.google.pl/"
        :variants="[ButtonVariants.ORANGE, ButtonVariants.OUTLINED]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        href="https://www.google.pl/"
        disabled
        :variants="[ButtonVariants.LARGE, ButtonVariants.DARKORANGE, ButtonVariants.OUTLINED]"
        >Wybierz teraz</MultiFunctionButton
      >
    </div>
    <div class="homepage__header">ROUTER Link</div>
    <div class="homepage__row">
      <MultiFunctionButton to="router" :variants="[ButtonVariants.ORANGE]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton to="router" :variants="[ButtonVariants.ORANGE]"
        >Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        to="router"
        disabled
        :variants="[ButtonVariants.LARGE, ButtonVariants.DARKORANGE]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        to="router"
        :variants="[ButtonVariants.DARKGREEN, ButtonVariants.OUTLINED]"
        >Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton to="router" :variants="[ButtonVariants.ORANGE, ButtonVariants.OUTLINED]"
        ><img
          src="https://play-lh.googleusercontent.com/-APO0naWRDPq2um-x4BJII4piuCopjvFRTOE6X7OIAdFHcLnvP5kP4BTB7MLxb_Q_6BE"
          width="16px"
          height="16px"
        />Wybierz teraz</MultiFunctionButton
      >
      <MultiFunctionButton
        to="router"
        disabled
        :variants="[ButtonVariants.LARGE, ButtonVariants.DARKORANGE, ButtonVariants.OUTLINED]"
        >Wybierz teraz</MultiFunctionButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './HomePage.scss';
</style>
