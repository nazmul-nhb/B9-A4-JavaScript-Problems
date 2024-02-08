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

