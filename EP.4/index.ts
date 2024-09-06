function BMI(hight1: number, weight1: number) {
    const bmi: number = (weight1 / (hight1 * hight1))
    if (bmi < 18.50) {
        return 'น้ำหนักน้อย / ผอม'
    } else if (bmi >= 18.50 && bmi < 22.90) {
        return 'ปกติ (สุขภาพดี)'
    } else if (bmi >= 23 && bmi < 24.90) {
        return 'ท้วม / โรคอ้วนระดับ 1'
    } else if (bmi >= 25 && bmi < 29.90) {
        return 'อ้วน / โรคอ้วนระดับ 2'
    } else if (bmi > 30) {
        return 'อ้วนมาก / โรคอ้วนระดับ 3'
    }
}
console.log(BMI(1.50, 80))


function SayHi(dayOfweek: number) {
    if (dayOfweek === 1) {
        console.log('สวัสดีวันอาทิตย์')
    } else if (dayOfweek === 2) {
        console.log('สวัสดีวันจันทร์')
    } else if (dayOfweek === 3) {
        console.log('สวัสดีวันอังคาร')
    } else if (dayOfweek === 4) {
        console.log('สวัสดีวันพุทธ')
    } else if (dayOfweek === 5) {
        console.log('สวัสดีวันพฤหัสบดี')
    } else if (dayOfweek === 6) {
        console.log('สวัสดีวันศุกร์')
    } else if (dayOfweek === 7) {
        console.log('สวัสดีวันเสาร์')
    }
}
SayHi(6)




// sayHi(6)

function sayHi(dayOfweek: number) {
    switch (dayOfweek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุทธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
        default:
            console.log('ใส่วันมาผิด')
            break
    }
}
sayHi(2)




function chickenKai(size: string) {
    switch (size) {
        case 's':
            console.log('ผอม')
            break
        case 'm':
            console.log('ผอม')
            break
        case 'l':
            console.log('ท้วม')
            break
        case 'xl':
            console.log('อ้วน')
            break
        case '2xl':
            console.log('อ้วน')
            break
        default:
            console.log('ห้ะ')
            break
    }
}
chickenKai('s')


const x: number = 9999999999999 // ไม่เกิน 15 digits
const y: number = 9999999999999999

console.log('x', x)
console.log('y', y)


const c: number = 0.4  // ทศนิยมไม่เกิน 11 
const d: number = 0.3

console.log(c + d)


const j: number = 0.1  // ทศนิยมด้านหลังจะหาย จาก 0.30000 เป็น 0.3
const h: number = 0.2

console.log((j * 10 + h * 10) / 10)

const a: number = 46
const b: number = 41

console.log(a * b)

const x0: number = 46
console.log(x0.toString())  // number to string



const x1: number = 46.56789098
console.log(x1.toFixed(2)) // ออกมาไม่ใช่ตัวเลข (45)จะออกมา "45"


const y1: number = 1000000
console.log(y1.toLocaleString()) // ใส่ให้ = 1,000,000




function fixedDecimal(n: number, digit: number) {
    const x = n.toFixed(digit)
    return x
}
console.log(fixedDecimal(40, 5))



function fixedNumber(c: number) {
    const y = c.toLocaleString()
    return y
}
console.log(fixedNumber(1000))



const stc: string = "อัญชนา กิน นอน สลีป อีท ซุ่ยเจี้ยว ชือ"

console.log(str.length)


const sta: string = "Hello"

console.log(sta.length)


const ort: string = "อัญชนา กิน นอน สลีป อีท ซุ่ยเจี้ยว ชือ"

console.log(ort.charAt(10))


const sto: string = "   อัญชนา กิน นอน สลีป อีท ซุ่ยเจี้ยว ชือ   "

console.log(sto.trim())


const stu: string = "Anchana"

console.log(stu.toUpperCase())
console.log(stu.toLowerCase())


function checkStringLength(a: string) {
    const y = a.length
    console.log(y)
}
checkStringLength('ไก่ทอดที่อร่อยต้องทำมากจากไก่ที่เลี้ยงอย่างดีในอุณหภูมิที่เหมาะสมโดยไก่ต้องมีขนที่เงางามแม้เราจะไม่ได้รับประทานส่วนขนเข้าไปก็ตาม ค่ะท่าน')


function stv(agreement: string, index: number) {
    return agreement.charAt(index)
}
console.log(stv('drinking a cup of water', 0))



function bebe(agreement: string, index: number) {   // อีกวิธีในการเขียน สามารถ ส่งออกค่าและรีเทินได้ หรือทำแบบด้านบน
    const a = agreement.charAt(index)
    return a
}
console.log(bebe('drinking a cup of water', 0))




const stt: string = 'อยากกลับบ้าน'

console.log(stt.indexOf('ย')) // หาว่าอยู่ตัวที่เท่าไหร่


const ppr: string = 'หว่ออ้ายหนี่'

console.log(ppr.includes('เธอ'))


function checkTheWord(agreement: string, search: string) {
    if (agreement.includes(search)) {
        console.log(agreement.indexOf(search))
    } else {
        console.log('Not found')
    }
}

checkTheWord('อยากกลับบ้านครับ', 'แมว')