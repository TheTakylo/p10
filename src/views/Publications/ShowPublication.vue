<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import PublicationObject from '@/entities/PublicationObject'
import PublicationCard from '@/components/publications/PublicationCard.vue'
import PublicationsModule from '@/services/modules/PublicationsModule'
import CommentsList from '@/components/publications/comments/CommentsList.vue'

@Options({
  components: {
    CommentsList,
    PublicationCard
  }
})
export default class ShowPublication extends Vue {
  publication: PublicationObject | null = null

  mounted () {
    this.getPublication(Number(this.$route.params.id))
  }

  getPublication (id: number): void {
    console.log(id)
    PublicationsModule.getPublication(id).then(publication => {
      this.publication = publication
    })
  }
}
</script>

<template>
  <v-container>
    <h1>Publication</h1>
    <v-icon v-if="publication === null">mdi-loading mdi-spin</v-icon>
    <template v-else>
      <PublicationCard :item="publication"/>
      <CommentsList :item="publication"/>
    </template>
  </v-container>
</template>
