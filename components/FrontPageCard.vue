<template>
  <div class="front-page-card relative group" :class="checked ? 'checked' : ''" @click="cardClicked">
    <div class="relative checkbox">
      <span class="absolute transition-opacity duration-300 ease-out"
        :class="{ 'opacity-0': checked, 'opacity-100 delay-500': !checked }">
        {{ step }}
      </span>
      <Icon class="w-7 h-7 bg-white transition-opacity duration-300 ease-out"
        :class="{ 'opacity-0': !checked, 'opacity-100 delay-500': checked }" name="heroicons:check-20-solid"></Icon>
    </div>
    <div class="content">
      <h3 class="relative">
        {{ title }}
        <span class="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all bg-slate-400 duration-300"
          :class="checked ? 'w-full h-1 opacity-100' : 'w-0 opacity-0'"></span>
      </h3>
      <p class="text-sm relative">
        {{ description }}
        <span
          class="absolute left-0 top-1/2 transform -translate-y-1/2 transition-all bg-slate-400 delay-100 duration-300"
          :class="checked ? 'w-full h-1 opacity-100' : 'w-0 opacity-0'"></span>
      </p>
    </div>
    <div v-if="!checked" class="overlay opacity-0 group-hover:opacity-100">
      <div class="overlay-content not-prose">
        <h3>{{ overlay.title }}</h3>
        <p>{{ overlay.description }}</p>
      </div>
      <Icon class="w-8 h-8 bg-white transition-opacity duration-300 ease-out" name="icon-park-outline:double-right">
      </Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
const checked = ref(false);

interface Overlay {
  title: string;
  description: string;
}

interface Props {
  title: string;
  description: string;
  step: number;
  url: string;
  overlay: Overlay;
}

// Define props with TypeScript
const props = defineProps<Props>();

let cardClicked = () => {
  checked.value = !checked.value;

  if (checked.value) {
    window.open(props.url, "_blank", "noopener,noreferrer");
  }
};
</script>

<style scoped lang="postcss">
.front-page-card {
  @apply flex justify-start items-center;

  @apply px-6;
  @apply py-6;

  @apply bg-white;
  @apply dark:bg-slate-900;

  @apply text-slate-900;
  @apply dark:text-slate-50;

  @apply border;
  @apply border-slate-200;
  @apply dark:border-slate-800;

  @apply rounded-lg;

  @apply text-pretty;

  .overlay {
    @apply flex items-center justify-between space-x-2 absolute inset-0 px-10;
    @apply bg-gradient-to-r from-orange-500 to-amber-500;
    @apply h-full w-full;
    @apply rounded-md;
    @apply transition-opacity duration-100 ease-in-out;

    h3 {
      @apply text-white text-2xl font-bold;
    }

    p {
      @apply text-white text-lg;
    }
  }

  .checkbox {
    @apply flex items-center justify-center;
    @apply font-mono font-bold text-slate-300 text-2xl;
    @apply w-12 h-12;
    @apply rounded-full;
    @apply bg-slate-100 dark:bg-slate-950;
    @apply border-2 border-slate-200 dark:border-slate-800;
  }

  .content {
    @apply ml-6;
    @apply text-slate-500 dark:text-slate-400;

    h3 {
      @apply m-0;
      @apply text-slate-900;
      @apply dark:text-slate-200;
    }

    p {
      @apply m-0;
      @apply text-inherit;
    }
  }

  &:not(.checked) {
    @apply shadow-sm;
    @apply hover:shadow-amber-200;
    @apply dark:hover:shadow-amber-800;
  }

  &.checked {
    .content {
      @apply text-slate-400;

      h3 {
        @apply text-inherit;
      }

      a {
        @apply !text-inherit;
      }
    }

    .checkbox {
      @apply bg-green-500;
      @apply text-white;
      @apply border-green-700;
    }
  }
}
</style>
