/*DESCRIPTION:
 * Handles unknown intents
 * {
 *   "noun": {
 *       "syn": ["adult female", "charwoman", "char", "cleaning woman", "cleaning lady", "womanhood", "fair sex", "adult", "class", "cleaner", "female", "female person", "grownup", "social class", "socio-economic class"],
 *       "ant": ["man"],
 *       "usr": ["girl"]
 *   }
 * }
 */
/*NAME: Unknown Bot
    
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
output += "Invalid AI intent for " + input;
//output += "Here is the google search for " + input;
//output += "UWM_ACTION::OPENWINDOW::" + "https://www.google.com/search?q=" + input + "::";
//output += "UWM_ACTION::OPENWINDOW::" + "/tools?FUNC=WIDGET&t=MiniBrowserPost&url=" + input + "::";
//output += "Sorry, I didn't get what you mean by "+input;

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