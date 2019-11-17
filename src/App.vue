<template>
  <div id="app" class="h-screen flex">
    <Dashboard />
  </div>
</template>

<script>
  import Dashboard from './components/Dashboard/App'

  export default {
    name: 'app',
    components: {
      Dashboard: Dashboard
    }
  }
</script>

<style src="./assets/tailwind.css">
