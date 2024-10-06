<script setup>
import { createError, useAsyncData, useRoute } from "nuxt/app";

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
</script>

<template>
  <div class="docs">
    <DocsLeftSidebar />
    <div class="content">
      <main>
        <article>
          <ContentRenderer :value="data" />
        </article>
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
