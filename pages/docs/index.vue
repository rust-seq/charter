<template>
  <div class="flex h-full w-full">
    <MoleculesDocsLeftSidebar />
    <div class="px-16 py-10 h-full w-full">
      <div class="prose dark:prose-invert max-w-6xl pt-4 pb-7">
        <h1>Crates</h1>
      </div>

      <div class="max-w-3xl pb-10" v-if="alertVisible">
        <UAlert
          icon="i-heroicons-information-circle"
          color="orange"
          variant="subtle"
          title="Heads up!"
          description="These
        crates and/or categories haven't been officially adopted yet—we're just
        using these examples to sketch out what the website will look like here
        in the future."
          :close-button="{
            icon: 'i-heroicons-x-mark-20-solid',
            color: 'gray',
            variant: 'link',
            padded: false,
          }"
          @close="alertVisible = false"
        />
      </div>
      <article class="prose prose-slate dark:prose-invert max-w-6xl">
        <div class="grid grid-cols-3 gap-4">
          <CrateCard
            name="noodles"
            organization="zaeleus"
            description="A
              bioinformatics I/O library written natively in Rust that values
              correctness and ergonomic APIs."
            :kind="Kind.Library"
            :category="{
              name: 'File I/O',
              icon: 'heroicons-outline:newspaper',
            }"
            :socials="{
              github: 'https://github.com/zaeleus/noodles',
              zulip: true,
            }"
          />

          <CrateCard
            name="chainfile"
            organization="stjude-rust-labs"
            description="A
          crate for lifting over single positions or intervals using UCSC chain
          files."
            :kind="Kind.Library"
            :category="{
              name: 'Data Processing',
              icon: 'heroicons-outline:newspaper',
            }"
            :socials="{
              github: 'https://github.com/stjude-rust-labs/chainfile',
              zulip: true,
            }"
          />

          <CrateCard
            name="foobar"
            organization="stjude-rust-labs"
            description="A
          command line tool for performing common operations on next-generation sequencing
          data—built on top of noodles."
            :kind="Kind.Binary"
            :category="{
              name: 'Command Line Tools',
              icon: 'heroicons-outline:command-line',
            }"
            :socials="{
              github: 'https://github.com/stjude-rust-labs/foobar',
              zulip: true,
            }"
          />

          <CrateCard
            name="omics"
            organization="stjude-rust-labs"
            description="A
          crate for lifting over single positions or intervals using UCSC chain
          files."
            :kind="Kind.Library"
            :category="{
              name: 'Core Crates',
              icon: 'heroicons:code-bracket-16-solid',
            }"
            :socials="{
              github: 'https://github.com/stjude-rust-labs/omics',
              zulip: true,
            }"
          />
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import CrateCard from "~/components/molecules/docs/CrateCard.vue";
import { Kind } from "~/components/molecules/docs/crate-card/kind";

const alertVisible = ref(true);
</script>

<style scope lang="postcss">
.card {
  @apply transition;

  @apply hover:-translate-y-0.5;

  @apply px-6;
  @apply py-4;

  @apply bg-white;

  @apply text-slate-900;

  @apply border;
  @apply border-gray-100;

  @apply rounded-lg;
  @apply shadow-sm;
  @apply hover:shadow-md;

  @apply text-pretty;

  .header {
    @apply flex justify-between items-center;

    .title {
      @apply flex justify-start items-center;
      @apply gap-x-1;

      @apply font-bold;
      font-size: 14px;
      @apply text-slate-600;

      span {
        /* Color of the icon. */
        @apply bg-slate-600;
      }
    }
  }

  .crate {
    font-family: "Space Mono";
    font-weight: 400;
  }

  .description {
    @apply pt-1;

    @apply text-gray-600;
    @apply text-sm;

    @apply text-start;
  }
}
</style>
