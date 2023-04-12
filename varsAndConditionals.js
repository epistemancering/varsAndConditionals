/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

const jonSnowAttack = 25
const jamieLannisterAttack = 35
if (jamieLannisterAttack < jonSnowAttack) {
    console.log('Jon has better attack than Jamie')
} else if (jamieLannisterAttack === jonSnowAttack) {
    console.log('Jon and Jamie have the same attack')
} else {
    console.log('Jamie has better attack than Jon')
}
console.log('-----')
let jonSnowHealth = 100
let jonSnowDefense = 0
if (jonSnowDefense < jamieLannisterAttack) {
    jonSnowHealth += jonSnowDefense - jamieLannisterAttack
    if (0 < jonSnowHealth) {
        console.log("Jon's health is down to "+jonSnowHealth)
    } else {
        console.log('Jon has been slain.')
    }
}
console.log('-------')
let coinLandsHead = false
if (coinLandsHead === true) {
    console.log('The fight continues')
} else {
    console.log('Jon is allowed to run away')
}
console.log('-----')
// for (let i = 0; i !== 5; ++i) {
//     if (0 < jonSnowHealth) {
//         if (jonSnowDefense < jamieLannisterAttack) {
//             jonSnowHealth += jonSnowDefense - jamieLannisterAttack
//             console.log(`Jon's health is ${jonSnowHealth}`)
//         }
//     } else {
//         console.log('Jon has been slain.')
//         break
//     }
// }
while (jonSnowDefense < jamieLannisterAttack) {
    jonSnowHealth += jonSnowDefense - jamieLannisterAttack
    if (0 < jonSnowHealth) {
        console.log(`Jon's health is ${jonSnowHealth}`)
    } else {
        console.log("Jon's health is 0\nJon has been slain.")
        break
    }
}