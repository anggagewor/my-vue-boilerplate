<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md border-r">
      <div class="h-14 flex items-center px-4 text-xl font-bold border-b">
        My Admin
      </div>

      <nav class="p-4 space-y-1">
        <router-link
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 rounded-lg text-gray-700 transition-all duration-150 hover:bg-gray-200 hover:text-black"
            active-class="bg-black text-white hover:bg-black"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </aside>

    <!-- Main -->
    <div class="flex-1 flex flex-col">
      <!-- Navbar -->
      <header class="h-14 bg-white border-b shadow flex items-center justify-between px-6">
        <h1 class="font-semibold text-gray-800">Dashboard</h1>

        <button
            @click="handleLogout"
            class="text-sm bg-red-500 text-white px-4 py-1.5 rounded-md cursor-pointer transition-all duration-150 hover:bg-red-600 active:scale-95"
        >
          Logout
        </button>
      </header>

      <main class="flex-1 overflow-auto">
        <div class="p-6">
          <router-view />
        </div>

        <!-- Footer -->
        <footer class="px-6 py-4 text-sm text-gray-500 border-t bg-white">
          © 2026 My Admin — All rights reserved.
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menuItems as menu } from '@/constants/menu'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  auth.logout()
  router.push('/login')
}
</script>