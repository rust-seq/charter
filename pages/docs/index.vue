<template>
  <div class="flex w-full h-full">
    <MoleculesDocsLeftSidebar />
    <div class="flex w-full h-full pt-10 bg-white dark:bg-slate-950">
      <main class="h-full mx-10 px-16 overflow-auto">
        <span v-if="alertVisible">
          <UAlert icon="i-heroicons-information-circle" color="orange" variant="subtle" title="Heads up!" description="These
            crates and/or categories haven't been officially adopted yet—we're just
            using these examples to sketch out what the website will look like here
            in the future. In fact... quite a few things don't seem to be working yet...
            we'll get to it!" :close-button="{
              icon: 'i-heroicons-x-mark-20-solid',
              color: 'gray',
              variant: 'link',
              padded: false,
            }" @close="alertVisible = false" />
        </span>
        <div class="prose dark:prose-invert max-w-6xl pt-4">
          <h1 class="mb-2">Crates</h1>
          <div class="max-w-3xl">
            <p>The following crates have been formally ratified within the <code>rust-seq</code> stack.</p>
          </div>
        </div>

        <article class=" prose prose-slate dark:prose-invert max-w-6xl">
          <div class="grid grid-cols-3 gap-4">
            <CrateCard name="noodles" organization="zaeleus" description="A
              bioinformatics I/O library written natively in Rust that values
              correctness and ergonomic APIs." :kind="Kind.Library" :category="{
                name: 'File I/O',
                icon: 'heroicons-outline:newspaper',
              }" :socials="{
                github: 'https://github.com/zaeleus/noodles',
                docs: 'https://docs.rs/noodles',
                zulip: true,
              }" />

            <CrateCard name="chainfile" organization="stjude-rust-labs" description="A
          crate for lifting over single positions or intervals using UCSC chain
          files." :kind="Kind.Library" :category="{
            name: 'File I/O',
            icon: 'heroicons-outline:newspaper',
          }" :socials="{
            github: 'https://github.com/stjude-rust-labs/chainfile',
            docs: 'https://docs.rs/chainfile',
            zulip: true,
          }" />

            <CrateCard name="minimizer-queue" organization="rust-seq" description="A
          crate for fast computation of minimizers of 
          a sequence using a monotone queue." :kind="Kind.Library" :category="{
            name: 'Sequence Algorithms',
            icon: 'carbon:dna',
          }" :socials="{
            github: 'https://github.com/rust-seq/minimizer-queue',
            zulip: true,
          }" />

            <CrateCard name="minimizer-iter" organization="rust-seq" description="A
          crate for efficient iteration of the minimizers of a sequence." :kind="Kind.Library" :category="{
            name: 'Sequence Algorithms',
            icon: 'carbon:dna',
          }" :socials="{
            github: 'https://github.com/rust-seq/minimizer-iter',
            zulip: true,
          }" />

            <CrateCard name="packed-seq" organization="rust-seq" description="A
          crate for efficient (packed) representation of strings of small alphabets." :kind="Kind.Library" :category="{
            name: 'Sequence Algorithms',
            icon: 'carbon:dna',
          }" :socials="{
            github: 'https://github.com/rust-seq/packed-seq',
            zulip: true,
          }" />

            <CrateCard name="foobar" organization="stjude-rust-labs" description="A
          command line tool for performing common operations on next-generation sequencing
          data—built on top of noodles." :kind="Kind.Binary" :category="{
            name: 'Command Line Tools',
            icon: 'heroicons-outline:command-line',
          }" :socials="{
            github: 'https://github.com/stjude-rust-labs/foobar',
            zulip: true,
          }" />

            <CrateCard name="omics" organization="stjude-rust-labs" description="A
          crate for lifting over single positions or intervals using UCSC chain
          files." :kind="Kind.Library" :category="{
            name: 'Foundational',
            icon: 'heroicons:code-bracket-16-solid',
          }" :socials="{
            github: 'https://github.com/stjude-rust-labs/omics',
            docs: 'https://docs.rs/omics',
            zulip: true,
          }" />
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import CrateCard from "~/components/molecules/docs/CrateCard.vue";
import { Kind } from "~/components/molecules/docs/crate-card/kind";

const alertVisible = ref(true);
</script>
