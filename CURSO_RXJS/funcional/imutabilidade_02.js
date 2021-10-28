// 3 Recursividadae

const nums = [ 3, 9, 2, 7, 0 ]

function somarArray(array, total = 0){
    if(array.length === 0){
        return total
    }
    return somarArray(array.slice(1), total + array[0])
}

const total = somarArray(nums)
console.log(total)




// 2 - Reduce
// const somar = (a, b) => a + b
// const total = nums.reduce(somar)
// console.log(total)



// 1 - Dados mutaveis
// let total = 0

// for(let i = 0; i < nums.length; i++) {
    //    total += nums[i]
    // }
  
// console.log(total)