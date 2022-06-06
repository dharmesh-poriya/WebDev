// impoerting modules
import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default function getReposPageHtml(url){
    // console.log('url :- ',url);
    request(url,cb);
}
function cb(error,response,html){
    if(error){
        console.error(chalk.bgRedBright(error));
    }else{
        extractReposHtml(html);
    }
}

function extractReposHtml(html){
    let $ = cheerio.load(html);
    let topicHtml = $('#js-pjax-container>div>div.container-lg.d-sm-flex.flex-items-center.p-responsive.py-5>div');
    let topicsArr = $('#js-pjax-container>div>div.topic.p-responsive.container-lg>.d-md-flex.gutter-md>.col-md-8.col-lg-9>article');

    let topicName = $(topicHtml[0]).find('h1').text();
    console.log(chalk.yellow(topicName));
}