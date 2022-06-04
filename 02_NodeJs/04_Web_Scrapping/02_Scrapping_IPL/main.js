import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';

const url = 'https://www.espncricinfo.com/series/ipl-2021-1249214';

// requesting
request(url,callBack);

function callBack(error,response,html){
    if(error){
        console.error(chalk.red('Error :-'),chalk.bgRedBright(error));
    }else{
        extractHtml(html);
    }
}

// get home page url
function extractHtml(html){
    let $ = cheerio.load(html);
    let mainPageLinks =  + $('.ds-block>.ds-py-3.ds-px-4>span>a').attr('href');
    // console.log(mainPageLinks);
    let fullLink = 'https://www.espncricinfo.com' + mainPageLinks;
    getAllMatchLinks(fullLink);
}

// get all match links
function getAllMatchLinks(fullLink){
    let $ = cheerio.load(fullLink);
    let allMatchesLinks = $('.ds-p-0>.ds-flex.ds-flex-wrap>.ds-border-b.ds-border-line>div>.ds-px-4.ds-py-3>a').attr('href');
    let fullLinks = 
}