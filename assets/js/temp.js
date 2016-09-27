import $ from 'jquery';
import _ from 'lodash';

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
    randomOrder() {
      let keys = Object.keys(MYLIBRARY);                        //keys[] = all 3 keys of MYLIBRARY.
      for (let i = 0; i < keys.length; i++) {                   //iterate through keys[].
        let key =keys[i];                                       //key = current index of keys[].
        let value = MYLIBRARY[key];                             //value[] = all 3 objects of key.
        this[key] = value[_.random(0,2)];                       //select random object and return as this[key] (i.e. this.entree)
      }
    }
    orderPrice() {
        let entreePrice = this.entree.price;
        let dessertPrice = this.dessert.price;
        let drinkPrice = this.drink.price;

        this.total = entreePrice + dessertPrice + drinkPrice;
        console.log(this.total);
    }
    calcTax() {
        const rate = 0.032;

        let tax = this.total * rate;
        tax = tax.toFixed(2);
        this.tax = parseFloat(tax);
        console.log(this.tax);
    }
    calcTip() {
        const rate = 0.2;

        let tip = this.total * rate;
        tip = tip.toFixed(2);
        this.tip = parseFloat(tip);
        console.log(this.tip);
    }
}

class Bill {
  constructor() {
    this.diners = [];
    this.tBill = [];
    this.tTip = [];
    this.indvBill = [];
  }
  addDiner(diner) {
    this.diners.push(diner);
  }
  totalBill() {
    let billclass = this;
    _.map(this.diners, function(index) {
      let indvTotal = index.total + index.tax + index.tip;
      billclass.tBill.push(indvTotal);
    });
    billclass.tBill = _.sum(billclass.tBill);
    console.log(billclass.tBill);
  }
  totalTip() {
    let billclass = this;
    _.map(this.diners, function(index) {
      console.log(index.tip);
      billclass.tTip.push(index.tip);
      console.log(billclass.tTip);
    });
    billclass.tTip = _.sum(billclass.tTip);
    console.log(billclass.tTip);
  }
  eachBill() {
    let billclass = this;
    _.map(this.diners, function(index) {
      billclass.indvBill.push(index.total + index.tax + index.tip);
      console.log(billclass.indvBill);
    });
  }
}

function initload() {
    let party = new Bill();

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


    party.totalBill();
    party.totalTip();
    party.eachBill();

    console.log("The total bill was: " + party.tBill + ".");
    console.log("The total tip was: " + party.tTip + ".");
    console.log("Moe's total bill was " + party.indvBill[0] + " & he paid a tip of " + moe.tip + ".");
    console.log("Curly's total bill was " + party.indvBill[1] + " & he paid a tip of " + curly.tip + ".");
    console.log("Larry's total bill was " + party.indvBill[2] + " & he paid a tip of " + larry.tip + ".");
}

$(document).ready(initload);
