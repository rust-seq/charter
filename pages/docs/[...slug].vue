<script setup lang="ts">
import { createError, useAsyncData, useRoute } from "nuxt/app";
import { sentenceCase } from "change-case";

const route = useRoute();

const { data } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

let toc = data.value.body.toc;
let links = route.path.split("/").slice(2);
let last = links.pop();

let breadcrumbs = [
  {
    label: "Docs",
    icon: "i-heroicons-book-open",
    to: "/docs",
  },
];

const sections = {
  "get-started": {
    label: "Get Started",
    icon: "i-heroicons-presentation-chart-line",
  },

  "writing-crates": {
    label: "Writing Crates",
    icon: "i-heroicons-pencil-square",
  },
};

const pages = {
  "file-io": "File I/O",
};

for (var link of links) {
  let section = sections[link];

  if (section === undefined) {
    throw createError({
      statusCode: 500,
      statusMessage: "Unknown breadcrumb",
      fatal: true,
    });
  }

  breadcrumbs.push(section);
}

let page = pages[last] || sentenceCase(last);

breadcrumbs.push({
  label: page,
  icon: "i-heroicons-newspaper",
});
</script>

<template>
  <div class="docs">
    <MoleculesDocsLeftSidebar />
    <div class="content">
      <main>
        <div>
          <UBreadcrumb :links="breadcrumbs" />
          <article>
            <ContentRenderer :value="data" />
          </article>
        </div>
      </main>
      <aside>
        <MoleculesDocsRightSidebar :toc="toc" />
      </aside>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.docs {
  @apply flex;
  @apply w-full;
  @apply h-full;

  .content {
    @apply flex;
    @apply w-full;
    @apply h-full;

    @apply pt-16;

    @apply dark:bg-slate-950;

    main {
      @apply flex;
      @apply h-full;

      @apply overflow-auto;

      @apply px-16;
      @apply mx-10;

      article {
        /* Prose */
        @apply prose;
        @apply prose-slate;
        @apply dark:prose-invert;

        @apply py-8;

        @apply max-w-3xl;

        :where(a) {
          @apply no-underline;
        }
      }

      aside {
        @apply dark:text-white;
      }
    }
  }
}
</style>
