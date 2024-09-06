function add(a: number, b: number) { return a + b }

console.log(add(5, 8))



function minus(a: number, b: number) { return a - b }

console.log(minus(10, 15))



function multi(a: number, b: number, c: number, d: number) { return a * b * c * d }

console.log(multi(4, 8, 7, 10))



function หิวข้าว(หิวข้าวจริงไหมครับผม: boolean) {
    if (หิวข้าวจริงไหมครับผม === true) {
        console.log('หิวครับพี่ๆ')
    } else {
        console.log('ม่ายหิว')
    }
}

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50) { return 'fail' } else { return 'pass' }
}
console.log(grade(15, 20, 30))


function grade2(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50) { return 'grade F' } else { return 'grade D' }
}
console.log(grade2(4, 15, 30))


function grade0(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50) {
        return 'grade F'
    } else if (score < 60) {
        return 'grade D'
    } else if (score < 70) {
        return 'grade C'
    } else if (score < 80) {
        return 'grade B'
    } else if (score >= 80) {
        return 'grade A'
    }
}
console.log(grade0(20, 25, 35))
