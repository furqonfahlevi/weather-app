<template>
  <div class="flex gap-2 items-stretch">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 640 512"
        class="fill-[#8f959f]"
      >
        <path :d="icon" />
      </svg>
    </div>
    <div>
      <p class="text-lg">{{ title }}</p>
      <p class="text-4xl sm:text-3xl lg:text-5xl text-secondary font-bold">
        {{ value }}{{ unit }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "AirConditionsItem",
  props: {
    title: String,
    icon: String,
    value: [Number, String],
    unit: String,
  },
};
</script>
