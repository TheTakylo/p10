<template>
  <div class="card mt-5">
    <div class="card-header">
      <router-link to="/">@{{ this.$props.item.user.nickname }}</router-link>
      - {{ this.$props.item.getTimeago() }}
    </div>
    <img :src="this.$props.item.image" class="card-img-top"/>
    <div class="card-body">
      <p class="card-text">{{ this.$props.item.content }}</p>
    </div>
    <div class="card-footer">
      <router-link :to="{name: 'publication', params: {id: this.$props.item.id}}">
        <v-icon>mdi-comment</v-icon>
      </router-link>
    </div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import PublicationObject from '@/entities/PublicationObject'
import { Prop } from 'vue-property-decorator'

@Options({})
export default class PublicationCard extends Vue {
  @Prop()
  item!: PublicationObject
}
</script>
