<template>
  <div class="container">
    <h2 class="title">กรุณาป้อนอาการของคุณ</h2>
    <form @submit.prevent="submitSymptoms" class="form">
      <textarea 
        v-model="newSymptom" 
        placeholder="อาการของคุณ" 
        class="textarea" 
        required
      ></textarea>
      <button type="button" @click="addSymptom" class="add-btn">เพิ่มอาการ</button>
      <button type="submit" class="submit-btn">ส่งข้อมูล</button>
    </form>

    <!-- แสดงรายการอาการที่ผู้ใช้ป้อน -->
    <div v-if="symptomsList.length > 0" class="symptoms-list">
      <h3>อาการที่คุณป้อน:</h3>
      <ul>
        <li v-for="(symptom, index) in symptomsList" :key="index">{{ symptom }}</li>
      </ul>
    </div>

    <!-- แสดงคำแนะนำหลังจากส่งข้อมูล -->
    <div v-if="recommendation" class="recommendation">
      <h3>คำแนะนำ:</h3>
      <p>{{ recommendation }}</p>
    </div>

    <!-- ถ้ามีข้อผิดพลาดในการป้อนข้อมูล -->
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSymptom: "", // เก็บอาการที่ผู้ใช้กรอกในช่อง textarea
      symptomsList: [], // รายการอาการที่ผู้ใช้ป้อน
      recommendation: "", // คำแนะนำที่แสดงหลังจากป้อนอาการ
      error: "" // ข้อความข้อผิดพลาด
    };
  },
  methods: {
    addSymptom() {
      if (this.newSymptom.trim()) {
        this.symptomsList.push(this.newSymptom.trim());
        this.newSymptom = ""; // เคลียร์ช่องกรอกข้อมูล
        this.error = ""; // เคลียร์ข้อผิดพลาด
      } else {
        this.error = "กรุณากรอกอาการที่ต้องการเพิ่ม";
      }
    },
    submitSymptoms() {
      // ตรวจสอบว่าอาการที่ป้อนไปมีอย่างน้อยหนึ่งอาการ
      if (this.symptomsList.length === 0) {
        this.error = "กรุณากรอกอาการก่อนส่งข้อมูล";
        return;
      }
      this.error = ""; // เคลียร์ข้อความข้อผิดพลาด

      // ตรวจสอบอาการและให้คำแนะนำ
      let recommendations = [];
      this.symptomsList.forEach(symptom => {
        if (symptom.includes("ปวดหัว")) {
          recommendations.push("อาจเป็นอาการของไข้หวัดใหญ่หรือโรคไมเกรน แนะนำให้ทานยาแก้ปวด เช่น พาราเซตามอล และพักผ่อน");
        } else if (symptom.includes("มีไข้")) {
          recommendations.push("อาจเป็นอาการของไข้หวัดหรือการติดเชื้อ แนะนำให้ทานยาลดไข้ เช่น พาราเซตามอล และดื่มน้ำมาก ๆ");
        } else if (symptom.includes("ไอ")) {
          recommendations.push("อาจเป็นอาการของไข้หวัด ควรทานยาแก้ไอและพักผ่อนให้เพียงพอ");
        } else if (symptom.includes("เจ็บคอ")) {
          recommendations.push("อาจเป็นอาการของไข้หวัดหรือการติดเชื้อในลำคอ ควรดื่มน้ำอุ่น และอาจทานยาแก้เจ็บคอ");
        } else if (symptom.includes("ท้องเสีย")) {
          recommendations.push("อาจเป็นอาการของการติดเชื้อในกระเพาะอาหาร ควรดื่มน้ำเกลือแร่ และทานยาหยุดท้องเสีย");
        } else if (symptom.includes("คลื่นไส้")) {
          recommendations.push("อาจเป็นอาการของการติดเชื้อในกระเพาะอาหาร หรือความผิดปกติของระบบทางเดินอาหาร ควรดื่มน้ำเปล่ามาก ๆ และทานยาแก้คลื่นไส้");
        } else {
          recommendations.push(`ไม่พบคำแนะนำสำหรับอาการ: "${symptom}" กรุณาตรวจสอบอาการหรือไปพบแพทย์`);
        }
      });

      // รวมคำแนะนำทั้งหมด
      this.recommendation = recommendations.join(" \n");

      // ล้างรายการอาการหลังจากส่ง
      this.symptomsList = [];
    }
  }
};
</script>

<style scoped>
/* สไตล์สำหรับคอนเทนเนอร์ทั้งหมด */
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* ตกแต่งหัวข้อ */
.title {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

/* ฟอร์ม */
.form {
  display: flex;
  flex-direction: column;
}

/* สไตล์ของ Textarea */
.textarea {
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  height: 100px;
}

/* ปุ่มเพิ่มอาการ */
.add-btn {
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
}

.add-btn:hover {
  background-color: #0056b3;
}

/* ปุ่มส่งข้อมูล */
.submit-btn {
  background-color: #4CAF50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #45a049;
}

/* สไตล์ของรายการอาการ */
.symptoms-list {
  margin-top: 20px;
}

.symptoms-list ul {
  list-style-type: none;
  padding-left: 0;
}

.symptoms-list li {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 5px;
}

/* สไตล์ของคำแนะนำ */
.recommendation {
  background-color: #fffbcc;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #e5e500;
  border-radius: 4px;
  color: #555;
}

/* สไตล์ของข้อความข้อผิดพลาด */
.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}
</style>
