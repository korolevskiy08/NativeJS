const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


// const getNames = (arr) => {
//     const result = []
//     const func = (st) => st.name
//     for (let i = 0; i < arr.length; i ++) {
//         const newValue = func(arr[i])
//         result.push(newValue)
//     }
//     return result
// }

// const addScore = (arr) => {
//     const result = []
//     const func = (st) => ({...st, scores: st.scores + 10})
//     for (let i = 0; i < arr.length; i ++) {
//         const newValue = func(arr[i])
//         result.push(newValue)
//     }
//     return result
// }

const getNames = (arr) => {
    return students.map(el => el.scores + 10)
}

console.log(getNames(students))

const addScore = (arr) => {
  return students.map(el => el.name)
}

console.log(addScore(students))

const filterScore = (arr) => {
    return students.filter(el => el.scores >=100)
}

console.log(filterScore(students))

const findArr = (arr) => { // возвр первый элемент который соответствует условию
    return students.find(el => el.name === 'Alex')
}
console.log(findArr(students))