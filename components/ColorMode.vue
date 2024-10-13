<template>
  <div class="cursor-pointer">
    <UIcon
      class="w-6 h-6"
      name="heroicons:moon-solid"
      v-if="colorMode.preference === Mode.Light"
      @click="colorMode.preference = Mode.Dark"
    />
    <UIcon
      class="w-6 h-6"
      name="heroicons:sun-solid"
      v-else
      @click="colorMode.preference = Mode.Light"
    />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

enum Mode {
  Light = "light",
  Dark = "dark",
  System = "system",
}
</script>
