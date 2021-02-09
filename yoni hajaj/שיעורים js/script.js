let num = 1;
console.log(num+2);

let age;
age = prompt( "what your age" );
console.log(age);

if(age>=20){
    console.log("Happy");
}
else{
    console.log("No Entry");
}


for(let number=1;number<101;number++){

if(number%3==0){
    console.log("foo");
}
else if(number%5==0) {
    console.log("bar");
}
else if ((number%3==0) && (number%5==0)) {
    console.log("foo-bar");
}
else{
   console.log(number);
}

}
let gomigam = 0;
while(gomigam<10){
    gomigam++;
    console.log(" # ",gomigam);
}

let bar = "" ;
bar = prompt("enter number");
console.log(bar);

let por = "#";
for(let last = 0;last<bar;last++){
    console.log(por);
    por +=" # ";
}

let folder = 'b';
let file = "";

switch(folder){

case 'g': 

            file = "first";
            console.log(folder );
            break;
case 'b': 

            file = "name";
            console.log(folder );         
            break;
case 'e': 


            file = "flast";
           console.log(folder );
            break;

}

let what = 50;
what = (prompt("Pick a number"));

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

let theNunbar = 4 ;
theNunbar = (prompt("pick a number"));

if(theNunbar>=4){
console.log("The calculation of it" + theNunbar * theNunbar)
}


let is = 0;
is = (prompt("pick a number"));

if(is>=0) {
    console.log("This a number")
    }
    else{
        console.log("Hey. Why didn't you give me a number?");