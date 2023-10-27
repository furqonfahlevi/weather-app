<template>
  <div class="w-full flex flex-col sm:flex-row items-center gap-4">
    <img
      class="w-[48px] h-[48px] hover:cursor-pointer"
      src="../assets/images/icon.png"
      alt="Weather App Icon"
      @click="iconRefresh"
    />
    <h1 class="text-xl text-white invisible sm:visible">Weather App</h1>
  </div>
</template>
<script lang="ts">
export default {
  name: "AppHeader",
  methods: {
    iconRefresh() {
      location.reload();
    },
  },
};
</script>
