import { main } from './main3.js';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const imgType = urlParams.get('img')

switch(imgType){
    case "1":
        document.getElementById("c").remove();
        document.getElementById("i").src = "https://i.imgur.com/2bwE3Ik.png";
	/*
        document.getElementsByTagName('meta')[2].content = "https://polyzer-money.github.io?img=1";
        document.getElementsByTagName('meta')[3].content = "https://i.imgur.com/2bwE3Ik.png";
	*/
        break;
    default:
	document.getElementById("i").remove();
	/*
        document.getElementsByTagName('meta')[0].content = "Polyzer's Website"; //title
        document.getElementsByTagName('meta')[1].content = "Website where I test fun stuff"; //description
        document.getElementsByTagName('meta')[2].content = "https://polyzer-money.github.io"; //url
        document.getElementsByTagName('meta')[3].content = "https://i.imgur.com/yFq4cSC.png"; //image
	*/
        break;
}

main();