Document
- [วิธีเริ่มทำงาน](https://github.com/vitvara/exceed-food-assignment/blob/main/How_to.md#%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%84%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%87)
- [วิธีทำงาน ร่วมกับ git](https://github.com/vitvara/exceed-food-assignment/edit/main/How_to.md#%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%A1%E0%B8%81%E0%B8%B1%E0%B8%9A-git)
- [วิธีรวมงานของตัวเองเข้ากับงานของคนอื่น](https://github.com/vitvara/exceed-food-assignment/edit/main/How_to.md#%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%99%E0%B8%AD%E0%B8%B7%E0%B9%88%E0%B8%99)

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

# วิธีทำงานร่วมกับ git

เราจะเอางานของเราขึ้น github มันจะมีอยู่ประมาณ 3 ขั้นตอน

```
git add <filename/foldername>
OR
git add . # all file/folder in current directory
```
(การทำแบบนี้เหมือนการนำข้อมูลการเปลี่ยนแปลงของ file นั้นๆใส่ลงกล่อง commit)

```
git commit -m <message>
```
(การทำแบบนี้เหมือนกับการที่เราเอาสก็อตเทปปิดกล่องcommitเตรียมส่ง)

```
git push
```
(การทำแบบนี้เหมือนกับการนำกล่องส่งให้github)

เพียงเท่านี้งานของเราก็จะถูกส่งไปที่ github

# วิธีรวมงานของตัวเองเข้ากับงานของคนอื่น
(ทำต่อเมื่อทำงานของตัวเองเสร็จแล้ว)

commit push งานทุกอย่างของเราที่ทำเสร็จแล้วขึ้น github (push ขึ้น branch ของตัวเองนะ)
สร้าง pull request ล่ะ เลือกคนซักคนมา reviews งานของตัวเองเพื่อกันผิดพลาด
แล้วก็ค่อย merge เข้า main.



 
