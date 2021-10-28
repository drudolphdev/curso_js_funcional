function ordenar(array){
    return [...array].sort((a, b) => a - b) 
}

const nums = [ 3, 9, 2, 7, 0 ]
const numsOrdenados = ordenar(nums)
console.log(nums, numsOrdenados)
const parteNums = nums.slice(1)

console.log(parteNums, nums)

