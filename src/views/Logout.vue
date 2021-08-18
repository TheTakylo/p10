<template>
  <v-container>
    Déconnexion...
  </v-container>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import AuthModule from '@/services/modules/AuthModule'

@Options({})
export default class Logout extends Vue {
  created () {
    AuthModule.logout()

    this.$router.push('home')
  }
}
</script>
