<template>
  <div class="flex items-center justify-center h-screen bg-gray-100 px-4">
    <div class="text-center max-w-md">
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>

      <h2 class="text-2xl font-semibold text-gray-700 mb-2">
        Halaman tidak ditemukan
      </h2>

      <p class="text-gray-500 mb-6">
        Maaf, halaman yang lo cari tidak tersedia atau sudah dipindahkan.
      </p>

      <div class="flex justify-center gap-3">
        <router-link
            to="/"
            class="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Ke Dashboard
        </router-link>

        <button
            @click="goBack"
            class="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
        >
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>