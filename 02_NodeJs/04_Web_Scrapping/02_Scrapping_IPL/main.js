import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';

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

// get all match links
function getAllMatchLinks(fullLink){
    request(fullLink,function (error,response,html){
        if(error) console.error(chalk.bgRedBright(error));
        else extractMatchLinks(html);
    });
}

function extractMatchLinks(html){
    let $ = cheerio.load(html);
    let scoreBoardElement = $('.ds-p-0>.ds-flex.ds-flex-wrap>.ds-border-b.ds-border-line>div>.ds-px-4.ds-py-3');
    let scoreBoardLinks = [];
    
    for(let i=0;i<scoreBoardElement.length;i++){
        // console.log("A scoreboard links :- ",$(scoreBoardElement[i]).find('a').attr('href'));
        scoreBoardLinks.push('https://www.espncricinfo.com'+$(scoreBoardElement[i]).find('a').attr('href'));
    }
    // console.log("Scoreboard links :- ",scoreBoardLinks);
}