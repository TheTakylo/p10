<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import CommentObject from '@/entities/CommentObject'
import { Prop } from 'vue-property-decorator'

@Options({
})
export default class ShowPublication extends Vue {
  @Prop()
  item!: CommentObject
}
</script>

<template>
    <v-card class="mt-4" outlined>
      <v-card-header>
        <router-link to="/">@{{ this.$props.item.user.nickname }}</router-link>
        - {{ this.$props.item.getTimeago() }}
      </v-card-header>
      <v-card-text>{{ this.$props.item.content }}</v-card-text>
    </v-card>
</template>
