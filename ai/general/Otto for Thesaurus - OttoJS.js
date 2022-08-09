/*DESCRIPTION:
 * Gets a word and calls Big Huge Thesaurus
 * Sample: https://words.bighugelabs.com/api/2/c2e9c4aeb45155f4b7651df2e28e4b8d/woman/json
 * {
 *   "noun": {
 *       "syn": ["adult female", "charwoman", "char", "cleaning woman", "cleaning lady", "womanhood", "fair sex", "adult", "class", "cleaner", "female", "female person", "grownup", "social class", "socio-economic class"],
 *       "ant": ["man"],
 *       "usr": ["girl"]
 *   }
 * }
 */
/*NAME: Thesaurus Bot
    
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
var input = input.toLowerCase();
input  = input.replace("?", "");
writeLog("input: " + input);
var str = input;
writeLog("str: " + str);
var syno = str.indexOf("synonyms ");
var synoOf = str.indexOf("synonyms of");
var synoFor = str.indexOf("synonyms for");

var word = "";
if (syno >= 0) {
    var res = str.split("synonyms ");
    word = res[res.length - 1];
} else if (synoOf >= 0) {
    var res = str.split("synonyms of ");
    word = res[res.length - 1];
} else if (synoFor >= 0) {
    var res = str.split("synonyms for ");
    word = res[res.length - 1];
}
//var res = input.split(" ");
//var word = res[res.length - 1];
if (word === "" || word === "synonyms") {
    output = "Sorry, you forgot to tell the word to be searched. Try as example: synonyms for virus";
} else {
    var urlStr = "https://words.bighugelabs.com/api/2/c2e9c4aeb45155f4b7651df2e28e4b8d/" + word + "/json";
    var bthres = Call_ottoFuncHttpGet(urlStr);
}

function Call_ottoFuncHttpGet(urlStr) {
    writeLog("Calling API: " + urlStr);
    var apires = ottoFuncHttpGet(urlStr);
    writeLog("apires(len): " + apires.length);
    var obj = JSON.parse(apires);
    var thisKey = Object.keys(obj);
    if (thisKey == "noun") {
        var synonyms = obj.noun.syn;
        var synStr = synonyms.join(", ");
        output = "Here are the synonyms for noun word " + word + "..." + synStr;
        output += "UWM_ACTION::OPENWINDOW::" + "https://www.merriam-webster.com/thesaurus/" + word + "::";
    } else if (thisKey == "adjective") {
        synonyms = obj.adjective.syn;
        synStr = synonyms.join(", ");
        output = "Here are the synonyms for adjective word " + word + "..." + synStr;
        output += "UWM_ACTION::OPENWINDOW::" + "https://www.merriam-webster.com/thesaurus/" + word + "::";
    } else {
        output = "Sorry, I cant find the synonyms for " + word + "...";
    }
    return;
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
