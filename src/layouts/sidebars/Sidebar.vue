<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
    <q-list>
      <q-item-label header>Essential Links</q-item-label>
      <q-item
        v-for="(item, i) in $options.menus"
        clickable
        :to="item.path"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
          <q-item-label caption>quasar.dev</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { ref } from "vue";
import menus from "./menus.json";
export default {
  menus,
  setup() {
    return {
      leftDrawerOpen: ref(true),
    };
  },
};
</script>

<style lang="">
</style>