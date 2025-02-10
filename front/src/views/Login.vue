<template>
  <div class="container mt-5">
    <h2 class="text-center">Connexion</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" v-model="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">Se connecter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      console.log('Tentative de connexion', this.email, this.password);
      // Ici on va intégrer l'appel API pour authentifier l'utilisateur via JWT
    }
  }
};
</script>
