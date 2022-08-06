/*DESCRIPTION:
 * Gets a word and calls Wikipedia API
 * Sample: https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Philippines
 * {
 *     "batchcomplete": "",
 *     "query": {
 *         "pages": {
 *             "23440": {
 *                 "pageid": 23440,
 *                 "ns": 0,
 *                 "title": "Philippines",
 *                 "extract": "Definition from Wikipedia goes here."
 *             }
 *         }
 *     }
 * }
 */
/*NAME: Wikipedia Bot
    
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
whatIs = str.indexOf("what is ");
whoIs = str.indexOf("what is ");
wikiFor = str.indexOf("wiki for ");
wikipediaFor = str.indexOf("wikipedia for ");
wikipediaOnly = str.indexOf("wikipedia ");
var wikiUrl = "";

if (whatIs >= 0) {
    var res = str.split("what is ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var mword = multipleWord(word);
    if (mword == "N") {
        var urlStr = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + word;
        var bthres = Call_ottoFuncHttpGet(urlStr);
        wikiUrl = "https://en.wikipedia.org/wiki/" + word;
    } else {
        var tword = toTitleCase(res[1]);
        //var resm = tword.split(" ");
        //var wordj = resm.join("_");
        //var replaced = tword.split(' ').join('_');
        var urlStr = "https://en.wikipedia.org/wiki/" + tword;
        wikiUrl = urlStr;
        var selector = ".mw-content-ltr div p";
        var bthres = Call_ottoFuncScrapeWebsite(word, selector, urlStr);
    }
} else if (whoIs >= 0) {
    var res = str.split("who is ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var mword = multipleWord(word);
    if (mword == "N") {
        var urlStr = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + word;
        var bthres = Call_ottoFuncHttpGet(urlStr);
        wikiUrl = "https://en.wikipedia.org/wiki/" + word;
    } else {
        var tword = toTitleCase(res[1]);
        //var resm = tword.split(" ");
        //var wordj = resm.join("_");
        //var replaced = tword.split(' ').join('_');
        var urlStr = "https://en.wikipedia.org/wiki/" + tword;
        wikiUrl = urlStr;
        var selector = ".mw-content-ltr div p";
        var bthres = Call_ottoFuncScrapeWebsite(word, selector, urlStr);
    }
} else if (wikiFor >= 0) {
    var res = str.split("wiki for ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var mword = multipleWord(word);
    if (mword == "N") {
        var urlStr = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + word;
        var bthres = Call_ottoFuncHttpGet(urlStr);
        wikiUrl = "https://en.wikipedia.org/wiki/" + word;
    } else {
        var tword = toTitleCase(res[1]);
        //var resm = tword.split(" ");
        //var wordj = resm.join("_");
        //var replaced = tword.split(' ').join('_');
        var urlStr = "https://en.wikipedia.org/wiki/" + tword;
        wikiUrl = urlStr;
        var selector = ".mw-content-ltr div p";
        var bthres = Call_ottoFuncScrapeWebsite(word, selector, urlStr);
    }
} else if (wikipediaFor >= 0) {
    var res = str.split("wikipedia for ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var mword = multipleWord(word);
    if (mword == "N") {
        var urlStr = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + word;
        var bthres = Call_ottoFuncHttpGet(urlStr);
        wikiUrl = "https://en.wikipedia.org/wiki/" + word;
    } else {
        var tword = toTitleCase(res[1]);
        //var resm = tword.split(" ");
        //var wordj = resm.join("_");
        //var replaced = tword.split(' ').join('_');
        var urlStr = "https://en.wikipedia.org/wiki/" + tword;
        wikiUrl = urlStr;
        var selector = ".mw-content-ltr div p";
        var bthres = Call_ottoFuncScrapeWebsite(word, selector, urlStr);
    }
} else if (wikipediaOnly >= 0) {
    var res = str.split("wikipedia ");
    var word = res[res.length - 1];
    writeLog("word: " + word);
    var mword = multipleWord(word);
    if (mword == "N") {
        var urlStr = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + word;
        var bthres = Call_ottoFuncHttpGet(urlStr);
        wikiUrl = "https://en.wikipedia.org/wiki/" + word;
    } else {
        var tword = toTitleCase(res[1]);
        //var resm = tword.split(" ");
        //var wordj = resm.join("_");
        //var toTitleCase(res[1]) = tword.split(' ').join('_');
        var urlStr = "https://en.wikipedia.org/wiki/" + tword;
        wikiUrl = urlStr;
        var selector = ".mw-content-ltr div p";
        var bthres = Call_ottoFuncScrapeWebsite(word, selector, urlStr);
    }
} else {
    if (str == "wikipedia") {
        output = "Sorry, you forgot to tell the target keyword. For example: wikipedia planet";
		output += "UWM_ACTION::OPENWINDOW::" + "https://www.wikipedia.org/" + "::";
    } else {
        output = "Sorry, I cant find " + word + " in Wikipedia.";
		output += "UWM_ACTION::OPENWINDOW::" + "https://www.wikipedia.org/" + "::";
    }
}

if (input === "") {
    output = "";
}

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

function multipleWord(words) {
    var res = word.split(" ");
    if (res.length > 1) {
        return "Y";
    } else {
        return "N";
    }
}

function Call_ottoFuncHttpGet(urlStr) {
    writeLog("Calling API: " + urlStr);
    var apires = ottoFuncHttpGet(urlStr);
    writeLog("apires(len): " + apires.length);
    var obj = JSON.parse(apires);
    var wikiobj = obj.query.pages;
    if (wikiobj) {
        var thisKey = Object.keys(wikiobj);
		if (wikiUrl == "") {
			wikiUrl = urlStr;
		}
        if (thisKey !== "") {
            var extract = wikiobj[thisKey].extract;
            output = "According to wikipedia... " + extract;
            //output += "UWM_ACTION::OPENWINDOW::" + wikiUrl + "::";
            output += "UWM_ACTION::OPENTAB::" + wikiUrl + "::";
            //var fText = extract.substring(1, 300);
            //var openLink = "https://localhost/editor?EDIT_FUNC=TEXT-CSS&CSS-TYPE=.3d&CSS-ALIGN=center&EDIT_MODE=NEW-CSS&TEXT=" + escape(fText);
            //output += "UWM_ACTION::OPENWINDOW::" + openLink + "::";
        } else {
            output = "Sorry, I cant find " + word + " in Wikipedia";
        }
    }
}

function Call_ottoFuncScrapeWebsite(word, selector, urlStr) {
    writeLog("Calling API: " + urlStr);
    var apires = ottoFuncScrapeWebsite(selector, urlStr, 3);
	if (wikiUrl == "") {
		wikiUrl = urlStr;
	}
    if (apires !== "") {
        output = "According to wikipedia... " + apires;
        //output += "UWM_ACTION::OPENWINDOW::" + wikiUrl + "::";
        output += "UWM_ACTION::OPENTAB::" + wikiUrl + "::";
        //var fText = apires.substring(1, 300);
        //var openLink = "https://localhost/editor?EDIT_FUNC=TEXT-CSS&CSS-TYPE=.3d&CSS-ALIGN=center&EDIT_MODE=NEW-CSS&TEXT=" + escape(fText);
        //output += "UWM_ACTION::OPENWINDOW::" + openLink + "::";
    } else {
        output = "Sorry, I cant find " + word + " in Wikipedia.";
		wikiUrl = "https://www.google.com?q="+word;
		output += "UWM_ACTION::OPENWINDOW::" + wikiUrl + "::";
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