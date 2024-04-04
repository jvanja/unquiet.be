<script lang="ts" setup>
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
</script>

<template>
  <UnquietLoader />

  <UnquietHero />

  <ContentDoc />

  <section>
    <div class="grid grid-cols-4 gap-4">
      <div class="aspect-square bg-slate-200">client 1</div>
      <div class="aspect-square bg-slate-300">client 2</div>
      <div class="aspect-square bg-slate-400">client 3</div>
      <div class="aspect-square bg-slate-500">client 4</div>
    </div>
  </section>
  <section class="my-12">
    <div class="grid grid-cols-2 gap-4">
      <p class="text-3xl">
        Unquiet.be is a design and technology agency based in Paris and
        Belgrade.
      </p>
    </div>
  </section>
  <section id="awards">Awards</section>
  <section>Positions</section>
  <section>Contact</section>
</template>
