<template>
    <div>
      <h1>ข้อมูลส่วนตัว</h1>
      <form @submit.prevent="submitProfile">
        <div>
          <label for="age">อายุ</label>
          <input type="number" v-model="age" id="age" placeholder="อายุ" required />
        </div>
        <div>
          <label for="weight">น้ำหนัก (กก.)</label>
          <input type="number" v-model="weight" id="weight" placeholder="น้ำหนัก" required />
        </div>
        <div>
          <label for="height">ส่วนสูง (ซม.)</label>
          <input type="number" v-model="height" id="height" placeholder="ส่วนสูง" required />
        </div>
        <div>
          <label for="gender">เพศ</label>
          <select v-model="gender" id="gender" required>
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
          </select>
        </div>
        <button type="submit">บันทึกข้อมูล</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        age: '',
        weight: '',
        height: '',
        gender: 'male',
      };
    },
    methods: {
      submitProfile() {
        // ส่งข้อมูลไปยังฐานข้อมูลหรือ API
        console.log('ข้อมูลส่วนตัว:', {
          age: this.age,
          weight: this.weight,
          height: this.height,
          gender: this.gender,
        });
  
        // ไปยังหน้าแสดงอาการหลังจากบันทึกข้อมูล
        this.$router.push('/symptoms');
      },
    },
  };
  </script>
  