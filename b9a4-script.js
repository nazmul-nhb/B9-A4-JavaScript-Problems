function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const guardWages = 500;
    const staffNumbers = 8;
    const staffWages = 50;

    if (ticketSale < 0) {
        return `“Invalid Number” : The number of ticket sales cannot be a negative value!`;
    }
    else {
        const totalEarnings = ticketPrice * ticketSale;
        const totalExpenses = guardWages + staffNumbers * staffWages;
        const totalSavings = totalEarnings - totalExpenses;
        return totalSavings;
    }

}
// console.log(calculateMoney(-93));


function checkName(name) {
    const goodEndings = "AaYyIiEeOoUuWw";

    if(typeof name !== "string"){
        return "invalid";
    }
    else if (goodEndings.includes(name[name.length - 1])) {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
}

// console.log(checkName(199));



function deleteInvalids(array) {
    const validNumbers =[];

    for (let element of array ){
        if (typeof element === "number") {
            validNumbers.push(element);
        }
    }
    return validNumbers;
}

console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined ]));



/* 
function password(obj) {
    //write your code here
}
 */



/* 
function monthlySavings(arr, livingCost) {
    
}
 */



