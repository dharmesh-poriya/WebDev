import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {getAllMatchLinks} from './all_matches.js';

const url = 'https://www.espncricinfo.com/series/ipl-2021-1249214';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let dirname = path.join(__dirname,"ipl");//url.split('/')[4].trim()
makeNewDirectory(dirname);
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

// creating new directory
function makeNewDirectory(dirname){
    if(!fs.existsSync(dirname)){
        fs.mkdirSync(dirname);
    }
}