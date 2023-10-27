<template>
  <div class="w-full mx-auto flex flex-col justify-center items-center p-10">
    <AppHeader />
    <div class="flex w-full mt-20 flex-col sm:flex-row gap-8">
      <div class="w-full px-2">
        <CurrentWeather :weatherData="weatherData" />
        <AirConditions :weatherData="weatherData" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import AppHeader from "./components/AppHeader.vue";
import CurrentWeather from "./components/CurrentWeather.vue";
import AirConditions from "./components/AirConditions.vue";
import { useWeather } from "./composable/useWeather";

export default {
  components: { AppHeader, CurrentWeather, AirConditions },
  name: "App",
  setup() {
    const { weatherData } = useWeather();
    return {
      weatherData,
    };
  },
};
</script>
