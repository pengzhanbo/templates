<script setup>
const store = useDemoStore()
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement } = store
</script>

<template>
  <div class="p-4">
    <p>
      <span>count: {{ count }}</span>
    </p>
    <p>
      <span>doubleCount: {{ doubleCount }}</span>
    </p>
    <button class="inc btn" @click="increment()">+</button>
    <button class="dec btn ml-4" @click="decrement()">-</button>
  </div>
</template>

<style>
.btn {
  @apply inline-block bg-teal-500 text-white rounded-sm px-4 py-1;
  @apply transition transition-colors;
  @apply hover:bg-teal-600;
}
</style>
