<template>
  <div>
    <img :src="iconUrl" alt="Weather Icon" />
  </div>
</template>
<script lang="ts">
export default {
  name: "WeatherIcon",
  props: {
    icon: String,
  },
  computed: {
    iconUrl() {
      return `https://openweathermap.org/img/wn/${this.icon}@4x.png`;
    },
  },
};
</script>
