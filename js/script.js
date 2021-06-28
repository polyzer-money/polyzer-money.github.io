import { main } from './main3.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const imgType = urlParams.get('img')

switch(imgType){
    case "1":
        document.getElementById("c").remove();
        document.getElementById("i").src = "https://i.imgur.com/yFq4cSC.png";
        document.getElementsByTagName('meta')["og:url"].content = `https://polyzer-money.github.io?img=${imgType}`;
        document.getElementsByTagName('meta')["og:image"].content = "https://i.imgur.com/yFq4cSC.png";
        break;
    default:
        document.getElementById("i").remove();
        break;
}

main();