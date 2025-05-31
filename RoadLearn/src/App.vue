<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <RouterLink to="/"></RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style >
html, body{
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #1e2026;
}
</style>
