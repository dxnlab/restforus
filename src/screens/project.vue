<template>
  <v-card>
      <v-card-title>
          {{ $route.params.title }}
      </v-card-title>
      <v-card-subtitle>
          {{ $route.params.owner }}
      </v-card-subtitle>
      <v-card-text>
          hello, world
      </v-card-text>
  </v-card>
</template>

<script>
export default {
    mounted() {
        window.console.log('router params', this.$route);
    }
}
</script>

<style>

</style>