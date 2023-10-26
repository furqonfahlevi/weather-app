<template>
  <div
    class="w-[1280px] mx-auto flex flex-col justify-center items-center py-4 px-2"
  >
    <div class="w-full">
      <h1>Weather App</h1>
    </div>
    <div class="flex w-full mt-8">
      <div class="w-full flex flex-col gap-8 px-2">
        <div class="flex justify-between items-center w-2/3 mx-auto">
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
        <div class="flex flex-col bg-secondary p-8 text-primary rounded-xl">
          <p class="uppercase">Air Conditions</p>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <p>Real feel</p>
              <p class="text-5xl">
                {{ Math.round(weatherData?.main?.feels_like - 273.15) }}°
              </p>
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
