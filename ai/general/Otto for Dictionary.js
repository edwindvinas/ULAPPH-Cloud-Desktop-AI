/*DESCRIPTION:
 * Gets a word and provides the dictionary definition.
/*NAME: Dicitionary Bot
    
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
writeLog("str: " + str);
defTask = str.indexOf("define ");
definitionFor = str.indexOf("definition for");
dictionaryTask = str.indexOf("dictionary ");
dictionaryTaskFor = str.indexOf("dictionary for");
wotd = str.indexOf("word of the day");
var dictUrl = "";

if (defTask >= 0) {
    var res = str.split("define ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var url = "https://www.merriam-webster.com/dictionary/" + word;
    dictUrl = url;
    var resp = Call_ottoFuncScrapeWebsite(word, ".container .row div .vg ", url, 1);

} else if (definitionFor >= 0) {
    var res = str.split("definition for ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var url = "https://www.merriam-webster.com/dictionary/" + word;
    dictUrl = url;
    var resp = Call_ottoFuncScrapeWebsite(word, ".container .row div .vg ", url, 1);

} else if (dictionaryTaskFor >= 0) {
    var res = str.split("dictionary for ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var url = "https://www.merriam-webster.com/dictionary/" + word;
    dictUrl = url;
    var resp = Call_ottoFuncScrapeWebsite(word, ".container .row div .vg ", url, 1);

} else if (dictionaryTask >= 0) {
    var res = str.split("dictionary ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var url = "https://www.merriam-webster.com/dictionary/" + word;
    dictUrl = url;
    var resp = Call_ottoFuncScrapeWebsite(word, ".container .row div .vg ", url, 1);

} else if (wotd >= 0) {
    var url = "https://www.merriam-webster.com/word-of-the-day";
    dictUrl = url;
    //var resp = Call_ottoFuncScrapeWebsite("", ".did-you-know-wrapper div p", url, 1);
    var resp = Call_ottoFuncScrapeWebsite("", "body > div.outer-container > div > div.main-wrapper.clearfix > main > article > div.lr-cols-area.clearfix.sticky-column > div.left-content > div > div.wod-definition-container", url, 1);

} else {
    if (str == "dictionary" || str == "define") {
        output = "Sorry, you forgot to tell the term to be searched. Try example, dictionary virus.";
		var mwurl = "https://www.merriam-webster.com/dictionary/";
		output += "UWM_ACTION::OPENWINDOW::" + mwurl + "::";
    } else {
        output = "Sorry, I cant find " + word + " in Dictionary.";
		output += "UWM_ACTION::OPENWINDOW::" + "https://www.merriam-webster.com/dictionary/" + "::";
    }
}

if (input === "") {
    output = "";
}

function multipleWord(words) {
    var res = word.split(" ");
    if (res.length > 1) {
        return "Y";
    } else {
        return "N";
    }
}

function Call_ottoFuncScrapeWebsite(word, selector, urlStr, num) {
    writeLog("Calling API: " + urlStr);
    var apires = ottoFuncScrapeWebsite(selector, urlStr, num);
    if (apires !== "") {
        if (word !== "") {
            output = "According to Meriam Webster... " + word + " is defined as " + apires;
        } else {
            output = "According to Meriam Webster... " + apires;
        }
        output += "UWM_ACTION::OPENWINDOW::" + dictUrl + "::";
    } else {
        output = "Sorry, I cant find " + word + " in Meriam Webster.";
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
var name = "Microsoft Zira Desktop - English (United States)";
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