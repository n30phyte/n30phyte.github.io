<template>
  <div id="details">
    <div id="detail-icon"></div>
    <div id="detail-description">{{ detailDescription }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Details extends Vue {
  @Prop() private detailType!: DetailType;
  @Prop() private detailDescription!: string;
}
export enum DetailType {
  Name,
  LinkedIn,
  GitHub
}
</script>
