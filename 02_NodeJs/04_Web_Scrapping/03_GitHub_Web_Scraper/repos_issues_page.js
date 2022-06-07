import request from 'request';
import cheerio from 'cheerio';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default function reposIssuesPage(reposLink, reposName, mainTopicName) {
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
            issuesLinksArr.push(issueLink);
            // console.log(chalk.blue(issueLink));
            // console.log(chalk.green(mainTopicName));
        }
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        // console.log(chalk.green(mainTopicName));
        let folderPath = path.join(__dirname, 'topics', mainTopicName);
        // console.log(chalk.red(folderPath));
        makeNewDirectory(folderPath);
        let filePath = path.join(folderPath, reposName + '.json');
        fs.writeFileSync(filePath, JSON.stringify(issuesLinksArr));
        // console.log('------------------');
    }

}

function makeNewDirectory(dirname) {
    // console.log(chalk.green('directory folder'));
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
}