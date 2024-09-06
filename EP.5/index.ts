const n: number = 50.515 // 50 = Int , 50.25 = Float
console.log(n.toFixed(5)) // เพิ่มทศนิยม ไม่ควรเกิน 17 เพราะจะเริ่มเพี้ยน และผลจะออกมาเป็นString
console.log(Number(n.toFixed(5))) // string to number

const nameF: string = 'แคทเทอรีน เวนิไลก้า'
console.log(nameF.slice(10, 20))

const ste: string = 'แคทเทอรีน เวนิไลก้า แอปเปิ้ล ส้ม แตงโม มะกรูด ใบไม้ มะพร้าว ไก่ไข่'
console.log(ste.slice(ste.indexOf('แอปเปิ้ล'), ste.indexOf('แอปเปิ้ล') + "แอปเปิ้ล".length))

const stn: string = 'ปีโป้ ชอบกินไก่ หิวข้าว Chicken fruits'
console.log(stn.split(" "))
// ["ปีโป้", "ชอบกินไก่", "หิวข้าว", "Chicken", "fruits"] หลังมิดเทอม

const nameA: string = 'แคทเทอรีน เวนิไลก้า'
console.log(nameA.replace('เวนิไลก้า', 'เบลเซบัซ'))

const nameB: string = 'ยายแล่ม เมื่อตอนสาว ๆ ผิวขาว ตามคม ยายแล่ม'
console.log(nameB.replaceAll('ยายแล่ม', 'โรนัลโด'))  // แทนคำนั้นทุกคำ replaceAll

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