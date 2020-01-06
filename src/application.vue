<template>
  <v-app id="com.dxnlab.restforus">
    <v-navigation-drawer app clipped v-model="show_drawer">
      <v-toolbar-items>
        <v-list>
          <v-list-item v-for="rt in routes" :key="`navlink_${rt.path}`" @click="$router.push(rt.path)">
            <v-list-item-title>{{ rt.path }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-toolbar-items>
    </v-navigation-drawer>
    <v-app-bar app clipped-left flat dark color="default">
      <v-app-bar-nav-icon @click.stop="toggle_drawer" />
      <v-toolbar-title color="accent" @click="$router.push('/')">RestForUs</v-toolbar-title>
      <v-spacer />
      <v-btn text outlined @click="$router.push('/login')"><v-icon>mdi-github-face</v-icon> Login with github</v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid class="fill-height">
        <v-row align="stretch" justify="center">
          <v-col>
            <router-view class="main_wrapper" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer app absolute dark flat>
      <v-spacer />
      &copy; dxnlab.com
    </v-footer>
  </v-app>
</template>

<script>
import routes from '@/screens/_routes'

export default {
  name: 'app',
  components: {
  },
  methods: {
    toggle_drawer() {
      this.show_drawer = !this.show_drawer;
    },
  },
  data() {
    return {
      show_drawer: false,
      routes,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
