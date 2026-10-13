let taka_has=200;
let have_guardian=true;
let age=25;

if (age > 12 ||(age <= 12 && have_guardian===true) ){
    console.log("can enter the park");
    if (age>=18 && taka_has>= 200) {
        console.log("can have lunch and can get three ride") ;   
    }
    else if (age>=18 && taka_has>200){
        console.log("can have lunch and can get one ride");

    }
    else{
        console.log("you can have only lunch");

    }
}
else{
    console.log("cannot enter the park");
}
