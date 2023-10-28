<template>
  <div class="w-full mx-auto flex flex-col justify-center items-center p-10">
    <AppHeader />
    <ContentContainer v-if="isRequestSuccessful" :weatherData="weatherData" />
    <span
      v-if="!isRequestSuccessful"
      class="text-5xl absolute top-52 translate-y-52"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="
          margin: auto;
          background: none;
          display: block;
          shape-rendering: auto;
        "
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#202b3b"
          stroke-width="5"
          r="21"
          stroke-dasharray="98.96016858807849 34.98672286269283"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.0204081632653061s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </span>
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
    const { weatherData, isRequestSuccessful } = useWeather();
    return {
      weatherData,
      isRequestSuccessful,
    };
  },
};
</script>
