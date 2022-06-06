import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import getReposPageHtml from './reposPage.js';


let url = 'https://github.com/topics';
request(url,callBack);
function callBack(error,response,html){
    if(error){
        console.error(chalk.bgRedBright(error));
    }else{
        extractHtml(html);
    }
}

// extracting html
function extractHtml(html){
    let $ = cheerio.load(html);
    let topicsHtml = $('ul>li>div>a.no-underline.d-flex.flex-column.flex-justify-center');
    
    for(let i=0;i<topicsHtml.length;i++){
        let topicLink = 'https://github.com'+$(topicsHtml[i]).attr('href');
        // console.log(chalk.blue(topicLink));
        getReposPageHtml(topicLink);
    }
}