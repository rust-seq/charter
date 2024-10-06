<template>
  <nav>
    <div id="links">
      <NuxtLink to="/docs">
        <LucideBookText class="mx-auto" />
        <span class="label">Docs</span>
      </NuxtLink>
    </div>

    <ColorMode />
  </nav>
</template>

<style scoped lang="postcss">
nav {
  #links {
    @apply flex;
    @apply flex-col;
    @apply justify-start;
    @apply items-center;
  }

  @apply flex;
  @apply flex-col;
  @apply justify-between;
  @apply items-center;

  @apply w-[50px];
  @apply h-full;

  @apply py-4;

  @apply bg-slate-100;
  @apply dark:bg-slate-950;

  @apply text-gray-500;
  @apply hover:text-gray-700;
  @apply dark:text-gray-200;
  @apply dark:hover:text-gray-50;

  @apply border-2;
  @apply border-slate-200;
  @apply dark:border-slate-900;

  a {
    margin-bottom: 20px;

    .label {
      @apply text-xs;
      @apply font-bold;
      @apply uppercase;
      @apply transition;
    }
  }
}
</style>
