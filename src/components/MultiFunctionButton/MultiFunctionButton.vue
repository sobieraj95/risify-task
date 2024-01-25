<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  class: string
  disabled?: boolean
  href?: string
  to?: string
}
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
    :class="[props.class, props.disabled ? 'disabled' : '']"
    :to="props.to && props.to"
    :href="props.href && props.href"
    :disabled="props.disabled && 'disabled'"
    @click="onClick"
    ><slot
  /></component>
</template>

<style lang="scss">
@import './MultiFunctionButton.scss';
</style>
