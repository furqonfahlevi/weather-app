<template>
  <div
    class="w-[1280px] mx-auto flex flex-col justify-center items-center py-4 px-2"
  >
    <div class="w-full flex items-center gap-4">
      <img
        class="w-[48px] h-[48px] hover:cursor-pointer"
        src="./src/assets/images/icon.png"
        alt="Weather App Icon"
      />
      <h1 class="text-xl text-white">Weather App</h1>
    </div>
    <div class="flex w-full mt-20">
      <div class="w-full flex flex-col gap-8 px-2">
        <div class="flex justify-between items-center w-3/4 mx-auto">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-2">
              <h1 class="text-5xl font-bold text-white">
                {{ weatherData?.name }}, {{ weatherData?.sys?.country }}
              </h1>
              <p class="text-primary font-light capitalize">
                {{ weatherData?.weather[0]?.description }}
              </p>
            </div>
            <div>
              <p class="text-7xl font-bold text-white">
                {{ Math.round(weatherData?.main?.temp - 273.15) }}°
              </p>
            </div>
          </div>
          <div>
            <img
              :src="
                'https://openweathermap.org/img/wn/' +
                weatherData?.weather[0]?.icon +
                '@4x.png'
              "
              alt=""
            />
          </div>
        </div>
        <div
          class="flex flex-col gap-4 bg-secondary p-8 text-primary rounded-xl"
        >
          <p class="uppercase font-bold">Air Conditions</p>
          <div class="grid grid-cols-2 gap-8 content-center">
            <div class="flex gap-2 items-stretch">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 320 512"
                  class="fill-[#8f959f]"
                >
                  <path
                    d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V208c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-lg">Real Feel</p>
                <p class="text-5xl text-secondary font-bold">
                  {{ Math.round(weatherData?.main?.feels_like - 273.15) }}°
                </p>
              </div>
            </div>
            <div class="flex gap-2 items-stret">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 512 512"
                  class="fill-[#8f959f]"
                >
                  <path
                    d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-lg">Wind</p>
                <p class="text-5xl text-secondary font-bold">
                  {{ (weatherData?.wind?.speed * 3.6).toFixed(2) }} km/h
                </p>
              </div>
            </div>
            <div class="flex gap-2 items-stretch">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 640 512"
                  class="fill-[#8f959f]"
                >
                  <path
                    d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-lg">Cloudiness</p>
                <p class="text-5xl text-secondary font-bold">
                  {{ weatherData?.clouds?.all }}%
                </p>
              </div>
            </div>
            <div class="flex gap-2 items-stretch">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 384 512"
                  class="fill-[#8f959f]"
                >
                  <path
                    d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-lg">Humidity</p>
                <p class="text-5xl text-secondary font-bold">
                  {{ weatherData?.main?.humidity }}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";

import { useWeather } from "./src/composable/useWeather";

export default {
  name: "App",
  setup() {
    const { weatherData } = useWeather();
    return {
      weatherData,
    };
  },
};
</script>
