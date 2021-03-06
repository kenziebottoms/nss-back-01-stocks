#!/usr/bin/env node

"use strict";

const { get } = require("https");

const iex = "https://api.iextrading.com/1.0";

const { argv: [,,symbol] } = process;

const getJson = url => {
    return new Promise((resolve, reject) => {
        get(url, res => {
            let body = "";
            res.on("data", d => {
                body += d;
            });
            res.on("end", () => {
                let data = JSON.parse(body);
                resolve(data);
            });
        });
    });
};

getJson(`${iex}/deep?symbols=${symbol.trim()}`)
    .then(({ trades }) => {
        let prices = trades.map(t => t.price);
        let average = avg(prices);
        if (average) {
            console.log(`$${average}`);
        } else {
            console.log("No results. Try another symbol.");
        }
    });

const avg = list => {
    if (list.length == 0) {
        return false;
    }
    let sum = list.reduce((a,b) => a+b);
    let avg = sum/list.length;
    return avg.toFixed(2);
};