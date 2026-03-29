<template>
  <BaseTable :columns="columns" :data="users">

    <!-- custom cell -->
    <template #cell-name="{ row }">
      <span class="font-semibold">{{ row.name }}</span>
    </template>

    <!-- action -->
    <template #actions="">
      <div class="flex gap-2">
        <button class="text-blue-500 hover:underline">Edit</button>
        <button class="text-red-500 hover:underline">Delete</button>
      </div>
    </template>

  </BaseTable>
</template>

<script setup lang="ts">
import BaseTable from '@/components/BaseTable.vue'

const columns = [
  { label: 'ID', key: 'id', sortable: true },
  { label: 'Name', key: 'name', sortable: true },
  { label: 'Email', key: 'email' },
]

const users = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@mail.com`,
}))
</script>