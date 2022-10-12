<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useDemoStore()
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement } = store
</script>

<template>
  <div class="counter-wrapper">
    <p>
      <span>count: {{ count }}</span>
    </p>
    <p>
      <span>doubleCount: {{ doubleCount }}</span>
    </p>
    <button class="inc" @click="increment()">+</button>
    <button class="dec" @click="decrement()">-</button>
  </div>
</template>

<style lang="scss">
.counter-wrapper {
  padding: 1.25rem;

  .dec {
    margin-left: 1rem;
  }
}
</style>
