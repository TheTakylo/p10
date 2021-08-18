<template>
  <AppLayout>
    <h1>Publications</h1>
    <form action="">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Pseudo</label>
            <input type="text" class="form-control" placeholder="Pseudo">
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="form-group">
            <label>Description</label>
            <textarea placeholder="Une petite description" cols="30" rows="10" class="form-control"></textarea>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <button type="submit" class="btn btn-primary">Enregistrer</button>
      </div>
    </form>
  </AppLayout>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import AppLayout from '@/layouts/AppLayout.vue'

@Options({
  components: { AppLayout },
  props: {}
})
export default class Account extends Vue {
}
</script>
