<template>
  <select
    v-model="locale"
    class="w-full px-2 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    @change="switchLocale(locale)"
  >
    <option v-for="loc in localeCodes" :key="loc" :value="loc">
      {{ loc }}
    </option>
  </select>
</template>

<script setup lang="ts">
const { locale, setLocale, localeCodes } = useI18n();

const switchLocale = (val: string) => setLocale(val);
</script>
