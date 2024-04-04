<script lang="ts" setup>
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function typeAnimation(textElement, text, duration) {
  const tl = gsap.timeline();
  const chars = text.split("");
  for (let i = 0; i < chars.length; i++) {
    tl.to(textElement, {
      duration: duration / chars.length,
      text: chars.slice(0, i + 1).join(""),
      ease: "none",
    });
  }
  return tl;
}
onMounted(() => {
  const tl = gsap.timeline();
  tl.add(typeAnimation("#text1", "be", 0.1)).add(
    typeAnimation("#text2", "unquiet", 0.2).to("#bullet", {
      duration: 0.5,
      scale: 100,
      ease: "Power2.easeInOut",
      onComplete: () => {
        const element = document.querySelector(".loader");
        element.parentNode.removeChild(element);
      },
    }),
    "+=0.5",
  );
});
</script>
<template>
  <div class="loader fixed inset-0">
    <div class="flex items-center justify-center w-full h-full">
      <span id="text1" class="text-9xl">be</span>
      <span id="bullet" class="block mx-3 rounded-full"></span>
      <span id="text2" class="text-9xl">unquiet</span>
    </div>
  </div>
</template>
<style lang="scss">
.loader {
  text-align: center;
  letter-spacing: -0.6rem;
  background: var(--c-bg);
}
.text {
  font-size: 10vw; /* Responsive font size */
  display: inline-block;
  // overflow: hidden; /* Hides the overflowing content */
  white-space: nowrap; /* Ensures text stays in one line */
}
#bullet {
  background: var(--c-text);
  width: 20px;
  height: 20px;
}
</style>
