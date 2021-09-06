<template>
  <div>
    <vue-command :commands="commands" />
    <p>Deneme</p>
  </div>
</template>
<script>
import VueCommand, { createStdout } from "vue-command";
import "vue-command/dist/vue-command.css";
export default {
  components: {
    VueCommand,
  },
  data: () => ({
    commands: {
      "hello-world": () => createStdout("Hello world"),
    },
  }),
};
</script>
<style lang="">
</style>