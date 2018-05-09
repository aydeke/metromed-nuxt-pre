<template>
  <div>
    <div class="container">
      <h1>{{ $t('home.title') }}</h1>
      <p>{{ $t('home.introduction') }}</p>
      <v-btn color="success" to="/appointment">Appointment</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return { title: this.$t('home.title') }
  }
}
</script>