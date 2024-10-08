<script setup lang="ts">
import { Toc } from "@nuxt/content";

const props = defineProps<{
  toc: Toc;
}>();
</script>

<template>
  <div v-if="toc.links !== undefined && toc.links.length > 0">
    <h4>Table of Contents</h4>
    <ul>
      <li v-for="link of toc.links" :key="link.id">
        <a :href="`#${link.id}`">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss">
h4 {
  @apply font-bold;
  font-size: 14px;
  @apply pb-1;
}

ul > li:not(:last-child) {
  @apply pb-0.5;
}
</style>
