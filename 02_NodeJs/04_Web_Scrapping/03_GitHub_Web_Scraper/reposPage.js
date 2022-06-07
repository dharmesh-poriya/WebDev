// impoerting modules
import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import reposIssuesPage from './repos_issues_page.js';

export default function getReposPageHtml(url){
    // console.log('url :- ',url);
    request(url,cb);
}
function cb(error,response,html){
    if(error){
        console.error(chalk.bgRedBright(error));
    }else if(404==response.statusCode){
        console.log(chalk.bgRedBright('Page Not Found'));
    }else{
        extractReposHtml(html);
    }
}

function extractReposHtml(html){
    let $ = cheerio.load(html);
    let mainTopicHtml = $('#js-pjax-container>div>div.container-lg.d-sm-flex.flex-items-center.p-responsive.py-5>div');
    let topicsArr = $('#js-pjax-container>div>div.topic.p-responsive.container-lg>.d-md-flex.gutter-md>.col-md-8.col-lg-9>article');


    let mainTopicName = $(mainTopicHtml[0]).find('h1').text().trim();
    // console.log(chalk.yellow(mainTopicName));
    for(let i=0;i<topicsArr.length;i++){
        let linksHtml = $(topicsArr[i]).find('div.px-3>div.d-flex.flex-justify-between.my-3>div.d-flex.flex-auto>h3>a');
        let userName = $(linksHtml[0]).text().trim();
        let userGithubAccountLink = 'https://github.com'+$(linksHtml[0]).attr('href');
        let reposLink = 'https://github.com'+$(linksHtml[1]).attr('href');
        let reposName = $(linksHtml[1]).text().trim();
        // console.log(chalk.green("reposLinks :- ",reposLink),chalk.red("reposName :- ",reposName));

        reposIssuesPage(userName,userGithubAccountLink,reposLink,reposName,mainTopicName);
    }
}