<template>
    <div class="container mt-5">
      <h2 class="text-center">Créer un compte</h2>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="firstName" class="form-label">Prénom</label>
          <input type="text" v-model="firstName" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="lastName" class="form-label">Nom</label>
          <input type="text" v-model="lastName" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" v-model="password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-success w-100">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        console.log('Inscription avec', this.firstName, this.lastName, this.email);
        // Intégration de l'API pour l'inscription à venir
      }
    }
  };
  </script>
  