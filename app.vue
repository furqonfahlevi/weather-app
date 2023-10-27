<template>
  <div class="w-full mx-auto flex flex-col justify-center items-center p-10">
    <AppHeader />
    <ContentContainer :weatherData="weatherData" />
  </div>
</template>
<script lang="ts">
import { useWeather } from "./composable/useWeather";

import AppHeader from "./components/AppHeader.vue";
import ContentContainer from "./components/ContentContainer.vue";

export default {
  components: { AppHeader, ContentContainer },
  name: "App",
  setup() {
    const { weatherData } = useWeather();
    return {
      weatherData,
    };
  },
};
</script>
