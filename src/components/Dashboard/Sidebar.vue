<template>
  <div class="flex flex-col justify-between text-gray-400 w-24 h-full">
    <div class="mb-4 ">
      <router-link to="/">
        <Logo class="w-full" />
      </router-link>
    </div>
    <div class="p-4">
        <router-link to="/" active-class="border-2 border-red-600 text-red-600" class="bg-gray-100 border-2 border-gray-400 h-16 w-16 flex items-center justify-center text-2xl font-semibold rounded-lg mb-1 overflow-hidden" exact>
          <div>
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M13 20v-5h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-7.6l-.3.3a1 1 0 11-1.4-1.4l9-9a1 1 0 011.4 0l9 9a1 1 0 01-1.4 1.4l-.3-.3V20a2 2 0 01-2 2h-3a2 2 0 01-2-2zm5 0v-9.6l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 012 2v5h3z"/>
            </svg>
          </div>
        </router-link>
        <router-link to="/baggage" active-class="border-2 border-red-600 text-red-600" class="mt-6 bg-gray-100 border-2 border-gray-400 h-16 w-16 flex items-center justify-center text-2xl font-semibold rounded-lg mb-1 overflow-hidden" exact>
          <div>
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path class="heroicon-ui" d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z"/>
            </svg>
          </div>
        </router-link>
        <router-link to="/flight-plan" active-class="border-2 border-red-600 text-red-600" class="mt-6 bg-gray-100 border-2 border-gray-400 h-16 w-16 flex items-center justify-center text-2xl font-semibold rounded-lg mb-1 overflow-hidden" exact>
          <div>
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M6 2h9a1 1 0 01.7.3l4 4a1 1 0 01.3.7v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2zm9 2.4V7h2.6L15 4.4zM18 9h-3a2 2 0 01-2-2V4H6v16h12V9zm-2 7a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1zm0-4a1 1 0 01-1 1H9a1 1 0 010-2h6a1 1 0 011 1zm-5-4a1 1 0 01-1 1H9a1 1 0 110-2h1a1 1 0 011 1z"/>
            </svg>
          </div>
        </router-link>
        <router-link to="/weather" active-class="border-2 border-red-600 text-red-600" class="mt-6 bg-gray-100 border-2 border-gray-400 h-16 w-16 flex items-center justify-center text-2xl font-semibold rounded-lg mb-1 overflow-hidden" exact>
          <div>
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M5.6 16.4a9 9 0 1112.8 0L12.7 22a1 1 0 01-1.4 0l-5.7-5.6zM17 15a7 7 0 10-10 0l5 4.9 5-5zm-5-1a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
          </div>
        </router-link>
    </div>
    <div class="px-4 pb-4">
      <div>
        <router-link to="/issue" active-class="border-2 border-red-600 text-red-600" class="bg-gray-100 border-2 border-gray-400 h-16 w-16 flex items-center justify-center text-2xl font-semibold rounded-lg mb-1 overflow-hidden" exact>
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path class="heroicon-ui" d="M12 22a10 10 0 110-20 10 10 0 010 20zm0-2a8 8 0 100-16 8 8 0 000 16zm0-9a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zm0-4a1 1 0 110 2 1 1 0 010-2z"/>
          </svg>
        </router-link>
        <router-link to="/user" active-class="border-2 border-red-600 text-red-600" class="mt-6 bg-gray-100 border-2 border-gray-400 h-16 w-16 flex items-center justify-center text-2xl font-semibold rounded-lg mb-1 overflow-hidden" exact>
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M12 12a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6zm9 11a1 1 0 01-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 01-2 0v-2a5 5 0 015-5h8a5 5 0 015 5v2z"/>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '../Logo'

  export default {
    name: 'Sidebar',
    components: {
      Logo: Logo
    },
    props: {
      links: Array
    }
  }
</script>
