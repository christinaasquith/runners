
document.forms["age_form"].onsubmit = function(){
    console.log ('form submitted');
    let youngAge = document.getElementById("age").value;
    console.log (youngAge);
    
    if (youngAge <=9) {
        document.getElementById('answer').innerHTML = 'You must have the legs of a fawn! We will keep it short';
    }
    else {
        document.getElementById('answer').innerHTML = 'You are a grasshopper! We have a big activity for you';
    }
}





//all the code below is stuff I'm practicting still and don't really

// function showminutes(){
//     console.log("are you working?")
// }
 
// document.getElementByIdById("demo").innerHTML = "Hello World!";


// let needRun = true;

// if (needRun) {
//     console.log("Go Running Today!");
// } else {
//     console.log("Keep on keeping on!");
// }

// let exerciseChoices = "Running";
// switch (exerciseChoices) {
//     case "swim":
//         console.log("Swim 30 mins");
//         break;
//     case "bike":
//         console.log("Bike an hour");
//         break;
//     case "pilates":
//         console.log("Pilates for 40 minutes");
//         break;
//     default:
//         console.log("Invalid exercise");
//         break;

// }

// let activity = "running";
// let clothingChoice = "";

// if (activity === "running") {
//     clothingChoice = "Bring sneakers.";
// } else if (activity === "swimming") {
//     clothingChoice = "Bring a swimsuit.";
// } else if (activity === "biking") {
//     clothingChice ="Bring a helmet.";
// } else if (activity === "pilates") {
//     clothingChoice = "Bring a mat.";
// } else {
//     console.log('Invalid activity.');
// };
// console.log(clothingChoice); 



// import React from "react"
// import ReactDOM from "react-dom"

// function App() {
//     const date = 
//}


// let raceDistance = Math.floor(Math.random()* 1000);
//  let register = true;
//  let age = 14;
//  let raceNumber = 1;
//  if(register && age < 15) {
//      raceNumber += 1000;
//  }
//  if(register && age < 15) {
//      console.log(`You can join our runner's group, and your runner's number is: ${raceNumber}.`);
//  }

//  else if(!register && age < 15){
//      console.log(`You can't join this Runner's Group`);
//  }


