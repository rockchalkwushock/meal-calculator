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
    constructor(entree, dessert, drink) {
        this.entree = entree;
        this.dessert = dessert;
        this.drink = drink;
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

        let totalDinersBill = entreePrice + dessertPrice + drinkPrice;
        console.log(totalDinersBill);
        return totalDinersBill;
    }
    calcTax() {
        // const rate = 0.032;
        //
        // let tax = totalDinersBill * rate;
        // console.log(tax);
    }
    calcTip() {
        // const rate = 0.2;
        //
        // let tip = totalDinersBill * rate;
        // console.log(tip);
    }
}

class Group {
  constructor(one, two, three) {
    this.one = one;
    this.two = two;
    this.three = three;
  }
  totalBill() {
    // All diner's bills totaled
  }
  totalTip() {
    // All diner's tips totaled
  }
}

function initload() {
    let moe = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    moe.randomOrder();
    moe.totalDishes();
    moe.calcTax();
    let curly = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    curly.randomOrder();
    curly.totalDishes();
    curly.calcTax();
    let larry = new Diner(MYLIBRARY.entree, MYLIBRARY.dessert, MYLIBRARY.drink);
    larry.randomOrder();
    larry.totalDishes();
    larry.calcTax();

    // let party = new Group(moe, curly, larry);
}

$(document).ready(initload);
