// 1. convert radian to degree

function radianToDegree(radians) {
  const pi = Math.PI;
  degree = radians * (180 / pi);
  return degree;
}

console.log(radianToDegree(1));

// 2. check whether the given file name is a javaScript file or not

function isJavaScriptFile(fileName) {
  const javaFile = ".js";
  if (fileName === javaFile) {
    return true;
  } else {
    return false;
  }
}
const javaScriptFile = isJavaScriptFile(".js");
console.log(javaScriptFile);

/* 3. calculate the total oil price that i have to pay
 diesel 114
 petrol 130
 octane 135 
 */

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
  const perDiesel = 114;
  const perPetrol = 130;
  const perOctane = 135;

  const dieselAmount = dieselQuantity * perDiesel;
  const petrolAmount = petrolQuantity * perPetrol;
  const octaneAmount = octaneQuantity * perOctane;
  const totalOil = dieselAmount + petrolAmount + octaneAmount;
  return totalOil;
}
const totalOil = oilPrice(1, 1, 1);
console.log(totalOil);

/* 4. calculate the total price 
totalPeople = 65
ticket price = 250
publicBus = 50
microBus = 11

*/

const ticketPrice = 250;
function publicBusFare(passengers) {
  let publicBus = passengers % 50;
  let microBus = publicBus % 11;
  let remaining = microBus * ticketPrice;
  console.log(remaining);
}
publicBusFare(65);

/* 5.  


*/

function isBestFriend(friend1, friend2) {
  if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
    return true;
  } else {
    return false;
  }
}

const friend1 = { name: "shuvo", friend: "sozib" };
const friend2 = { name: "sozib", friend: "shuvo" };
let friends = isBestFriend("shuvo", "sozib");
console.log(friends);
