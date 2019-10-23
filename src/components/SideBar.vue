<template>
  <div id="side-bar">
    <Details detailDescription="Michael Kwok" , detailType="DetailType.Name" />
    <Details />
    <Details />
    <SkillEntry skillName="C++" skillLevel="90" />
    <SkillEntry skillName="JavaScript" skillLevel="10" />
    <SkillEntry skillName="Python" skillLevel="90" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Details from "./Details.vue";
import SkillEntry from "./SkillEntry.vue";

@Component({
  components: {
    Details,
    SkillEntry
  }
})
export default class SideBar extends Vue {}
</script>
