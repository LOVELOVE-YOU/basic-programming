// for loop-----------------------

let sum: number = 0

for (let i = 1; i <= 365; i++) {
    sum = sum + i
}
console.log('Total: ', sum) 


// while loop--------------------

let sum: number = 0
let i: number = 1
while(i <= 31) {
    sum = sum + i
    i++
}

console.log('Total: ', sum)

// the do while loop-------------

let sum: number = 0
let i: number = 1

do{
    sum = sum + i
    i++
} while(i <= 31)

console.log('Total: ', sum)


// break loop----------------

let count: number = 0

while(true) {
    console.log("Deading")
    count++
    if(count === 10000000) {
        break
    }
}


// EX:
for (let i = 1; i <= 19; i++) {
    console.log('Im ' + i + ' years') 
    }
    
    let i: number = 1
    while (i <= 13) {
        console.log('Im ' + i + ' years')
        i++
    }
    
    let i: number = 1
    do {
        console.log('Im ' + i + ' years')
        i++
    } while(i <= 19)



const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda']
const num: number[] = [1, 2, 3, 4, 5]
const bool: boolean[] = [true, true, false, false]

//const str: string = 'ชอบก็จัดประหยัดทำไม'
//console.log(str.charAt(2))

const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda', 'BYD']
//console.log(cars[2].length)

//cars[2] = 'Isuzu'
//console.log(cars[2]) //change but not in the code



const cars: string[] = ['Toyota', 'Honda', 'Suzuki', 'Yamaha', 'Mazda', 'BYD']

for(let i = 0; i < cars.length; i++) {
    if (cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง จะแรงได้ไง')
    }
}

//const str: string = 'Elizabeth'
//console.log(str.indexOf('b'))


//--------------------------------------------------------------------

// Practice 00
const friends: string[] = ['Bobby', 'Nike', 'Josh', 'Sara', 'Tommy']

for(let i = 0; i < friends.length; i++) {
    if(friends[i] === 'Sara') {
        console.log('Let get eating bro')
    }
}

//---------------------------------------------------------------------

// Practice 01
const numberxo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   //ประกาศตัวแปร

for(let i = 0; i < numberxo.length; i++) {
    if(numberxo[i] === 3 || numberxo[i] === 5 ||numberxo[i] === 7) {  // ถ้า สมาชิกนั้นเป็นเลข 3 || 5 || 7 
        numberxo[i] = 0  // replace with 0
    }
}

console.log(numberxo) // for checking the result
