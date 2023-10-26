<template>
  <div
    class="w-[1280px] mx-auto bg-red-500 flex flex-col justify-center items-center"
  >
    <div class="w-full">
      <input
        type="text"
        name=""
        id=""
        class="w-full"
        placeholder="Search for cities"
      />
    </div>
    <div class="flex w-full gap-10">
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <div class="flex flex-col">
            <h1>Madrid</h1>
            <p>Chance of rain: 0%</p>
          </div>
          <div>image</div>
        </div>
        <div class="flex flex-col">
          <p>Today's Forecast</p>
          <div class="flex gap-4">
            <div>
              <p>6:00 AM</p>
              <div>image</div>
              <p>25°</p>
            </div>
            <div>
              <p>6:00 AM</p>
              <div>image</div>
              <p>25°</p>
            </div>
          </div>
        </div>
        <div>
          <p>Air Conditions</p>
          <div class="grid grid-cols-2">
            <div>
              <p>Real feel</p>
              <p>30°</p>
            </div>
            <div>
              <p>Wind</p>
              <p>0.2 km/h</p>
            </div>
            <div>
              <p>Chance of rain</p>
              <p>0%</p>
            </div>
            <div>
              <p>UV Index</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>7-Day Forecast</p>
        <div>
          <div>
            <p>Today</p>
            <p>Sunny</p>
            <div>Sunny</div>
            <p>36/22</p>
          </div>
          <div>
            <p>Today</p>
            <p>Sunny</p>
            <div>Sunny</div>
            <p>36/22</p>
          </div>
          <div>
            <p>Today</p>
            <p>Sunny</p>
            <div>Sunny</div>
            <p>36/22</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
