function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const guardWages = 500;
    const staffNumbers = 8;
    const staffWages = 50;

    if (ticketSale < 0) {
        return `Invalid Number! The number of ticket sales cannot be a negative value!`;
    }
    else {
        const totalEarnings = ticketPrice * ticketSale;
        const totalExpenses = guardWages + staffNumbers * staffWages;
        const totalSavings = totalEarnings - totalExpenses;
        return totalSavings;
    }
}

console.log("Task #1");
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log("----------------------------------");

function checkName(name) {
    const goodEndings = "AaYyIiEeOoUuWw";

    if (typeof name !== "string") {
        return "invalid";
    }
    else if (goodEndings.includes(name[name.length - 1])) {
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
}

console.log("Task #2");
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));
console.log("----------------------------------");


function deleteInvalids(array) {
    const validNumbers = [];

    if (Array.isArray(array) === false) {
        return `Invalid Input! Please, input an array!`;
    }
    else {
        for (let element of array) {
            if (typeof element === "number" && isNaN(element) === false) {
                validNumbers.push(element);
            }
        }
        return validNumbers;
    }
}

console.log("Task #3");
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids([1, 2, -3]));
console.log(deleteInvalids({ num: [1, 2, 3] }));
console.log("----------------------------------");


// what if user inputs birth year that is not a number!
// site name er 1st letter er por ki capital hote parbe?
// username ki upper/lower case definite?
// what if birthYear is more than 4 digit?
// what if i include more validations
// what if input is not an object
// about the “”


function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }
    else {
        const newSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
        const newPassword = `${newSiteName}#${obj.name}@${obj.birthYear}`;
        return newPassword;
    }
}

console.log("Task #4");
console.log(password('abc', 'def', 'mine'));
console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));
console.log("----------------------------------");


function monthlySavings(arr, livingCost) {
    let totalEarnings = 0;
    let totalSavings;

    if (Array.isArray(arr) === false || typeof livingCost !== "number" || isNaN(livingCost) === true) {
        return "invalid input";
    }
    for (let singleEarning of arr) {
        totalEarnings = totalEarnings + singleEarning;
        if (singleEarning >= 3000) {
            const paidTax = singleEarning * 20 / 100;
            totalSavings = totalEarnings - livingCost - paidTax;
        }
        else {
            totalSavings = totalEarnings - livingCost;
        }
    }
    if (totalSavings < 0) {
        return "earn more";
    }
    return totalSavings;
}

console.log("Task #5");
console.log(monthlySavings([1000, 2000, 3000], NaN));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));

// everything is perfect  