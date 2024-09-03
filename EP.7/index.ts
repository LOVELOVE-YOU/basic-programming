const score = [10, 23, 26, 30, 33]

let sum: number = 0

for (let i = 0; i < score.length; i++ ) {
    sum = sum + score[i]
}

let avg = sum / score.length
console.log("Total: ", sum)
console.log("avg: ", avg)

//------------------------------------------------------------------

const myStudents: string = "บ๊อบบี้, ปีโป้, จัมโบ้, โปเตโต้, มีด, อีโต้"
const muStudentsArray: string[] = myStudents.split(',')
console.log(myStudents)
console.log(muStudentsArray[0]) //ดึงออกมาเป็นคำ Ex. "บ๊อบบี้"

//-------------------------------------------------------------------

const fullName: string = 'สุดสวย สวยสุด'

console.log(fullName.split(' ')[1]) //"สวยสุด"

console.log(fullName.slice(0, fullName.indexOf(' ')))

//-------------------------------------------------------------------

const myAnimals: string = 'แมวเหมียว*หมาบ้อกแบ้ก*คาปิบาร่าบรึ๋นๆ*แพนด้าหนี่ห่าว'
const myAnimalsArray: string[] = myAnimals.split('*')

console.log(myAnimalsArray)

//--------------------------------------------------------------------

const myAnimals: string = 'แมวเหมียว*หมาบ้อกแบ้ก*คาปิบาร่าบรึ๋นๆ*แพนด้าหนี่ห่าว'
const myAnimalsArray: string[] = myAnimals.split('*')

//console.log(myAnimalsArray)

console.log('ตั้งต้น: ', myAnimalsArray) // [LOG]: "ตั้งต้น: ",  ["แมวเหมียว", "หมาบ้อกแบ้ก", "คาปิบาร่าบรึ๋นๆ", "แพนด้าหนี่ห่าว"] 

myAnimalsArray.pop() // เอาตัวสุดท้าออก

console.log('เอาตัวสุดท้าออก: ', myAnimalsArray) // [LOG]: "เอาตัวสุดท้าออก: ",  ["แมวเหมียว", "หมาบ้อกแบ้ก", "คาปิบาร่าบรึ๋นๆ"]

myAnimalsArray.push('Chicken') // ใส่ต่อท้าย 

console.log('ใส่ต่อท้าย: ', myAnimalsArray) //[LOG]: "ใส่ต่อท้าย: ",  ["แมวเหมียว", "หมาบ้อกแบ้ก", "คาปิบาร่าบรึ๋นๆ", "Chicken"]

myAnimalsArray.shift() // เอาตัวหน้าออก

console.log('เอาตัวหน้าออก: ', myAnimalsArray)

myAnimalsArray.unshift('FindingNemo') // ใส่ตัวหน้า

console.log('ใส่ตัวหน้า: ', myAnimalsArray) // [LOG]: "ใส่ตัวหน้า: ",  ["FindingNemo", "หมาบ้อกแบ้ก", "คาปิบาร่าบรึ๋นๆ", "Chicken"] 

//--------------------------------------------------------------------

const fruits = ["Orange", "Mango", "Drangonfruit", "Strawberry"]

fruits.sort() // เรียง A - Z
console.log('เรียง A - Z: ', fruits)
fruits.reverse() // เรียง Z - A
console.log('เรียง Z - A: ', fruits)

const fruitsSlice = fruits.slice(0,2)

console.log('ตัดออก: ', fruitsSlice)

// EX:
const bestName: string = "เปเป้อ,แฮม,ชีสเค้ก,เพนนี"
const bestNameArray: string[] = bestName.split(',')
console.log(bestNameArray)
// [LOG]: ["เปเป้อ", "แฮม", "ชีสเค้ก", "เพนนี"] 
bestNameArray.sort()
console.log('เรียง ก - ฮ: ', bestNameArray)
// [LOG]: "เรียง ก - ฮ: ",  ["ชีสเค้ก", "เปเป้อ", "เพนนี", "แฮม"] 
bestNameArray.reverse()
console.log('เรียง ฮ - ก: ', bestNameArray)
// [LOG]: "เรียง ฮ - ก: ",  ["แฮม", "เพนนี", "เปเป้อ", "ชีสเค้ก"] 

//------------------------------------------------------------------------

const me = {
    firstName: 'Catterine',
    lastName: 'Evanezl',
    age: 15,
    address: 'House No.46',
    villageNo: 9,
    road: 'Bang Sue',
    subDistrict: 'Bang Sue sub-district',
    district: 'Bang Sue district',
    province: 'Bangkok',
    postalCode: 10800,
    number: 803-980-1300,
    phoneNumber: 107-894-3795,
    email: 'Babyb0y@gmail.com'
}

// ประวัติส่วนตัว

// ชื่อ: แคทเทอรีน
// นามสกุล: อีวาเนซล์
// อายุ: 15
// ที่อยู่ปัจจุบันเลขที่: บ้านเลขที่ 46
// หมู่ที่: หมู่ 9
// ถนน: บางซื่อ
// ตำบล/แขวง: แขวงบางซื่อ
// อำเถอ/เขต: เขตบางซื่อ
// จังหวัด: กรุงเทพมหานคร
// รหัสไปรษณีย์: 10800
// โทรศัพท์: 803-980-1300
// มือถือ: 107-894-3795
// อีเมล์: Babyb0y@gmail.com
