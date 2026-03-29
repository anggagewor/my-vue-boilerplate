<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Dashboard</h2>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-xl shadow">
        <p class="text-sm text-gray-500">Users</p>
        <h3 class="text-xl font-bold">1,234</h3>
      </div>

      <div class="bg-white p-4 rounded-xl shadow">
        <p class="text-sm text-gray-500">Revenue</p>
        <h3 class="text-xl font-bold">$12,345</h3>
      </div>

      <div class="bg-white p-4 rounded-xl shadow">
        <p class="text-sm text-gray-500">Orders</p>
        <h3 class="text-xl font-bold">321</h3>
      </div>
    </div>

    <!-- Welcome -->
    <div class="mt-6 bg-white p-4 rounded-xl shadow">
      <p>Welcome back, {{ auth.user?.name }}</p>
    </div>

    <!-- Dummy Content (biar scroll) -->
    <div class="mt-6 bg-white p-4 rounded-xl shadow">
      <h3 class="font-semibold mb-2">Recent Activities</h3>

      <ul class="space-y-2">
        <li
            v-for="i in 30"
            :key="i"
            class="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          Activity #{{ i }} — Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/useAuthStore'

const auth = useAuthStore()
</script>