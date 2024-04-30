<script setup lang="ts">
definePageMeta({ layout: "page" });
const route = useRoute();
console.log(route.params.id);
</script>
<template>
  <h1>Project {{ $route.params.id }}</h1>
</template>
