Document

- [วิธีเริ่มทำงาน](วิธีเริ่มทำงาน)
- [วิธีรวมงานของตัวเองเข้ากับงานของคนอื่น](วิธีรวมงานของตัวเองเข้ากับงานของคนอื่น)

# ข้อควรระวัง
- เราไม่ควร commit ขึ้น main โดยตรง เนื่องจากถ้า commit ของเรามันดันทำงานทั้งหมดรันไม่ได้ เป็นเรื่องที่เหนื่อยมากในการแก้ไขให้กลับมาเหมือนเดิม
แล้วยิ่ง เป็น web application main น่าจะเหมือนเป็น ตัว deployable ทำให้ถ้า main พัง web จริงๆเราก็อาจพังไปด้วย

# วิธีเริ่มทำงาน
### clone repo เข้ามาในเครื่องของตัวเอง
```
git clone git@github.com:vitvara/exceed-food-assignment.git
```
เข้าไปใน directory ของ exceed-food-assignment
```
cd ~/exceed-food-assignment
```
### สร้าง branch มาทำงานของตัวเอง

คำสั่งสร้าง branch ใหม่
```
git branch <ชื่อ branch ขอมีความหมาย เช่น component-search or component-recipes>
```
เราไม่แน่ใจเหมือนกันว่าควรตั้งชื่อประมาณไหน ไม่เคยทำfrontend5555 ขอโทดด้วยค๊าบ
### เข้าไปที่ branch ที่สร้างมา

คำสั่งเปลี่ยน branch
```
git checkout <ชื่อ branch>
```
คำสั่งเช็คว่าเรากำลังอยู่ใน branch ไหน
```
git branch
```
ex.
<img width="530" alt="image" src="https://user-images.githubusercontent.com/69972884/152742901-f133f823-78b8-427a-aab5-1a4072781c74.png">

* สีเขียวคือ branch ที่เรากำลังทำงานอยู่

### เวลาทำงาน

ควร commit บ่อยๆ เวลาเราทำอะไรผิดพลาดไปจะได้สามารถกลับไปแก้ใขได้
```
git commit -m "<message>"
```
พยายามเขียน message ให้รู้ว่าเราcommit อะไรไปเช่น
เราทำ search box เสร็จ ก็ commit ว่า "finish functional search box"
หรือถ้าเราทำเสร็จแค่ styling ก็ พิมว่า "Done search box styling"
ประมาณนี้ เอาให้เข้าใจอ่ะว่าทำอะไรไป55555

การ push ครั้งแรก
เมื่อเราสร้าง branch ใหม่มา การ push มันจะแตกต่างกับการ push ธรรมดานิดนึง
```
git push -u origin <ชื่อ branch>
```

# วิธีรวมงานของตัวเองเข้ากับงานของคนอื่น
(ทำต่อเมื่อทำงานของตัวเองเสร็จแล้ว)

commit push งานทุกอย่างของเราที่ทำเสร็จแล้วขึ้น github (push ขึ้น branch ของตัวเองนะ)
สร้าง pull request ล่ะ เลือกคนซักคนมา reviews งานของตัวเองเพื่อกันผิดพลาด
แล้วก็ค่อย merge เข้า main.



