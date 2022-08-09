/*DESCRIPTION:
 * Gets quotes from brainy quotes
/*NAME: Quotations Bot
    
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
    Call_ottoFuncLogger(message)
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
writeLog("str: " + str);
if (str == "quote of the day") {
    var url = "https://www.brainyquote.com/quote_of_the_day";
    var resp = Call_ottoFuncScrapeWebsiteRandom("", ".qotd_days .qotd-q-cntr div .clearfix", url, 5);    
} else {
	var rNum = randomIntFromInterval(2,18);
	var ranURL = "https://www.brainyquote.com/topics/inspirational-quotes_"+rNum;
    //var url = "https://www.brainyquote.com/topics/inspirational-quotes";
    var resp = Call_ottoFuncScrapeWebsiteRandom("", ".bq_center .grid-item .b-qt", ranURL, 5);      
}
if (input === "") {
    output = "";
}
function Call_ottoFuncLogger(msg) {
    ottoFuncLogger(msg);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function Call_ottoFuncScrapeWebsiteRandom(word, selector, urlStr, num) {
    writeLog("Calling API: " + urlStr);
    var apires = ottoFuncScrapeWebsiteRandom(selector, urlStr, num);
    if (apires !== "") {
        //output = "According to Brainy Quotes... <silence msec='1000'/>" + apires;
        //output += "UWM_ACTION::OPENTAB::" + urlStr + "::";
        output = apires;
        var openLink = "/editor?EDIT_FUNC=TEXT-CSS&CSS-TYPE=.3d&CSS-ALIGN=center&EDIT_MODE=NEW-CSS&TEXT=" + escape(apires);
        output += "UWM_ACTION::OPENWINDOW::" + openLink + "::";
    } else {
        output = "Sorry, I cant find a quotation from Brainy Quotes.";
    }
}
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
