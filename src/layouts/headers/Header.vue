<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="leftDrawerOpen = !leftDrawerOpen"
        aria-label="Menu"
        icon="fas fa-ellipsis-v"
      />

      <q-toolbar-title> Wizard's Orbit </q-toolbar-title>

      <div>Quasar</div>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      leftDrawerOpen: ref(true),
    };
  },
};
</script>

<style lang="">
</style>