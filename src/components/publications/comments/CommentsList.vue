<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import PublicationObject from '@/entities/PublicationObject'
import PublicationCard from '@/components/publications/PublicationCard.vue'
import PublicationsModule from '@/services/modules/PublicationsModule'
import CommentsList from '@/components/publications/comments/CommentsList.vue'
import CommentObject from '@/entities/CommentObject'
import { Prop } from 'vue-property-decorator'
import CommentCard from '@/components/publications/comments/CommentCard.vue'

@Options({
  components: {
    CommentCard,
    CommentsList,
    PublicationCard
  }
})
export default class ShowPublication extends Vue {
  @Prop()
  item!: PublicationObject

  comments: CommentObject[] | [] | null = null

  mounted () {
    this.getComments()
  }

  getComments () {
    PublicationsModule.getComments(this.item.id).then(comments => {
      this.comments = comments
    })
  }

  getCommentsCount () {
    return this.comments?.length ?? 0
  }
}
</script>

<template>
  <h3 class="mt-9 text-h5">Commentaires <template v-if="comments !== null">({{ getCommentsCount() }})</template></h3>
  <v-icon v-if="comments === null">mdi-loading mdi-spin</v-icon>
  <template v-else v-for="(comment, index) in comments" :key="index">
    <CommentCard :item="comment"/>
  </template>
</template>
