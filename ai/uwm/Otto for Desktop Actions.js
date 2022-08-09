/*DESCRIPTION:
 * windows actions
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
writeLog("str: " + str);
var bible = str.indexOf("bible");
var play = str.indexOf("play");
var playLordsPrayer = str.indexOf("play lords prayer");
var playLordsPrayer2 = str.indexOf("lords prayer");
var playFunny = str.indexOf("play funny");
var playMario = str.indexOf("play mario");
var playTetris = str.indexOf("play tetris");
var playWordGame = str.indexOf("play word game");
var playWordGame2 = str.indexOf("play text twist");
var playGame = str.indexOf("play game");
var watchYoutube = str.indexOf("watch youtube");
var launchYoutube = str.indexOf("launch youtube");
var openMusic = str.indexOf("music ");
var playSound = str.indexOf("play sound");
var playSounds = str.indexOf("play sounds");
var playSong = str.indexOf("play song");
var playMusic2 = str.indexOf("play music ");
var playVideo2 = str.indexOf("play video ");
var youtube = str.indexOf("youtube");
var desktopCascade = str.indexOf("windows cascade");
var convoClear = str.indexOf("clear");
var desktopClear = str.indexOf("windows clear");
var desktopClear2 = str.indexOf("clear windows");
var desktopMaximize = str.indexOf("windows maximize");
var desktopMinimize = str.indexOf("windows minimize");
var listenRadio = str.indexOf("listen radio");
var listenRadio2 = str.indexOf("play radio");
var playMusic = str.indexOf("play music");
var playVideo = str.indexOf("play video");
var quickSearch = str.indexOf("quick search");
var search = str.indexOf("search");
var search2 = str.indexOf("search ");
var quotation = str.indexOf("quotation");
var newsLiveStream = str.indexOf("news live stream");
var openTDS = str.indexOf("open TDS");
var openArticle = str.indexOf("open article-");
var openSlide = str.indexOf("open slide-");
var openMedia = str.indexOf("open media-");
var openArticle2 = str.indexOf("open ARTICLE-");
var openSlide2 = str.indexOf("open SLIDE-");
var openMedia2 = str.indexOf("open MEDIA-");

if (bible >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "https://www2.bible.com/bible/111/GEN.1.NIV?show_audio=1";
} else if (playLordsPrayer >= 0 || playLordsPrayer2 >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/aEplqV0scyo?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
} else if (playFunny >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/results?sp=CAMSAhAD&search_query=" + "funny";
} else if (playGame >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "https://www.crazygames.com/";
} else if (playWordGame >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "https://www.crazygames.com/game/text-twist-2";
} else if (playTetris >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "https://ondras.github.io/custom-tetris/";
} else if (playMario >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "https://mario5.florian-rappl.de/";
} else if (playSound >= 0 || playSounds >= 0 || playSong >= 0 || playMusic2 >= 0 || playVideo2 >= 0) {
    //detect any additional inputs
    //var spl = str.indexOf("youtube ");
    var spl = str.split("play ");
    if (spl.length > 1) {
        output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/results?sp=EgIIAg%253D%253D&search_query=" + escape(spl[1]);
    } else {
        //output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/k_CadeboRRs?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com";
    }
} else if (watchYoutube >= 0 || launchYoutube >= 0 || youtube >= 0) {
    //detect any additional inputs
    //var spl = str.indexOf("youtube ");
    var spl = str.split("youtube ");
    if (spl.length > 1) {
        if (spl[1] == "stream") {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/9Auq9mYxFEE?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        } else if (spl[1] == "sports") {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/videoseries?list=PL4Yp_5ExVAU1n7rgLgGYFdy7WAppoQ870&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        } else if (spl[1] == "music") {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/videoseries?list=PLLMA7Sh3JsOQQFAtj1no-_keicrqjEZDm&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        } else {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/results?sp=EgIIAg%253D%253D&search_query=" + escape(spl[1]);
        }
    } else {
        //output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/k_CadeboRRs?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com";
    }
} else if (newsLiveStream >= 0) {
	var YID_SkyNews = "9Auq9mYxFEE";
	var thisLink1 = "https://www.youtube.com/embed/" + YID_SkyNews + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0"

	var YID_ABSCBN = "xk_4_7498jg";
	var thisLink2 = "https://www.youtube.com/embed/" + YID_ABSCBN + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0"		

	var YID_CNA = "U_XsRZXL2Ic";
	var thisLink3 = "https://www.youtube.com/embed/" + YID_CNA + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0"

	var YID_CoronaVirus = "qgylp3Td1Bw";
	var thisLink4 = "https://www.youtube.com/embed/" + YID_CoronaVirus + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0"

	var YID_India = "_QNJA_wFn-o";
	var thisLink5 = "https://www.youtube.com/embed/" + YID_India + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0"

	var YID_Arabic = "ueliG2kthek";
	var thisLink6 = "https://www.youtube.com/embed/" + YID_Arabic + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0"
	var ALL_LINKS = thisLink1 + "@888@" + thisLink2 + "@888@" + thisLink3 + "@888@" + thisLink4 + "@888@" + thisLink5 + "@888@" + thisLink6;
	output = "UWM_ACTION::OPENWINDOWS::" + ALL_LINKS;
} else if (desktopCascade >= 0) {
    output = "UWM_ACTION::CASCADE::";
} else if (desktopClear >= 0 || desktopClear2 >= 0) {
    output = "UWM_ACTION::CLEAR::";
} else if (convoClear >= 0) {
	var resp = ottoFuncClearConversation();
    output = "Sessions have been cleared! UWM_ACTION::SETBG::https://www.ulapph.com/static/img/misc/airobot1.gif";
} else if (desktopMaximize >= 0) {
    output = "UWM_ACTION::MAXIMIZE::";
} else if (desktopMinimize >= 0) {
    output = "UWM_ACTION::MINIMIZE::";
} else if (listenRadio >= 0 || listenRadio2 >= 0) {
    output = "UWM_ACTION::OPENTAB::" + "https://radio.org.ph/";
} else if (playMusic >= 0 || openMusic >= 0) {
    var spl = str.split("play music ");
    if (spl.length > 1) {
        output = "UWM_ACTION::OPENWINDOW::" + "/media?FUNC_CODE=UMP&FILTER=" + spl[1] + "&shuf=Y";
    } else {
        output = "UWM_ACTION::OPENWINDOW::" + "/media?FUNC_CODE=UMP" + "&shuf=Y";
    }
	//output = "UWM_ACTION::OPENWINDOW::https://radio.org.ph/";
} else if (playVideo >= 0) {
    var spl = str.split("play video ");
    if (spl.length > 1) {
        output = "UWM_ACTION::OPENWINDOW::" + "/media?FUNC_CODE=UVP&FILTER=" + spl[1] + "&shuf=Y";
    } else {
        output = "UWM_ACTION::OPENWINDOW::" + "/media?FUNC_CODE=UVP" + "&shuf=Y";
    }
} else if (openTDS >= 0 || openArticle >= 0 ||  openArticle2 >= 0 || openSlide >= 0 || openSlide2 >= 0 || openMedia >= 0 || openMedia2 >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "/tools?FUNC=WIDGET&t=MiniBrowserPost&url=" + input;
} else if (search2 >= 0) {
    var spl = str.split("search ");
    if (spl.length > 1) {
        output = "UWM_ACTION::OPENWINDOW::" + "/tools?FUNC=WIDGET&t=MiniBrowserGet&kw=" + escape(spl[1]);
    } else {
        output = "UWM_ACTION::OPENWINDOW::" + "/tools?FUNC=WIDGET&t=MiniBrowserGet";   
    }
} else if (quickSearch >= 0 || search >= 0) {
    output = "UWM_ACTION::OPENWINDOW::" + "/tools?FUNC=WIDGET&t=MiniBrowserGet";
} else if (quotation >= 0) {
    output = "Sorry, this option is not yet supported!";
} else if (play >= 0) {
    //detect any additional inputs
    //var spl = str.indexOf("youtube ");
    var spl = str.split("play ");
    if (spl.length > 1) {
		var tString = spl[1];
        if (tString.indexOf("birthday") >= 0) {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/_z-1fTlSDF0?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        } else if (tString.indexOf("lupang hinirang") >= 0) {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/-FUBJY6nco0?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        } else if (tString.indexOf("abc") >= 0 || tString.indexOf("alphabet") >= 0 || tString.indexOf("nursery") >= 0 || tString.indexOf("nursery rhymes") >= 0) {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/75p-N9YKqNo?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        } else if (tString.indexOf("twist and shout") >= 0) {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/81ZtmBAA_NE?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
		} else {
            output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/results?sp=EgIIAg%253D%253D&search_query=" + escape(spl[1]);
        }
    } else {
        //output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com/embed/k_CadeboRRs?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
        output = "UWM_ACTION::OPENWINDOW::" + "https://www.youtube.com";
    }
} else {
    output = "Sorry, I cant understand that action. Just say info to list what I can do for you.";
}

if (input === "") {
    output = "";
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
