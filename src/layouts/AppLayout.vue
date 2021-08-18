<script lang='ts'>
import { Options, Vue } from 'vue-class-component'
import AppMenu from '@/components/AppMenu.vue'

@Options({
  components: { AppMenu }
})
export default class AppLayout extends Vue {
}
</script>

<template>
  <v-container>
    <v-container>
      <v-row>
        <v-col md="4">
          <AppMenu/>
        </v-col>
        <v-col md="8">
          <slot></slot>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
