const students = [
  { name: "John", score1: 47, score2: 46 },
  { name: "Bob", score1: 23, score2: 24 },
  { name: "Nick", score1: 40, score2: 35 },
  { name: "Alex", score1: 44, score2: 45 },
];

const passing = [91,81,71,61,51]
const degrees = ['A','B','C','D']

const calculate = function(score1,score2){
const sum = score1 + score2
return sum
}
// console.log(calculate(students[0].score1,students[0].score2));

// const passed = function () {
//     for(let i=0; i< students.length;i++){
//         const eachSum =  calculate(students[i].score1,students[i].score2)
//         if(eachSum >= passing[4]){
//         for(let x=0; x< passing.length; x++){
//             if(eachSum >= passing[x]){
//                 console.log(`${students[i].name} ${degrees[x]}`)
//                 break;
//             }
//         }}
//     else{
//         console.log(`${students[i].name} failed`)
//     }
//     }
// }
// passed()

const passed = function () {
    for(let i=0; i< students.length;i++){
        const eachSum = calculate(students[i].score1,students[i].score2)
        // console.log(eachSum);
        if(eachSum >= passing[4]){
            for(let j=0; j<= passing.length; j++){
                if(eachSum >= passing[j]){
            console.log(`${students[i].name} ${degrees[j]} passed the exam`);
            break;
                }
        }
        }else {
            console.log(`${students[i].name} faild the exam`);
        }
    }
}
passed()