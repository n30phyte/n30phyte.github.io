<template>
  <div id="skill-entry">
    <div id="skill-name">{{ skillName }}</div>
    <div id="skill-level">{{ skillLevel }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SkillEntry extends Vue {
  @Prop() private skillName!: string;
  @Prop() private skillLevel!: number;
}
</script>
