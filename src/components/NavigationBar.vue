<script>
export default {
  name: "NavigationBar"
}
</script>

<template>
  <nav>
    <ul>
  <router-link to="/Hotels">
    <span>hotels</span>
  </router-link>
    </ul>
  </nav>

</template>

<style scoped>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  li {
    list-style: none;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

</style>