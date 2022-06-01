// const fs = require('fs');
// const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
// const chalk = require('chalk');

console.log("Before requesting");
// requesting html from the url
let url = 'https://www.worldometers.info/coronavirus/';
request(url, callBack);
console.log("After requesting");
function callBack(error, response, html) {
    if (error) {
        console.error('error:', error); // Print the error if one occurred
    } else {
        handleHtml(html);
        // console.log('html:', html); // Print the HTML for the Google homepage.
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
}

function handleHtml(html){
    // load() is used to load the html into cheerio
    let selectorTool = cheerio.load(html);
    // let h1s  = selectorTool('h1');
    // console.log(h1s.length);
    // console.log(h1s.text());
    let contentArr = selectorTool('#maincounter-wrap span');
    // whenever we use loop on array, always do scrapping for each array [i] element
    for(let i=0;i<contentArr.length;i++){
        let data = selectorTool(contentArr[i]).text();
        console.log("data",data);
    }
    let totalCases = selectorTool(contentArr[0]).text();
    let totalDeaths = selectorTool(contentArr[1]).text();
    let totalRecovered = selectorTool(contentArr[2]).text();
    // console.log(chalk.gray("Total Cases : "+totalCases));
    // console.log(chalk.red("Total Deaths : "+totalDeaths));
    // console.log(chalk.green("Total Recovered : "+totalRecovered));

}
