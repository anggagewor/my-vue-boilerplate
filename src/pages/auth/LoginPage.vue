<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Login</h1>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" placeholder="admin@mail.com" />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="123456" />
        </div>

        <p v-if="error" class="error">{{ error }}</p>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Loading...' : 'Login' }}
        </button>
      </form>

      <small class="hint">
        Hint: admin@mail.com / 123456
      </small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import { AuthService } from '@/services/auth.service'

const email = ref('admin@mail.com')
const password = ref('123456')
const loading = ref(false)
const error = ref('')

const router = useRouter()
const auth = useAuthStore()

const handleLogin = async () => {
  loading.value = true
  error.value = ''

  try {
    const res = await AuthService.login({
      email: email.value,
      password: password.value,
    })

    auth.setAuth(res.token, res.user)

    router.push('/')
  } catch (err: any) {
    error.value = err.message || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6f8;
}

.login-card {
  width: 320px;
  padding: 24px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

h1 {
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 12px;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ddd;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: black;
  color: white;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
}

.error {
  color: red;
  font-size: 12px;
}

.hint {
  display: block;
  margin-top: 10px;
  font-size: 11px;
  color: #888;
}
</style>