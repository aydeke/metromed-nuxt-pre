<template>
  <v-app>
    <v-toolbar app dark dense flat>
      <v-tabs centered color="cyan" dark slider-color="yellow">
        <v-tab ripple nuxt :to="$i18n.path('')" exact>{{ $t('links.home') }}</v-tab>
        <v-tab ripple nuxt :to="$i18n.path('about')" exact>{{ $t('links.about') }}</v-tab>
        <v-tab ripple nuxt v-if="$i18n.locale === 'en'" :to="`/ru` + $route.fullPath" exact>{{ $t('links.russian') }}</v-tab>
        <v-tab ripple nuxt v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>{{ $t('links.english') }}</v-tab>
      </v-tabs>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer height="auto" class="grey darken-3">
      <v-layout row wrap justify-center>
        <v-btn color="white" flat>Home</v-btn>
        <v-btn color="white" flat>About</v-btn>
        <v-btn color="white" flat>Contact</v-btn>
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy;2018 — <strong>Metromed</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>
