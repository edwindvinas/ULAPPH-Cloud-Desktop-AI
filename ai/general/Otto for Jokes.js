/*DESCRIPTION:
 * Gets Jokes from jokes.one
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
    Call_ottoFuncLogger(message)
    arrLog += message + "\n";
    return;
}
function Call_ottoFuncLogger(msg) {
    ottoFuncLogger(msg);
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
//https://sv443.net/jokeapi/v2
var str = input;
writeLog("str: " + str);
//var urlStr = "https://sv443.net/jokeapi/v2/joke/Any";
var urlStr1 = "https://sv443.net/jokeapi/v2/joke/Programming";
var urlStr2 = "https://sv443.net/jokeapi/v2/joke/Miscellaneous";
if (kvp.ottoFillerStr2 == "url1") {
    urlStr = urlStr2;
} else if (kvp.ottoFillerStr2 == "url2") {
    urlStr = urlStr1;
} else {
    urlStr = urlStr1;
}
writeLog("Calling API: " + urlStr);
var apires = ottoFuncHttpGet(urlStr);
writeLog("apires: " + apires);
if (apires !== "") {
    //output = apires;
    //parse
    var jObj = JSON.parse(apires);
    if (jObj.type == "single") {
        output = jObj.joke;
    } else {
        //output = jObj.setup + "<silence msec='2000'/>" + jObj.delivery;
        output = jObj.setup + " " + jObj.delivery;
    }
    var openLink = "/editor?EDIT_FUNC=TEXT-CSS&CSS-TYPE=.3d&CSS-ALIGN=center&EDIT_MODE=NEW-CSS&TEXT=" + escape(output);
    output += "UWM_ACTION::OPENWINDOW::" + openLink + "::";
} else {
    output = "Sorry, I cant find a joke right now.";
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
