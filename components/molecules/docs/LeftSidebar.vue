<template>
  <div class="sidebar">
    <div class="search">
      <div>
        <input type="text" id="search" placeholder="Search (Not Implemented)" />
      </div>
    </div>
    <div class="links">
      <div class="header">Get Started</div>
      <RouterLink to="/docs/get-started/overview">Overview</RouterLink>
      <RouterLink to="/docs/get-started/values">Values</RouterLink>

      <div class="header">Writing Crates</div>
      <RouterLink to="/docs/writing-crates/checklist">Checklist</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.sidebar {
  @apply flex;
  @apply flex-col;
  @apply justify-start;
  @apply items-start;

  @apply w-[260px];
  @apply h-full;

  @apply pl-[20px];
  @apply py-4;

  @apply bg-slate-50;
  @apply dark:bg-slate-950;

  @apply text-slate-600;
  @apply hover:text-slate-700;
  @apply dark:text-slate-300;
  @apply dark:hover:text-gray-50;

  @apply border-2;
  @apply border-l-0;
  @apply border-slate-200;
  @apply dark:border-slate-900;

  .search {
    @apply mb-6;
    @apply pr-[20px];

    label {
      @apply block;

      @apply mb-2;

      @apply text-sm;
      @apply font-medium;
      @apply text-gray-900;
      @apply dark:text-white;
    }

    input {
      @apply block;

      @apply w-full;

      @apply p-2.5;

      @apply rounded-lg;

      @apply dark:bg-slate-800;

      @apply border;
      @apply border-gray-200;
      @apply dark:border-gray-600;

      @apply placeholder-gray-700;
      @apply dark:placeholder-gray-300;

      @apply text-sm;
      @apply text-gray-900;
      @apply dark:text-white;

      @apply focus:ring-blue-500;
      @apply focus:border-blue-500;
      @apply dark:focus:ring-blue-500;
      @apply dark:focus:border-blue-500;
    }
  }

  .links {
    @apply w-full;

    .header {
      @apply pb-1;
      @apply pl-3;

      font-size: 14px;
      @apply font-bold;
      @apply tracking-wide;
      @apply text-gray-800;
      @apply dark:text-gray-200;
    }

    .header:not(:first-child) {
      @apply mt-5;
    }

    a {
      @apply transition;
      @apply block;
      @apply rounded-l-lg;

      @apply w-full;

      @apply pl-3;
      @apply py-0.5;

      font-size: 16px;
      line-height: 1.75rem;
      @apply text-gray-500;
      @apply dark:text-gray-400;

      @apply hover:text-gray-800;
      @apply dark:hover:text-gray-300;
    }

    a.active {
      @apply border-r-4;
      @apply text-slate-900;
      @apply dark:text-white;

      @apply bg-orange-200;
      @apply dark:bg-orange-600;

      @apply border-orange-500;
      @apply dark:border-orange-800;
    }
  }
}
</style>
