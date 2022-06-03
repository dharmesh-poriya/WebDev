// importing module
import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';

const url = 'https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/chennai-super-kings-vs-delhi-capitals-55th-match-1304101/full-scorecard';
console.log("Before requesting");
request(url,callBack);
function callBack(error,response,html){
    if(error){
        console.log(error);
    }else{
        extractHtml(html);
    }
}
console.log("After requesting");
function extractHtml(html){
    let $ = cheerio.load(html);
    let winnigTeamArr = $('.ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-mb-2 span a span')
    let loserTeamArr = $('.ci-team-score.ds-flex.ds-justify-between.ds-items-center.ds-text-typo-title.ds-opacity-50.ds-mb-2 span a span')
    const winnigTeamName = $(winnigTeamArr[0]).text();
    const loserTeamName = $(loserTeamArr[0]).text();
    console.log(chalk.green("Winner")," : ",chalk.yellow(winnigTeamName),'🏆');
    console.log(chalk.red("Loser")," : ",chalk.yellow(loserTeamName));

    // this is for how to get html code of any particular section
    /*
    let htmlStr = "";
    let getHtml = $('.ds-bg-fill-content-prime.ds-rounded-lg');
    for(let i=0;i<getHtml.length;i++){
        htmlStr += $(getHtml[i]).html();
        console.log(chalk.gray(htmlStr));
    }
    */

    let innigsArr = $('div>.ds-bg-fill-content-prime.ds-rounded-lg>.ds-mb-4');
    for(let i=0;i<innigsArr.length;i++){
        let teamName = $(innigsArr[i]).find('.ds-grow .ds-text-tight-s.ds-font-bold').text();
        teamName = teamName.split('INNINGS')[0];
        teamName = teamName.trim();
        // console.log(teamName);

        if(teamName === loserTeamName){
            // let battingArr = $(innigsArr[i]).find('.ReactCollapse--collapse>.ReactCollapse--content>table')[0];
            let bowlingArr = $(innigsArr[i]).find('.ReactCollapse--collapse>.ReactCollapse--content>table')[1];
            let bowlersArr = $(bowlingArr).find('tbody>tr');
            let Bowler = highestWickets(bowlersArr,$);
            console.log(Bowler.display());
        }
    }
    
}
function highestWickets(bowlersArr,$){
    let Bowler = {
        name : "",
        overs : 0,
        maiden : 0,
        runs : 200,
        wickets : 0,
        economy : 0.0,
        zeros : 0,
        fours : 0,
        sixes : 0,
        wide : 0,
        noBall : 0,
        display(){
            console.log(chalk.bgGray(chalk.white(`Name : ${this.name}`)));
            console.log(chalk.bgWhite(chalk.gray(`Overs : ${this.overs}`)));
            console.log(chalk.bgGray(chalk.white(`Maiden : ${this.maiden}`)));
            console.log(chalk.bgWhite(chalk.gray(`Runs : ${this.runs}`)));
            console.log(chalk.bgGray(chalk.white(`Wickets : ${this.wickets}`)));
            console.log(chalk.bgWhite(chalk.gray(`Economy : ${this.economy}`)));
            console.log(chalk.bgGray(chalk.white(`Zeros : ${this.zeros}`)));
            console.log(chalk.bgWhite(chalk.gray(`Fours : ${this.fours}`)));
            console.log(chalk.bgGray(chalk.white(`Sixes : ${this.sixes}`)));
            console.log(chalk.bgWhite(chalk.gray(`Wide : ${this.wide}`)));
            console.log(chalk.bgGray(chalk.white(`NoBall : ${this.noBall}`)));
        }
    }
    for(let j=0;j<bowlersArr.length;j++){
        let bowlers = $(bowlersArr[j]).find('td');
        let bowlersName = $(bowlers[0]).find('span>a>span').text();
        let overs = $(bowlers[1]).text();
        let maiden = $(bowlers[2]).text();
        let runs = $(bowlers[3]).text();
        let wickets = $(bowlers[4]).find('span>strong').text();
        let economy = $(bowlers[5]).text();
        let zeros = $(bowlers[6]).text();
        let fours = $(bowlers[7]).text();
        let sixes = $(bowlers[8]).text();
        let wide = $(bowlers[9]).text();
        let noBall = $(bowlers[10]).text();
        if(wickets>Bowler.wickets){
            Bowler.name = bowlersName;
            Bowler.overs = overs;
            Bowler.maiden = maiden;
            Bowler.runs = runs;
            Bowler.wickets = wickets;
            Bowler.economy = economy;
            Bowler.zeros = zeros;
            Bowler.fours = fours;
            Bowler.sixes = sixes;
            Bowler.wide = wide;
            Bowler.noBall = noBall;
        }
    }
    return Bowler;
}