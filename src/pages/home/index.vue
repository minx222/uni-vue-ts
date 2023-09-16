<template>
  <view class="user">{{ name }}</view>
</template>

<script lang="ts" setup>
const name = ref<string>('home页面')

onMounted(() => {
  console.log('onMounted home页面')
})
</script>

<style scoped lang="scss">
.user {
  @apply text-2xl bg-slate-400;
}
</style>
