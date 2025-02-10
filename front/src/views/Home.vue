<!-- src/views/Home.vue -->
<template>
    <div class="container text-center mt-5">
      <h1 class="display-4">Bienvenue sur TodoList by Libheros</h1>
      <p class="lead">Gérez vos tâches efficacement avec notre application.</p>
      <button class="btn btn-primary btn-lg mt-3" @click="$router.push('/login')">Commencer</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  };
  </script>
  