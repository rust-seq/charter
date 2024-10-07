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

const lookup = {
  "get-started": {
    label: "Get Started",
    icon: "i-heroicons-presentation-chart-line",
  },
};

for (var link of links) {
  let value = lookup[link];

  if (value === undefined) {
    throw createError({
      statusCode: 500,
      statusMessage: "Unknown breadcrumb",
      fatal: true,
    });
  }

  breadcrumbs.push(value);
}

breadcrumbs.push({
  label: sentenceCase(last),
  icon: "i-heroicons-newspaper",
});
</script>

<template>
  <div class="docs">
    <DocsLeftSidebar />
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
        <DocsRightSidebar :toc="toc" />
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

      @apply overflow-scroll;

      @apply px-16;
      @apply mx-10;

      article {
        /* Prose */
        @apply prose;
        @apply prose-slate;
        @apply dark:prose-invert;

        @apply py-8;

        /* Prose Code */
        @apply prose-code:rounded-md;
        @apply prose-code:px-2;
        @apply prose-code:py-1;
        @apply prose-code:before:content-none;
        @apply prose-code:after:content-none;

        @apply prose-code:text-slate-900;
        @apply prose-code:bg-slate-100;
        @apply dark:prose-code:text-slate-100;
        @apply dark:prose-code:bg-slate-800;

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
