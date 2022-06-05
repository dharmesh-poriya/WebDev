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
/*
*venue date opponent result runs balls fours sixes sr
*• folder structure
*IPL
*   team
*      player
*         runs balls fours sixes sr opponent venue date result
*
*venue date and result is same for both team player.
*/

    let $ = cheerio.load(html);
    let descElement = $('.ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid').text();
    let result = $('p.ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title').text();

    let descArr = descElement.split(',');
    let matchNo = descArr[0].split(' ')[0].trim().slice(0,-2);
    let dayOrNight = descArr[0].split(' ')[2].trim();
    let venue = descArr[1].trim();
    let date = descArr[2].trim();
    console.log(matchNo,dayOrNight,venue,date,result);
// venue date => .ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid
// result => 

    // innings wise score
    let innings = $('.ds-mt-3>div>div.ds-bg-fill-content-prime.ds-rounded-lg>.ds-mb-4');
    // console.log("Teams :- ",innings.length);\
    for(let i=0;i<innings.length;i++){
        // finding team name
        let teamName = $(innings[i]).find('.ds-flex.ds-items-center.ds-cursor-pointer.ds-px-4>.ds-grow>.ds-py-3>span').text();
        teamName = teamName.split('INNINGS')[0].trim();
        let opponentIndex = 0==i?1:0;
        let opponentTeamName = $(innings[opponentIndex]).find('.ds-flex.ds-items-center.ds-cursor-pointer.ds-px-4>.ds-grow>.ds-py-3>span').text();
        opponentTeamName = opponentTeamName.split('INNINGS')[0].trim();
        // console.log(chalk.yellow(teamName),chalk.green('vs'),chalk.red(opponentTeamName));
    }
}
