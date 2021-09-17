<template>
  <div id="app">
    <dgiot-mqtt-dashboard ref="mqtt" />
  </div>
</template>

<script>
import dgiotMqttDashboard from '@dgiot/dgiot-mqtt-dashboard/src/components/mqtt'
export default {
  name: 'App',
  data(){
    return{
      topicKey:'',
      router:'example',
      topic:'example/subTopic/h7ml',
      qos:0,
      ttl:1000 * 60 * 60 * 3
    }
  },
  components: {
    dgiotMqttDashboard
  },
  watch: {
    topicKey: {
      handler(key) {
        console.error(key,'..........')
        this.$dgiotBus.$off(key)
        this.$dgiotBus.$on(key, (args) => {
          console.groupCollapsed(
              "%ctopicKey",
              "color:#009a61; font-size: 28px; font-weight: 300"
          );
          console.table(args)
          console.groupEnd();
        })
      },
      deep: true,
      immediate: true,
    },
    router: {
      handler(routers) {
        console.error(routers,'..........')
        this.$dgiotBus.$off(routers)
        this.$dgiotBus.$on(routers, (args) => {
            console.groupCollapsed(
                "%crouter",
                "color:#009a61; font-size: 28px; font-weight: 300"
            );
            console.table(args)
            console.groupEnd();
        })
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    // 拿到默认mqtt连接配置
    const {keepalive,username,password,clientId,clean,port,host,router} = this.$refs.mqtt
    const options = {
      keepalive,
      userName:username,
      passWord:password,
      clientId:clientId,
      clean,
      ip:host,
      port,
      connectTimeout: 10 * 1000,
      router,
    }
    console.groupCollapsed(
        "%cmqtt options",
        "color:#009a61; font-size: 28px; font-weight: 300"
    );
    console.table(options)
    console.groupEnd();
    // 首先断开连接
    // this.disconnect(Math.round(new Date() / 1000))
    // 连接dgiotMqtt
    // this.connect(options)
  },
  methods:{
    async disconnect(timestamp){
      await this.$dgiotBus.$off("MqttDisconnect",timestamp)
    },
    async connect(options){
      await this.$dgiotBus.$emit('MqttConnect', options)
      this.subscribe()
    },
    async subscribe(){
      this.$dgiotBus.$emit('MqttSubscribe', {
        router: this.router,
        topic: this.topic,
        ttl:this.ttl,
        created: Math.round(new Date() / 1000),
        qos: this.qos,
      })
    }
  }
}
</script>
