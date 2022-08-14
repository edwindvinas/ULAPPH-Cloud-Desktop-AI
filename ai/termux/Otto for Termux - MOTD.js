/*DESCRIPTION:
 * Handles Termux intents
 * {
 *   "noun": {
 *       "syn": ["adult female", "charwoman", "char", "cleaning woman", "cleaning lady", "womanhood", "fair sex", "adult", "class", "cleaner", "female", "female person", "grownup", "social class", "socio-economic class"],
 *       "ant": ["man"],
 *       "usr": ["girl"]
 *   }
 * }
 */
/*NAME: Termux - MOTD Bot
    
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

//termux_call_contact :: call Edwin

writeLog("kvp data: " + JSON.stringify(kvp));
var str = input;
writeLog("str: "+str);
if (str == "termux_motd_local") {
    output += "UWM_ACTION::MOTD::" + str;
} else {
    output += "Sorry, I can't find the correct intent for Termux.";
}
// code block

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
writeLog("kvo.ottoFillerStr1: " + kvo.ottoFillerStr1);
writeLog("LOG: " + log);
/*------------------------------------*/
