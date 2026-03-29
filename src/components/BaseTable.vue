<template>
  <div class="bg-white rounded-xl shadow">
    <!-- Header -->
    <div class="p-4 border-b flex justify-between items-center">
      <input
          v-model="search"
          type="text"
          placeholder="Search..."
          class="border px-3 py-2 rounded-md text-sm w-64"
      />
    </div>

    <!-- Table -->
    <table class="w-full text-sm">
      <thead class="bg-gray-100 text-left">
      <tr>
        <th
            v-for="col in columns"
            :key="col.key"
            @click="handleSort(col)"
            class="p-3 font-medium text-gray-600 cursor-pointer select-none"
        >
          <div class="flex items-center gap-1">
            {{ col.label }}
            <span v-if="sortKey === col.key">
                {{ sortOrder === 'asc' ? '↑' : '↓' }}
              </span>
          </div>
        </th>

        <th v-if="$slots.actions" class="p-3 text-gray-600">Actions</th>
      </tr>
      </thead>

      <tbody>
      <tr
          v-for="row in paginatedData"
          :key="row.id"
          class="border-t hover:bg-gray-50"
      >
        <td
            v-for="col in columns"
            :key="col.key"
            class="p-3"
        >
          <!-- slot custom -->
          <slot :name="`cell-${col.key}`" :row="row">
            {{ row[col.key] }}
          </slot>
        </td>

        <!-- actions -->
        <td v-if="$slots.actions" class="p-3">
          <slot name="actions" :row="row" />
        </td>
      </tr>

      <tr v-if="paginatedData.length === 0">
        <td :colspan="columns.length + 1" class="text-center p-4 text-gray-400">
          No data found
        </td>
      </tr>
      </tbody>
    </table>

    <!-- Footer -->
    <div class="p-4 flex justify-between items-center">
      <span class="text-sm text-gray-500">
        Page {{ currentPage }} of {{ totalPages }}
      </span>

      <div class="space-x-2">
        <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

interface Column {
  label: string
  key: string
  sortable?: boolean
}

const props = defineProps<{
  columns: Column[]
  data: any[]
  perPage?: number
}>()

const search = ref('')
const currentPage = ref(1)
const perPage = props.perPage || 5

// sorting
const sortKey = ref<string | null>(null)
const sortOrder = ref<'asc' | 'desc'>('asc')

const handleSort = (col: Column) => {
  if (!col.sortable) return

  if (sortKey.value === col.key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = col.key
    sortOrder.value = 'asc'
  }
}

// filter
const filteredData = computed(() => {
  if (!search.value) return props.data

  return props.data.filter((row) =>
      Object.values(row).some((val) =>
          String(val).toLowerCase().includes(search.value.toLowerCase())
      )
  )
})

// sorting applied
const sortedData = computed(() => {
  if (!sortKey.value) return filteredData.value

  return [...filteredData.value].sort((a, b) => {
    const aVal = a[sortKey.value!]
    const bVal = b[sortKey.value!]

    if (aVal < bVal) return sortOrder.value === 'asc' ? -1 : 1
    if (aVal > bVal) return sortOrder.value === 'asc' ? 1 : -1
    return 0
  })
})

// pagination
const totalPages = computed(() =>
    Math.ceil(sortedData.value.length / perPage)
)

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return sortedData.value.slice(start, start + perPage)
})

// reset page
watch(search, () => (currentPage.value = 1))
watch(sortKey, () => (currentPage.value = 1))

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}
</script>