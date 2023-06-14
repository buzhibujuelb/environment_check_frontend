<script setup lang="ts">
import { provide, onMounted, ref } from "vue";

const URL = location.hostname;

const WS_URL =  (location.protocol==='https:'?"wss://":"ws://") + URL;
const WS_PORT = location.protocol === 'https:'? 9000: 8084;

onMounted(() => {
  // Show loading notice
  var canvas = document.getElementById("videoCanvas");

  // Setup the WebSocket connection and start the player
  var client = new WebSocket(WS_URL + ":" + WS_PORT);
  // @ts-ignore
  var player = new jsmpeg(client, { canvas: canvas });
  // console.log(player);
});

</script>

<template>

  <canvas id="videoCanvas" width="640" height="480"> </canvas>


</template>

<style scoped lang="scss">

</style>
