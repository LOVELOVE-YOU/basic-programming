// for loop

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// ตัวแปรในการเก็บจำนวนรอบ 
// let i = 0;
while (i <= 10) {
    console.log(i)
}
// ARRAY --------------------------------------------------------

// const arr = ['Totota',2,true] // ควรใช้ดาต้าไทป์ ชนิดเดียวกัน!

// const cars0 = ['Toyota', 'BMW', 'Honda']
//  cars0.length // 3 ( -1 เสมอ )
//  cars0[cars0.length-1]
//  cars0[2] = 'Suzuki' // เพิ่มค่าเข้าแทนที่ Readdsigh

//  for (let i = 0; i < cars0.length; i++) {
//     console.log('for',cars0[i])
//  }

//  let i = 0
//  while (i< cars0.length) {
//     console.log('while', cars0[i]);
//         i++;
//  }

const cars0 = ['Toyota', 'BMW', 'Honda'];
cars0.pop()  // ['Toyota', 'BMW']
cars0.push('Benz')
cars0.shift() // [ 'BMW', 'Honda']
cars0.unshift('BmX')

cars0.sort()// A-Z
cars0.reverse() // Z-A

//JAVASCRIPT OBJECT----------------------------------------------

const person = {
    firstName: 'Hana',
    lastName: 'Tabaki',
    age: 17,
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
// // Hard
// for (let i = 0; i< peoples.length; i++ ) {
//     const people: = {
//         name: string;
//         age: number;
//     }[] = []
//     } 
// }


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

const numB = [1, 2, 3, 4, 5] // Change into [ '1','2','3','4','5' ]

// Hard-------------------------------------------

function convertToArrayString(arry: number[]) {
    const result: string[] = [];
    for (let i = 0; i < numB.length; i++) {
        result.push(arry[i].toString())
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

const names = ["John Doe", "Jane Smith", "Jack Brown"];

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
    withdraw: function(amount: number) {
        if (amount > this.balance) {
            console.log('เงินไม่พอ คุณมียอดเงินคงเหลือแค่' + this.balance)
            return
        }
        this.balance = this.balance - amount
        console.log('ถอนเงินจำนวน' + amount + 'ยอดเงินคงเหลือของคุณคือ' + this.balance)
    }
}
// This Important