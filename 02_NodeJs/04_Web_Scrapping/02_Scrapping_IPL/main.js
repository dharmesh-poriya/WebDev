import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import {getAllMatchLinks} from './all_matches.js';

const url = 'https://www.espncricinfo.com/series/ipl-2021-1249214';

// requesting
request(url,callBack);

function callBack(error,response,html){
    if(error){
        console.error(chalk.bgRedBright(error));
    }else{
        extractHtml(html);
    }
}

// get home page url
function extractHtml(html){
    let $ = cheerio.load(html);
    let mainPageLinks = $('.ds-p-0>.ds-block>.ds-py-3.ds-px-4>span>a').attr('href');
    // console.log("Main page link :- ",mainPageLinks);
    let fullLink = 'https://www.espncricinfo.com' + mainPageLinks;
    getAllMatchLinks(fullLink);
}

