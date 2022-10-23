


// DOM Selection for Points
const input3 = document.querySelector('#input3');
const input4 = document.querySelector('#input4');
const input5 = document.querySelector('#input5');
const input6 = document.querySelector('#input6');
const input7 = document.querySelector('#input7');
const input8 = document.querySelector('#input8');

const input9 = document.querySelector('#input9');
const input10 = document.querySelector('#input10');
const input11 = document.querySelector('#input11');
const input12 = document.querySelector('#input12');
const input13 = document.querySelector('#input13');
const input14 = document.querySelector('#input14');

const input15 = document.querySelector('#input15');
const input16 = document.querySelector('#input16');
const input17 = document.querySelector('#input17');
const input18 = document.querySelector('#input18');
const input19 = document.querySelector('#input19');
const input20 = document.querySelector('#input20');

const input21 = document.querySelector('#input21');
const input22 = document.querySelector('#input22');
const input23 = document.querySelector('#input23');
const input24 = document.querySelector('#input24');
const input25 = document.querySelector('#input25');
const input26 = document.querySelector('#input26');

const input27 = document.querySelector('#input27');
const input28 = document.querySelector('#input28');
const input29 = document.querySelector('#input29');
const input30 = document.querySelector('#input30');
const input31 = document.querySelector('#input31');
const input32 = document.querySelector('#input32');

// DOM Selection for W or L
const WL1 = document.querySelector('#WL1');
const WL2 = document.querySelector('#WL2');
const WL3 = document.querySelector('#WL3');
const WL4 = document.querySelector('#WL4');
const WL5 = document.querySelector('#WL5');
const WL6 = document.querySelector('#WL6');

const WL7 = document.querySelector('#WL7');
const WL8 = document.querySelector('#WL8');
const WL9 = document.querySelector('#WL9');
const WL10 = document.querySelector('#WL10');
const WL11 = document.querySelector('#WL11');
const WL12 = document.querySelector('#WL12');

const WL13 = document.querySelector('#WL13');
const WL14 = document.querySelector('#WL14');
const WL15 = document.querySelector('#WL15');
const WL16 = document.querySelector('#WL16');
const WL17 = document.querySelector('#WL17');
const WL18 = document.querySelector('#WL18');

const WL19 = document.querySelector('#WL19');
const WL20 = document.querySelector('#WL20');
const WL21 = document.querySelector('#WL21');
const WL22 = document.querySelector('#WL22');
const WL23 = document.querySelector('#WL23');
const WL24 = document.querySelector('#WL24');

const WL25 = document.querySelector('#WL25');
const WL26 = document.querySelector('#WL26');
const WL27 = document.querySelector('#WL27');
const WL28 = document.querySelector('#WL28');
const WL29 = document.querySelector('#WL29');
const WL30 = document.querySelector('#WL30');


// Values stored in a function that is called with a button click

function getTotal() {
 // INPUT - from input box value property
 let a1 = Number(input3.value);
 let a2 = Number(input4.value);
 let a3 = Number(input5.value);
 let a4 = Number(input6.value);
 let a5 = Number(input7.value);
 let a6 = Number(input8.value);

 let a7 = Number(input9.value);
 let a8 = Number(input10.value);
 let a9 = Number(input11.value);
 let a10 = Number(input12.value);
 let a11 = Number(input13.value);
 let a12 = Number(input14.value);

 let a13 = Number(input15.value);
 let a14 = Number(input16.value);
 let a15 = Number(input17.value);
 let a16 = Number(input18.value);
 let a17 = Number(input19.value);
 let a18 = Number(input20.value);

 let a19 = Number(input21.value);
 let a20 = Number(input22.value);
 let a21 = Number(input23.value);
 let a22 = Number(input24.value);
 let a23 = Number(input25.value);
 let a24 = Number(input26.value);

 let a25 = Number(input27.value);
 let a26 = Number(input28.value);
 let a27 = Number(input29.value);
 let a28 = Number(input30.value);
 let a29 = Number(input31.value);
 let a30 = Number(input32.value);



 // PROCESSSING
 let total_2 = a1 + a2 + a3 + a4 + a5 + a6;

 let total_3 = a7 + a8 + a9 + a10 + a11 + a12;
 
 let total_4 = a13 + a14 + a15 + a16 + a17 + a18;

 let total_5 = a19 + a20 + a21 + a22 + a23 + a24;

 let total_6 = a25 + a26 + a27 + a28 + a29 + a30;

 // CHECK ERRORS
 console.log(total_2) 
 console.log(total_3) 
 console.log(total_4) 
 console.log(total_5) 
 console.log(total_6)    
 
 // OUTPUT
 output2.textContent = total_2;
 output3.textContent = total_3;
 output4.textContent = total_4;
 output5.textContent = total_5;
 output6.textContent = total_6;

}


function win_lose() {
    let b1 = Number(WL1.value);
    let b2 = Number(WL2.value);
    let b3 = Number(WL3.value);
    let b4 = Number(WL4.value);
    let b5 = Number(WL5.value);
    let b6 = Number(WL6.value);

    let b7 = Number(WL7.value);
    let b8 = Number(WL8.value);
    let b9 = Number(WL9.value);
    let b10 = Number(WL10.value);
    let b11 = Number(WL11.value);
    let b12 = Number(WL12.value);

    let b13 = Number(WL13.value);
    let b14 = Number(WL14.value);
    let b15 = Number(WL15.value);
    let b16 = Number(WL16.value);
    let b17 = Number(WL17.value);
    let b18 = Number(WL18.value);

    let b19 = Number(WL19.value);
    let b20 = Number(WL20.value);
    let b21 = Number(WL21.value);
    let b22 = Number(WL22.value);
    let b23 = Number(WL23.value);
    let b24 = Number(WL24.value);

    let b25 = Number(WL25.value);
    let b26 = Number(WL26.value);
    let b27 = Number(WL27.value);
    let b28 = Number(WL28.value);
    let b29 = Number(WL29.value);
    let b30 = Number(WL30.value);

    // insert if then lodgic to totalize Wins and Losses.
    // I can't find a way to do this... yet, but I am still looking
    // I think I am thinking too much in Python :(
}
