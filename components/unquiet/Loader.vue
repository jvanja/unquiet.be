<script lang="ts" setup>
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

onMounted(() => {
  const tl = gsap.timeline();
  tl.to(
    ".loader",
    {
      duration: 0.5,
      scale: 4,
      ease: "power2.easeinout",
      onComplete: () => {
        const element = document.querySelector(".loader") as HTMLElement;
        element.parentNode?.removeChild(element);
      },
    },
    "+=0.5",
  );
});
</script>
<template>
  <div class="loader fixed inset-0 z-50">
    <div class="flex h-full w-full items-center justify-around">
      <h1><UnquietLogo /></h1>
    </div>
  </div>
</template>
<style lang="scss">
.loader {
  text-align: center;
  background: var(--c-bg);
}
#bullet {
  background: var(--c-text);
  width: 20px;
  height: 20px;
}
</style>
