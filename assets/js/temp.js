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
        let e_num = _.random(0, 2);
        let de_num = _.random(0, 2);
        let dr_num = _.random(0, 2);

        this.entree = this.entree[e_num];
        this.dessert = this.dessert[de_num];
        this.drink = this.drink[dr_num];
    }
    totalDishes() {
        let entreePrice = this.entree.price;
        let dessertPrice = this.dessert.price;
        let drinkPrice = this.drink.price;

        this.total = entreePrice + dessertPrice + drinkPrice;
        console.log(this.total);
        return this.total;
    }
    calcTax() {
        const rate = 0.032;

        let tax = this.total * rate;
        tax = tax.toFixed(2);
        this.tax = parseFloat(tax);
        console.log(this.tax);
        return this.tax;
    }
    calcTip() {
        const rate = 0.2;

        let tip = this.total * rate;
        tip = tip.toFixed(2);
        this.tip = parseFloat(tip);
        console.log(this.tip);
        return this.tip;
    }
}

// class Bill extends Diner {
//   constructor(one, two, three) {
//     // this.one = one;
//     // this.two = two;
//     // this.three = three;
//   }
//   totalBill() {
//
//   }
//   totalTip() {
//
//   }
//   eachBill() {
//
//   }
// }

// class Bill {
//   constructor(one, two, three) {
//     this.one = one;
//     this.two = two;
//     this.three = three;
//   }
//   totalBill() {
//     // All diner's bills totaled
//   }
//   totalTip() {
//     // All diner's tips totaled
//   }
// }

function initload() {
    let moe = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    moe.randomOrder();
    moe.totalDishes();
    moe.calcTax();
    moe.calcTip();
    let curly = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    curly.randomOrder();
    curly.totalDishes();
    curly.calcTax();
    curly.calcTip();
    let larry = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    larry.randomOrder();
    larry.totalDishes();
    larry.calcTax();
    larry.calcTip();

    // every diner possesses their total, tax, & tip after running the methods
    // so when passed to Bill(x,y,z) I can say x.total etc.

    // let party = new Bill(moe, curly, larry);
}

$(document).ready(initload);
