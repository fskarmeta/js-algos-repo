function checkCashRegister(price, cash, cid) {
  let totalInCid = 0;
  const AMOUNT_OF_EACH_COIN_CID = {};
  const NEW_CID = {};
  const CHANGE = cash - price;

  cid.forEach((coin) => {
    totalInCid += coin[1];
    AMOUNT_OF_EACH_COIN_CID[coin[0]] = dollarToCoinAndBack(coin).toFixed(2);
    NEW_CID[coin[0]] = 0;
  });

  function returnObject(status, arr) {
    return { status: `${status}`, change: arr };
  }

  function dollarToCoinAndBack(coin, operator = "/") {
    switch (coin[0]) {
      case "PENNY":
        return eval(`${coin[1]} ${operator} 0.01`);
      case "NICKEL":
        return eval(`${coin[1]} ${operator} 0.05`);
      case "DIME":
        return eval(`${coin[1]} ${operator} 0.1`);
      case "QUARTER":
        return eval(`${coin[1]} ${operator} 0.25`);
      case "ONE":
        return eval(`${coin[1]} ${operator} 1`);
      case "FIVE":
        return eval(`${coin[1]} ${operator} 5`);
      case "TEN":
        return eval(`${coin[1]} ${operator} 10`);
      case "TWENTY":
        return eval(`${coin[1]} ${operator} 20`);
      case "ONE HUNDRED":
        return eval(`${coin[1]} ${operator} 100`);
      default:
        return 0;
    }
  }

  function valueForEachCoin(type) {
    switch (type) {
      case "PENNY":
        return 0.01;
      case "NICKEL":
        return 0.05;
      case "DIME":
        return 0.1;
      case "QUARTER":
        return 0.25;
      case "ONE":
        return 1;
      case "FIVE":
        return 5;
      case "TEN":
        return 10;
      case "TWENTY":
        return 20;
      case "ONE HUNDRED":
        return 100;
      default:
        break;
    }
  }

  function matchCoin(coin) {
    if (coin >= 100 && AMOUNT_OF_EACH_COIN_CID["ONE HUNDRED"] > 0) {
      return "ONE HUNDRED";
    } else if (coin >= 20 && AMOUNT_OF_EACH_COIN_CID["TWENTY"] > 0) {
      return "TWENTY";
    } else if (coin >= 10 && AMOUNT_OF_EACH_COIN_CID["TEN"] > 0) {
      return "TEN";
    } else if (coin >= 5 && AMOUNT_OF_EACH_COIN_CID["FIVE"] > 0) {
      return "FIVE";
    } else if (coin >= 1 && AMOUNT_OF_EACH_COIN_CID["ONE"] > 0) {
      return "ONE";
    } else if (coin >= 0.25 && AMOUNT_OF_EACH_COIN_CID["QUARTER"] > 0) {
      return "QUARTER";
    } else if (coin >= 0.1 && AMOUNT_OF_EACH_COIN_CID["DIME"] > 0) {
      return "DIME";
    } else if (coin >= 0.05 && AMOUNT_OF_EACH_COIN_CID["NICKEL"] > 0) {
      return "NICKEL";
    } else if (coin >= 0.01 && AMOUNT_OF_EACH_COIN_CID["PENNY"] > 0) {
      return "PENNY";
    } else {
      return false;
    }
  }

  function registerFunction(change, newCid) {
    newCid = newCid;
    let currentChange = change;
    while (currentChange >= 0) {
      if (!matchCoin(currentChange)) {
        break;
      }
      newCid[`${matchCoin(currentChange)}`]++;
      currentChange =
        currentChange.toFixed(2) - valueForEachCoin(matchCoin(currentChange));
      AMOUNT_OF_EACH_COIN_CID[`${matchCoin(currentChange)}`]--;
    }

    Object.entries(newCid).forEach((coin) => {
      newCid[coin[0]] = dollarToCoinAndBack(coin, "*");
    });

    let finalArr = [];

    if (!currentChange && totalInCid > change) {
      finalArr = Object.entries(newCid)
        .reverse()
        .filter((bill) => bill[1]);
      return returnObject("OPEN", finalArr);
    }
    if (currentChange > 0 && change > totalInCid) {
      return returnObject("INSUFFICIENT_FUNDS", finalArr);
    }
    if (currentChange > 0 && change < totalInCid) {
      return returnObject("INSUFFICIENT_FUNDS", finalArr);
    }
    if (!currentChange && change === totalInCid) {
      finalArr = Object.entries(newCid);
      return returnObject("CLOSED", finalArr);
    }
  }

  return registerFunction(CHANGE, NEW_CID);
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
