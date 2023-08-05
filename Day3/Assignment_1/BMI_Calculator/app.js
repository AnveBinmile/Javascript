const height = document.getElementById("height");
const weight = document.getElementById("weight");
const submit = document.getElementById('submit');
const output = document.getElementById('output')

// const bmi = weight / (height * height);

console.log(height);
console.log(weight);
console.log(output);



const findBMI = (weight,height)=>{
    const bmi = weight / (height * height);
    console.log(bmi);
    output.innerText=`${bmi.toFixed(2)}`
    output.style.color="yellow"
}



submit.addEventListener('click',()=>{
    const wt = weight.value;
    const ht = height.value;
    findBMI(wt,ht);
    console.log(wt,' ',ht);
});











