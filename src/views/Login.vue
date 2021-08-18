<template>
  <v-container>
    <form class="login" @submit.prevent="login">
      <h1>Connexion</h1>
      <div class="mt-5 form-group">
        <label>Adresse email</label>
        <input class="form-control" type="email" v-model="email"/>
      </div>
      <div class="mt-3 form-group">
        <label>Mot de passe</label>
        <input class="form-control" type="password" v-model="password"/>
      </div>
      <v-btn class="mt-3" color="primary" type="submit">Connexion</v-btn>
    </form>
  </v-container>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import AuthModule from '@/services/modules/AuthModule'

@Options({})
export default class Login extends Vue {
  private email = ''
  private password = ''

  login () {
    const {
      email,
      password
    } = this

    AuthModule.login({
      email,
      password
    }).then(response => {
      if (!response) {
        alert('mauvais identifiants')
      } else {
        this.$router.push('publications')
      }
    })
  }
}
</script>
