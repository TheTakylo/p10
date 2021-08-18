<template>
  <v-card class="mt-4" outlined>
    <v-card-header>
      <router-link to="/">@{{ this.$props.item.user.nickname }}</router-link>
      - {{ this.$props.item.getTimeago() }}
    </v-card-header>
    <v-img
      contain
      :src="this.$props.item.image"
      max-height="400"
    ></v-img>
    <v-card-text>{{ this.$props.item.content }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon>
        <router-link :to="{name: 'publication', params: {id: this.$props.item.id}}">
          <v-icon>mdi-comment</v-icon>
        </router-link>
      </v-btn>
    </v-card-actions>
  </v-card>
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
