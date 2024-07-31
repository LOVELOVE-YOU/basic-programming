function helloWorld() {
  console.log("สวัสดี")
}
helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
}


helloName('Max') // มี input ไม่มี output

function getPI() {
    return 
}

console.log(getPI()) // ไม่มี input แต่มี output

function st(fname: string, sname: string) {
if (fname === 'mix' && sname === 'zane'){
console.log('เริ่มสอน')
}else {
    console.log('ไม่สอน')
}
}
st('mix', 'zane')


function Gn(Fname: string, Sname: string, Tname: string) {
    if ((Fname === 'mix' || Sname === 'zane') && Tname === 'forth') {
        console.log('เริ่มสอน')
    }else {
    console.log('ไม่สอน')
}
st('m', 'zane', 'forth')

function Soilder(sex: string, hight: number, weight: number) {    // เข้ารับการเกณฑ์ทหารหรือไม่
if (sex === 'เพศชาย' && ( hight >= 170 || weight > 50 && weight <= 110 ) ) {
    console.log("ัจับใบดำใบแดง")
}else {
} console.log("ไม่เข้าเกณฑ์")
}
Soilder('เพศชาย', 189, 68)



function DigitalW (age: number, salary: number, deposit: number ) {  // คำนวณการได้รับ เงินดิจิตอลวอเล็ต  100000 บาท 
    if (age >= 16 && ( salary <= 70000 && deposit <= 500000 ) ) {
        console.log("รับ 10000 บาท") 
    }else{
        console.log("อดเงิน โฮร่")
    }
}
DigitalW( 18, 25000, 1000 )



function BMI( hight1: number, weight1: number ) {     // การหาค่า BMI 
    let bmi: number = ( weight1 / ( hight1 * hight1 ) ) 
    if ( bmi < 18.50 ) {
        return 'น้ำหนักน้อย / ผอม'
    }else if ( bmi >= 18.50 && bmi < 22.90 ) {
        return 'ปกติ (สุขภาพดี)'
    }else if ( bmi >= 23 && bmi < 24.90 ) {
        return 'ท้วม / โรคอ้วนระดับ 1'
    }else if ( bmi >= 25 && bmi < 29.90 ) {
        return 'อ้วน / โรคอ้วนระดับ 2'
    }else if ( bmi > 30 ) {
        return 'อ้วนมาก / โรคอ้วนระดับ 3' }
}
console.log(BMI (1.50, 54 ))  // ส่วนสูงใส่เป็นเมตร m