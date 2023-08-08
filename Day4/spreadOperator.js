const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

                            //numberOne array shuru ke elements pe spread kardo
                            //baki remaining elements pe numberTwo array ko spread krdo

console.log(numbersCombined); 




// Spread operator
function myFunction(v, w, x, y, z,a) {

    console.log('v',v);
    console.log('w',w);
    console.log('x',x);
    console.log('y',y);
    console.log('z',z);
    console.log('a',a);


}
const args = [4,5,6];
myFunction(-1, ...args, ...[9,8]);
                        //[9,8] => Destructuring and Spread
