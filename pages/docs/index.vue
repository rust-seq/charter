<template>
  <div class="flex w-full h-full">
    <MoleculesDocsLeftSidebar />
    <div class="flex w-full h-full pt-10 bg-white dark:bg-slate-950">
      <main class="flex flex-col space-y-6 h-full w-full mx-4 px-4 md:mx-6 md:px-8 lg:mx-10 lg:px-16 overflow-auto">
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
        <div class="max-w-6xl pt-4">
          <h1 class="text-3xl font-bold mb-2">Crates</h1>
          <div class="max-w-3xl">
            <p>
              The following crates have been formally ratified within the
              <code>rust-seq</code> stack.
            </p>
          </div>
        </div>
        <div class="flex space-x-4">
          <UInput icon="i-heroicons-magnifying-glass-20-solid" size="lg" color="white" :trailing="false"
            placeholder="Search..." v-model="filterText" />
        </div>
        <article class="prose prose-slate dark:prose-invert max-w-full">
          <div class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));">
            <CrateCard v-for="crate in shownCrates" :crate="crate" />


          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import CrateCard from "~/components/molecules/docs/CrateCard.vue";
import { type Crate, Kind } from "~/components/molecules/docs/crate-card/types";
import { useStorage } from '@vueuse/core'

const alertVisible = useStorage("crates-page:alert-visible", true);


const crates: Crate[] = [
  {
    name: "noodles",
    organization: "zaeleus",
    description: "A bioinformatics I/O library written natively in Rust that values correctness and ergonomic APIs.",
    kind: Kind.Library,
    category: {
      name: "File I/O",
      icon: "heroicons-outline:newspaper"
    },
    socials: {
      github: 'https://github.com/zaeleus/noodles',
      docs: 'https://docs.rs/noodles',
      zulip: true,
    }
  },
  {
    name: "chainfile",
    organization: "stjude-rust-labs",
    description: "A crate for lifting over single positions or intervals using UCSC chain files.",
    kind: Kind.Library,
    category: {
      name: 'File I/O',
      icon: 'heroicons-outline:newspaper',
    },
    socials: {
      github: 'https://github.com/stjude-rust-labs/chainfile',
      docs: 'https://docs.rs/chainfile',
      zulip: true,
    }
  },
  {
    name: "minimizer-queue",
    organization: "rust-seq",
    description: "A crate for fast computation of minimizers of a sequence using a monotone queue.",
    kind: Kind.Library,
    category: {
      name: 'Sequence Algorithms',
      icon: 'carbon:dna'
    },
    socials: {
      github: 'https://github.com/rust-seq/minimizer-queue',
      zulip: true,
    }
  },
  {
    name: "minimizer-iter",
    organization: "rust-seq",
    description: "A crate for efficient iteration of the minimizers of a sequence.",
    kind: Kind.Library,
    category: {
      name: 'Sequence Algorithms',
      icon: 'carbon:dna'
    },
    socials: {
      github: 'https://github.com/rust-seq/minimizer-iter',
      zulip: true
    }
  },

  {
    name: "packed-seq",
    organization: "rust-seq",
    description: "A crate for efficient(packed) representation of strings of small alphabets.",
    kind: Kind.Library,
    category: {
      name: 'Sequence Algorithms',
      icon: 'carbon:dna',
    },
    socials: {
      github: 'https://github.com/rust-seq/packed-seq',
      zulip: true,
    }
  },
  {
    name: "foobar",
    organization: "stjude-rust-labs",
    description: "A command line tool for performing common operations on next - generation sequencing data—built on top of noodles.",
    kind: Kind.Binary,
    category: {
      name: 'Command Line Tools',
      icon: 'heroicons-outline:command-line',
    }, socials: {
      github: 'https://github.com/stjude-rust-labs/foobar',
      zulip: true,
    }
  },
  {
    name: "omics",
    organization: "stjude-rust-labs",
    description: "A crate for lifting over single positions or intervals using UCSC chain files.",
    kind: Kind.Library,
    recentlyReleased: true,
    category: {
      name: 'Foundational',
      icon: 'heroicons:code-bracket-16-solid',
    },
    socials: {
      github: 'https://github.com/stjude-rust-labs/omics',
      docs: 'https://docs.rs/omics',
      zulip: true,
    }
  }
];


const filterText = ref("");

const shownCrates = computed(() => {
  let inner: Crate[] = crates;

  let query = filterText.value.trim().toLowerCase();

  if (query !== "") {
    inner = inner.filter((crate) => {
      return crate.name.toLowerCase().includes(query) ||
        crate.description.toLowerCase().includes(query) ||
        crate.category.name.toLowerCase().includes(query) ||
        crate.organization.toLowerCase().includes(query) ||
        crate.socials.docs?.toLowerCase().includes(query) ||
        crate.socials.github?.toLowerCase().includes(query);
    });
  }

  return inner;
})
</script>
