// player
var playerLvl = 0;

// money
var money = 0;
var computerPerSecond = 0;
var earnings = 0;

// Arrays
var workerArray = new Array("", 0);
var priceArray = new Array(0, 0);
var marketingArray = new Array(0, 0);

// workers
var workerStacking = 1.05;

var internAmount = 0;
var internPrice = 20;

var holidayWorkerAmount = 0;
var holidayWorkerPrice = 50;

var traineeAmount = 0;
var traineePrice = 120;

var juniorStaffAmount = 0;
var juniorStaffPrice = 300;

var remoteOfficeAmount = 0;
var remoteOfficePrice = 1000;

var seniorStaffAmount = 0;
var seniorStaffPrice = 5000;

var storeAmount = 0;
var storePrice = 30000;

var shoppingCenterAmount = 0;
var shoppingCenterPrice = 150000;

// marketing
var marketingStacking = 8;

var flyersLvl = 0;
var flyersPrice = 500;

var websiteLvl = 0;
var websitePrice = 2000;

var magazineAdLvl = 0;
var magazineAdPrice = 50000;

var onlineAdLvl = 0;
var onlineAdPrice = 1000000;

var tvAdLvl = 0;
var tvAdPrice = 50000000;

// computers
var computerWorth = 1;

var officeComputerPrice = 100 + " €";
var officeComputerTimes = 1.25;

var smartphonePrice = 5000 + " €";
var smartphoneTimes = 1.5;

var laptopPrice = 250000 + " €";
var laptopTimes = 2;

var gamingComputerPrice = 10000000 + " €";
var gamingComputerTimes = 4;

var serverPrice = 500000000 + " €";
var serverTimes = 8;

var mainframePrice = 2500000000 + " €";
var mainframeTimes = 15;

var superComputerPrice = 100000000000 + " €";
var superComputerTimes = 25;


// start
window.onload = function() {
    output();
    setInterval('main()', 100);
}

// Main
function main() {

    // Amount for Workers
    computerPerSecond = (internAmount * 0.1) + (holidayWorkerAmount * 0.25) +
        (traineeAmount * 0.5) + (juniorStaffAmount * 1) + (remoteOfficeAmount * 2) +
        (seniorStaffAmount * 5) + (storeAmount * 25) + (shoppingCenterAmount * 100);

    // Amount for Marketing
    if (flyersLvl > 0 || websiteLvl > 0 || magazineAdLvl > 0 ||
        onlineAdLvl > 0 || tvAdLvl > 0) {
        computerPerSecond *= ((flyersLvl * 1.5) + (websiteLvl * 2) +
            (magazineAdLvl * 3) + (onlineAdLvl * 5) + (tvAdLvl * 9));
    }

    // Earnings
    earnings = computerPerSecond * computerWorth;

    // adding money
    addingMoney(earnings / 10);

    // Values to 2 decimal places
    earnings = earnings.toFixed(2);
    money = money.toFixed(2);
    computerPerSecond = computerPerSecond.toFixed(2);

    // Player Level
    checkingPlayerLvl();

    // Output		
    output();
};

function addingMoney(addingValue) {
    // String to Float for Calculating
    addingValue = parseFloat(addingValue);
    money = parseFloat(money);

    // Adding money
    money += addingValue;
}

function checkingPlayerLvl() {

    for (var i = 0; i < 99; i++) {
        if (earnings > Math.pow(10, i + 1) && playerLvl == i) {
            playerLvl += 1;
        }
    }
}

// most important button
function btnSellOne() {
    addingMoney(computerWorth);
}

// checking buttons workers

function btnIntern() {
    buyingWorker(internAmount, internPrice, 1);
    internAmount = workerArray[0];
    internPrice = workerArray[1];
}

function btnInternTen() {
    buyingWorker(internAmount, internPrice, 10);
    internAmount = workerArray[0];
    internPrice = workerArray[1];
}

function btnHolidayWorker() {
    buyingWorker(holidayWorkerAmount, holidayWorkerPrice, 1);
    holidayWorkerAmount = workerArray[0];
    holidayWorkerPrice = workerArray[1];
}

function btnHolidayWorkerTen() {
    buyingWorker(holidayWorkerAmount, holidayWorkerPrice, 10);
    holidayWorkerAmount = workerArray[0];
    holidayWorkerPrice = workerArray[1];
}

function btnTrainee() {
    buyingWorker(traineeAmount, traineePrice, 1);
    traineeAmount = workerArray[0];
    traineePrice = workerArray[1];
}

function btnTraineeTen() {
    buyingWorker(traineeAmount, traineePrice, 10);
    traineeAmount = workerArray[0];
    traineePrice = workerArray[1];
}

function btnJuniorStaff() {
    buyingWorker(juniorStaffAmount, juniorStaffPrice, 1);
    juniorStaffAmount = workerArray[0];
    juniorStaffPrice = workerArray[1];
}

function btnJuniorStaffTen() {
    buyingWorker(juniorStaffAmount, juniorStaffPrice, 10);
    juniorStaffAmount = workerArray[0];
    juniorStaffPrice = workerArray[1];
}

function btnRemoteOffice() {
    buyingWorker(remoteOfficeAmount, remoteOfficePrice, 1);
    remoteOfficeAmount = workerArray[0];
    remoteOfficePrice = workerArray[1];
}

function btnRemoteOfficeTen() {
    buyingWorker(remoteOfficeAmount, remoteOfficePrice, 10);
    remoteOfficeAmount = workerArray[0];
    remoteOfficePrice = workerArray[1];
}

function btnSeniorStaff() {
    buyingWorker(seniorStaffAmount, seniorStaffPrice, 1);
    seniorStaffAmount = workerArray[0];
    seniorStaffPrice = workerArray[1];
}

function btnSeniorStaffTen() {
    buyingWorker(seniorStaffAmount, seniorStaffPrice, 10);
    seniorStaffAmount = workerArray[0];
    seniorStaffPrice = workerArray[1];
}

function btnStore() {
    buyingWorker(storeAmount, storePrice, 1);
    storeAmount = workerArray[0];
    storePrice = workerArray[1];
}

function btnStoreTen() {
    buyingWorker(storeAmount, storePrice, 10);
    storeAmount = workerArray[0];
    storePrice = workerArray[1];
}

function btnShoppingCenter() {
    buyingWorker(shoppingCenterAmount, shoppingCenterPrice, 1);
    shoppingCenterAmount = workerArray[0];
    shoppingCenterPrice = workerArray[1];
}

function btnShoppingCenterTen() {
    buyingWorker(shoppingCenterAmount, shoppingCenterPrice, 10);
    shoppingCenterAmount = workerArray[0];
    shoppingCenterPrice = workerArray[1];
}

// workerfunctions executed by buttons

function buyingWorker(workerAmount, workerPrice, amount) {
    var costPrice = 0;

    // getting the right price
    if (amount > 1) {
        getMultipleTimes(workerPrice, amount);
        workerPrice = priceArray[0];
        costPrice = priceArray[1];
    } else {
        // costprice is used for if-statement
        costPrice = workerPrice;
        if (money >= workerPrice) {
            workerPrice *= workerStacking;
        }
    }

    workerPrice = parseFloat(workerPrice);

    // checking for enough money
    if (money >= costPrice) {
        workerAmount += amount;
        money -= costPrice;

        // just two decimalPlaces
        workerPrice = workerPrice.toFixed(2);

    }

    // making values ready for return
    workerArray[0] = workerAmount;
    workerArray[1] = workerPrice;

    return workerArray;
}

function getMultipleTimes(singlePrice, times) {
    var costPrice = 0;
    // backup if not enough money
    var lclSinglePrice = singlePrice;

    // calculating the right price
    for (var i = 0; i < times; i++) {
        costPrice += singlePrice;
        singlePrice *= workerStacking;
    }

    if (money < costPrice) {
        singlePrice = lclSinglePrice;
    } else {
        // to float for toFixed
        singlePrice = parseFloat(singlePrice);
        costPrice = parseFloat(costPrice);

        singlePrice = singlePrice.toFixed(2);
        costPrice = costPrice.toFixed(2);
    }

    // output
    priceArray[0] = singlePrice
    priceArray[1] = costPrice
    return priceArray;
}


// checking marketing buttons

function btnFlyers() {
    buyingMarketing(flyersLvl, flyersPrice);
    flyersLvl = marketingArray[0];
    flyersPrice = marketingArray[1];
}

function btnWebsite() {
    buyingMarketing(websiteLvl, websitePrice);
    websiteLvl = marketingArray[0];
    websitePrice = marketingArray[1];
}

function btnMagazineAd() {
    buyingMarketing(magazineAdLvl, magazineAdPrice);
    magazineAdLvl = marketingArray[0];
    magazineAdPrice = marketingArray[1];
}

function btnOnlineAd() {
    buyingMarketing(onlineAdLvl, onlineAdPrice);
    onlineAdLvl = marketingArray[0];
    onlineAdPrice = marketingArray[1];
}

function btnTvAd() {
    buyingMarketing(tvAdLvl, tvAdPrice);
    tvAdLvl = marketingArray[0];
    tvAdPrice = marketingArray[1];
}

// function executed by marketing buttons
function buyingMarketing(marketingLvl, marketingPrice) {
    if (money >= marketingPrice) {
        money -= marketingPrice;
        marketingLvl += 1;
        marketingPrice *= marketingStacking;
    }

    marketingArray[0] = marketingLvl;
    marketingArray[1] = marketingPrice;

    return marketingArray;
}

function btnOfficeComputer() {
    officeComputerPrice = buyingComputers(officeComputerPrice, officeComputerTimes);
    if (officeComputerPrice == "Bought") {
        document.getElementById("btnOfficeComputer").disabled = true;
    }
}

function btnSmartphone() {
    smartphonePrice = buyingComputers(smartphonePrice, smartphoneTimes);
    if (smartphonePrice == "Bought") {
        document.getElementById("btnSmartphone").disabled = true;
    }
}

function btnLaptop() {
    laptopPrice = buyingComputers(laptopPrice, laptopTimes);
    laptopPrice = "Bought";
    if (laptopPrice == "Bought") {
        document.getElementById("btnLaptop").disabled = true;
    }
}

function btnGamingComputer() {
    gamingComputerPrice = buyingComputers(gamingComputerPrice, gamingComputerTimes);
    if (gamingComputerPrice == "Bought") {
        document.getElementById("btnGamingComputer").disabled = true;
    }
}

function btnServer() {
    serverPrice = buyingComputers(serverPrice, serverTimes);
    if (serverPrice == "Bought") {
        document.getElementById("btnServer").disabled = true;
    }
}

function btnMainframe() {
    mainframePrice = buyingComputers(mainframePrice, mainframeTimes);
    if (mainframePrice == "Bought") {
        document.getElementById("btnMainframe").disabled = true;
    }
}

function btnSuperComputer() {
    superComputerPrice = buyingComputers(superComputerPrice, superComputerTimes);
    if (superComputerPrice == "Bought") {
        document.getElementById("btnSuperComputer").disabled = true;
    }
}

// function executed by computer buttons
function buyingComputers(computerPrice, computerTimes) {
    // for calculating
    computerPrice = parseFloat(computerPrice);
    if (money >= computerPrice) {
        computerWorth *= computerTimes;
        money -= computerPrice;
        computerPrice = "Bought";
    } else {
        computerPrice = computerPrice.toString() + " €";
    }

    return computerPrice;
}

// Output
function output() {

    // local values
    var internPriceTen = 0;
    var holidayWorkerTen = 0;
    var traineeTen = 0;
    var juniorStaffTen = 0;
    var remoteOfficeTen = 0;
    var seniorStaffTen = 0;
    var storeTen = 0;
    var shoppingCenterTen = 0;

    // Player Level
    document.getElementById('playerLvl').innerHTML = playerLvl;

    // Money
    document.getElementById('money').innerHTML = money;
    money = parseFloat(money);

    // Title
    if (money > 0) {
        document.title = money + " € - Computer Seller";
    } else {
        document.title = "Computer Seller";
    }

    document.getElementById('computerPerSecond').innerHTML = computerPerSecond;
    computerPerSecond = parseFloat(computerPerSecond);

    document.getElementById('earnings').innerHTML = earnings;
    earnings = parseFloat(earnings);

    // Intern
    document.getElementById('internAmount').innerHTML = internAmount;
    document.getElementById('internPrice').innerHTML = internPrice;

    internPriceTen = getMultipleTimes(internPrice, 10)[1];
    internPriceTen = parseFloat(internPriceTen);
    internPriceTen = internPriceTen.toFixed(2);
    document.getElementById('internPriceTen').innerHTML = internPriceTen;

    internAmount = parseFloat(internAmount);
    internPrice = parseFloat(internPrice);

    // HolidayWorker
    document.getElementById('holidayWorkerAmount').innerHTML = holidayWorkerAmount;
    document.getElementById('holidayWorkerPrice').innerHTML = holidayWorkerPrice;

    holidayWorkerTen = getMultipleTimes(holidayWorkerPrice, 10)[1];
    holidayWorkerTen = parseFloat(holidayWorkerTen);
    holidayWorkerTen = holidayWorkerTen.toFixed(2);
    document.getElementById('holidayWorkerPriceTen').innerHTML = holidayWorkerTen;

    holidayWorkerAmount = parseFloat(holidayWorkerAmount);
    holidayWorkerPrice = parseFloat(holidayWorkerPrice);

    // Trainee
    document.getElementById('traineeAmount').innerHTML = traineeAmount;
    document.getElementById('traineePrice').innerHTML = traineePrice;

    traineeTen = getMultipleTimes(traineePrice, 10)[1];
    traineeTen = parseFloat(traineeTen);
    traineeTen = traineeTen.toFixed(2);
    document.getElementById('traineePriceTen').innerHTML = traineeTen;

    traineeAmount = parseFloat(traineeAmount);
    traineePrice = parseFloat(traineePrice);

    // Junior Staff
    document.getElementById('juniorStaffAmount').innerHTML = juniorStaffAmount;
    document.getElementById('juniorStaffPrice').innerHTML = juniorStaffPrice;

    juniorStaffTen = getMultipleTimes(juniorStaffPrice, 10)[1];
    juniorStaffTen = parseFloat(juniorStaffTen);
    juniorStaffTen = juniorStaffTen.toFixed(2);
    document.getElementById('juniorStaffPriceTen').innerHTML = juniorStaffTen;

    juniorStaffAmount = parseFloat(juniorStaffAmount);
    juniorStaffPrice = parseFloat(juniorStaffPrice);

    // Remote Office
    document.getElementById('remoteOfficeAmount').innerHTML = remoteOfficeAmount;
    document.getElementById('remoteOfficePrice').innerHTML = remoteOfficePrice;

    remoteOfficeTen = getMultipleTimes(remoteOfficePrice, 10)[1];
    remoteOfficeTen = parseFloat(remoteOfficeTen);
    remoteOfficeTen = remoteOfficeTen.toFixed(2);
    document.getElementById('remoteOfficePriceTen').innerHTML = remoteOfficeTen;

    remoteOfficeAmount = parseFloat(remoteOfficeAmount);
    remoteOfficePrice = parseFloat(remoteOfficePrice);

    // Senior Staff
    document.getElementById('seniorStaffAmount').innerHTML = seniorStaffAmount;
    document.getElementById('seniorStaffPrice').innerHTML = seniorStaffPrice;

    seniorStaffTen = getMultipleTimes(seniorStaffPrice, 10)[1];
    seniorStaffTen = parseFloat(seniorStaffTen);
    seniorStaffTen = seniorStaffTen.toFixed(2);
    document.getElementById('seniorStaffPriceTen').innerHTML = seniorStaffTen;

    seniorStaffAmount = parseFloat(seniorStaffAmount);
    seniorStaffPrice = parseFloat(seniorStaffPrice);

    // Store
    document.getElementById('storeAmount').innerHTML = storeAmount;
    document.getElementById('storePrice').innerHTML = storePrice;

    storeTen = getMultipleTimes(storePrice, 10)[1];
    storeTen = parseFloat(storeTen);
    storeTen = storeTen.toFixed(2);
    document.getElementById('storePriceTen').innerHTML = storeTen;

    storeAmount = parseFloat(storeAmount);
    storePrice = parseFloat(storePrice);

    // Shopping Center
    document.getElementById('shoppingCenterAmount').innerHTML = shoppingCenterAmount;
    document.getElementById('shoppingCenterPrice').innerHTML = shoppingCenterPrice;

    shoppingCenterTen = getMultipleTimes(shoppingCenterPrice, 10)[1];
    shoppingCenterTen = parseFloat(shoppingCenterTen);
    shoppingCenterTen = shoppingCenterTen.toFixed(2);
    document.getElementById('shoppingCenterPriceTen').innerHTML = shoppingCenterTen;

    shoppingCenterAmount = parseFloat(shoppingCenterAmount);
    shoppingCenterPrice = parseFloat(shoppingCenterPrice);

    // Flyers
    document.getElementById('flyersLvl').innerHTML = flyersLvl;
    document.getElementById('flyersPrice').innerHTML = flyersPrice;

    // Website
    document.getElementById('websiteLvl').innerHTML = websiteLvl;
    document.getElementById('websitePrice').innerHTML = websitePrice;

    // Magazine Ad
    document.getElementById('magazineAdLvl').innerHTML = magazineAdLvl;
    document.getElementById('magazineAdPrice').innerHTML = magazineAdPrice;

    // Online Ad 
    document.getElementById('onlineAdLvl').innerHTML = onlineAdLvl;
    document.getElementById('onlineAdPrice').innerHTML = onlineAdPrice;

    // Television Ad
    document.getElementById('tvAdLvl').innerHTML = tvAdLvl;
    document.getElementById('tvAdPrice').innerHTML = tvAdPrice;

    // Computer Worth
    document.getElementById('computerWorth').innerHTML = computerWorth;

    // Office Computer
    document.getElementById('officeComputerPrice').innerHTML = officeComputerPrice;
    document.getElementById('officeComputerTimes').innerHTML = officeComputerTimes;

    // Smartphone
    document.getElementById('smartphonePrice').innerHTML = smartphonePrice;
    document.getElementById('smartphoneTimes').innerHTML = smartphoneTimes;

    // Laptop
    document.getElementById('laptopPrice').innerHTML = laptopPrice;
    document.getElementById('laptopTimes').innerHTML = laptopTimes;

    // Gaming Computer
    document.getElementById('gamingComputerPrice').innerHTML = gamingComputerPrice;
    document.getElementById('gamingComputerTimes').innerHTML = gamingComputerTimes;

    // Server
    document.getElementById('serverPrice').innerHTML = serverPrice;
    document.getElementById('serverTimes').innerHTML = serverTimes;

    // Mainframe
    document.getElementById('mainframePrice').innerHTML = mainframePrice;
    document.getElementById('mainframeTimes').innerHTML = mainframeTimes;

    // Super Computer
    document.getElementById('superComputerPrice').innerHTML = superComputerPrice;
    document.getElementById('superComputerTimes').innerHTML = superComputerTimes;
}