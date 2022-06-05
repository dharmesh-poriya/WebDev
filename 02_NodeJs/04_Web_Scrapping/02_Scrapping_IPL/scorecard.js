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

        // finding batting and bowling innings
        let oneInnings = $(innings[i]).find('.ReactCollapse--collapse>.ReactCollapse--content>table>tbody');
        let currentBatting = $(oneInnings[0]).find('tr.ds-border-b.ds-border-line.ds-text-tight-s');
        let currentBowling = $(oneInnings[1]).find('tr.ds-border-b.ds-border-line.ds-text-tight-s');
        
        // for current batting innings each valid row contain 8 column 
        for(let j=0;j<currentBatting.length;j++){
            let allCols = $(currentBatting[j]).find('td');
            // console.log('Length',allCols.length);
            let isValid = (8===allCols.length)?true:false;
            if(true===isValid){
                let batterName = $(allCols[0]).find('span>a>span>span').text().trim();
                let states = $(allCols[1]).find('span>span').text().trim();
                let runs = $(allCols[2]).text().trim();
                let balls = $(allCols[3]).text().trim();
                // let matchesPlayed = $(allCols[4]).text().trim(); // not sure about M
                let fours = $(allCols[5]).text().trim();
                let sixes = $(allCols[6]).text().trim();
                let sr = $(allCols[7]).text().trim();
                console.log(chalk.yellow(batterName),chalk.green(states),chalk.red(runs),chalk.blue(balls),chalk.magenta(fours),chalk.cyan(sixes),chalk.green(sr));
            }
        }
        console.log('-----------------------------------------------');
        // for current bowling innings each valid row contain 11 column
        for(let j=0;j<currentBowling.length;j++){
            let allCols = $(currentBowling[j]).find('td');
            // console.log('Length',allCols.length);
            let isValid = (11===allCols.length)?true:false;
            if(true===isValid){
                let bowlerName = $(allCols[0]).find('span>a>span').text();
                let overs = $(allCols[1]).text();
                let maiden = $(allCols[2]).text();
                let runs = $(allCols[3]).text();
                let wickets = $(allCols[4]).find('strong').text();
                let economy = $(allCols[5]).text();
                let zeros = $(allCols[6]).text();
                let fours = $(allCols[7]).text();
                let sixes = $(allCols[8]).text();
                let wide = $(allCols[9]).text();
                let noBall = $(allCols[10]).text();
                console.log(chalk.yellow(bowlerName),chalk.green(overs),chalk.red(maiden),chalk.blue(runs),chalk.magenta(wickets),chalk.cyan(economy),chalk.green(zeros),chalk.red(fours),chalk.blue(sixes),chalk.magenta(wide),chalk.cyan(noBall));
            }
        }
        console.log('-----------------------------------------------');
    }
}
