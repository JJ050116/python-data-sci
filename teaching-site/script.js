const weeks = [
  { title: "เริ่มต้นและรู้จักข้อมูล", text: "Jupyter, VS Code, CSV และการตรวจข้อมูลก่อนใช้", tag: "ปัญหา: เดาโครงสร้างข้อมูล", what: "การเปิดไฟล์ CSV และสำรวจชื่อคอลัมน์ ชนิดข้อมูล และตัวอย่างไม่กี่แถว", use: "ใช้ดูว่าไฟล์มีอะไรจริง เช่น `age` เป็นตัวเลขหรือข้อความ และมีข้อมูลกี่แถว", why: "ก่อนถามคำถามจากข้อมูล เราต้องรู้ก่อนว่ามีข้อมูลพอและใช้คอลัมน์ถูกชื่อ", without: "อาจเขียนโค้ดกับชื่อคอลัมน์ที่ไม่มีอยู่ หรือสรุปจากข้อมูลเพียงไม่กี่แถวโดยไม่รู้ตัว", example: "ก่อนหานักเตะอายุน้อย เราใช้ `head()` และ `info()` ดูว่า `age` มีอยู่และเป็นตัวเลข", term: "DataFrame = ตารางข้อมูลใน Pandas ที่มีแถวและคอลัมน์ คล้ายตารางใน Excel" },
  { title: "Data Wrangling", text: "เลือกคอลัมน์ เปลี่ยนชื่อ และจัดรูปตารางให้อ่านง่าย", tag: "ปัญหา: ข้อมูลกระจัดกระจาย", what: "การจัดรูปตารางให้พร้อมตอบคำถาม เช่น เลือกคอลัมน์ เปลี่ยนชื่อ หรือรวมข้อมูล", use: "ใช้สร้างตารางเล็กที่มีเฉพาะข้อมูลจำเป็น เช่น name, club และ overall", why: "ตารางที่เล็กและชื่อชัดช่วยให้เราคิดง่ายขึ้น และลดโอกาสหยิบข้อมูลผิด", without: "โค้ดจะยาว อ่านยาก และอาจใช้คอลัมน์เก่าที่ไม่เกี่ยวกับคำถาม", example: "ถ้าต้องรายงานคะแนนนักเตะ เราสร้าง `summary` และเปลี่ยน `overall` เป็น `rating`", term: "Wrangling = การจัดระเบียบและปรับรูปข้อมูลก่อนวิเคราะห์ ไม่ใช่การคำนวณคำตอบ" },
  { title: "Cleaning data", text: "หา missing value, แก้ชนิดข้อมูล และตรวจข้อมูลซ้ำ", tag: "ปัญหา: ข้อมูลไม่สะอาด", what: "การหาและจัดการค่าที่หาย ซ้ำ หรืออยู่ในรูปแบบที่ผิด", use: "ใช้ตรวจ `height_cm` ที่ว่าง แล้วเลือกว่าจะลบ แทนค่า หรือเก็บไว้ตามเหตุผล", why: "การคำนวณที่ดีเริ่มจากข้อมูลที่พอเชื่อถือได้ เพราะค่าผิดเพียงจุดเดียวอาจทำให้ผลเพี้ยน", without: "กราฟหรือค่าเฉลี่ยอาจผิด หรือโค้ดพังกลางทางเมื่อเจอช่องว่าง", example: "เราไม่ใส่ 0 แทนส่วนสูงที่หาย เพราะไม่มีคนสูง 0 ซม.; ใช้ค่ากลางเป็นตัวเลือกที่สมเหตุผลกว่า", term: "Missing value = ช่องข้อมูลที่ไม่มีค่า เช่น cell ว่างหรือ NaN" },
  { title: "Filter data", text: "ใช้เงื่อนไขค้นหากลุ่มที่ตอบคำถามได้", tag: "ปัญหา: เห็นข้อมูลมากเกินไป", what: "การเลือกเฉพาะแถวที่ผ่านเงื่อนไข", use: "ใช้หานักเตะอายุไม่เกิน 25 ปีและมี overall ตั้งแต่ 85 ในครั้งเดียว", why: "คำถามหนึ่งข้อมักไม่ต้องใช้ทุกแถว การกรองช่วยให้เห็นกลุ่มที่เกี่ยวข้องจริง", without: "เราอาจเปรียบเทียบคนที่ไม่อยู่ในขอบเขตคำถาม ทำให้คำตอบยาวและคลุมเครือ", example: "ใช้ `(df[\"age\"] <= 25) & (df[\"overall\"] >= 85)` เพื่อเลือกดาวรุ่งที่ผ่านทั้งสองเงื่อนไข", term: "Condition = เงื่อนไขที่ให้ผลเป็นจริงหรือไม่จริง เช่น อายุ <= 25" },
  { title: "Analysis พื้นฐาน", text: "ค่าเฉลี่ย ค่ากลาง การนับ และการเปรียบเทียบกลุ่ม", tag: "ปัญหา: ตัวเลขยังไม่ตอบคำถาม", what: "การเปลี่ยนข้อมูลหลายแถวให้เป็นตัวเลขหรือการเปรียบเทียบที่ตอบคำถามได้", use: "ใช้หา overall เฉลี่ยของแต่ละลีก หรือจำนวนนักเตะในแต่ละตำแหน่ง", why: "ข้อมูลดิบเป็นรายคน แต่คำถามมักถามภาพรวม การคำนวณช่วยให้เห็นรูปแบบ", without: "เราจะต้องอ่านทีละแถวและอาจเลือกตัวอย่างที่สนับสนุนความคิดตัวเอง", example: "ใช้ `groupby(\"league\")` แล้วหา `mean()` เพื่อเปรียบเทียบค่าเฉลี่ยของลีก", term: "Average (ค่าเฉลี่ย) = ผลรวมของค่า หารด้วยจำนวนค่า จึงเป็นภาพรวม ไม่ใช่ตัวแทนของทุกคน" },
  { title: "Visualization", text: "เลือกกราฟให้เหมาะ แล้วอ่านสิ่งที่กราฟกำลังบอก", tag: "ปัญหา: สื่อสารผลไม่ชัด", what: "การเปลี่ยนตัวเลขหรือตารางให้เป็นกราฟที่มองเปรียบเทียบได้", use: "ใช้ bar chart เปรียบเทียบ overall ของนักเตะ 5 คน หรือ scatter plot ดูความสัมพันธ์", why: "สมองมองความต่างของความสูง สี และตำแหน่งได้เร็วกว่าอ่านตัวเลขเป็นสิบแถว", without: "คนดูอาจพลาดรูปแบบสำคัญ หรือใช้เวลานานจนตีความผิด", example: "กราฟแท่ง top 5 จะทำให้เห็นทันทีว่าใครมี overall สูงกว่า โดยต้องตั้งชื่อแกนให้ชัด", term: "Axis (แกน) = เส้นอ้างอิงของกราฟ; แกน X มักเป็นกลุ่ม ส่วนแกน Y มักเป็นค่า" },
  { title: "เล่าเรื่องจากข้อมูล", text: "รวมผลวิเคราะห์และกราฟเป็นข้อสรุปที่ตรวจสอบได้", tag: "ปัญหา: มีกราฟแต่ไม่มีความหมาย", what: "การอธิบายว่ากราฟและตัวเลขตอบคำถามอย่างไร รวมทั้งบอกขอบเขตของข้อสรุป", use: "ใช้สื่อสารผลให้คนที่ไม่ได้เขียนโค้ดตัดสินใจหรือเข้าใจสิ่งที่พบ", why: "กราฟไม่มีความหมายเอง ผู้อ่านต้องรู้ว่าควรมองอะไร และข้อมูลพิสูจน์ได้แค่ไหน", without: "คนดูอาจอ่านกราฟคนละแบบ หรือเชื่อข้อสรุปที่เกินกว่าข้อมูลรองรับ", example: "เขียนว่า “ในชุดข้อมูลนี้...” แล้วอ้างแท่งกราฟหรือค่าเฉลี่ยที่เห็นจริง ก่อนบอกข้อจำกัด", term: "Insight = ข้อค้นพบที่มีหลักฐานจากข้อมูล ไม่ใช่เพียงข้อสังเกตส่วนตัว" },
  { title: "Machine Learning เบื้องต้น", text: "รู้จัก feature, target, การเทรนโมเดล และทำนายข้อมูลชุดใหม่ (Unseen Data)", tag: "ปัญหา: ประเมินมูลค่า/คาดการณ์ผล", what: "การให้โมเดลเรียนรู้ความสัมพันธ์ระหว่างสถิตินักเตะกับมูลค่า เพื่อทำนายราคาของนักเตะชุดใหม่", use: "ใช้ overall, age, pace, shooting เพื่อทำนายมูลค่า value_millions และประเมินราคานักเตะดาวรุ่งชุดใหม่", why: "โมเดลช่วยประเมินราคาจากหลายปัจจัยพร้อมกัน และนำไปคาดการณ์กับข้อมูลที่ยังไม่เคยเห็นได้", without: "ถ้าไม่มีโมเดล เราต้องเดาหรือตั้งกฎคำนวณราคาเองซึ่งไม่สะท้อนความสัมพันธ์ที่ซับซ้อน", example: "แบ่งข้อมูลเป็น train/test เพื่อเทรน LinearRegression แล้วนำไป predict ราคานักเตะใน scouted_players.csv", term: "Supervised Learning = การสอนโมเดลด้วย Feature (ข้อมูลนำเข้า) และ Target (คำตอบจริง)" },
  { title: "Mini project: สำรวจ", text: "เลือกคำถาม วางแผน และทำความสะอาดข้อมูลของตนเอง", tag: "PROJECT", project: true, what: "การรวมทักษะที่ผ่านมาเป็นแผนงานเล็ก ๆ ที่เริ่มจากคำถามเดียว", use: "ใช้กำหนดคอลัมน์ที่ต้องใช้ จุดที่ต้อง clean และกราฟก่อนเขียนโค้ดจำนวนมาก", why: "แผนช่วยป้องกันการลองคำสั่งไปเรื่อย ๆ โดยไม่มีคำถามที่ชัด", without: "อาจได้กราฟหลายรูปแต่ไม่มีคำตอบ หรือทำความสะอาดข้อมูลที่ไม่เกี่ยวข้อง", example: "ตั้งคำถามว่า “ตำแหน่งใดมีค่าตัวเฉลี่ยสูงสุด?” แล้วเลือก position และ value_millions", term: "Scope = ขอบเขตงานที่ระบุว่าเราจะตอบคำถามอะไรและใช้ข้อมูลใด" },
  { title: "Mini project: นำเสนอ", text: "วิเคราะห์ ทำกราฟ อธิบายผล และรับข้อเสนอแนะ", tag: "PROJECT", project: true, what: "การตรวจว่า Notebook รันได้จริง แล้วสรุปงานให้ผู้อื่นอ่านและตรวจสอบได้", use: "ใช้ส่งงานที่มีคำถาม การวิเคราะห์ กราฟ และข้อสรุปในลำดับที่เข้าใจง่าย", why: "งาน Data Science มีคุณค่าเมื่อคนอื่นรันซ้ำ ตรวจหลักฐาน และนำไปใช้ได้", without: "Notebook อาจรันไม่ได้บนเครื่องอื่น หรือผู้อ่านไม่รู้ว่ากราฟตอบคำถามอะไร", example: "ใช้ Restart Kernel → Run All เพื่อตรวจว่าไม่มี cell แอบพึ่งตัวแปรที่เคยรันมาก่อน", term: "Reproducible = คนอื่นเปิดแล้วทำขั้นตอนเดิมซ้ำและได้ผลในแนวเดียวกัน" },
];

const lessonMaterial = [
  { functions: [
    ["pd.read_csv()", "อ่านไฟล์ CSV เป็นตาราง DataFrame", "เช็ก path ก่อน หากหาไฟล์ไม่เจอจะได้ FileNotFoundError"],
    ["df.head(n)", "ดู n แถวแรกโดยไม่แสดงข้อมูลทั้งก้อน", "head เป็นตัวอย่าง ไม่ใช่จำนวนข้อมูลทั้งหมด"],
    ["df.info()", "ดูชื่อคอลัมน์ ชนิดข้อมูล และจำนวนค่าที่ไม่ว่าง", "จำนวน non-null น้อยกว่าแถวทั้งหมด = มีข้อมูลหาย"]
  ], methods: [
    { name: "วิธี 1: ดูตัวอย่างก่อน", when: "เหมาะเมื่อเพิ่งได้รับไฟล์", steps: [
      ["import pandas as pd", "นำ Pandas เข้ามาใช้ โดยตั้งชื่อสั้นว่า pd", "ยังไม่มีผลลัพธ์ — เตรียมเครื่องมือ"],
      ["df = pd.read_csv(\"../data/footballers.csv\")", "อ่านไฟล์และเก็บเป็นตารางชื่อ df ไม่ได้พิมพ์ข้อมูลทั้งหมดออกมา", "df พร้อมใช้งาน"],
      ["df.head(3)", "ดูเพียง 3 แถวแรก เพื่อตรวจชื่อคอลัมน์และหน้าตาข้อมูล", "name | club | league | age | ...\nLionel Messi | Inter Miami | MLS | 37 | ...\nCristiano Ronaldo | Al Nassr | Saudi Pro League | 39 | ..."]
    ]},
    { name: "วิธี 2: ตรวจโครงสร้างก่อน", when: "เหมาะเมื่อกังวลข้อมูลหายหรือชนิดข้อมูล", steps: [
      ["df.shape", "ถามขนาดของตาราง: ตัวแรกคือแถว ตัวที่สองคือคอลัมน์", "(20, 15)"],
      ["df.columns", "ดูชื่อคอลัมน์จริง เพื่อไม่สะกดชื่อผิดในโค้ดถัดไป", "Index(['name', 'club', 'league', ...])"],
      ["df.info()", "ดูชนิดข้อมูลและค่าที่ไม่ว่าง เช่น height_cm มีไม่ครบ 20 ค่า", "height_cm  19 non-null  float64\noverall    20 non-null  int64"]
    ]}
  ]},
  { functions: [
    ["df[[...]]", "เลือกหลายคอลัมน์และได้ผลเป็นตาราง", "ใช้ [\"col\"] ชั้นเดียวจะได้ Series ไม่ใช่ตาราง"],
    [".rename()", "เปลี่ยนชื่อคอลัมน์ในตารางใหม่", "ตั้ง columns={ชื่อเดิม: ชื่อใหม่}"],
    [".copy()", "สร้างสำเนาที่แก้ได้อย่างปลอดภัย", "ช่วยสื่อว่าเราไม่ตั้งใจแก้ df เดิม"]
  ], methods: [
    { name: "วิธี 1: เลือกแล้วเปลี่ยนชื่อ", when: "สั้น อ่านง่าย เหมาะกับงานทั่วไป", steps: [
      ["summary = df[[\"name\", \"club\", \"overall\"]]", "เลือกเฉพาะ 3 คอลัมน์ที่ตอบรายงาน ลดข้อมูลที่ไม่เกี่ยวข้อง", "summary มี 3 คอลัมน์"],
      ["summary = summary.rename(columns={\"overall\": \"rating\"})", "เปลี่ยนคำศัพท์ให้ผู้อ่านรายงานเข้าใจง่าย โดย df เดิมยังเป็น overall", "columns: name, club, rating"],
      ["summary.head()", "ตรวจผลลัพธ์หลังจัดรูป ไม่ข้ามขั้นตรวจ", "Lionel Messi | Inter Miami | 90\nCristiano Ronaldo | Al Nassr | 86"]
    ]},
    { name: "วิธี 2: ใช้ loc และ copy", when: "ชัดเจนเมื่อจะทำงานต่อกับตารางใหม่หลายขั้น", steps: [
      ["columns = [\"name\", \"club\", \"overall\"]", "เก็บรายชื่อคอลัมน์ไว้ในตัวแปร เพื่อแก้ไขรายการได้จุดเดียว", "columns พร้อมใช้งาน"],
      ["summary = df.loc[:, columns].copy()", "loc แปลว่าเลือกตำแหน่ง: : คือทุกแถว และ columns คือคอลัมน์ที่เลือก; copy ทำสำเนา", "summary เป็นตารางอิสระ"],
      ["summary.columns = [\"name\", \"club\", \"rating\"]", "เปลี่ยนชื่อทั้งชุดเมื่อรู้ลำดับแน่ชัด", "columns: name, club, rating"]
    ]}
  ]},
  { functions: [
    [".isna()", "ตรวจว่าแต่ละช่องเป็นค่าว่างหรือไม่", "ได้ True/False จึงมักตามด้วย sum()"],
    [".median()", "หาค่ากลางของตัวเลข", "ทนต่อค่าที่สูง/ต่ำมากกว่าค่าเฉลี่ย"],
    [".fillna()", "แทนเฉพาะค่าที่หาย", "เลือกค่าทดแทนให้สมเหตุผลกับบริบท"]
  ], methods: [
    { name: "วิธี 1: แทนด้วยค่ากลาง", when: "ใช้เมื่อข้อมูลหายน้อยและการแทนค่ายังสมเหตุผล", steps: [
      ["df[\"height_cm\"].isna().sum()", "นับจำนวนส่วนสูงที่หายก่อนตัดสินใจแก้", "1"],
      ["median_height = df[\"height_cm\"].median()", "หาค่ากลางของส่วนสูงที่มีอยู่ ไม่รวมช่องว่าง", "median_height = 181.0"],
      ["clean_df = df.assign(height_cm=df[\"height_cm\"].fillna(median_height))", "assign สร้างตารางใหม่และแทนเฉพาะช่องที่หาย; df เดิมไม่เปลี่ยน", "clean_df height_cm มีค่า 20/20"]
    ]},
    { name: "วิธี 2: ตัดแถวที่หาย", when: "ใช้เมื่อแถวที่หายน้อยและไม่จำเป็นต่อคำถาม", steps: [
      ["missing_rows = df[df[\"height_cm\"].isna()]", "ดูก่อนว่ากำลังจะตัดนักเตะคนใด ไม่ตัดโดยไม่เห็นผล", "Casemiro | ... | height_cm = NaN"],
      ["without_missing = df.dropna(subset=[\"height_cm\"])", "dropna ตัดเฉพาะแถวที่ height_cm หาย ไม่ยุ่งกับช่องว่างคอลัมน์อื่น", "เหลือ 19 แถว"],
      ["without_missing[\"height_cm\"].isna().sum()", "ตรวจหลังแก้เพื่อยืนยันว่าตรงตามที่ตั้งใจ", "0"]
    ]}
  ]},
  { functions: [
    ["& และ |", "เชื่อมเงื่อนไขแบบ และ / หรือ สำหรับ Pandas", "ต้องใส่วงเล็บรอบเงื่อนไขทุกด้าน"],
    [".query()", "กรองด้วยข้อความเงื่อนไขที่อ่านคล้ายประโยค", "ชื่อคอลัมน์ที่มีช่องว่างต้องใช้ backtick"],
    [".isin()", "เลือกค่าที่อยู่ในรายการ", "เหมาะกับการเลือกหลายลีกหรือหลายตำแหน่ง"]
  ], methods: [
    { name: "วิธี 1: Boolean mask", when: "เห็นเงื่อนไขชัด และเป็นวิธีพื้นฐานที่ควรเข้าใจ", steps: [
      ["young = df[\"age\"] <= 25", "สร้าง mask ที่บอกทีละแถวว่าอายุผ่านเงื่อนไขหรือไม่", "True, False, False, True, ..."],
      ["high_rating = df[\"overall\"] >= 85", "สร้าง mask อีกอันสำหรับคะแนน", "True, True, True, ..."],
      ["future_stars = df[young & high_rating]", "ใช้ & รวมสอง mask แล้วเลือกเฉพาะแถวที่จริงทั้งคู่", "Kylian Mbappe | 26 | 91\nJude Bellingham | 21 | 88"]
    ]},
    { name: "วิธี 2: query", when: "เหมาะเมื่อเงื่อนไขยาวและอยากให้อ่านเหมือนประโยค", steps: [
      ["rule = \"age <= 25 and overall >= 85\"", "เก็บกฎเป็นข้อความ ทำให้ตรวจหรืออธิบายกฎได้ง่าย", "rule พร้อมใช้งาน"],
      ["future_stars = df.query(rule)", "query อ่านข้อความกฎแล้วคืนเฉพาะแถวที่ผ่าน", "ตารางดาวรุ่งที่ผ่าน 2 เงื่อนไข"],
      ["future_stars[[\"name\", \"age\", \"overall\"]]", "เลือกเฉพาะคอลัมน์ที่ใช้สื่อสารคำตอบ", "name | age | overall"]
    ]}
  ]},
  { functions: [
    [".groupby()", "แบ่งข้อมูลเป็นกลุ่มก่อนคำนวณ", "ยังไม่ใช่คำตอบจนกว่าจะตามด้วยการคำนวณ"],
    [".mean()", "หาค่าเฉลี่ยของแต่ละกลุ่ม", "ค่าเฉลี่ยไม่บอกความกระจายของข้อมูล"],
    [".agg()", "คำนวณหลายค่าในคราวเดียว", "ใช้เมื่ออยากดู count, mean, median พร้อมกัน"]
  ], methods: [
    { name: "วิธี 1: ค่าเฉลี่ยลีก", when: "ตรงที่สุดเมื่อคำถามถามว่าเฉลี่ยเท่าไร", steps: [
      ["by_league = df.groupby(\"league\")[\"overall\"]", "แบ่ง overall ออกตามชื่อ league แต่ยังไม่ได้คำนวณ", "กลุ่ม MLS, La Liga, พรีเมียร์ลีก, ..."],
      ["league_mean = by_league.mean()", "คำนวณค่าเฉลี่ยหนึ่งค่าต่อหนึ่งลีก", "La Liga 86.0\nPremier League 84.5\n..."],
      ["league_mean.sort_values(ascending=False)", "เรียงจากสูงไปต่ำเพื่ออ่านคำตอบง่าย", "La Liga\nPremier League\n..."]
    ]},
    { name: "วิธี 2: ดูหลายมุมด้วย agg", when: "เหมาะเมื่อไม่อยากเชื่อค่าเฉลี่ยอย่างเดียว", steps: [
      ["stats = df.groupby(\"league\")[\"overall\"].agg([\"count\", \"mean\", \"median\"])", "ได้จำนวนคน ค่าเฉลี่ย และค่ากลางในตารางเดียว", "count | mean | median ต่อ league"],
      ["stats = stats.sort_values(\"mean\", ascending=False)", "เลือกเรียงด้วยคอลัมน์ mean แต่ยังเห็น count ประกอบ", "ลีกที่มี mean สูงอยู่บนสุด"],
      ["stats.round(1)", "ปัดทศนิยมเพื่อรายงานให้อ่านง่าย โดยไม่เปลี่ยนข้อมูลต้นทาง", "mean 86.0 แทน 86.000000"]
    ]}
  ]},
  { functions: [
    [".nlargest()", "เลือกแถวที่มีค่ามากสุดตามคอลัมน์", "ต่างจาก sort ทั้งตารางเมื่ออยากได้เพียง top n"],
    ["plt.bar()", "สร้างกราฟแท่งจากชื่อและตัวเลข", "จำนวนค่าแกน X/Y ต้องเท่ากัน"],
    ["plt.xlabel()/ylabel()", "ใส่ชื่อแกนให้กราฟอธิบายตัวเองได้", "กราฟไม่มีชื่อแกนทำให้ตีความผิดง่าย"]
  ], methods: [
    { name: "วิธี 1: Pandas plot", when: "สั้น เหมาะเมื่อข้อมูลอยู่ใน DataFrame อยู่แล้ว", steps: [
      ["top5 = df.nlargest(5, \"overall\")", "เลือก 5 แถวที่ overall สูงสุดและเก็บไว้ในตารางเดียว", "top5 มี 5 แถว"],
      ["top5.plot.bar(x=\"name\", y=\"overall\", legend=False)", "Pandas สร้าง bar chart จากคอลัมน์ที่ระบุ", "กราฟแท่ง 5 คน"],
      ["plt.ylabel(\"Overall rating\")", "เติมชื่อแกน Y เพื่อบอกความหมายของความสูงแท่ง", "แกน Y: Overall rating"]
    ]},
    { name: "วิธี 2: Matplotlib โดยตรง", when: "ควบคุมรายละเอียดกราฟได้มากกว่า", steps: [
      ["top5 = df.nlargest(5, \"overall\")", "เตรียมข้อมูลก่อนวาดกราฟเหมือนวิธีแรก", "top5 พร้อมใช้งาน"],
      ["plt.bar(top5[\"name\"], top5[\"overall\"], color=\"teal\")", "ส่งชื่อและคะแนนจาก top5 เดียวกัน จึงมีแท่งตรงกับชื่อ", "แท่งสี teal 5 แท่ง"],
      ["plt.xticks(rotation=25, ha=\"right\")\nplt.tight_layout()", "หมุนชื่อแกน X และจัดระยะ เพื่อไม่ให้ข้อความทับกัน", "ชื่ออ่านง่าย ไม่ถูกตัด"]
    ]}
  ]},
  { functions: [
    [".round()", "ปัดเลขเพื่อสื่อสารผลลัพธ์", "ใช้กับการแสดงผล ไม่ใช่เปลี่ยนความจริงของข้อมูล"],
    [".reset_index()", "เปลี่ยน index ที่เป็นชื่อกลุ่มให้กลับเป็นคอลัมน์", "ช่วยให้ตารางพร้อมใช้ต่อหรือส่งออก"],
    ["f-string", "แทรกตัวแปรในข้อความด้วย f\"...{value}...\"", "ช่วยเล่าคำตอบจากตัวเลขโดยไม่ต่อข้อความยาว"]
  ], methods: [
    { name: "วิธี 1: ตารางก่อนข้อความ", when: "ปลอดภัย เพราะเห็นหลักฐานทั้งหมดก่อนสรุป", steps: [
      ["result = df.groupby(\"league\", as_index=False)[\"overall\"].mean()", "สร้างตารางผลลัพธ์ที่มี league และ overall เฉลี่ย", "league | overall"],
      ["result = result.sort_values(\"overall\", ascending=False)", "เรียงเพื่อรู้ว่ากลุ่มใดอยู่บนสุด", "ลีกที่ค่าเฉลี่ยสูงสุดอยู่แถวแรก"],
      ["result.round({\"overall\": 1})", "ปัดเพื่อให้ตารางรายงานอ่านได้ทันที", "overall เช่น 86.0"]
    ]},
    { name: "วิธี 2: สร้างประโยคจากหลักฐาน", when: "ใช้หลังตรวจตารางแล้ว เพื่อส่งสารให้คนทั่วไป", steps: [
      ["best = result.iloc[0]", "เลือกแถวแรกหลังเรียง ซึ่งเป็นลีกที่มีค่าเฉลี่ยสูงสุด", "best มี league และ overall 1 ชุด"],
      ["message = f\"ในชุดข้อมูลนี้ {best['league']} มี overall เฉลี่ย {best['overall']:.1f}\"", "f-string วางค่าลงในประโยค และ :.1f คือแสดงทศนิยมหนึ่งตำแหน่ง", "ข้อความสรุป 1 ประโยค"],
      ["print(message + \" แต่จำนวนตัวอย่างในแต่ละลีกอาจต่างกัน\")", "เพิ่มข้อจำกัด เพื่อไม่สรุปเกินกว่าหลักฐาน", "ประโยคที่มีคำตอบและข้อจำกัด"]
    ]}
  ]},
  { functions: [
    ["train_test_split()", "แบ่งข้อมูลเป็นชุดฝึกและชุดทดสอบ", "test ต้องไม่ถูกใช้ตอนฝึก เพื่อวัดความแม่นยำจริง"],
    [".fit(X_train, y_train)", "ให้โมเดลเรียนรู้น้ำหนักความสัมพันธ์จากชุดฝึก", "รับ X เป็นตาราง 2 มิติ และ y เป็น Series"],
    [".predict(X_new)", "นำโมเดลไปทำนายข้อมูลที่ยังไม่เคยเห็น (Unseen Data)", "ใช้ประเมินราคานักเตะใหม่หรือชุดทดสอบ"]
  ], methods: [
    { name: "วิธี 1: เทรนโมเดลทำนายมูลค่านักเตะ (value_millions)", when: "เหมาะกับ target ตัวเลขต่อเนื่อง (Regression)", steps: [
      ["features = [\"overall\", \"age\", \"pace\", \"shooting\"]\nX = df_clean[features]\ny = df_clean[\"value_millions\"]", "X คือ feature สถิตินักเตะหลายคอลัมน์; y คือ target มูลค่านักเตะ", "X: ตาราง 2 มิติ, y: มูลค่าราคา (ล้าน)"],
      ["X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=.2, random_state=42)", "กันข้อมูล 20% ไว้ทดสอบความแม่นยำ", "train 80%, test 20%"],
      ["model = LinearRegression().fit(X_train, y_train)\ny_pred = model.predict(X_test)", "fit ให้โมเดลเรียนรู้เฉพาะจากชุดฝึก แล้ว predict กับชุดทดสอบ", "y_pred คือราคาที่โมเดลประเมิน"],
      ["mean_absolute_error(y_test, y_pred)", "วัดความคลาดเคลื่อนเฉลี่ย (MAE) เทียบกับราคาจริงใน test set", "MAE ของโมเดล (หน่วย: ล้าน)"]
    ]},
    { name: "วิธี 2: ประเมินราคานักเตะชุดใหม่ (Predict Unseen Data)", when: "สถานการณ์จริง: แมวมองนำสถิตินักเตะใหม่มาให้โมเดลประเมินราคา", steps: [
      ["new_players = pd.read_csv(\"../data/scouted_players.csv\")", "โหลดข้อมูลนักเตะดาวรุ่งชุดใหม่ที่ไม่มีราคา", "new_players พร้อมใช้งาน"],
      ["X_new = new_players[features]", "ดึงเฉพาะ Feature คอลัมน์เดียวกับที่ใช้เทรนโมเดล", "X_new ตารางคุณลักษณะ"],
      ["new_players[\"predicted_value\"] = model.predict(X_new).round(1)", "ให้โมเดลคำนวณและสร้างคอลัมน์ราคาประเมินใหม่", "ได้ราคาทำนายของดาวรุ่งทุกคน"],
      ["new_players[[\"name\", \"overall\", \"predicted_value\"]].head()", "แสดงผลลัพธ์การประเมินราคาเพื่อนำไปใช้งานจริง", "Lamine Yamal | 84 | 108.5M ..."]
    ]}
  ]},
  { functions: [
    ["df.columns", "ตรวจว่าคำถามใช้คอลัมน์ที่มีจริง", "ป้องกัน KeyError ก่อนเริ่มงาน"],
    [".value_counts()", "นับจำนวนแต่ละกลุ่ม", "ช่วยดูว่ากลุ่มเล็กเกินไปหรือไม่"],
    [".describe()", "สรุปค่าตัวเลข เช่น min, mean, max", "ใช้ตรวจค่าที่น่าแปลกก่อนเล่าเรื่อง"]
  ], methods: [
    { name: "วิธี 1: เริ่มจากคำถาม", when: "เหมาะเมื่อรู้สิ่งที่อยากตัดสินใจหรืออยากรู้", steps: [
      ["question = \"ตำแหน่งใดมีค่าตัวเฉลี่ยสูงสุด?\"", "เขียนคำถามให้จบเป็นประโยคและวัดได้จากข้อมูล", "คำถามชัดเจน"],
      ["df[[\"position\", \"value_millions\"]].info()", "ตรวจเฉพาะคอลัมน์ที่คำถามใช้ ว่าชนิดข้อมูลและค่าหายเป็นอย่างไร", "position / value_millions พร้อมตรวจ"],
      ["df[\"position\"].value_counts()", "ดูจำนวนตัวอย่างของแต่ละตำแหน่งก่อนเปรียบเทียบ", "จำนวนคนต่อ position"]
    ]},
    { name: "วิธี 2: เริ่มจากการสำรวจ", when: "เหมาะเมื่อยังไม่มีคำถามและอยากหาแนวคิดอย่างมีหลัก", steps: [
      ["df.columns", "ดูสิ่งที่มีจริงในไฟล์ แล้วเลือกหัวข้อที่น่าสนใจ", "name, league, position, value_millions, ..."],
      ["df.describe()", "สำรวจตัวเลขเพื่อหาค่าที่น่าสนใจ เช่นค่าสูงสุดต่ำสุด", "สรุป age, overall, pace, ..."],
      ["df.groupby(\"position\")[\"value_millions\"].mean()", "แปลงสิ่งที่สังเกตเป็นคำถามที่คำนวณได้", "ค่าเฉลี่ยค่าตัวแยกตำแหน่ง"]
    ]}
  ]},
  { functions: [
    [".sort_values()", "เรียงตารางก่อนนำเสนอ", "ต้องระบุว่าต้องการ ascending หรือไม่"],
    ["plt.savefig()", "บันทึกกราฟเป็นไฟล์ภาพ", "เรียกก่อน/แทน show ตาม workflow ที่ใช้"],
    ["def", "สร้าง function ของเราเองเพื่อลดโค้ดซ้ำ", "ตั้งชื่อที่บอกหน้าที่และส่งค่ากลับอย่างชัดเจน"]
  ], methods: [
    { name: "วิธี 1: Notebook แบบเส้นตรง", when: "เหมาะกับงานครั้งเดียวและให้อ่านตามลำดับ", steps: [
      ["df = pd.read_csv(\"../data/footballers.csv\")", "เริ่มด้วยข้อมูลต้นทางที่อ่านซ้ำได้ทุกครั้ง", "df พร้อมใช้งาน"],
      ["result = df.groupby(\"position\")[\"value_millions\"].mean().sort_values(ascending=False)", "วิเคราะห์และเรียงคำตอบในบรรทัดที่ยังอ่านได้", "ผลลัพธ์เรียงจากสูงไปต่ำ"],
      ["result.plot.bar(title=\"Average value by position\")\nplt.tight_layout()", "ทำกราฟที่มีชื่อบอกสิ่งที่เปรียบเทียบ", "กราฟพร้อมวางในรายงาน"]
    ]},
    { name: "วิธี 2: แยกเป็น function ใช้ซ้ำ", when: "เหมาะเมื่อจะวิเคราะห์หลายคอลัมน์หรืออยากลดโค้ดซ้ำ", steps: [
      ["def group_average(data, group_col, value_col):", "ประกาศ function ที่บอกหน้าที่: หาค่าเฉลี่ยของ value แยกตาม group", "ยังไม่ทำงานจนกว่าจะถูกเรียก"],
      ["    return data.groupby(group_col)[value_col].mean().sort_values(ascending=False)", "return ส่งตารางผลลัพธ์กลับไปให้ผู้เรียกใช้", "function พร้อมใช้งาน"],
      ["result = group_average(df, \"position\", \"value_millions\")", "เรียก function ด้วยข้อมูลและชื่อคอลัมน์ที่ต้องการ", "result พร้อมนำเสนอ"]
    ]}
  ]}
];

const chapterComparisons = [
  { carry: "บทแรกเริ่มจากศูนย์: เราแค่มีไฟล์ CSV และคำถามว่าในไฟล์มีอะไร", carryCode: "# ยังไม่มีโค้ดเก่า — เริ่มจากการอ่านไฟล์", normal: "Python ปกติ (csv)", library: "Pandas", steps: [
    ["import csv", "import pandas as pd", "ทั้งสองวิธีเริ่มจากนำเครื่องมือเข้ามาใช้ แต่ Pandas ออกแบบมาสำหรับตารางข้อมูลโดยตรง"],
    ["with open(\"../data/footballers.csv\") as file:\n    rows = list(csv.DictReader(file))", "df = pd.read_csv(\"../data/footballers.csv\")", "Python ปกติได้ list ของ dictionary; Pandas ได้ DataFrame ที่มีคำสั่งตารางพร้อมใช้"],
    ["print(rows[:3])", "df.head(3)", "ทั้งคู่ดูเพียง 3 รายการ แต่ head() จัดรูปเป็นตารางและอ่านชื่อคอลัมน์ง่ายกว่า"]
  ]},
  { carry: "ทบทวนจาก Week 01: เรามีตารางชื่อ df แล้ว ไม่ต้องอ่านไฟล์ใหม่ทุกครั้ง", carryCode: "import pandas as pd\ndf = pd.read_csv(\"../data/footballers.csv\")", normal: "Python ปกติ (loop)", library: "Pandas", steps: [
    ["summary = []", "columns = [\"name\", \"club\", \"overall\"]", "ทั้งสองวิธีเตรียมที่เก็บผลลัพธ์ แต่ Pandas เตรียมรายชื่อคอลัมน์แทนการวนทีละแถว"],
    ["for row in rows:\n    summary.append({\"name\": row[\"name\"], \"club\": row[\"club\"], \"rating\": row[\"overall\"]})", "summary = df[columns].rename(columns={\"overall\": \"rating\"})", "loop ปกติต้องหยิบค่าและสร้าง dictionary ทีละคน; Pandas เลือกทั้งคอลัมน์และเปลี่ยนชื่อได้ในคำสั่งเดียว"],
    ["print(summary[:3])", "summary.head(3)", "ได้ข้อมูลแนวเดียวกัน แต่ Pandas เก็บชนิดข้อมูลตารางไว้ใช้ต่อได้"]
  ]},
  { carry: "ทบทวนจาก Week 02: ตาราง summary ช่วยให้เราเลือกเฉพาะข้อมูลที่จำเป็นได้", carryCode: "summary = df[[\"name\", \"club\", \"overall\"]].rename(\n    columns={\"overall\": \"rating\"}\n)", normal: "Python ปกติ (if/loop)", library: "Pandas", steps: [
    ["heights = [float(row[\"height_cm\"]) for row in rows if row[\"height_cm\"] != \"\"]", "missing = df[\"height_cm\"].isna().sum()", "Python ปกติต้องเช็กช่องว่างเองก่อนแปลงตัวเลข; Pandas มี isna() สำหรับค่า missing"],
    ["middle = sorted(heights)[len(heights) // 2]", "middle = df[\"height_cm\"].median()", "ทั้งคู่หาค่ากลาง แต่ median() บอกความตั้งใจชัดและจัดการข้อมูลตัวเลขให้"],
    ["for row in rows:\n    if row[\"height_cm\"] == \"\":\n        row[\"height_cm\"] = middle", "clean_df = df.assign(height_cm=df[\"height_cm\"].fillna(middle))", "loop เปลี่ยนค่าในข้อมูลเดิมทีละแถว; assign + fillna สร้างตารางใหม่ ช่วยลดการเผลอแก้ df ต้นทาง"]
  ]},
  { carry: "ทบทวนจาก Week 03: ก่อนกรอง เราตรวจและจัดการข้อมูลที่หายแล้ว จึงเชื่อผลลัพธ์ได้มากขึ้น", carryCode: "clean_df = df.assign(\n    height_cm=df[\"height_cm\"].fillna(df[\"height_cm\"].median())\n)", normal: "Python ปกติ (if/loop)", library: "Pandas", steps: [
    ["future_stars = []", "rule = \"age <= 25 and overall >= 85\"", "ทั้งสองวิธีเริ่มด้วยการกำหนดว่าจะคัดคนแบบใด แต่ query เก็บกฎเป็นข้อความอ่านง่าย"],
    ["for row in rows:\n    if int(row[\"age\"]) <= 25 and int(row[\"overall\"]) >= 85:\n        future_stars.append(row)", "future_stars = clean_df.query(rule)", "loop ต้องแปลงและตรวจทีละคน; Pandas ใช้เงื่อนไขกับทั้งคอลัมน์พร้อมกัน"],
    ["print([row[\"name\"] for row in future_stars])", "future_stars[[\"name\", \"age\", \"overall\"]]", "ทั้งคู่แสดงคำตอบ แต่ Pandas เลือกคอลัมน์เพื่อทำเป็นตารางรายงานต่อได้"]
  ]},
  { carry: "ทบทวนจาก Week 04: future_stars คือผลจากการกรอง ข้อมูลกลุ่มนี้นำไปนับหรือเปรียบเทียบต่อได้", carryCode: "future_stars = clean_df.query(\n    \"age <= 25 and overall >= 85\"\n)", normal: "Python ปกติ (dict)", library: "Pandas", steps: [
    ["totals, counts = {}, {}", "by_league = clean_df.groupby(\"league\")[\"overall\"]", "Python ปกติเตรียม dictionary สองชุดเพื่อรวมและนับ; groupby สร้างกลุ่มให้ทันที"],
    ["for row in rows:\n    league = row[\"league\"]\n    totals[league] = totals.get(league, 0) + int(row[\"overall\"])\n    counts[league] = counts.get(league, 0) + 1", "league_mean = by_league.mean()", "loop ต้องจัดการ total/count เอง; mean() คำนวณค่าเฉลี่ยให้ทุกกลุ่ม"],
    ["averages = {key: totals[key] / counts[key] for key in totals}", "league_mean.sort_values(ascending=False)", "ทั้งคู่ตอบคำถามลีกใดเฉลี่ยสูง แต่ Pandas เรียงผลลัพธ์เป็นตารางพร้อมใช้ต่อ"]
  ]},
  { carry: "ทบทวนจาก Week 05: league_mean คือสรุปตัวเลขหนึ่งค่าต่อหนึ่งลีก ก่อนทำกราฟต้องรู้ก่อนว่ากำลังเปรียบเทียบอะไร", carryCode: "league_mean = (clean_df.groupby(\"league\")[\"overall\"]\n    .mean().sort_values(ascending=False))", normal: "Python ปกติ (ข้อความ)", library: "Matplotlib", steps: [
    ["for name, value in league_mean.items():\n    print(f\"{name}: {'#' * int(value)}\")", "import matplotlib.pyplot as plt", "Python ปกติแสดงแท่งเป็นตัวอักษรใน terminal; Matplotlib คือ library สำหรับวาดกราฟจริง"],
    ["# ผลลัพธ์เป็นข้อความหลายบรรทัด", "plt.bar(league_mean.index, league_mean.values)", "ทั้งคู่ใช้ชื่อและค่าเดียวกัน แต่ plt.bar ทำให้เปรียบเทียบความสูงด้วยสายตา"],
    ["# อ่านค่าโดยนับ #", "plt.ylabel(\"Average overall\")\nplt.xticks(rotation=25)\nplt.show()", "กราฟต้องมีชื่อแกนและชื่อที่อ่านได้ มิฉะนั้นภาพสวยแต่ไม่บอกความหมาย"]
  ]},
  { carry: "ทบทวนจาก Week 06: กราฟคือหลักฐานที่มองเห็นง่าย แต่ต้องสรุปด้วยข้อความและข้อจำกัดเสมอ", carryCode: "league_mean.plot.bar()\nplt.ylabel(\"Average overall\")\nplt.show()", normal: "Python ปกติ (format)", library: "Pandas", steps: [
    ["best_name = max(averages, key=averages.get)\nbest_value = averages[best_name]", "result = league_mean.reset_index(name=\"average_overall\")", "Python ปกติหาค่าสูงสุดจาก dictionary; Pandas เปลี่ยน Series เป็นตารางที่ตรวจดูได้"],
    ["message = \"In this data, {} is highest at {:.1f}\".format(best_name, best_value)", "best = result.iloc[0]", "ทั้งสองวิธีเลือกคำตอบก่อนสร้างประโยค โดย Pandas ใช้แถวแรกหลังเรียง"],
    ["print(message + \"; sample sizes may differ.\")", "print(f\"ในชุดข้อมูลนี้ {best['league']} มีค่าเฉลี่ย {best['average_overall']:.1f}\")", "ข้อความที่ดีต้องบอกว่าเป็นผลในชุดข้อมูลนี้ ไม่เหมารวมถึงโลกจริง"]
  ]},
  { carry: "ทบทวนจาก Week 07: ก่อนทำนาย เราต้องระบุสิ่งที่รู้จากข้อมูลและสิ่งที่ยังสรุปไม่ได้", carryCode: "result = league_mean.reset_index(name=\"average_overall\")\n# สรุปพร้อมหลักฐานและข้อจำกัด", normal: "Python ปกติ (baseline)", library: "scikit-learn", steps: [
    ["baseline = sum(y_train) / len(y_train)", "from sklearn.linear_model import LinearRegression", "baseline คือกฎง่ายที่สุด: ทำนายทุกคนเป็นค่าเฉลี่ย; scikit-learn มีโมเดลสำเร็จรูป"],
    ["predictions = [baseline for _ in y_test]", "model = LinearRegression().fit(X_train, y_train)", "baseline ไม่เรียนรู้อะไรเพิ่ม; fit ให้โมเดลหาความสัมพันธ์จาก feature หลายตัว"],
    ["error = sum(abs(actual - pred) for actual, pred in zip(y_test, predictions)) / len(y_test)", "predictions = model.predict(X_test)\nerror = mean_absolute_error(y_test, predictions)", "ทั้งคู่วัด MAE เพื่อเทียบอย่างยุติธรรม: โมเดลต้องผิดน้อยกว่า baseline จึงมีประโยชน์"]
  ]},
  { carry: "ทบทวนจาก Week 08: โมเดลเป็นเพียงหนึ่งทางเลือก; mini project ต้องเริ่มจากคำถามและข้อมูลที่มีจริง", carryCode: "X = clean_df[[\"age\", \"pace\", \"shooting\"]]\ny = clean_df[\"overall\"]\n# train/test ก่อนประเมินโมเดล", normal: "Python ปกติ (สำรวจ loop)", library: "Pandas", steps: [
    ["positions = {}\nfor row in rows:\n    positions[row[\"position\"]] = positions.get(row[\"position\"], 0) + 1", "clean_df[\"position\"].value_counts()", "ทั้งคู่ตอบว่ามีข้อมูลกี่คนต่อ position; Pandas สั้นกว่าและคืนตารางพร้อมดู"],
    ["values = [float(row[\"value_millions\"]) for row in rows]", "clean_df[[\"position\", \"value_millions\"]].info()", "ก่อนถามค่าตัวเฉลี่ย เราต้องตรวจว่าค่าตัวเป็นตัวเลขและมีข้อมูลหายหรือไม่"],
    ["# เลือกคำถามหลังเห็นข้อมูล", "clean_df.groupby(\"position\")[\"value_millions\"].mean()", "การสำรวจนำไปสู่คำถามที่คำนวณและอธิบายได้"]
  ]},
  { carry: "ทบทวนจาก Week 09: เราเลือกคำถาม ตรวจข้อมูล และรู้ว่าต้องใช้ column ใดแล้ว", carryCode: "question = \"ตำแหน่งใดมีค่าตัวเฉลี่ยสูงสุด?\"\nresult = clean_df.groupby(\"position\")[\"value_millions\"].mean()", normal: "Python ปกติ (function ของเรา)", library: "Pandas pipeline", steps: [
    ["def average_by_position(rows):\n    # รวมและนับทีละ position\n    ...", "result = (clean_df.groupby(\"position\")[\"value_millions\"]\n    .mean().sort_values(ascending=False))", "ทั้งสองวิธีทำงานเป็นขั้นตอนซ้ำได้: function ของเราอธิบายกฎเอง ส่วน Pandas pipeline สื่อการแปลงตารางเป็นลำดับ"],
    ["report = average_by_position(rows)", "result.plot.bar(title=\"Average value by position\")", "เมื่อได้ผลลัพธ์แล้ว ทั้งสองทางต้องนำไปสื่อสาร ไม่ใช่หยุดที่ตัวเลข"],
    ["print(\"ข้อจำกัด: ข้อมูลมีเพียง 20 แถว\")", "plt.ylabel(\"Value (millions)\")\nplt.tight_layout()", "ปิดบทด้วยข้อจำกัดและกราฟที่มีชื่อแกน เพื่อให้คนอื่นตรวจคำตอบต่อได้"]
  ]}
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);

const weekCards = document.querySelector("#week-cards");
const weekNav = document.querySelector("#week-nav");
weeks.forEach((week, index) => {
  const number = String(index + 1).padStart(2, "0");
  const chapterHref = `weeks/week-${number}.html`;
  weekCards.insertAdjacentHTML("beforeend", `
    <article class="week-card ${week.project ? "project" : ""}" id="week-${index + 1}">
      <span class="week-no">WEEK ${number} · 2 HOURS</span>
      <h3>${week.title}</h3><p>${week.text}</p><a class="open-chapter" href="${chapterHref}" target="_blank" rel="noopener">เปิดบทนี้ในแท็บใหม่ ↗</a><span class="tag">${week.tag}</span>
    </article>`);
  weekNav.insertAdjacentHTML("beforeend", `<a class="nav-week" href="${chapterHref}" target="_blank" rel="noopener">Week ${number}<small>${week.title}</small></a>`);
});

const lessonList = document.querySelector("#lesson-list");
weeks.forEach((week, index) => {
  const number = String(index + 1).padStart(2, "0");
  const lessonId = `lesson-detail-${index + 1}`;
  const material = lessonMaterial[index];
  lessonList.insertAdjacentHTML("beforeend", `
    <article class="lesson-card ${week.project ? "project" : ""}" id="lesson-${index + 1}">
      <button class="lesson-summary" aria-expanded="false" aria-controls="${lessonId}">
        <span class="lesson-number">WEEK ${number}</span>
        <span><h3>${week.title}</h3><p>${week.text}</p></span>
        <span class="lesson-open" aria-hidden="true">+</span>
      </button>
      <div class="lesson-detail" id="${lessonId}" hidden>
        <p class="lesson-example"><b>ตัวอย่างจากชุดข้อมูลนักเตะ:</b> ${week.example}</p>
        <a class="open-chapter chapter-launch" href="weeks/week-${number}.html" target="_blank" rel="noopener">อ่าน Week ${number} แบบหนังสือเรียน ↗</a>
        <div class="lesson-points">
          <div class="lesson-point"><h4><span>01</span> คืออะไร</h4><p>${week.what}</p></div>
          <div class="lesson-point"><h4><span>02</span> ใช้ทำอะไร</h4><p>${week.use}</p></div>
          <div class="lesson-point"><h4><span>03</span> ทำไมต้องใช้</h4><p>${week.why}</p></div>
          <div class="lesson-point without"><h4><span>04</span> ถ้าไม่ใช้จะเป็นอย่างไร</h4><p>${week.without}</p></div>
          <div class="lesson-term"><b>คำสำคัญ:</b> ${week.term}</div>
        </div>
        <div class="function-section">
          <h4><span>FUNCTIONS</span> คำสั่งที่ใช้ใน Week นี้</h4>
          <div class="function-grid">${material.functions.map(([name, description, caution]) => `<article class="function-card"><code>${escapeHtml(name)}</code><p>${description}</p><small>ระวัง: ${caution}</small></article>`).join("")}</div>
        </div>
        <div class="code-teacher" data-week="${index}">
          <div class="code-teacher-head"><div><h4 class="code-teacher-title"><span>CODE WALKTHROUGH</span> เขียนโค้ดทีละขั้น</h4><p>เลือกวิธีทำเดียวกันได้มากกว่าหนึ่งทาง แล้วค่อยกดเพิ่มโค้ดทีละบรรทัด</p></div></div>
          <div class="method-picker">${material.methods.map((method, methodIndex) => `<button class="method-button ${methodIndex === 0 ? "active" : ""}" type="button" data-method="${methodIndex}">${method.name}<small>${method.when}</small></button>`).join("")}</div>
          <div class="teacher-workspace">
            <pre class="teacher-code"><code class="muted"># เลือกวิธีแล้วกด “แสดงบรรทัดแรก”</code></pre>
            <div class="teacher-note"><span class="teacher-count">0 / ${material.methods[0].steps.length} STEPS</span><h5>เริ่มจากปัญหา</h5><p>เราจะเห็นโค้ดและเหตุผลพร้อมกัน ไม่ต้องท่องคำสั่งก่อนเข้าใจหน้าที่</p><p class="teacher-output">OUTPUT: ผลลัพธ์จะปรากฏที่นี่</p></div>
          </div>
          <div class="teacher-actions"><button class="teacher-next" type="button">แสดงบรรทัดแรก →</button><button class="teacher-reset" type="button">เริ่มวิธีนี้ใหม่</button></div>
        </div>
      </div>
    </article>`);
});

document.querySelectorAll(".lesson-card").forEach(card => {
  const toggle = card.querySelector(".lesson-summary");
  const detail = card.querySelector(".lesson-detail");
  toggle.addEventListener("click", () => {
    const willOpen = detail.hidden;
    detail.hidden = !willOpen;
    toggle.setAttribute("aria-expanded", String(willOpen));
    card.classList.toggle("is-open", willOpen);
  });
});

document.querySelectorAll(".code-teacher").forEach(teacher => {
  const material = lessonMaterial[Number(teacher.dataset.week)];
  let methodIndex = 0;
  let stepIndex = 0;
  const code = teacher.querySelector(".teacher-code code");
  const count = teacher.querySelector(".teacher-count");
  const title = teacher.querySelector(".teacher-note h5");
  const note = teacher.querySelector(".teacher-note > p:not(.teacher-output)");
  const output = teacher.querySelector(".teacher-output");
  const next = teacher.querySelector(".teacher-next");

  function renderTeacher() {
    const method = material.methods[methodIndex];
    const current = method.steps[stepIndex - 1];
    code.textContent = stepIndex ? method.steps.slice(0, stepIndex).map(item => item[0]).join("\n") : "# เลือกวิธีแล้วกด “แสดงบรรทัดแรก”";
    code.classList.toggle("muted", stepIndex === 0);
    count.textContent = `${stepIndex} / ${method.steps.length} STEPS`;
    title.textContent = current ? `ขั้นที่ ${stepIndex}: ${current[1].split(" ").slice(0, 8).join(" ")}` : method.name;
    note.textContent = current ? current[1] : method.when;
    output.textContent = current ? `OUTPUT: ${current[2]}` : "OUTPUT: ผลลัพธ์จะปรากฏที่นี่";
    next.textContent = stepIndex === method.steps.length ? "ครบทุกขั้นแล้ว ✓" : stepIndex === 0 ? "แสดงบรรทัดแรก →" : "แสดงบรรทัดถัดไป →";
    next.disabled = stepIndex === method.steps.length;
  }

  teacher.querySelectorAll(".method-button").forEach(button => button.addEventListener("click", () => {
    methodIndex = Number(button.dataset.method);
    stepIndex = 0;
    teacher.querySelectorAll(".method-button").forEach(item => item.classList.toggle("active", item === button));
    renderTeacher();
  }));
  next.addEventListener("click", () => { stepIndex += 1; renderTeacher(); });
  teacher.querySelector(".teacher-reset").addEventListener("click", () => { stepIndex = 0; renderTeacher(); });
  renderTeacher();
});

const reader = document.querySelector("#chapter-reader");
const readerContent = document.querySelector("#reader-content");
let readerWeek = 0;
let readerStep = 0;

function renderReader() {
  const week = weeks[readerWeek];
  const comparison = chapterComparisons[readerWeek];
  const current = comparison.steps[readerStep - 1];
  const normalCode = readerStep ? comparison.steps.slice(0, readerStep).map(step => step[0]).join("\n\n") : "# กดปุ่มด้านล่างเพื่อแสดงโค้ดทีละขั้น";
  const libraryCode = readerStep ? comparison.steps.slice(0, readerStep).map(step => step[1]).join("\n\n") : "# กดปุ่มด้านล่างเพื่อแสดงโค้ดทีละขั้น";
  readerContent.innerHTML = `
    <div class="reader-hero">
      <div><p class="reader-kicker">CHAPTER ${String(readerWeek + 1).padStart(2, "0")} · 2 HOURS</p><h2>${week.title}</h2><p>${week.what}</p></div>
      <div class="reader-nav"><button type="button" data-reader-nav="previous" ${readerWeek === 0 ? "disabled" : ""}>← บทก่อน</button><button type="button" data-reader-nav="next" ${readerWeek === weeks.length - 1 ? "disabled" : ""}>บทถัดไป →</button></div>
    </div>
    <article class="carry-card"><h3>พกโค้ดมาจากบทก่อน</h3><p>${comparison.carry}</p><pre><code>${escapeHtml(comparison.carryCode)}</code></pre></article>
    <div class="compare-intro"><div><h3>โจทย์เดียวกัน เขียนได้ 2 แบบ</h3><p>กดเพิ่มโค้ดทีละขั้น แล้วสังเกตว่าแต่ละวิธีต้องจัดการอะไรด้วยตนเองบ้าง</p></div><p>${readerStep} / ${comparison.steps.length} ขั้น</p></div>
    <div class="compare-code">
      <article class="compare-panel"><h4>${comparison.normal}</h4><pre class="${readerStep ? "" : "empty"}"><code>${escapeHtml(normalCode)}</code></pre></article>
      <article class="compare-panel library"><h4>${comparison.library}</h4><pre class="${readerStep ? "" : "empty"}"><code>${escapeHtml(libraryCode)}</code></pre></article>
    </div>
    <div class="reader-step-note"><b>${current ? `ขั้นที่ ${readerStep}:` : "ก่อนเริ่ม:"}</b> ${current ? current[2] : "เลือกดูทีละขั้น เพื่อเปรียบเทียบภาระที่ Python ปกติต้องจัดการเอง กับสิ่งที่ library ช่วยให้สั้นและชัดขึ้น"}</div>
    <div class="reader-actions"><button class="reader-next-step" type="button" ${readerStep === comparison.steps.length ? "disabled" : ""}>${readerStep === comparison.steps.length ? "ครบทุกขั้นแล้ว ✓" : readerStep === 0 ? "แสดงโค้ดขั้นแรก →" : "แสดงโค้ดขั้นถัดไป →"}</button><button class="reader-reset-step" type="button">เริ่มบทนี้ใหม่</button></div>`;

  readerContent.querySelector(".reader-next-step").addEventListener("click", () => { readerStep += 1; renderReader(); });
  readerContent.querySelector(".reader-reset-step").addEventListener("click", () => { readerStep = 0; renderReader(); });
  readerContent.querySelectorAll("[data-reader-nav]").forEach(button => button.addEventListener("click", () => {
    readerWeek += button.dataset.readerNav === "next" ? 1 : -1;
    readerStep = 0;
    renderReader();
  }));
}

function openReader(index) {
  readerWeek = Number(index);
  readerStep = 0;
  reader.hidden = false;
  renderReader();
  reader.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#reader-close").addEventListener("click", () => {
  reader.hidden = true;
  document.querySelector("#roadmap").scrollIntoView({ behavior: "smooth", block: "start" });
});

const challenges = [
  {
    title: "นักเตะคนไหนอยู่ในข้อมูล?", focus: "เปิด CSV และตรวจตาราง", task: "อ่านไฟล์ footballers.csv แล้วแสดง 3 แถวแรก พร้อมบอกว่ามีกี่แถวและกี่คอลัมน์", bug: "จุดตรวจ: อย่าเดาจำนวนแถวจากหน้าจอ", hint: "ใช้ <code>df.head(3)</code> ดูตัวอย่าง และ <code>df.shape</code> เพื่อดูขนาดตาราง", solution: "import pandas as pd\ndf = pd.read_csv(\"data/footballers.csv\")\nprint(df.head(3))\nprint(df.shape)  # (จำนวนแถว, จำนวนคอลัมน์)",
  },
  {
    title: "เปลี่ยนชื่อคอลัมน์ให้อ่านง่าย", focus: "Data Wrangling", task: "สร้างตารางใหม่ที่มี name, club, overall แล้วเปลี่ยนชื่อ overall เป็น rating โดยไม่ทำลาย df เดิม", bug: "Bug ซ่อนอยู่: คอลัมน์เดิมชื่อ overall ไม่ใช่ Overall", hint: "ชื่อคอลัมน์แยกตัวพิมพ์เล็ก-ใหญ่ ตรวจด้วย <code>df.columns</code> ก่อน", solution: "summary = df[[\"name\", \"club\", \"overall\"]].rename(\n    columns={\"overall\": \"rating\"}\n)\nsummary.head()",
  },
  {
    title: "อายุที่หายไป", focus: "Cleaning data", task: "บทเรียนใช้ height_cm แล้ว: หาว่า column age มีข้อมูลหายกี่ค่า แล้วสร้างตารางใหม่ที่แทนค่าหายด้วยค่ากลาง (median)", bug: "จุดตรวจ: อย่าใช้ 0 แทนอายุที่หาย เพราะอายุ 0 ไม่ใช่ข้อมูลจริง", hint: "<code>isna().sum()</code> ใช้นับช่องว่าง และ <code>median()</code> คือค่ากลางเมื่อเรียงตัวเลข", solution: "clean_df = df.copy()\nprint(clean_df[\"age\"].isna().sum())\nmedian_age = clean_df[\"age\"].median()\nclean_df[\"age\"] = clean_df[\"age\"].fillna(median_age)",
  },
  {
    title: "กองหน้าที่แข็งแกร่ง", focus: "Filter data", task: "บทเรียนใช้ age/overall แล้ว: กรอง ST หรือ RW ที่มี physical ตั้งแต่ 75 แล้วเลือก name, position, physical", bug: "Bug ซ่อนอยู่: Pandas ต้องใส่วงเล็บรอบแต่ละเงื่อนไขเมื่อใช้ <code>&amp;</code>", hint: "ใช้ <code>isin([" + "\"ST\", \"RW\"" + "])</code> สำหรับตำแหน่ง และเชื่อมด้วย <code>&amp;</code>", solution: "strong_forwards = df[\n    (df[\"position\"].isin([\"ST\", \"RW\"])) & (df[\"physical\"] >= 75)\n][[\"name\", \"position\", \"physical\"]]\nstrong_forwards",
  },
  {
    title: "ประเทศใดมี pace เฉลี่ยสูง?", focus: "Analysis", task: "บทเรียนใช้ league/overall แล้ว: หาค่า pace เฉลี่ยแยกตาม nationality แล้วเรียงจากมากไปน้อย", bug: "จุดตรวจ: ค่าเฉลี่ยตอบภาพรวม ไม่ได้แปลว่าทุกคนในประเทศนั้นเร็วเท่ากัน", hint: "<code>groupby</code> คือการแบ่งตารางเป็นกลุ่มก่อนคำนวณ ใช้ตามด้วย <code>mean()</code>", solution: "nationality_pace = (df.groupby(\"nationality\")[\"pace\"]\n                   .mean()\n                   .sort_values(ascending=False))\nprint(nationality_pace)",
  },
  {
    title: "กราฟที่เปรียบเทียบได้", focus: "Visualization", task: "สร้าง bar chart 5 นักเตะที่มี overall สูงสุด โดยแกน X เป็นชื่อ และแกน Y เป็น overall", bug: "Bug ซ่อนอยู่: ต้องเรียงตารางก่อน แล้วใช้ชื่อและค่า จากตารางเดียวกัน", hint: "เก็บผลลัพธ์ไว้ใน <code>top5</code> เพียงตัวเดียว เพื่อให้จำนวนชื่อและจำนวนแท่งเท่ากัน", solution: "import matplotlib.pyplot as plt\ntop5 = df.nlargest(5, \"overall\")\nplt.bar(top5[\"name\"], top5[\"overall\"])\nplt.xticks(rotation=25, ha=\"right\")\nplt.ylabel(\"Overall rating\")\nplt.show()",
  },
  {
    title: "เขียนข้อสรุปที่ไม่เกินข้อมูล", focus: "Data Story", task: "เลือกกราฟจาก Week 6 หนึ่งรูป แล้วเขียน 3 ประโยค: สิ่งที่เห็น, หลักฐานจากกราฟ, และสิ่งที่ยังสรุปไม่ได้", bug: "จุดตรวจ: กราฟชุดเล็กไม่พิสูจน์ว่าเป็นความจริงของนักเตะทั้งหมดบนโลก", hint: "ขึ้นต้นด้วย “ในชุดข้อมูลนี้...” เพื่อบอกขอบเขตของข้อสรุป", solution: "ตัวอย่างโครงคำตอบ\n1. ในชุดข้อมูลนี้ ... มีค่า overall สูงที่สุด\n2. เพราะแท่งกราฟของ ... สูงกว่าแท่งอื่น\n3. แต่ข้อมูลชุดนี้มีเพียง ... แถว จึงยังสรุปถึงทุกลีกไม่ได้",
  },
  {
    title: "โมเดลทำนายมูลค่านักเตะ", focus: "Machine Learning เบื้องต้น", task: "ใช้สถิตินักเตะเป็น feature เพื่อทำนาย value_millions แล้วนำโมเดลไป predict ราคานักเตะชุดใหม่ใน scouted_players.csv", bug: "จุดตรวจ: แปลง value_millions เป็นตัวเลข และระวัง X ต้องเป็นตาราง 2 มิติ [[...]]", hint: "feature คือข้อมูลสถิติ ส่วน target คือมูลค่านักเตะ (value_millions)", solution: "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\nfeatures = [\"overall\", \"age\", \"pace\", \"shooting\"]\nX = df_clean[features]\ny = df_clean[\"value_millions\"]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=.2, random_state=42)\nmodel = LinearRegression().fit(X_train, y_train)\n\n# ทำนายข้อมูลชุดใหม่\nnew_df = pd.read_csv(\"../data/scouted_players.csv\")\nnew_df[\"predicted_value\"] = model.predict(new_df[features])",
  },
  {
    title: "Mini project: ตั้งคำถามและเตรียมข้อมูล", focus: "Project checkpoint", task: "เลือกคำถามหนึ่งข้อจากข้อมูลนักเตะ เช่น “ตำแหน่งใดมีค่าตัวเฉลี่ยสูงสุด?” เขียนแผน 4 บรรทัด: คำถาม, คอลัมน์ที่จะใช้, จุดที่ต้อง clean, กราฟที่เลือก", bug: "จุดตรวจ: คำถามต้องตอบได้จากคอลัมน์ที่มีจริง", hint: "เปิด <code>df.columns</code> และ <code>df.info()</code> ก่อนเขียนแผน", solution: "ตัวอย่างแผน\nคำถาม: ตำแหน่งใดมี value_millions เฉลี่ยสูงสุด?\nคอลัมน์: position, value_millions\nClean: ตรวจค่าว่างของ value_millions\nกราฟ: bar chart ของค่าเฉลี่ยแยกตำแหน่ง",
    project: true,
  },
  {
    title: "Mini project: รายงานฉบับย่อ", focus: "Project delivery", task: "ส่ง Notebook ที่รันจากบนลงล่างได้ พร้อม 1 กราฟ และสรุป 3 ประโยค: คำตอบ, หลักฐาน, ข้อจำกัดของข้อมูล", bug: "จุดตรวจ: Restart Kernel แล้ว Run All — หากพัง แปลว่า cell พึ่งพาลำดับที่ไม่ถูกต้อง", hint: "ตรวจให้ชื่อตัวแปรถูกสร้างก่อนใช้ และอธิบายกราฟด้วยภาษา ไม่ใช่เพียงวางรูป", solution: "Checklist ก่อนส่ง\n[ ] Restart Kernel และ Run All ผ่าน\n[ ] มีการตรวจ/จัดการข้อมูลที่หาย\n[ ] กราฟมีชื่อแกนและชื่อกราฟ\n[ ] สรุปมีหลักฐานและบอกข้อจำกัด",
    project: true,
  },
];

const challengeCards = document.querySelector("#challenge-cards");
challenges.forEach((challenge, index) => {
  const number = String(index + 1).padStart(2, "0");
  const panelId = `challenge-detail-${index + 1}`;
  challengeCards.insertAdjacentHTML("beforeend", `
    <article class="challenge-card ${challenge.project ? "project" : ""}">
      <button class="challenge-card-summary" aria-expanded="false" aria-controls="${panelId}">
        <span class="challenge-week">W${number}</span>
        <span><h3>${challenge.title}</h3><p>${challenge.focus} · ${challenge.task}</p></span>
        <span class="challenge-open" aria-hidden="true">+</span>
      </button>
      <div class="challenge-detail" id="${panelId}" hidden>
        <p><strong>ภารกิจ:</strong> ${challenge.task}</p>
        <span class="bug-clue">${challenge.bug}</span>
        <div class="challenge-actions">
          <button type="button" data-reveal="hint">ดูใบ้</button>
          <button type="button" data-reveal="solution">ดูแนวเฉลย</button>
        </div>
        <div class="challenge-reveal" hidden></div>
      </div>
    </article>`);
});

document.querySelectorAll(".challenge-card").forEach((card, index) => {
  const toggle = card.querySelector(".challenge-card-summary");
  const detail = card.querySelector(".challenge-detail");
  const reveal = card.querySelector(".challenge-reveal");
  toggle.addEventListener("click", () => {
    const willOpen = detail.hidden;
    detail.hidden = !willOpen;
    toggle.setAttribute("aria-expanded", String(willOpen));
    card.classList.toggle("is-open", willOpen);
  });
  card.querySelectorAll("[data-reveal]").forEach(button => button.addEventListener("click", () => {
    const isHint = button.dataset.reveal === "hint";
    reveal.hidden = false;
    reveal.innerHTML = isHint ? `<strong>ใบ้:</strong> ${challenges[index].hint}` : `<strong>แนวเฉลย:</strong><pre>${challenges[index].solution}</pre>`;
  }));
});

const codeSteps = [
  {
    code: `<span class="code-keyword">import</span> pandas <span class="code-keyword">as</span> pd`,
    title: "ขั้นที่ 1: นำเครื่องมือเข้ามาใช้",
    text: "Pandas คือ library (ชุดคำสั่งสำเร็จรูป) สำหรับทำงานกับตารางข้อมูล เราตั้งชื่อย่อว่า <code>pd</code> เพื่อพิมพ์สั้นลง",
    output: "ยังไม่มีผลลัพธ์ — เราเพิ่งเตรียมเครื่องมือ",
  },
  {
    code: `df = pd.<span class="code-function">read_csv</span>(<span class="code-string">"data/footballers.csv"</span>)`,
    title: "ขั้นที่ 2: อ่านไฟล์เข้ามาเป็นตาราง",
    text: "<code>df</code> ย่อมาจาก DataFrame ซึ่งหมายถึง “ตารางข้อมูล” บรรทัดนี้ยังไม่ได้วิเคราะห์ แต่เก็บไฟล์ไว้ในตัวแปรเพื่อเรียกใช้ต่อ",
    output: "อ่านไฟล์สำเร็จ → เก็บไว้ในตัวแปร df",
  },
  {
    code: `df.<span class="code-function">head</span>()`,
    title: "ขั้นที่ 3: แอบดู 5 แถวแรก",
    text: "เราไม่พ่นตารางทั้งไฟล์ เพราะอ่านยากและอาจใหญ่เกินไป <code>head()</code> ช่วยให้เห็นชื่อคอลัมน์และตัวอย่างข้อมูลอย่างรวดเร็ว",
    output: "name       club              age  overall\nLionel Messi Inter Miami       37   90\nCristiano Ronaldo Al Nassr      39   86\nKylian Mbappe Real Madrid      26   91\n... 2 แถวถัดไป",
  },
  {
    code: `df.<span class="code-function">info</span>()`,
    title: "ขั้นที่ 4: ตรวจชนิดข้อมูลและช่องว่าง",
    text: "<code>info()</code> บอกจำนวนข้อมูลในแต่ละคอลัมน์และชนิดของมัน เช่น number หรือ text ถ้าจำนวนน้อยกว่าแถวทั้งหมด แปลว่าอาจมีข้อมูลหาย",
    output: "RangeIndex: 20 entries\nheight_cm  19 non-null  float64  ← มีค่า missing 1 จุด\noverall    20 non-null  int64",
  },
];

const stepCode = document.querySelector("#step-code code");
const stepOutput = document.querySelector("#step-output p");
const stepExplanation = document.querySelector("#step-explanation");
const nextStep = document.querySelector("#next-step");
let step = 0;
function renderSteps() {
  stepCode.innerHTML = step ? codeSteps.slice(0, step).map((item, index) => `<span class="code-line" data-line="${index + 1}">${item.code}</span>`).join("") : '<span class="code-muted"># กดปุ่มด้านซ้าย เพื่อเริ่มดูโค้ดทีละบรรทัด</span>';
  const current = codeSteps[step - 1];
  stepExplanation.innerHTML = current ? `<h4>${current.title}</h4><p>${current.text}</p>` : "<h4>เริ่มอย่างช้า ๆ</h4><p>เราจะเพิ่มโค้ดครั้งละบรรทัด แล้วดูว่ามันมีหน้าที่อะไร</p>";
  stepOutput.textContent = current ? current.output : "ผลลัพธ์จะปรากฏที่นี่";
  document.querySelector("#step-count").textContent = `${step} / ${codeSteps.length} steps`;
  nextStep.textContent = step === codeSteps.length ? "ครบทุกขั้นแล้ว ✓" : step === 0 ? "แสดงบรรทัดแรก →" : "แสดงขั้นถัดไป →";
  nextStep.disabled = step === codeSteps.length;
}
nextStep.addEventListener("click", () => { step += 1; renderSteps(); });
document.querySelector("#reset-steps").addEventListener("click", () => { step = 0; renderSteps(); });
renderSteps();

const scenes = [
  { title: "ฉากที่ 1: เริ่มรอบแรก", text: "For loop หยิบคนแรกออกจากรายการมาใส่ใน <code>player</code> ตอนนี้ player คือ Kylian Mbappe อายุ 26 ปี", player: "Kylian Mbappe", age: 26, result: [] },
  { title: "ฉากที่ 2: ตรวจเงื่อนไข", text: "Python ถามว่า 26 น้อยกว่า 25 หรือไม่? คำตอบคือไม่ จึงยังไม่เพิ่มชื่อเข้า <code>young_players</code>", player: "Kylian Mbappe", age: 26, result: [] },
  { title: "ฉากที่ 3: รอบถัดไป", text: "Loop หยิบคนต่อไปมาใส่ player คือ Jude Bellingham อายุ 21 ปี คราวนี้เงื่อนไขเป็นจริง", player: "Jude Bellingham", age: 21, result: [] },
  { title: "ฉากที่ 4: เก็บผล", text: "เพราะ 21 น้อยกว่า 25 จึงใช้ <code>append()</code> เพิ่มชื่อ Jude ลงท้ายรายการ จากนั้น loop จะวนต่อคนถัดไปด้วยรูปแบบเดิม", player: "Jude Bellingham", age: 21, result: ["Jude Bellingham"] },
];
let scene = 0;
const sceneTrack = document.querySelector("#scene-track");
const sceneExplanation = document.querySelector("#scene-explanation");
const nextScene = document.querySelector("#next-scene");
function renderScene() {
  const item = scenes[scene - 1];
  sceneExplanation.innerHTML = item ? `<h4>${item.title}</h4><p>${item.text}</p>` : "<h4>ก่อนเริ่ม</h4><p>รายการ <code>young_players</code> ยังว่างอยู่ และ loop ยังไม่ได้หยิบข้อมูลคนใดขึ้นมา</p>";
  sceneTrack.innerHTML = item ? `
    <div class="loop-state current"><b>player</b><span>{ name: "${item.player}", age: ${item.age} }</span></div>
    <div class="loop-state"><b>ตรวจ</b><span>${item.age} &lt; 25 → <strong>${item.age < 25 ? "จริง ✓" : "ไม่จริง ✗"}</strong></span></div>
    <div class="loop-state"><b>ผลสะสม</b><span>young_players = <span class="list-pills">${item.result.length ? item.result.map(name => `<em>"${name}"</em>`).join("") : "[]"}</span></span></div>` : '<div class="scene-empty">กด “เริ่มฉากที่ 1” เพื่อดูการทำงานทีละรอบ</div>';
  document.querySelector("#scene-count").textContent = `${scene} / ${scenes.length} scenes`;
  nextScene.textContent = scene === scenes.length ? "ดูครบทุกฉากแล้ว ✓" : scene === 0 ? "เริ่มฉากที่ 1 →" : "ฉากถัดไป →";
  nextScene.disabled = scene === scenes.length;
}
nextScene.addEventListener("click", () => { scene += 1; renderScene(); });
document.querySelector("#reset-scenes").addEventListener("click", () => { scene = 0; renderScene(); });
renderScene();

document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => {
  const isSteps = tab.dataset.lab === "steps";
  document.querySelectorAll(".tab").forEach(item => { item.classList.toggle("active", item === tab); item.setAttribute("aria-selected", String(item === tab)); });
  document.querySelector("#steps-panel").classList.toggle("active", isSteps);
  document.querySelector("#steps-panel").hidden = !isSteps;
  document.querySelector("#loop-panel").classList.toggle("active", !isSteps);
  document.querySelector("#loop-panel").hidden = isSteps;
}));

document.querySelector("#reveal-error").addEventListener("click", () => {
  document.querySelector("#traceback").hidden = false;
  document.querySelector("#error-guide").innerHTML = `
    <p class="eyebrow">วิธีอ่านทีละส่วน</p>
    <div class="error-breakdown">
      <div><b>1. ชื่อ Error</b><p><code>KeyError</code> หมายถึง Python หา “ชื่อที่ระบุ” ไม่เจอ ใน Pandas มักหมายถึงชื่อคอลัมน์ไม่ตรง</p></div>
      <div><b>2. คำใบ้</b><p>คำในเครื่องหมาย quote คือ <code>'overal'</code> ให้เปรียบเทียบกับชื่อคอลัมน์จริง — ในไฟล์ใช้ <code>overall</code> มีตัว <code>l</code> สองตัว</p></div>
      <div><b>3. แก้อย่างมีหลัก</b><p>รัน <code>df.columns</code> เพื่อดูชื่อคอลัมน์ทั้งหมด แล้วแก้เป็น <code>df["overall"].mean()</code> อย่าเปลี่ยนชื่อแบบเดาสุ่ม</p></div>
    </div>`;
});
