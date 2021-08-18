<template>
  <v-container>
    <router-link to="login">
      <v-btn>Connexion</v-btn>
    </router-link>
    <router-link to="register">
      <v-btn color="primary">Inscription</v-btn>
    </router-link>
  </v-container>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {}
})
export default class Home extends Vue {
}
</script>
