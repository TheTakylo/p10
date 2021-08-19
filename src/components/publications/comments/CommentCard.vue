<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import CommentObject from '@/entities/CommentObject'
import { Prop } from 'vue-property-decorator'

@Options({})
export default class ShowPublication extends Vue {
  @Prop()
  item!: CommentObject
}
</script>

<template>
  <div class="card mt-5">
    <div class="card-header">
      <router-link to="/">@{{ this.$props.item.user.nickname }}</router-link>
      - {{ this.$props.item.getTimeago() }}
    </div>
    <div class="card-body">
      <p class="card-text">{{ this.$props.item.content }}</p>
    </div>
  </div>
</template>
