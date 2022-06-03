// importing module
import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import { find } from 'domutils';

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

    let innigsArr = $('div>.ds-bg-fill-content-prime.ds-rounded-lg>.ds-mb-4');
    for(let i=0;i<innigsArr.length;i++){
        // let teamName = $(innigsArr[i]).find('.ds-grow .ds-text-tight-s.ds-font-bold').text();
        // teamName = teamName.split('INNINGS')[0];
        // teamName = teamName.trim();
        // console.log(teamName);

        // if(teamName === loserTeamName){
            let battingArr = $(innigsArr[i]).find('.ReactCollapse--collapse>.ReactCollapse--content>table>tbody')[0];
            // let bowlingArr = $(innigsArr[i]).find('.ReactCollapse--collapse>.ReactCollapse--content>table')[1];

            let battersArr = $(battingArr).find('tr');
            console.log("length : ",battersArr.length);
            for(let j=0;j<battersArr.length;j++){
                let allColsData = $(battersArr[j]).find('td>span>a>span>span');
                // console.log("allColsData : ",allColsData.length);
                if(1==allColsData.length){
                    let Batter = dateOfBirth($(battersArr[j]).find('td')[0],$);
                }
            }
            
        // }
    }
    
}
function dateOfBirth(batter,$){
    let Batter = {
        name : "",
        dob : "",
        display(){
            console.log(chalk.green("Name")," : ",chalk.yellow(this.name)," => ",chalk.blue(this.dob));
        }
    }
    let batterName = $(batter).find('span>a>span>span').text();
    console.log("Batsman : ",batterName);
    let profileUrl = 'https://www.espncricinfo.com'+$(batter).find('span>a').attr('href');
    profileUrl.trim();
    // console.log("Profile Url : ",profileUrl);
    request(profileUrl,callBackProfile);
    return Batter;
}
function callBackProfile(error,response,html){
    if(error){
        console.log(error);
    }else{
        extractHtmlProfile(html);
    }
}
function extractHtmlProfile(html){
    let $ = cheerio.load(html);
    let detailsArr = $('.ds-text-title-xs.ds-font-bold.ds-text-ui-typo>h5');
    console.log("detailsArr : ",detailsArr.length);
    let dob = $(detailsArr[14]).find('h5').text();
    console.log("DOB : ",dob);
}