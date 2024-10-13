<template>
  <div class="card relative">
    <span v-if="crate.recentlyReleased && pingVisible" class="absolute top-1.5
    right-1.5 flex h-2.5 w-2.5" :class="{
      'opacity-0': !pingVisible,
      'opacity-100': pingVisible
    }" @click="pingVisible = false">
      <UTooltip text="This crate was recently released.">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
      </UTooltip>
    </span>
    <div>
      <div class="header">
        <div class="title">
          In
          <Icon :name="crate.category.icon" />
          {{ crate.category.name }}

          <div class="ml-1 font-normal text-xs font-mono">
            <div
              class="px-1 py-0.5 rounded-md text-green-900 dark:text-green-300 bg-green-300 dark:bg-green-900 border border-green-500"
              v-if="crate.kind === Kind.Library">
              lib
            </div>
            <div
              class="px-1 py-0.5 rounded-md text-purple-900 dark:text-purple-300 bg-purple-300 dark:bg-purple-900 border border-purple-500"
              v-else-if="crate.kind === Kind.Binary">
              bin
            </div>
          </div>
        </div>
        <div class="flex gap-x-1.5">
          <a v-if="crate.socials && crate.socials.github"
            class="flex items-center justify-center w-7 h-7 bg-gray-100 dark:bg-slate-950 border border-gray-200 rounded-full"
            :href="crate.socials.github">
            <Icon class="w-4 h-4" name="octicon:mark-github-16"></Icon>
          </a>
          <a v-if="crate.socials && crate.socials.docs"
            class="flex items-center justify-center w-7 h-7 bg-gray-100 dark:bg-slate-950 border border-gray-200 rounded-full"
            :href="crate.socials.docs" :title="`Chat about ${crate.name} in the rust-seq Zulip`">
            <Icon class="w-4 h-4" name="heroicons-outline:book-open"></Icon>
          </a>
          <a v-if="crate.socials && crate.socials.zulip"
            class="flex items-center justify-center w-7 h-7 bg-gray-100 dark:bg-slate-950 border border-gray-200 rounded-full"
            href="https://rustseq.zulipchat.com/join/coxb7c7b3bbahlfx7poeqqrd/"
            :title="`Chat about ${crate.name} in the rust-seq Zulip`">
            <Icon class="w-4 h-4" name="tabler:brand-zulip"></Icon>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-start gap-x-1">
        <div class="crate">{{ crate.organization }}/{{ crate.name }}</div>
      </div>
      <div class="description">
        {{ crate.description }}
      </div>
    </div>
    <div class="terminal">
      <div class="command">
        <span class="prompt">$ </span>
        <span v-if="crate.kind === Kind.Library">cargo add {{ crate.name }}</span>
        <span v-if="crate.kind === Kind.Binary">cargo install {{ crate.name }}</span>
      </div>
      <Icon class="copy" name="heroicons-outline:clipboard-copy"></Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Crate, Kind } from "~/components/molecules/docs/crate-card/types";
import { useStorage } from '@vueuse/core'

interface Props {
  crate: Crate;
}

// Define props with TypeScript
const props = defineProps<Props>();

const pingVisible = useStorage(`crates-page:ping-visible:${props.crate.organization}/${props.crate.name}`, true);
</script>

<style scope lang="postcss">
.card {
  @apply transition;
  @apply flex flex-col justify-between;

  @apply hover:-translate-y-0.5;

  @apply px-6;
  @apply py-4;

  @apply bg-slate-50;
  @apply dark:bg-slate-900;

  @apply text-slate-950;
  @apply dark:text-slate-50;

  @apply border;
  @apply border-gray-200;
  @apply dark:border-gray-950;

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
      @apply text-slate-700;
      @apply dark:text-slate-300;

      .iconify {
        /* Color of the icon. */
        @apply bg-slate-700;
        @apply dark:bg-slate-300;
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
    @apply dark:text-gray-300;
    @apply text-sm;

    @apply text-start;
  }

  .terminal {
    @apply flex justify-between items-center;

    @apply w-full;
    @apply mt-3;
    @apply py-1 px-3;

    @apply font-mono;

    @apply rounded-md;
    @apply bg-white;
    @apply dark:bg-gray-950;

    @apply border;
    @apply dark:border-gray-800;

    .command {
      .prompt {
        @apply font-bold;
        @apply text-purple-700;
        @apply select-none;
      }
    }

    .copy {
      @apply cursor-pointer;
      @apply dark:hover:text-slate-100;
    }
  }
}
</style>
