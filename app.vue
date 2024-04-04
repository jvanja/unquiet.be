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
