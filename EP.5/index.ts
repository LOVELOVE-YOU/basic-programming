const n: number = 50.515 // 50 = Int , 50.25 = Float
console.log(n.toFixed(5)) // เพิ่มทศนิยม ไม่ควรเกิน 17 เพราะจะเริ่มเพี้ยน และผลจะออกมาเป็นString
console.log(Number(n.toFixed(5))) // string to number

const str: string = 'แคทเทอรีน เวนิไลก้า'
console.log(str.slice(11, 20))

const str: string = 'แคทเทอรีน เวนิไลก้า แอปเปิ้ล ส้ม แตงโม มะกรูด ใบไม้ มะพร้าว ไก่ไข่'
console.log(str.slice(str.indexOf('แอปเปิ้ล'), str.indexOf('แอปเปิ้ล') +  "แอปเปิ้ล".length))

const str: string = 'ปีโป้ ชอบกินไก่ หิวข้าว Chicken fruits'
console.log(str.split)(" ")
// ["ปีโป้", "ชอบกินไก่", "หิวข้าว", "Chicken", "fruits"] หลังมิดเทอม

const str: string = 'แคทเทอรีน เวนิไลก้า'
console.log(str.replace('เวนิไลก้า', 'เบลเซบัซ'))

const str: string = 'ยายแล่ม เมื่อตอนสาว ๆ ผิวขาว ตามคม ยายแล่ม'
console.log(str.replaceAll('ยายแล่ม', 'โรนัลโด'))  // แทนคำนั้นทุกคำ replaceAll

const str: string = 'นายทดสอบ สุดสวย'
console.log(str.replace('นาย', ''))

function getPrefix(fullName: string) {
    if (fullName.includes('นาย'))
        return 'นาย'
    else if (fullName.includes('นางสาว'))
        return 'นางสาว'
    else
        return 'unknow'
}

console.log(getPrefix('นางสาวไก่ย่าง อารีรักษ์'))