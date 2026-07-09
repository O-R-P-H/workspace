<template>
  <div :id="blockId" class="r t-rec" :style="wrapperStyle">
    <div class="t123">
      <div class="t-container_100">
        <div class="t-width t-width_100">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blockId: { type: String, default: '' },
  zIndex: { type: Number, default: null }
})

const wrapperStyle = computed(() => {
  if (props.zIndex) {
    return `position: relative; z-index: ${props.zIndex};`
  }
  return ''
})
</script>

<style>
/*
  Стили обёрток вынесены в App.vue глобально,
  здесь только scoped-пустышка чтобы Vue не ругался
*/
</style>
