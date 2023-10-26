<template>
  <div
    class="w-[1280px] mx-auto flex flex-col justify-center items-center py-4 px-2"
  >
    <div class="w-full flex items-center gap-4">
      <img
        class="w-[48px] h-[48px] hover:cursor-pointer"
        src="~/assets/images/icon.png"
        alt=""
      />
      <h1 class="text-xl">Weather App</h1>
    </div>
    <div class="flex w-full mt-20">
      <div class="w-full flex flex-col gap-8 px-2">
        <div class="flex justify-between items-center w-3/4 mx-auto">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-2">
              <h1 class="text-5xl font-bold">
                {{ weatherData?.name }}, {{ weatherData?.sys?.country }}
              </h1>
              <p class="text-primary capitalize">
                {{ weatherData?.weather[0]?.description }}
              </p>
            </div>
            <div>
              <p class="text-5xl">
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
          <div class="grid grid-cols-2 gap-8">
            <div class="flex gap-2 items-stretch">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3em"
                  viewBox="0 0 320 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V208c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-lg">Real feel</p>
                <p class="text-5xl font-bold">
                  {{ Math.round(weatherData?.main?.feels_like - 273.15) }}°
                </p>
              </div>
            </div>
            <div>
              <p>Wind</p>
              <p class="text-5xl">
                {{ (weatherData?.wind?.speed * 3.6).toFixed(2) }} km/h
              </p>
            </div>
            <div>
              <p>Cloudiness</p>
              <p class="text-5xl">{{ weatherData?.clouds?.all }}%</p>
            </div>
            <div>
              <p>Humidity</p>
              <p class="text-5xl">{{ weatherData?.main?.humidity }}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  setup() {
    const latitude = ref();
    const longitude = ref();
    const weatherData = ref();

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            latitude.value = position.coords.latitude;
            longitude.value = position.coords.longitude;
            console.log(
              `Latitude: ${latitude.value}, Longitude: ${longitude.value}`
            );
            getWeatherData();
          },
          (error) => {
            console.error("Error Code = " + error.code + " - " + error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    const getWeatherData = async () => {
      const apiKey = "0f4e10acc115cb99e96f5a70c059d0b7";
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=${apiKey}`;

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        weatherData.value = data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    onMounted(() => {
      getUserLocation();
    });

    return {
      latitude,
      longitude,
      weatherData,
    };
  },
};
</script>
