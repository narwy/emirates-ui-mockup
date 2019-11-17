<template>
  <div class="flex w-full">
    <div class="bg-white border-r-2 border-gray-300">
      <Sidebar />
    </div>
    <div class="w-full">
      <transition name="fade-in" mode="out-in">
        <router-view class="animated" />
      </transition>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'

  export default {
    name: 'Dashboard',
    components: {
      Sidebar: Sidebar
    }
  }
</script>
