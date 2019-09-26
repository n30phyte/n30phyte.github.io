<template>
  <div id="side-bar">
    <SkillEntry skillName="C++" skillLevel="90"></SkillEntry>
    <SkillEntry skillName="JavaScript" skillLevel="10"></SkillEntry>
    <SkillEntry skillName="Python" skillLevel="90"></SkillEntry>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SkillEntry from "./SkillEntry.vue";

@Component({
  components: {
    SkillEntry
  }
})
export default class SideBar extends Vue {}
</script>
