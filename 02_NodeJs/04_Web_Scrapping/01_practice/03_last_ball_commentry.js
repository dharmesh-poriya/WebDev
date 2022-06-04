// importing module
import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';

const url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/chennai-super-kings-vs-delhi-capitals-55th-match-1304101/ball-by-ball-commentary';
console.log("Before requesting");
request(url,callBack);
function callBack(error,response,html){
    if(error){
        console.log(error);
    }else{
        extractHtml(html);
    }
}
console.log("After requesting");
function extractHtml(html){
    let $ = cheerio.load(html);
    let elementArr0 = $('.ds-text-tight-m .ds-text-tight-s.ds-font-regular.ds-mb-1')
    let elementArr1 = $('.ds-text-tight-m .ds-ml-4 div span');
    let elementArr2 = $('.ds-text-tight-m .ci-html-content');
    let ballNo = $(elementArr0[0]).text();
    let basicInfo = $(elementArr1[0]).text();
    let commentry = $(elementArr2[0]).text();
    // let htmldata = $(elementArr2[0]).html();
    console.log(chalk.blue(chalk.bgWhite(ballNo)));
    console.log(chalk.red(chalk.bgYellowBright(basicInfo)));
    console.log(chalk.green(chalk.bgGray(commentry)));
    // console.log(chalk.gray(chalk.bgWhite(htmldata)));
}