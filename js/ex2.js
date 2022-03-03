const ray = [1,2,3,4,5,6,7,8,9,10];
let odd = ray.filter(num => num % 2 != 0);
let div2or5 = ray.filter(num => (num % 2 == 0)||(num % 5 == 0));
let divby3sq = ray.filter(num => num % 3 == 0).map(num => num *num);
let sumsqrdiv5 = ray.filter(num => num % 5 == 0).map(num => num * num).reduce((a,b)=>a+b);


console.log(`original`,ray);
console.log(`odd`,odd);
console.log(`divisible by 2/5`,div2or5);
console.log(`divisible by 3 sq`,divby3sq);
console.log(`square of numbers divisible by 5: `,sumsqrdiv5);