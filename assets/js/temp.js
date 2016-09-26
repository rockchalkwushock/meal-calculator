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
    this.totalTip = [];
    this.indvBill = [];
  }
  addDiner(diner) {
    this.diners.push(diner);
  }
  totalBill() {
    _.map(this.diners, function(index) {
      let indvTotal = index.total + index.tax + index.tip;
      this.tBill.push(indvTotal);
    });
    _.sum(this.tBill);
    console.log(this.tBill);
  }
  totalTip() {
    _.map(this.diner, function(index) {
      this.totalTip =+ index.tip;
      console.log(this.totalTip);
    });
  }
  eachBill() {
    _.map(this.diner, function(index) {
      this.indvBill.push(index.total + index.tax + index.tip);
      console.log(this.indvBill);
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
}

$(document).ready(initload);
