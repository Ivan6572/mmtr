function mass (m1, m2, int) {
    let m1Start = [];
    let m1End = [];

    for (let i = 0; i < m1.length; i++) {
        if(i<int){
            m1Start.push(m1[i]);
        }else{
            m1End.push(m1[i]);
        }
    }

    let result =  [...m1Start,...m2,...m1End];
    return result;
}

let m14 = [5,5,5];
let m123 =[4,4,4,4];
let index = 2;

console.log(m123.length);

console.log(mass(m123,m14,index));
