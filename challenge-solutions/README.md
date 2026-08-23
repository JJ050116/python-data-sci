# 📚 รวมเฉลยแบบฝึกหัดประจำสัปดาห์ (Challenge Solutions)

โฟลเดอร์นี้รวบรวมเฉลยของแบบฝึกหัดประจำสัปดาห์ทั้งหมด 10 สัปดาห์ พร้อมโค้ดที่รันได้จริง คำอธิบาย Debug Checkpoint และคำตอบ Concept Check

---

## 📋 สารบัญเฉลย

| สัปดาห์ | ไฟล์เฉลย | หัวข้อ | ทักษะสำคัญ |
| :---: | :--- | :--- | :--- |
| **01** | [challenge_1_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_1_solution.ipynb) | เปิดไฟล์ข้อมูลอย่างเป็นระบบ | `pd.read_csv`, `df.head()`, `df.shape`, แก้ `FileNotFoundError` |
| **02** | [challenge_2_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_2_solution.ipynb) | Data Wrangling: เลือกและเปลี่ยนชื่อคอลัมน์ | `df[[...]]`, `.rename()`, ป้องกัน `KeyError` |
| **03** | [challenge_3_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_3_solution.ipynb) | Cleaning Data: จัดการข้อมูลที่หาย | `.isna().sum()`, `.median()`, `.fillna()`, ไม่ใช้ 0 แทนค่า |
| **04** | [challenge_4_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_4_solution.ipynb) | Filter Data: กรองเงื่อนไขซับซ้อน | Boolean Masking ด้วย `&`, `.isin()`, วงเล็บรอบเงื่อนไข |
| **05** | [challenge_5_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_5_solution.ipynb) | Analysis: จัดกลุ่มและสถิติ | `.groupby()`, `.mean()`, `.agg()`, `.sort_values()` |
| **06** | [challenge_6_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_6_solution.ipynb) | Visualization: กราฟแท่งเปรียบเทียบ | `plt.bar()`, `plt.xlabel/ylabel`, `.nlargest()`, ป้องกัน Shape Mismatch |
| **07** | [challenge_7_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_7_solution.ipynb) | Data Storytelling: เขียนข้อสรุปอย่างรับผิดชอบ | 3 องค์ประกอบ (สิ่งที่เห็น, หลักฐาน, ข้อจำกัดของข้อมูล) |
| **08** | [challenge_8_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_8_solution.ipynb) | Machine Learning: ทำนายมูลค่านักเตะบน Unseen Data | `train_test_split`, `LinearRegression`, `MAE`, Predict `scouted_players.csv` |
| **09** | [challenge_9_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_9_solution.ipynb) | Mini Project: ตั้งคำถามและวางแผนข้อมูล | แผน 4 ส่วน, การสำรวจคุณภาพข้อมูลก่อนลงมือ |
| **10** | [challenge_10_solution.ipynb](file:///Users/jj/Desktop/teaching/python/data-sci/challenge-solutions/challenge_10_solution.ipynb) | Mini Project: รายงานวิเคราะห์ฉบับสมบูรณ์ | โค้ด End-to-End, กราฟ, สรุปผลแบบ Reproducible |
