<script lang='ts'>
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class AppMenu extends Vue {
}
</script>

<template>
  <ul class="list-group">
      <router-link class="d-block text-decoration-none list-group-item" active-class="active" to="/publications">
        <v-icon>mdi-home</v-icon>
        Accueil
      </router-link>
      <router-link class="d-block text-decoration-none list-group-item" active-class="active" to="/mon-compte">
        <v-icon>mdi-account</v-icon>
        Mon compte
      </router-link>
      <router-link class="d-block text-decoration-none list-group-item" active-class="active" to="/logout">
        <v-icon>mdi-logout</v-icon>
        Se déconnecter
      </router-link>
  </ul>
</template>
