let raceDistance = Math.floor(Math.random()* 1000);
 let register = true;
 let age = 14;
 let raceNumber = 1;
 if(register && age < 15) {
     raceNumber += 1000;
 }
 if(register && age < 15) {
     console.log(`You can join our runner's group, and your runner's number is: ${raceNumber}.`);
 }

 else if(!register && age < 15){
     console.log(`You can't join this Runner's Group`);
 }


