<template>
  <div
    class="w-[1280px] mx-auto flex flex-col justify-center items-center py-4 px-2"
  >
    <div class="w-full">
      <input
        type="text"
        name=""
        id=""
        class="w-full py-3 px-2 rounded-lg bg-secondary text-secondary"
        placeholder="Search for cities"
      />
    </div>
    <div class="flex w-full gap-10 mt-8">
      <div class="w-3/4 flex flex-col gap-8 px-2">
        <div class="flex justify-between items-center w-2/3 mx-auto">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-2">
              <h1 class="text-5xl font-bold">Madrid</h1>
              <p class="text-primary">Chance of rain: 0%</p>
            </div>
            <div>
              <p class="text-5xl">31°</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="4em"
              viewBox="0 0 512 512"
              class="fill-yellow-500"
            >
              <path
                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
              />
            </svg>
          </div>
        </div>
        <div class="flex flex-col bg-secondary p-8 text-primary rounded-xl">
          <p>Today's Forecast</p>
          <div class="flex justify-start items-center gap-4">
            <div
              class="flex flex-col justify-center items-center px-4 border-r-[1px] border-slate-500"
            >
              <p>6:00 AM</p>
              <div>image</div>
              <p class="text-secondary">25°</p>
            </div>
            <div class="flex flex-col justify-center items-center">
              <p>6:00 AM</p>
              <div>image</div>
              <p class="text-secondary">25°</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col bg-secondary p-8 text-primary rounded-xl">
          <p class="uppercase">Air Conditions</p>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <p>Real feel</p>
              <p class="text-5xl">30°</p>
            </div>
            <div>
              <p>Wind</p>
              <p class="text-5xl">0.2 km/h</p>
            </div>
            <div>
              <p>Chance of rain</p>
              <p class="text-5xl">0%</p>
            </div>
            <div>
              <p>UV Index</p>
              <p class="text-5xl">3</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 bg-secondary py-4 px-6">
        <p class="uppercase">7-Day Forecast</p>
        <div class="mt-6">
          <div
            class="flex justify-between items-center border-b-[1px] border-slate-500 pb-8"
          >
            <p>Today</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 512 512"
              class="fill-yellow-500"
            >
              <path
                d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
              />
            </svg>
            <div>Sunny</div>
            <p>36/22</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  methods: {
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          },
          (error) => {
            console.error("Error Code = " + error.code + " - " + error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
  },
  mounted() {
    this.getUserLocation();
  },
};
</script>
