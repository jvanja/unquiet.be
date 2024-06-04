<script lang="ts" setup>
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const { awesome } = useAppConfig();
definePageMeta({ layout: "page" });

const query: QueryBuilderParams = {
  path: "/project",
  where: [{ featured: "true" }],
  limit: 4,
};
</script>

<template>
  <div>
    <UnquietHero />

    <ContentDoc />

    <section>
      <div class="grid grid-cols-4 gap-4">
        <ContentList v-slot="{ list }" :query="query">
          <NuxtLink
            v-for="project in list"
            :key="project.path"
            :to="'project/' + project.path"
            :title="project.title"
            class="aspect-square bg-slate-200"
          >
            {{ project.title }}
          </NuxtLink>
        </ContentList>
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