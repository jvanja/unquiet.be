<script lang="ts" setup>
const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });
</script>

<template>
  <div>
    <UnquietHero />

    <ContentDoc />

    <section>
      <div class="grid grid-cols-4 gap-4">
        <NuxtLink
          to="/project/1"
          :title="'Project Name'"
          class="aspect-square bg-slate-200"
        >
          Project 1
        </NuxtLink>
        <NuxtLink
          to="/project/2"
          :title="'Project Name'"
          class="aspect-square bg-slate-300"
        >
          Project 2
        </NuxtLink>
        <NuxtLink
          to="/project/3"
          :title="'Project Name'"
          class="aspect-square bg-slate-400"
        >
          Project 3
        </NuxtLink>
        <NuxtLink
          to="/project/4"
          :title="'Project Name'"
          class="aspect-square bg-slate-500"
        >
          Project 4
        </NuxtLink>
      </div>
    </section>
    <section class="my-12">
      <div class="grid grid-cols-2 gap-4">
        <p class="text-3xl">
          Unquiet.be is an award winning design and technology agency.
        </p>
      </div>
    </section>
    <section id="awards">Awards</section>
    <section>Positions</section>
    <section>Contact</section>
  </div>
</template>
