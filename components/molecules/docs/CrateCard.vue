<template>
  <div class="card">
    <div class="header">
      <div class="title">
        In
        <Icon :name="category.icon" />
        {{ category.name }}

        <div class="ml-1 font-normal text-xs font-mono">
          <div
            class="px-1 py-0.5 rounded-md text-green-900 bg-green-300 border border-green-500"
            v-if="kind === Kind.Library"
          >
            lib
          </div>
          <div
            class="px-1 py-0.5 rounded-md text-purple-900 bg-purple-300 border border-purple-500"
            v-else-if="kind === Kind.Binary"
          >
            bin
          </div>
        </div>
      </div>
      <div class="flex gap-x-1.5">
        <a
          v-if="socials && socials.github"
          class="flex items-center justify-center w-7 h-7 bg-gray-100 border border-gray-200 rounded-full"
          :href="socials.github"
        >
          <Icon class="w-4 h-4" name="octicon:mark-github-16"></Icon>
        </a>
        <a
          v-if="socials && socials.zulip"
          class="flex items-center justify-center w-7 h-7 bg-gray-100 border border-gray-200 rounded-full"
          href="https://rustseq.zulipchat.com"
          :title="`Chat about ${name} in the rust-seq Zulip`"
        >
          <Icon class="w-4 h-4" name="tabler:brand-zulip"></Icon>
        </a>
      </div>
    </div>
    <div class="flex items-center justify-start gap-x-1">
      <div class="crate">{{ organization }}/{{ name }}</div>
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { Kind } from "~/components/molecules/docs/crate-card/kind";

interface Category {
  name: string;
  icon: string;
}

interface Socials {
  github?: string;
  zulip: boolean;
}

interface Props {
  name: string;
  kind: Kind;
  organization: string;
  category: Category;
  socials: Socials;
  description: string;
}

// Define props with TypeScript
const props = defineProps<Props>();
</script>
