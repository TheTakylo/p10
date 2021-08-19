<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import PublicationsModule from '@/services/modules/PublicationsModule'
import PublicationObject from '@/entities/PublicationObject'
import PublicationCard from '@/components/publications/PublicationCard.vue'
import AppLayout from '@/layouts/AppLayout.vue'

@Options({
  components: {
    AppLayout,
    PublicationCard
  },
  props: {}
})
export default class Publications extends Vue {
  publications: PublicationObject[] | [] | null = null

  private formImage = ''
  private formContent = ''

  private formErrors: [] | null = null

  mounted () {
    this.loadPublications()
  }

  loadPublications () {
    PublicationsModule.getPublications().then(publications => {
      this.publications = publications
    })
  }

  postPublication () {
    PublicationsModule.postPublication({
      image: this.formImage,
      content: this.formContent
    }).then(() => {
      this.loadPublications()
    }).catch(({ response }) => {
      console.log(response)
      if (response.data?.errors) {
        this.formErrors = response.data.errors
      }
    })
  }
}
</script>

<template>
  <AppLayout>
    <h1>Publications</h1>
    <div class="card">
      <div class="card-header">
        Ajouter
      </div>
      <div class="card-body">
        <form @submit.prevent="postPublication">
          <div v-if="formErrors" class="alert alert-danger">
            <ul>
              <li v-for="(key,value, index) in formErrors" :key="index">
                {{ value }}: {{ key[0] }}
              </li>
            </ul>
          </div>
          <textarea name="" placeholder="Ajouter une publication" v-model="formContent" id="" cols="30" rows="5" class="form-control"></textarea>
          <div class="row">
            <div class="col-md-9">
              <div class="form-group mt-3">
                <label>Image</label>
                <input type="url" v-model="formImage" placeholder="https://..." class="form-control">
              </div>
            </div>
            <div class="col-md-3">
              <button type="submit" class="btn btn-primary mt-8 text-white">Publier</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <v-icon v-if="publications === null">mdi-loading mdi-spin</v-icon>
    <template v-else v-for="(publication, index) in publications" :key="index">
      <PublicationCard :item="publication"/>
    </template>
  </AppLayout>
</template>
