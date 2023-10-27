<template>
  <div class="flex w-full mt-20 flex-col sm:flex-row gap-8">
    <div class="w-full px-2">
      <CurrentWeather :weatherData="weatherData" />
      <AirConditions :weatherData="weatherData" />
    </div>
  </div>
</template>
<script lang="ts">
import CurrentWeather from "./CurrentWeather.vue";
import AirConditions from "./AirConditions.vue";

export default {
  name: "ContentContainer",
  components: { CurrentWeather, AirConditions },
  props: {
    weatherData: Object,
  },
};
</script>
