// ########################################
/*
*	Table of Contents
* 1)  Imports
*     a) jquery
*     b) lodash
*	2)	NAMESPACE
*     a)  MYLIBRARY
*	3)	Constructors
*     a) Diner
*     b) Bill
* 4)  Child Functions
*     a) initLoad( )
* 5)  App.js Execution
*/
// ########################################

// ##################################
/* ----------- Imports ----------- */
// ##################################

import $ from 'jquery';
import _ from 'lodash';

// ##################################
/* ---------- NAMESPACE ---------- */
// ##################################

/* ---------- a) MYLIBRARY ---------- */

let MYLIBRARY = {
    entree: [{
        name: '12oz KC Strip',
        price: 22.99
    }, {
        name: 'Chicken Cordon Bleu',
        price: 27.99
    }, {
        name: 'Crab Ragoon',
        price: 21.99
    }, ],
    dessert: [{
        name: 'Key Lime Pie',
        price: 11.99
    }, {
        name: 'New York Cherry Cheesecake',
        price: 13.99
    }, {
        name: 'Chocolate Volcano',
        price: 12.99
    }, ],
    drink: [{
        name: 'Beer',
        price: 4.99
    }, {
        name: 'Wine',
        price: 5.99
    }, {
        name: 'Mixed Drink',
        price: 7.99
    }, ],
} || {};

// #####################################
/* ------------- Classes ------------ */
// #####################################

/* ---------- a) Diner ---------- */

// The Diner class will be used for creating individual diners.
// A Diner is comprised of all the elements present in `constructor( )`.
class Diner {
    // new object created will have all these properties.
    constructor(entree, dessert, drink, total, tax, tip) {
        this.entree = entree;
        this.dessert = dessert;
        this.drink = drink;
        this.total = total;
        this.tax = tax;
        this.tip = tip;
    }
    // The following will loop through the `keys` of MYLIBRARY.
    // It will assign a random value between 0 & 2 and return
    // a entree, dessert, & drink object containing 2 key-value pairs
    // `name` & `price`.
    randomOrder() {
      let keys = Object.keys(MYLIBRARY);                        //keys[] = all 3 keys of MYLIBRARY.
      for (let i = 0; i < keys.length; i++) {                   //iterate through keys[].
        let key =keys[i];                                       //key = current index of keys[].
        let value = MYLIBRARY[key];                             //value[] = all 3 objects of key.
        this[key] = value[_.random(0,2)];                       //select random object and return as this[key] (i.e. this.entree)
      }
    }
    // The following will sum the entree, dessert, & drink of the Diner.
    // NOTE: This is not the individual Diner's total bill.
    // NOTE: Tax & Tip are not figured in with this data.
    orderPrice() {
        let entreePrice = this.entree.price;
        let dessertPrice = this.dessert.price;
        let drinkPrice = this.drink.price;

        this.total = entreePrice + dessertPrice + drinkPrice;
    }
    // The following will calculate the tax of the individual Diner's meal.
    calcTax() {
        const rate = 0.032;

        let tax = this.total * rate;
        tax = tax.toFixed(2);
        this.tax = parseFloat(tax);
    }
    // The following will calculate the tip of the individual Diner's meal.
    calcTip() {
        const rate = 0.2;

        let tip = this.total * rate;
        tip = tip.toFixed(2);
        this.tip = parseFloat(tip);
    }
}

/* ---------- b) Bill ---------- */

// The Bill class will be used for creating a group of Diners.
// A group of Diners is comprised of all the elements present in `constructor( )`.
class Bill {
  constructor() {
    this.diners = [];
    this.tBill = [];
    this.tTip = [];
    this.indvBill = [];
  }
  // The following will push a Diner to diners[] adding them to the group.
  addDiner(diner) {
    this.diners.push(diner);
  }
  // The following will index through diners[] summing the total, tax, & tip of
  // the individual Diner. This value will then be pushed to tBill[].
  // The values stored in tBill[] are then summed using `_.sum` yielding the
  // total bill of the group of Diners.
  totalBill() {
    let billclass = this;
    _.map(this.diners, function(index) {
      let indvTotal = index.total + index.tax + index.tip;
      billclass.tBill.push(indvTotal);
    });
    billclass.tBill = _.sum(billclass.tBill);
  }
  // The following will index through diners[]. The index.tip value will then be
  // pushed to tTip[]. The values stored in tTip[] are then summed using
  // `_.sum` yielding the total tip of the group of Diners.
  totalTip() {
    let billclass = this;
    _.map(this.diners, function(index) {
      billclass.tTip.push(index.tip);
    });
    billclass.tTip = _.sum(billclass.tTip);
  }
  // The following will index through diners[] summing the total, tax, & tip of
  // the individual Diner. This value will then be pushed to indvBill[].
  // The values stored in indvBill[] are the total bills of the individual Diner.
  eachBill() {
    let billclass = this;
    _.map(this.diners, function(index) {
      billclass.indvBill.push(index.total + index.tax + index.tip);
    });
  }
}

// ########################################
/* ---------- Child Functions ---------- */
// ########################################

/* ---------- a) initLoad ---------- */

function initLoad() {
    // Create a new instance of Bill.
    // party will contain the total bill & total tip of the group.
    // it will also contain an array of the summed individual bills.
    let party = new Bill();

    // Creating 3 instances of Diner and applying appropriate methods.

    let moe = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    moe.randomOrder();
    moe.orderPrice();
    moe.calcTax();
    moe.calcTip();
    party.addDiner(moe);
    let curly = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    curly.randomOrder();
    curly.orderPrice();
    curly.calcTax();
    curly.calcTip();
    party.addDiner(curly);
    let larry = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    larry.randomOrder();
    larry.orderPrice();
    larry.calcTax();
    larry.calcTip();
    party.addDiner(larry);

    // Applying appropriate methods to party object.
    party.totalBill();
    party.totalTip();
    party.eachBill();

    // Logging out data to the console.
    console.log('----------------------------------------------------------------------------------------------');
    console.log("The total bill was: " + party.tBill + ".");
    console.log("The total tip was: " + party.tTip + ".");
    console.log('----------------------------------------------------------------------------------------------');
    console.log("Moe had the " + moe.entree.name + ", " + moe.dessert.name + ", " + moe.drink.name + ".");
    console.log("Moe's total bill was " + party.indvBill[0] + " & he paid a tip of " + moe.tip + ".");
    console.log('----------------------------------------------------------------------------------------------');
    console.log("Curly had the " + curly.entree.name + ", " + curly.dessert.name + ", " + curly.drink.name + ".");
    console.log("Curly's total bill was " + party.indvBill[1] + " & he paid a tip of " + curly.tip + ".");
    console.log('----------------------------------------------------------------------------------------------');
    console.log("Larry had the " + larry.entree.name + ", " + larry.dessert.name + ", " + larry.drink.name + ".");
    console.log("Larry's total bill was " + party.indvBill[2] + " & he paid a tip of " + larry.tip + ".");
    console.log('----------------------------------------------------------------------------------------------');
}

// #########################################
/* ---------- App.js Execution ---------- */
// #########################################

$(document).ready(initLoad);
