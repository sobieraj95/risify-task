<script setup lang="ts">
import { computed } from 'vue'
import type { IProps } from './MultiFunctionButtonTypes'

const props = defineProps<IProps>()

const selectedComponent = computed(() => {
  return (props.href && 'a') || (props.to && 'router-link') || 'button'
})

const onClick = () => {
  !props.disabled && alert('klik! :)')
}
</script>

<template>
  <component
    :is="selectedComponent"
    class="button"
    :class="[props.variants, props.disabled ? 'disabled' : '']"
    :to="props.to && props.to"
    :href="props.href && props.href"
    :disabled="props.disabled"
    @click="onClick"
    ><slot
  /></component>
</template>

<style lang="scss" scoped>
@import './MultiFunctionButton.scss';
</style>
