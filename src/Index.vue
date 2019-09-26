<template>
  <div id="app">
    <SideBar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "./components/SideBar.vue";

@Component({
  components: {
    SideBar
  }
})
export default class App extends Vue {}
</script>
