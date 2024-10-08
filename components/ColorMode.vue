<template>
  <LucideMoon
    v-if="colorMode.preference === Mode.Light"
    @click="colorMode.preference = Mode.Dark"
  />
  <LucideSun v-else @click="colorMode.preference = Mode.Light" />
</template>

<script setup lang="ts">
const colorMode = useColorMode();

enum Mode {
  Light = "light",
  Dark = "dark",
  System = "system",
}
</script>
