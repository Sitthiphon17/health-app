<template>
  <div class="login-container">
    <h1>เข้าสู่ระบบ</h1>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email หรือ เบอร์โทร</label>
        <input
          type="text"
          v-model="email"
          id="email"
          placeholder="Email หรือ เบอร์โทร"
          required
        />
      </div>
      <div>
        <label for="password">รหัสผ่าน</label>
        <input
          type="password"
          v-model="password"
          id="password"
          placeholder="รหัสผ่าน"
          required
        />
      </div>
      <button :disabled="!email || !password" type="submit">เข้าสู่ระบบ</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (!this.email || !this.password) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }

      // ทดสอบการเข้าสู่ระบบ (สามารถเชื่อมต่อกับ API ที่นี่)
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      // หลังจากการเข้าสู่ระบบสำเร็จ ไปที่หน้าโปรไฟล์
      this.$router.push('/profile');
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
}

h1 {
  text-align: center;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover {
  background-color: #0056b3;
}
</style>
