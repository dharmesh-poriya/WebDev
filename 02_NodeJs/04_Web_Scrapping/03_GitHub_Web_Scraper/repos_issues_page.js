import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import pdfkit from 'pdfkit';
import { fileURLToPath } from 'url';

export default function reposIssuesPage(userName,userGithubAccountLink,reposLink, reposName, mainTopicName) {
    // console.log(chalk.yellow('reposLink :- ',reposLink),chalk.red('reposName :- ',reposName));
    let reposIssuesPageLink = reposLink + '/issues';
    request(reposIssuesPageLink, cbIssues);

    function cbIssues(error, response, html) {
        if (error) {
            console.error(chalk.bgRedBright('ERROR :- ' + error));
            // console.log("in issue page!! ERRROR");
        } else if (404 == response.statusCode) {
            console.log(chalk.bgRedBright('Page Not Found'));
        } else {
            extractIssuesHtml(html);
        }
    }

    function extractIssuesHtml(html) {
        let $ = cheerio.load(html);
        let issuesElementArr = $('a.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title');
        let issuesLinksArr = [];
        for (let i = 0; i < 8 && i < issuesElementArr.length; i++) {
            let issueLink = 'https://github.com' + $(issuesElementArr[i]).attr('href');
            let issueText = $(issuesElementArr[i]).text().trim();
            issuesLinksArr.push({issueText,issueLink});
            // console.log(chalk.blue(issueLink));
            // console.log(chalk.green(mainTopicName));
        }
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        // console.log(chalk.green(mainTopicName));
        let folderPath = path.join(__dirname, 'topics', mainTopicName);
        // console.log(chalk.red(folderPath));
        makeNewDirectory(folderPath);
        let filePath = path.join(folderPath, reposName + '.pdf');

        jsonToPdf(reposName,issuesLinksArr, filePath);
        // fs.writeFileSync(filePath, JSON.stringify(issuesLinksArr));
        // console.log('------------------');
    }

    function jsonToPdf(reposName,issuesLinksArr, filePath) {
        // let text = JSON.stringify(issuesLinksArr);
        let pdfDoc = new pdfkit();
        pdfDoc.pipe(fs.createWriteStream(filePath));
        pdfDoc
        .fontSize(25)
        .fillColor('black')
        .text('UserName : ')
        .fillColor('blue')
        .text(userName, { link: userGithubAccountLink, underline: true})
        .fillColor('black')
        .text('Repository Name : ')
        .fillColor('red')
        .text(reposName, { link: reposLink, underline: true});
        // pdfDoc.fontSize(30).fillColor('red').text(reposName,{
        //     align: 'center',
        //     valign: 'center'
        // });
        // pdfDoc.fontSize(25).text(text, {
        //     align: 'center',
        //     valign: 'center'
        // });
        
        for(let i=0;i<issuesLinksArr.length;i++){
            pdfDoc
            .fontSize(15)
            .fillColor('blue')
            .text(`${i+1}) ${issuesLinksArr[i].issueText}`, { link: issuesLinksArr[i].issueLink, underline: true });
        }
        pdfDoc.end();
    }
}

function makeNewDirectory(dirname) {
    // console.log(chalk.green('directory folder'));
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
}