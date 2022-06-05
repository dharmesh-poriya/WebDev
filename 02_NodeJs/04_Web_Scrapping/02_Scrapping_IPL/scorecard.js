import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';

const url = 'https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-royal-challengers-bangalore-19th-match-1254076/full-scorecard';

// requesting
request(url,callBack);

function callBack(error,response,html){
    if(error){
        console.error(chalk.bgRedBright(error));
    }else{
        extractMatchDetailsHtml(html);
    }
}

// get home page url
function extractMatchDetailsHtml(html){
    let $ = cheerio.load(html);
    let mainPageLinks = $('.ds-p-0>.ds-block>.ds-py-3.ds-px-4>span>a').attr('href');
    // console.log("Main page link :- ",mainPageLinks);
    let fullLink = 'https://www.espncricinfo.com' + mainPageLinks;
    getAllMatchLinks(fullLink);
}