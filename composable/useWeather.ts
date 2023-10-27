import { ref, onMounted } from "vue";

export const useWeather = () => {
  const latitude = ref<number>();
  const longitude = ref<number>();
  const weatherData = ref();
  const config = useRuntimeConfig();

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
    const apiKey = config.public.openWeatherApiKey;
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
};
