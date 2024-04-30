<script lang="ts" setup>
const { awesome } = useAppConfig();

useHead({
  title: awesome?.name,
  titleTemplate: `%s - ${awesome?.name}`,
});
</script>
<template>
  <Body class="">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
