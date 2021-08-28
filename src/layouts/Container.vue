<template>
  <q-layout view="lHh Lpr lFf">
    <header-bar></header-bar>
    <side-bar></side-bar>
    <q-page-container> 
        <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderBar from './headers/Header.vue'
import SideBar from './sidebars/Sidebar.vue'
export default {
    components: {
        HeaderBar,
        SideBar
    }
}
</script>

<style lang="">

</style>