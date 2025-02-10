<template>
  <div class="container text-center mt-5">
    <h1 class="display-4">Bienvenue sur TodoList by Libheros</h1>
    <p class="lead">Gérez vos tâches efficacement avec notre application.</p>
    <button class="btn btn-primary btn-lg mt-3" @click="$router.push('/login')">Commencer</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      console.log('Redirection vers la page de connexion');
      // Ici, tu pourras utiliser Vue Router plus tard pour naviguer vers /login
    }
  }
};
</script>

<style>
body {
  background-color: #f8f9fa;
}
</style>
