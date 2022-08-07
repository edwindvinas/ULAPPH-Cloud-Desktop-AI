/*DESCRIPTION:
 * Gets latest news
/*NAME: News Bot
    
    INPUT:
    { "input": ?, "kvo": ?}  
    
    OUTPUT:
    { "output": ?}
    { "log": ?}
    { "kvo": ?}
*/
/*-----------------------------------*/
/* By default "kvo" & "input" are being passed to VM */
/* holder for logs */
var arrLog = "";
/* function to write logs to Appengine logger*/
//sample: writeLog("plinkData: " + plinkData);
function writeLog(message) {
    arrLog += message + "\n";
    return;
}
/*Parse the kvo input data to kvp*/
var kvp = JSON.parse(kvo);
/*By default output response must be saved in "output" object/var */
/*"output" is hardcoded inside Golang code so it needs to be exact*/
var output = "";
/*User Context can be used to temporarily store data being used during conversation*/
/*You can format it anyway you want*/
var ouc = kvp.ottoUserContext;
/*------------------------------------*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!///
//!!! EDIT BELOW THIS LINE !!!!!!!!!!!!!!!///
/**
 * PROCESSING LOGIC 
 */
var str = input;
if (str == "news") {
	str = "news latest"
}
writeLog("str: " + str);
defNews = str.indexOf("news ");
var numResult = 10;

if (str == "news") {
    var url = "https://www.bing.com/news/search?qs=n&qft=sortbydate%3d\"1\"&form=YFNR&q=" + "latest";
    var resp = Call_ottoFuncScrapeWebsite(word, ".main-container .main .algocore .news-card .news-card-body .title", url, numResult);
    //var imgs = Call_ottoFuncScrapeWebsiteImages(word, ".main-container .main .algocore .news-card .news-card-body .image img .rms_img", url, numResult);

} else if (defNews >= 0) {
    var res = str.split("news ");
    //var word = res[res.length - 1];
    var word = res[1];
	writeLog("word: " + word);
    if (word == undefined || word == "undefined") {
        word = "latest";
    }
    var url = "https://www.bing.com/news/search?qs=n&qft=sortbydate%3d\"1\"&form=YFNR&q=" + word;
    var resp = Call_ottoFuncScrapeWebsite(word, ".main-container .main .algocore .news-card .news-card-body .title", url, numResult);
    //var imgs = Call_ottoFuncScrapeWebsiteImages(word, ".main-container .main .algocore .news-card .news-card-body .image img .rms_img", url, numResult);

} else {
    //output = "Sorry, I cant find news right now. Try example, news latest";
    var url = "https://www.bing.com/news/search?qs=n&qft=sortbydate%3d\"1\"&form=YFNR&q=" + "latest";
    var resp = Call_ottoFuncScrapeWebsite(word, ".main-container .main .algocore .news-card .news-card-body .title", url, numResult);
}

if (input === "") {
    output = "";
}

function Call_ottoFuncScrapeWebsite(word, selector, urlStr, num) {
    writeLog("Calling API: " + urlStr);
    var apires = ottoFuncScrapeWebsite(selector, urlStr, num);
    if (apires !== "") {
        if (word !== "") {
            output = "According to Bing News related to " + word + "... " + apires;
        } else {
            output = "According to Bing News... " + apires;
        }
        output += "UWM_ACTION::OPENWINDOW::" + "https://www.bing.com/news/search?q=" + word + "::";
    } else {
        output = "Sorry, I cant find " + word + " in Bing News.";
    }
}
/*function Call_ottoFuncScrapeWebsiteImages(word, selector,urlStr,num) {
    writeLog("Calling API: "+urlStr);
    var apires2 = ottoFuncScrapeWebsiteImages(selector,urlStr,num);
    writeLog("images: "+apires2);
    if (apires2 !== "") {
        output += "UWM_ACTION::OPENIMGLIST::" + apires2;
    }
}*/
//!!! EDIT ABOVE THIS LINE !!!!!!!!!!!!!!!///
/* Dont remove */
/*------------------------------------*/
//return logs in a "log" variable
var log = arrLog;
//return kvo in "kvo" variable
/*save context before exiting the flow*/
kvp.ottoUserContext = ouc;
//convert the kvp struct into kvo string
var kvo = JSON.stringify(kvp);
//set voice speaker
var name = "Microsoft David Desktop - English (United States)";
writeLog("Seting Voice Name: " + name);
var apires = ottoFuncSetVoiceSpeaker(name);
if (apires !== "") {
    writeLog("Voice has been set to: " + name);
}
//---
//Print debug logs in the Appengine logger
writeLog("OUTPUT: " + output);
writeLog("KVO: " + kvo);
writeLog("LOG: " + log);
/*------------------------------------*/