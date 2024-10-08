// loop --------------------------------------------------------

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let i = 0;
while (i <= 10) {
    console.log(i)
}
// ARRAY --------------------------------------------------------

// const arr = ['Totota',2,true] // ควรใช้ดาต้าไทป์ที่เป็น ชนิดเดียวกัน!

// const cars = ['Toyota', 'BMW', 'Honda']
//  cars.length // 3 ( -1 เสมอ ) เช็คว่ามีจำนวนสมาชิกกี่ตัว
//  cars[cars.length-1]
//  cars[2] = 'Suzuki' // เพิ่มค่าเข้าแทนที่ Readdsigh ค่า 
//----------------------------------------------
//  for (let i = 0; i < cars.length; i++) {
//     console.log('for',cars[i])
//  }
// ---------------------------------------------
//  let i = 0
//  while (i< cars0.length) {
//     console.log('while', cars0[i]);
//         i++;
//  }
//ARRAY METHOD----------------------------------------------------

const cars = ['Toyota', 'BMW', 'Honda'];
cars.pop()  // ['Toyota', 'BMW']
cars.push('Benz')
cars.shift() // ['BMW', 'Honda']
cars.unshift('BMX')

cars.sort()// A-Z
cars.reverse() // Z-A

//JAVASCRIPT OBJECT----------------------------------------------

const person = {
    firstName: 'Hana',
    lastName: 'Tabaki',
    age: 17,
    isMale: false,
    sister: {
        firstName: 'Kaiko',
        lastName: 'Tabaki',
        age: 12,
        isMale: false
    },
};
person.sister.firstName = 'Katarina'

//----------------------- Break --------------------------------

const Friend = [
    {
        firstName: 'Hana',
        lastName: 'Tabaki',
        age: 17,
        sister: {
            firstName: 'Kaiko',
            lastName: 'Tabaki',
            age: 12,
            isMale: false
        },
    },
    {
        firstName: 'Hana',
        lastName: 'Tabaki',
        age: 17,
        sister: {
            firstName: 'Kaiko',
            lastName: 'Tabaki',
            age: 12,
            isMale: false
        },
    },
    {
        firstName: 'Hana',
        lastName: 'Tabaki',
        age: 17,
        sister: {
            firstName: 'Kaiko',
            lastName: 'Tabaki',
            age: 12,
            isMale: false
        },
    },
];

// const ar = [[1,2,3],[1,2,4]]  Array ซ้อนกันได้เยอะ ๆๆ

const peoples = [
    { name: "Solo", age: 23 },
    { name: "Luffy", age: 22 },
    { name: "Ace", age: 24 },
];

const peopleMore:{
    name: string;
    age: number;
}[] = [];
// HARD
for (let i = 0; i< peoples.length; i++ ) {
    if (peoples[i].age > 18) {
        peoples.push(peoples[i]);
    }
} 


const products = [
    { price: 100 },
    { price: 200 },
    { price: 150 },
    { price: 300 },
    { price: 250 },
];
function updatePriceWithForLoop(
    products: {
        price: number;
    }[]
) {
    const m: {
        price: number;
    }[] = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > 150) {
            m.push(products[i])
        }
    }
    // update 10 persent
    for (let i = 0; i < m.length; i++) {
        m[i].price = m[i].price * 1.1;
    }
    return m;
}
//-----------------------------------------------

function updatesPrice(products: {
    price: number;
}[]) {
    return products.filter(function (element, index) {
        return element.price > 150
    }).map(function (element, index) {
        price: element.price * 1.1
    }
    );
}
console.log(products)

//------------------------------------------------

const numB = [1, 2, 3, 4, 5] // Change into [ '1','2','3','4','5' ]

// Hard-------------------------------------------

function convertToArrayString(array: number[]) {
    const result: string[] = [];
    for (let i = 0; i < numB.length; i++) {
        result.push(array[i].toString())
    }
    return result
}
console.log(convertToArrayString(numB))

// Easy--------------------------------------------

function convertToArrayStringWithMap(array: number[]) {
    return array.map(function (element, index) {
        return element.toString()
    })
}
console.log(convertToArrayStringWithMap(numB))

//-------------------------------------------------

const names = ["John Doe", "Jane Smith", "Jack Brown"]; // ให้เปลี่ยนค่าต่างๆ ใช้ map

function cutNameWithMap(array: string[]) {
    return array.map(function (element, index) {
        const cutName = element.split(" ") // ["John", "Doe"]
        return {
            firstName: cutName[0],
            LastName: cutName[1]
        }
    })
}
console.log(cutNameWithMap(names))

//--------------------------------------------------

const personN = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}
console.log(personN.getFullName())

//----------------------------------------------------

const  inventory = {
    name: 'Laptop Store',
    quantity: 5,
    isAvailable: function() {
        return this.quantity > 0
    }
}
console.log(inventory.isAvailable())

//------------------------------------------------------

const account = {
    name: 'ออมกับใคร',
    balance: 0,
    deposit: function(amount: number) {
        if ( amount < 0 ) {
            console.log('กรุณาระบุจำนวนเงิน')
            return
        }
        this.balance = this.balance + amount
        console.log('ฝากเงิน' + amount + 'เรียบร้อยแล้ว'+ 'ยอดคงเหลือคือ' + this.balance) 
    },
    withdraw: function(amount: number) {  // ถอนตังค์
        if (amount > this.balance) {
            console.log('เงินไม่พอ คุณมียอดเงินคงเหลือแค่' + this.balance)
            return
        }
        this.balance = this.balance - amount
        console.log('ถอนเงินจำนวน' + amount + 'ยอดเงินคงเหลือของคุณคือ' + this.balance)
    }
}

//-------------------------------------------------------------------------------------

const database_ = [
    {
        "year": 2024,
        "weeknum": 34,
        "province": "บุรีรัมย์",
        "new_case": 6,
        "total_case": 578,
        "new_case_excludeabroad": 6,
        "total_case_excludeabroad": 578,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สุรินทร์",
        "new_case": 16,
        "total_case": 702,
        "new_case_excludeabroad": 16,
        "total_case_excludeabroad": 702,
        "new_death": 0,
        "total_death": 11,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ตราด",
        "new_case": 2,
        "total_case": 335,
        "new_case_excludeabroad": 2,
        "total_case_excludeabroad": 335,
        "new_death": 0,
        "total_death": 4,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สงขลา",
        "new_case": 10,
        "total_case": 1029,
        "new_case_excludeabroad": 10,
        "total_case_excludeabroad": 1029,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "เพชรบูรณ์",
        "new_case": 1,
        "total_case": 413,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 413,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "พิษณุโลก",
        "new_case": 13,
        "total_case": 483,
        "new_case_excludeabroad": 13,
        "total_case_excludeabroad": 483,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "กาฬสินธุ์",
        "new_case": 3,
        "total_case": 237,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 237,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ราชบุรี",
        "new_case": 5,
        "total_case": 591,
        "new_case_excludeabroad": 5,
        "total_case_excludeabroad": 591,
        "new_death": 0,
        "total_death": 7,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ระนอง",
        "new_case": 0,
        "total_case": 4,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 4,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "เชียงราย",
        "new_case": 1,
        "total_case": 188,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 188,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สตูล",
        "new_case": 0,
        "total_case": 12,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 12,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ยะลา",
        "new_case": 1,
        "total_case": 107,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 107,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ชลบุรี",
        "new_case": 12,
        "total_case": 3011,
        "new_case_excludeabroad": 12,
        "total_case_excludeabroad": 3011,
        "new_death": 0,
        "total_death": 18,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สระบุรี",
        "new_case": 3,
        "total_case": 287,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 287,
        "new_death": 0,
        "total_death": 7,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "อ่างทอง",
        "new_case": 0,
        "total_case": 136,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 136,
        "new_death": 0,
        "total_death": 5,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ระยอง",
        "new_case": 2,
        "total_case": 461,
        "new_case_excludeabroad": 2,
        "total_case_excludeabroad": 461,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ชัยนาท",
        "new_case": 0,
        "total_case": 45,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 45,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ประจวบคีรีขันธ์",
        "new_case": 1,
        "total_case": 240,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 240,
        "new_death": 0,
        "total_death": 4,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สกลนคร",
        "new_case": 3,
        "total_case": 81,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 81,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นราธิวาส",
        "new_case": 0,
        "total_case": 66,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 66,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ปัตตานี",
        "new_case": 0,
        "total_case": 29,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 29,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "อำนาจเจริญ",
        "new_case": 0,
        "total_case": 48,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 48,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "พัทลุง",
        "new_case": 0,
        "total_case": 155,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 155,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ปทุมธานี",
        "new_case": 2,
        "total_case": 671,
        "new_case_excludeabroad": 2,
        "total_case_excludeabroad": 671,
        "new_death": 0,
        "total_death": 3,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ฉะเชิงเทรา",
        "new_case": 1,
        "total_case": 267,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 267,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "จันทบุรี",
        "new_case": 4,
        "total_case": 765,
        "new_case_excludeabroad": 4,
        "total_case_excludeabroad": 765,
        "new_death": 0,
        "total_death": 6,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "แม่ฮ่องสอน",
        "new_case": 0,
        "total_case": 41,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 41,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นครพนม",
        "new_case": 0,
        "total_case": 145,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 145,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "แพร่",
        "new_case": 0,
        "total_case": 137,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 137,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สมุทรปราการ",
        "new_case": 3,
        "total_case": 696,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 696,
        "new_death": 0,
        "total_death": 6,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นครนายก",
        "new_case": 0,
        "total_case": 20,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 20,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "เลย",
        "new_case": 1,
        "total_case": 477,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 477,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ขอนแก่น",
        "new_case": 10,
        "total_case": 1208,
        "new_case_excludeabroad": 10,
        "total_case_excludeabroad": 1208,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "กำแพงเพชร",
        "new_case": 3,
        "total_case": 110,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 110,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ปราจีนบุรี",
        "new_case": 1,
        "total_case": 106,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 106,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ศรีสะเกษ",
        "new_case": 1,
        "total_case": 72,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 72,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "เพชรบุรี",
        "new_case": 0,
        "total_case": 246,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 246,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สระแก้ว",
        "new_case": 1,
        "total_case": 416,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 416,
        "new_death": 0,
        "total_death": 11,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "หนองคาย",
        "new_case": 6,
        "total_case": 410,
        "new_case_excludeabroad": 6,
        "total_case_excludeabroad": 410,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "พิจิตร",
        "new_case": 4,
        "total_case": 245,
        "new_case_excludeabroad": 4,
        "total_case_excludeabroad": 245,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "อุทัยธานี",
        "new_case": 3,
        "total_case": 155,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 155,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ทั้งประเทศ",
        "new_case": 569,
        "total_case": 37922,
        "new_case_excludeabroad": 569,
        "total_case_excludeabroad": 37922,
        "new_death": 1,
        "total_death": 200,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "อุตรดิตถ์",
        "new_case": 1,
        "total_case": 215,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 215,
        "new_death": 0,
        "total_death": 5,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สุราษฎร์ธานี",
        "new_case": 10,
        "total_case": 944,
        "new_case_excludeabroad": 10,
        "total_case_excludeabroad": 944,
        "new_death": 0,
        "total_death": 9,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "กระบี่",
        "new_case": 1,
        "total_case": 192,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 192,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สุโขทัย",
        "new_case": 0,
        "total_case": 101,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 101,
        "new_death": 0,
        "total_death": 3,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สิงห์บุรี",
        "new_case": 1,
        "total_case": 163,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 163,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ยโสธร",
        "new_case": 0,
        "total_case": 183,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 183,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "พะเยา",
        "new_case": 15,
        "total_case": 299,
        "new_case_excludeabroad": 15,
        "total_case_excludeabroad": 299,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ร้อยเอ็ด",
        "new_case": 3,
        "total_case": 484,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 484,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "อุดรธานี",
        "new_case": 4,
        "total_case": 663,
        "new_case_excludeabroad": 4,
        "total_case_excludeabroad": 663,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ชัยภูมิ",
        "new_case": 2,
        "total_case": 168,
        "new_case_excludeabroad": 2,
        "total_case_excludeabroad": 168,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นครศรีธรรมราช",
        "new_case": 0,
        "total_case": 669,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 669,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "พังงา",
        "new_case": 0,
        "total_case": 15,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 15,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ภูเก็ต",
        "new_case": 7,
        "total_case": 787,
        "new_case_excludeabroad": 7,
        "total_case_excludeabroad": 787,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นนทบุรี",
        "new_case": 9,
        "total_case": 1059,
        "new_case_excludeabroad": 9,
        "total_case_excludeabroad": 1059,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ไม่ระบุ",
        "new_case": 27,
        "total_case": 1646,
        "new_case_excludeabroad": 27,
        "total_case_excludeabroad": 1646,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ลำปาง",
        "new_case": 3,
        "total_case": 173,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 173,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "มุกดาหาร",
        "new_case": 1,
        "total_case": 84,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 84,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "บึงกาฬ",
        "new_case": 1,
        "total_case": 57,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 57,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นครปฐม",
        "new_case": 1,
        "total_case": 250,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 250,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ลพบุรี",
        "new_case": 2,
        "total_case": 126,
        "new_case_excludeabroad": 2,
        "total_case_excludeabroad": 126,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นครสวรรค์",
        "new_case": 6,
        "total_case": 501,
        "new_case_excludeabroad": 6,
        "total_case_excludeabroad": 501,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สมุทรสาคร",
        "new_case": 6,
        "total_case": 602,
        "new_case_excludeabroad": 6,
        "total_case_excludeabroad": 602,
        "new_death": 0,
        "total_death": 12,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "พระนครศรีอยุธยา",
        "new_case": 1,
        "total_case": 268,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 268,
        "new_death": 0,
        "total_death": 6,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "กาญจนบุรี",
        "new_case": 1,
        "total_case": 65,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 65,
        "new_death": 0,
        "total_death": 12,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "นครราชสีมา",
        "new_case": 21,
        "total_case": 1865,
        "new_case_excludeabroad": 21,
        "total_case_excludeabroad": 1865,
        "new_death": 0,
        "total_death": 4,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สุพรรณบุรี",
        "new_case": 3,
        "total_case": 327,
        "new_case_excludeabroad": 3,
        "total_case_excludeabroad": 327,
        "new_death": 0,
        "total_death": 11,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "กรุงเทพมหานคร",
        "new_case": 299,
        "total_case": 6409,
        "new_case_excludeabroad": 299,
        "total_case_excludeabroad": 6409,
        "new_death": 0,
        "total_death": 17,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "สมุทรสงคราม",
        "new_case": 1,
        "total_case": 102,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 102,
        "new_death": 0,
        "total_death": 4,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "หนองบัวลำภู",
        "new_case": 1,
        "total_case": 78,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 78,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ชุมพร",
        "new_case": 4,
        "total_case": 1131,
        "new_case_excludeabroad": 4,
        "total_case_excludeabroad": 1131,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "อุบลราชธานี",
        "new_case": 4,
        "total_case": 789,
        "new_case_excludeabroad": 4,
        "total_case_excludeabroad": 789,
        "new_death": 0,
        "total_death": 3,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "เชียงใหม่",
        "new_case": 14,
        "total_case": 1006,
        "new_case_excludeabroad": 14,
        "total_case_excludeabroad": 1006,
        "new_death": 1,
        "total_death": 4,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ตาก",
        "new_case": 0,
        "total_case": 341,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 341,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "มหาสารคาม",
        "new_case": 0,
        "total_case": 40,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 40,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ลำพูน",
        "new_case": 0,
        "total_case": 122,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 122,
        "new_death": 0,
        "total_death": 1,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "น่าน",
        "new_case": 0,
        "total_case": 216,
        "new_case_excludeabroad": 0,
        "total_case_excludeabroad": 216,
        "new_death": 0,
        "total_death": 2,
        "update_date": "2024-09-01 19:17:04"
    },
    {
        "year": 2024,
        "weeknum": 34,
        "province": "ตรัง",
        "new_case": 1,
        "total_case": 357,
        "new_case_excludeabroad": 1,
        "total_case_excludeabroad": 357,
        "new_death": 0,
        "total_death": 0,
        "update_date": "2024-09-01 19:17:04"
    }
]

const covid = database.filter(function (element, index) {
    return element.total_death > 5 && element.province !== 'ทั้งประเทศ'
})

const covidDeathOnlyProvince_ = covid0.map(function (element, index) {
    return ({
        province: element.province,
        total_Death: element.total_death
    })
})

console.log(covidDeathOnlyProvince)

// const covid0 = database.filter(function(element, index){
//     return element.total_death > 5 && element.province !== 'ทั้งประเทศ'
// }).map(function(element, index){
//     return({
//         province: element.province,
//         total_Death: element.total_death
//     })
// })