import { ref, onMounted } from "vue";

export const useWeather = () => {
  const latitude = ref<number>();
  const longitude = ref<number>();
  const weatherData = ref();
  const isRequestSuccessful = ref(false);
  const config = useRuntimeConfig();

  const notifyUser = (message: string) => {
    window.alert(message); // This uses the browser's default alert. Replace with your preferred method if needed.
  };

  const getUserLocation = () => {
    const previousPermission = localStorage.getItem("locationPermission");

    if (!previousPermission) {
      const userConfirmation = window.confirm(
        "This app requires access to your location to provide weather details. Do you wish to continue?"
      );
      if (!userConfirmation) {
        localStorage.setItem("locationPermission", "denied");
        return;
      } else {
        localStorage.setItem("locationPermission", "accepted");
      }
    } else if (previousPermission === "denied") {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          latitude.value = position.coords.latitude;
          longitude.value = position.coords.longitude;
          getWeatherData();
          isRequestSuccessful.value = true;
        },
        (error) => {
          console.error("Error Code = " + error.code + " - " + error.message);
          notifyUser(
            "Error accessing geolocation. Please enable location access for this app."
          );
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      notifyUser("Geolocation is not supported by this browser.");
    }
  };

  const getWeatherData = async () => {
    const apiKey = config.public.openWeatherApiKey;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=${apiKey}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      if (data.cod === "401" || data.cod === 401) {
        notifyUser("API key is unauthorized. Please contact this dev.");
      } else {
        weatherData.value = data;
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      notifyUser("Error fetching weather data. Please try again later.");
    }
  };

  onMounted(() => {
    getUserLocation();
  });

  return {
    latitude,
    longitude,
    weatherData,
    isRequestSuccessful,
  };
};
