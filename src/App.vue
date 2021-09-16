<template>
  <div id="app">
    <dgiotMqttDashboard />
  </div>
</template>

<script>
import dgiotMqttDashboard from '@dgiot/dgiot-mqtt-dashboard'


export default {
  name: 'App',
  components: {
    dgiotMqttDashboard
  },
  mounted() {
    console.log(this.Store)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
