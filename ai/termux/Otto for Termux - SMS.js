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
/*NAME: Termux - SMS Bot
    
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

//kvp.ottoFillerStr1 - contains the current message offset
//kvp.ottoFillerStr2 - contains the current number

writeLog("kvp data: " + JSON.stringify(kvp));
var str = input;

switch(str) {
  case "termux_read_messages_from_start":
    kvp.ottoFillerStr1 = "0";
    kvp.ottoFillerStr2 = "";
    kvp.ottoFillerStr3 = "";
    var curOffset = kvp.ottoFillerStr1;
    writeLog("curOffset: "+curOffset);
    output += "Reading message offset: "+curOffset+".\n";
    writeLog("kvp.ottoFillerStr1: "+kvp.ottoFillerStr1);
    var offset = kvp.ottoFillerStr1;
    writeLog("offset: "+offset);
    var newOffset = parseInt(offset) + 1;
    kvp.ottoFillerStr1 = newOffset.toString();
    writeLog("kvp.ottoFillerStr1: "+kvp.ottoFillerStr1);
    var resp = Call_ottoFuncTermux_SMSlist(offset);
    break;
  case "termux_read_messages":
    writeLog("kvp.ottoFillerStr1: "+kvp.ottoFillerStr1);
    if (kvp.ottoFillerStr1 == undefined || kvp.ottoFillerStr1 == "") {
        kvp.ottoFillerStr1 = "0";
    }
    var curOffset = kvp.ottoFillerStr1;
    writeLog("curOffset: "+curOffset);
    //first invoke
    output += "Reading message offset: "+curOffset+".\n";
    writeLog("kvp.ottoFillerStr1: "+kvp.ottoFillerStr1);
    var offset = kvp.ottoFillerStr1;
    writeLog("offset: "+offset);
    var newOffset = parseInt(offset) + 1;
    kvp.ottoFillerStr1 = newOffset.toString();
    writeLog("kvp.ottoFillerStr1: "+kvp.ottoFillerStr1);
    var resp = Call_ottoFuncTermux_SMSlist(offset);
    break;
  case "termux_send_sms":
    output += "Let's first get the message. At the tone, please record.";
    output += "UWM_ACTION::GET_MESSAGE::DUMMY";
    break;
  default:
    // code block
}

function Call_ottoFuncTermux_GetTextMessageFromVoice() {
    writeLog("Calling API: " + "Call_ottoFuncTermux_GetTextMessageFromVoice");
    apires = ottoFuncTermux_GetTextMessageFromVoice();
    if (apires !== "") {
        output = "Your message is: "+apires;
    } else {
        output = "Sorry, I didn't get your message correctly.";
    }
}

function Call_ottoFuncTermux_SMSlist(offset) {
    writeLog("Calling API: " + "Call_ottoFuncTermux_SMSlist");
    var apires = ottoFuncTermux_SMSlist(offset);
    if (apires !== "") {
        writeLog("apiRes: "+apires);
        writeLog("Executing JSON.parse()");
        var jsonObj = JSON.parse(apires);
        writeLog("jsonObj: "+jsonObj);
        //var jsonObj = apires;
        ctr=1;
        for (var i = 0; i < jsonObj.length; i++) {
            writeLog("jsonObj: "+jsonObj[i]);
            //writeLog("jsonObj.received: "+jsonObj[i].received);
            kvp.ottoFillerStr2 = jsonObj[i].number;
            kvp.ottoFillerStr3 = jsonObj[i].sender;
            if (jsonObj[i].sender != "") {
                //output += "\n\nMessage number " + ctr + " from " + jsonObj[i].sender + "\n" + jsonObj[i].body;
                output += "\n\nFrom " + jsonObj[i].sender + "\n" + jsonObj[i].body;
            } else {
                //output += "\n\nMessage number " + ctr + " from " + jsonObj[i].number + "\n" + jsonObj[i].body;
                output += "\n\nFrom " + jsonObj[i].number + "\n" + jsonObj[i].body;
            }
            if (jsonObj[i].sender !== "") {
                //output += "\n\nIf you want to reply, please say it at the tone.";
                output += "UWM_ACTION::SENDSMS::" + jsonObj[i].number + "::";
            }
            ctr = ctr + 1;
        }
    } else {
        output = "Sorry, I cant read your SMS messages.";
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
writeLog("kvo.ottoFillerStr1: " + kvo.ottoFillerStr1);
writeLog("LOG: " + log);
/*------------------------------------*/
