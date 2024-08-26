//if a condition is true execute code if not do something else

// let age = 19;
// if (age >= 18) {
//   console.log("you are old enough to enter this site");
// } else {
//   console.log("you must be 18 plus to enter this site");
// }

// let time = 9;
// if (time < 12) {
//   console.log("good morning");
// } else {
//   console.log("good afternoon");
// }

// let isStudent = false;
// if (isStudent) {
//   console.log("you are a student");
// } else {
//   console.log("you are not a student");
// }
// let age = 18;
// let hasLicense = false;
// if (age >= 16) {
//   console.log("you are old enough to drive ");
//   if (hasLicense) {
//     console.log("you have your license");
//   } else {
//     console.log("you do not have your license");
//   }
// } else {
//   console.log("you must be 16 plus to have a license");
// }
// let age = 10;
// let canMarried = true;
// if (age < 19) {
//   console.log("He cannot get married");
//   if (canMarried) {
//     console.log("you will be sad");
//   } else {
//     console.log("you will be happy");
//   }
// } else {
//   console.log("He can get married");
// }
let age = -1;
if (age <= 0) {
  console.log("please enter the valid number");
} else if (age == 0) {
  console.log("You cannot enter you are just born");
} else if (age < 19) {
  console.log("you are not old enough to enter the website");
} else if (age >= 100) {
  console.log("you are too old to enter this site");
} else {
  console.log("You are old enough to enter the website");
}
