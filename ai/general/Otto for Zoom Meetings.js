/*DESCRIPTION:
 * Google Calendar Bot
/*NAME: Calendar Bot
    
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
//https://sv443.net/jokeapi/v2
var str = input;
writeLog("str: " + str);
joinMeeting = str.indexOf("join");
scheduleMeeting = str.indexOf("schedule");
listMeeting = str.indexOf("list");
showMeeting = str.indexOf("show");
upcomingMeeting = str.indexOf("upcoming");
if (joinMeeting >= 0) {
    output = "Lets join a meeting..."
    zoomUrl = "https://us04web.zoom.us/join";
    output += "UWM_ACTION::OPENTAB::" + zoomUrl + "::";    
} else if (scheduleMeeting >= 0) {
    output = "Lets schedule a meeting..."
    zoomUrl = "https://us04web.zoom.us/meeting/schedule";
    output += "UWM_ACTION::OPENTAB::" + zoomUrl + "::";   
} else if (listMeeting >= 0 || showMeeting >= 0 || upcomingMeeting >= 0) {
    output = "Lets see your upcoming meetings..."
    zoomUrl = "https://us04web.zoom.us/meeting?type=upcoming";
    output += "UWM_ACTION::OPENTAB::" + zoomUrl + "::";   
} else {
    output = "Opening Zoom Meetings..."
    zoomUrl = "https://us04web.zoom.us/";
    output += "UWM_ACTION::OPENTAB::" + zoomUrl + "::";
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