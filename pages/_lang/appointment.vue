<template>
  <v-form v-model="valid" action="/appointment" method="post" id="form1">
    <v-text-field
      required
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      placeholder="Enter your name"
      prepend-icon="phone"
      name="name"
    ></v-text-field>
    <v-text-field
      required
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      placeholder="Enter your email"
      prepend-icon="email"
      name="email"
    ></v-text-field>
    <v-btn color="success" type="submit" form="form1">Submit</v-btn>
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    })
  }
</script>
