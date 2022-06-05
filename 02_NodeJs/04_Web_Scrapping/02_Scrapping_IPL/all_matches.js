import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import {processScorecard} from './scorecard.js';

// get all match links
export function getAllMatchLinks(fullLink){
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
    for(let i=0;i<scoreBoardLinks.length;i++){
        processScorecard(scoreBoardLinks[i]);
    }
}
