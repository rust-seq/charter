<template>
  <nav>
    <div class="links">
      <NuxtLink
        class="flex flex-col space-y-1.5 items-center justify-center"
        to="/"
      >
        <Icon class="mx-auto w-6 h-6" name="heroicons:home"></Icon>
        <span class="label">Home</span>
      </NuxtLink>
      <NuxtLink
        class="flex flex-col space-y-1.5 items-center justify-center"
        to="/docs"
      >
        <Icon class="mx-auto w-6 h-6" name="heroicons:book-open"></Icon>
        <span class="label">Docs</span>
      </NuxtLink>
    </div>

    <div class="links">
      <ColorMode />
      <a href="https://github.com/rust-seq/rust-seq.github.io">
        <Icon class="mx-auto w-7 h-7" name="mdi:github"></Icon>
      </a>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  .links {
    @apply flex flex-col justify-start items-center space-y-6;
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
    .label {
      @apply text-xs;
      @apply font-bold;
      @apply uppercase;
      @apply transition;
    }
  }
}
</style>
