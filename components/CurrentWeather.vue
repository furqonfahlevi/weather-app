import type { WeatherIcon } from '#build/components';
<template>
  <div
    class="sm:w-3/4 mx-auto flex flex-col sm:flex-row justify-between items-center gap-8"
  >
    <div class="flex flex-col gap-10">
      <div class="flex flex-col gap-2">
        <h1 class="text-2xl font-bold text-white sm:text-xl lg:text-5xl">
          {{ weatherData?.name }}, {{ weatherData?.sys?.country }}
        </h1>
        <p class="text-primary font-light capitalize">
          {{ weatherData?.weather[0]?.description }}
        </p>
      </div>
      <div>
        <p
          class="text-7xl font-bold text-white text-center sm:text-left sm:text-5xl lg:text-7xl"
        >
          {{ Math.round(weatherData?.main?.temp - 273.15) }}°
        </p>
      </div>
    </div>
    <WeatherIcon :icon="weatherData?.weather[0]?.icon" />
  </div>
</template>
<script lang="ts">
import WeatherIcon from "./WeatherIcon.vue";
export default {
  components: { WeatherIcon },
  name: "CurrentWeather",
  props: {
    weatherData: Object,
  },
};
</script>
