<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import PublicationsModule from '@/services/modules/PublicationsModule'
import PublicationObject from '@/entities/PublicationObject'
import PublicationCard from '@/components/publications/PublicationCard.vue'

@Options({
  components: { PublicationCard },
  props: {}
})
export default class Publications extends Vue {
  publications: PublicationObject[] | [] | null = null

  mounted () {
    PublicationsModule.getPublications().then(publications => {
      this.publications = publications
    })
  }
}
</script>

<template>
  <v-container>
    <h1>Publications</h1>
    <v-icon v-if="publications === null">mdi-loading mdi-spin</v-icon>
    <template v-else v-for="(publication, index) in publications" :key="index">
      <PublicationCard :item="publication"/>
    </template>
  </v-container>
</template>
