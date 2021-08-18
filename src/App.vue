<template>
  <v-app id="app">
    <v-main>
      <v-container>
        <v-row>
          <v-col md="4">
            <router-link class="d-block" to="/">Accueil</router-link>
            <router-link class="d-block" to="/publications">Publications</router-link>
            <router-link class="d-block" to="/logout">Se déconnecter</router-link>
          </v-col>
          <v-col md="8">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'
import AuthModule from '@/services/modules/AuthModule'

@Options({
  props: {}
})
export default class App extends Vue {
  mounted () {
    axios.interceptors.response.use(response => response, error => {
      const status = error.response ? error.response.status : null

      if (status === 401) {
        return AuthModule.refreshToken().then((resp) => {
          error.config.headers.Authorization = 'Bearer ' + resp.data.token
          error.config.baseURL = undefined
          return axios.request(error.config)
        }).catch((err: any) => {
          AuthModule.logout()
          console.error(err)
        })
      }

      return Promise.reject(error)
    })
  }
}
</script>

<style>
#app {
  background-color: #f8f8f8;
}
</style>
