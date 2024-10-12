<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "rust-seq",
  ogTitle: "Documentation",
  description:
    "rust-seq: a project that endeavours to rebuild the omics ecosystem using Rust",
  ogDescription:
    "A project that endeavours to rebuild the omics ecosystem using Rust",
});
</script>

<style lang="postcss">
* {
  @apply text-slate-900;
  @apply dark:text-slate-300;
}
</style>
