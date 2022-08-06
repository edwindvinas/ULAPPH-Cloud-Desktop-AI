/*DESCRIPTION:
 * Handles Morning, Afternoon and Evening
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
/*
	OttoChannel string `json:"ottoChannel"`
	OttoReceiver string `json:"ottoReceiver"`
	OttoBotName string `json:"ottoBotName"`
	OttoUserStatus string `json:"ottoUserStatus"`
	OttoUserName string `json:"ottoUserName"`
	OttoUserEmail string `json:"ottoUserEmail"`
	OttoUserNick string `json:"ottoUserNick"`
	OttoUserGender string `json:"ottoUserGender"`
	OttoUserAge string `json:"ottoUserAge"`
	OttoUserCountry string `json:"ottoUserCountry"`
	OttoUserCity string `json:"ottoUserCity"`
	OttoUserDeviceType string `json:"ottoUserDeviceType"`
	OttoLocalTimestamp string `json:"ottoLocalTimestamp"`
	//D0084
	OttoUserDeviceId string `json:"ottoUserDeviceId"`
	OttoUserContext string `json:"ottoUserContext"`
	//dummy fields
	OttoFillerStr1 string `json:"ottoFillerStr1"`
	OttoFillerStr2 string `json:"ottoFillerStr2"`
	OttoFillerStr3 string `json:"ottoFillerStr3"`
	OttoFillerStr4 string `json:"ottoFillerStr4"`
	OttoFillerStr5 string `json:"ottoFillerStr5"`
    OttoFillerStr6: "",
    OttoFillerStr7: "",
    OttoFillerStr8: "",
    OttoFillerStr9: "",
    OttoFillerStr10: "",
    //counters
    OttoCounter1: 0,
    OttoCounter2: 0,
    OttoCounter3: 0,
    //flags
    OttoFlag1: false,
    OttoFlag2: false,
    OttoFlag3: false,
*/
/*------------------------------------*/
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!///
//!!! EDIT BELOW THIS LINE !!!!!!!!!!!!!!!///
/**
 * PROCESSING LOGIC 
 */
writeLog("kvo data: " + kvo);
writeLog("input: " + input);
var str = input;
//First determine if it is indeed morning
var curHr = 0;
if (kvp.ottoLocalTimestamp != "") {
	curHr = getTimeHourFromDate(kvp.ottoLocalTimestamp);
} else {
	var today = new Date()
	curHr = today.getHours()
}
writeLog("curHr: " + curHr);
var FL_NOW_IS = "morning";
if (curHr < 12) {
  //console.log('good morning')
  FL_NOW_IS = "morning";
} else if (curHr < 18) {
  //console.log('good afternoon')
  FL_NOW_IS = "afternoon";
} else {
  //console.log('good evening')
  FL_NOW_IS = "evening";
}
//--DATA
var DataUnits = [2, 11, 37, 42];
//--LOGIC
var LogicUnits = [2, 11, 37, 42];
//--------------------------------------------
//--FUNCTIONS--START--MORNING
	var FunctionUnits_Morning = ["FunctionUnits_Morning_001", "FunctionUnits_Morning_002", "FunctionUnits_Morning_003", "FunctionUnits_Morning_004", , "FunctionUnits_Morning_005"];
	var FunctionUnits_Morning_001 = "Showing the latest news...";
		FunctionUnits_Morning_001 += "UWM_ACTION::NEWBOTMESSAGE::" + "news philippines" + "::";

	var FunctionUnits_Morning_002 = "Playing music...";
		FunctionUnits_Morning_002 += "UWM_ACTION::NEWBOTMESSAGE::" + "play music" + "::";
		
	var FunctionUnits_Morning_003 = "Showing recipes... ";
		FunctionUnits_Morning_003 += "UWM_ACTION::NEWBOTMESSAGE::" + "watch youtube breakfast recipes" + "::";

	var FunctionUnits_Morning_004 = "Showing news live streams....";
		var YID_SkyNews = "9Auq9mYxFEE";
		var thisLink1 = "https://www.youtube.com/embed/" + YID_SkyNews + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var YID_ABSCBN = "NvTuW6MES-c";
		var thisLink2 = "https://www.youtube.com/embed/" + YID_ABSCBN + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";	

		var YID_CNA = "U_XsRZXL2Ic";
		var thisLink3 = "https://www.youtube.com/embed/" + YID_CNA + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var thisLink4 = "https://www.worldometers.info/coronavirus/";

		var YID_EuroNews = "6xrJy-1_qS4";
		var thisLink5 = "https://www.youtube.com/embed/" + YID_EuroNews + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var YID_AlJazeera = "WisZM9CMlTo";
		var thisLink6 = "https://www.youtube.com/embed/" + YID_AlJazeera + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
		
		var ALL_LINKS = thisLink1 + "@888@" + thisLink2 + "@888@" + thisLink3 + "@888@" + thisLink4 + "@888@" + thisLink5 + "@888@" + thisLink6 + "@888@";;
		FunctionUnits_Morning_004 += "UWM_ACTION::OPENWINDOWS::" + ALL_LINKS;
		
	var FunctionUnits_Morning_005 = "Showing morning youtube relaxation...";
		var YTD_Morning = "wuLKvcn-c7A";
		var thisLink7 = "https://www.youtube.com/embed/" + YTD_Morning + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
		
		var YTD_Morning2 = "YxfnUPqWV0k";
		var thisLink8 = "https://www.youtube.com/embed/" + YTD_Morning2 + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
		var ALL_LINKS2 = thisLink7 + "@888@" + thisLink8 + "@888@";
		FunctionUnits_Morning_005 += "UWM_ACTION::OPENWINDOWS::" + ALL_LINKS2;
//--FUNCTIONS--END
//--------------------------------------------
//--FUNCTIONS--START--AFTERNOON
	var FunctionUnits_Afternoon = ["FunctionUnits_Afternoon_001", "FunctionUnits_Afternoon_002", "FunctionUnits_Afternoon_003", "FunctionUnits_Afternoon_004", "FunctionUnits_Afternoon_005"];
	var FunctionUnits_Afternoon_001 = "Showing latest news... ";
		FunctionUnits_Afternoon_001 += "UWM_ACTION::NEWBOTMESSAGE::" + "news philippines" + "::";

	var FunctionUnits_Afternoon_002 = "Playing music... ";
		FunctionUnits_Afternoon_002 += "UWM_ACTION::NEWBOTMESSAGE::" + "play music" + "::";
		
	var FunctionUnits_Afternoon_003 = "Showing recipes...";
		FunctionUnits_Afternoon_003 += "UWM_ACTION::NEWBOTMESSAGE::" + "watch youtube lunch recipes" + "::";

	var FunctionUnits_Afternoon_004 = "Showing news live streams... ";
		var YID_SkyNews = "9Auq9mYxFEE";
		var thisLink1 = "https://www.youtube.com/embed/" + YID_SkyNews + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var YID_ABSCBN = "NvTuW6MES-c";
		var thisLink2 = "https://www.youtube.com/embed/" + YID_ABSCBN + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";	

		var YID_CNA = "U_XsRZXL2Ic";
		var thisLink3 = "https://www.youtube.com/embed/" + YID_CNA + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var thisLink4 = "https://www.worldometers.info/coronavirus/";

		var YID_EuroNews = "6xrJy-1_qS4";
		var thisLink5 = "https://www.youtube.com/embed/" + YID_EuroNews + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var YID_AlJazeera = "WisZM9CMlTo";
		var thisLink6 = "https://www.youtube.com/embed/" + YID_AlJazeera + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
		
		var ALL_LINKS = thisLink1 + "@888@" + thisLink2 + "@888@" + thisLink3 + "@888@" + thisLink4 + "@888@" + thisLink5 + "@888@" + thisLink6 + "@888@";;
		FunctionUnits_Afternoon_004 += "UWM_ACTION::OPENWINDOWS::" + ALL_LINKS;
		
	var FunctionUnits_Afternoon_005 = "Showing some videoke music... ";
		FunctionUnits_Afternoon_005 += "UWM_ACTION::NEWBOTMESSAGE::" + "watch youtube favorite videoke music" + "::";
//--FUNCTIONS--END
//--------------------------------------------
//--FUNCTIONS--START--EVENING
	var FunctionUnits_Evening = ["FunctionUnits_Evening_001", "FunctionUnits_Evening_002", "FunctionUnits_Evening_003", "FunctionUnits_Evening_004", "FunctionUnits_Evening_005"];
	var FunctionUnits_Evening_001 = "Showing latest news... ";
		FunctionUnits_Evening_001 += "UWM_ACTION::NEWBOTMESSAGE::" + "news philippines" + "::";

	var FunctionUnits_Evening_002 = "Playing music... ";
		FunctionUnits_Evening_002 += "UWM_ACTION::NEWBOTMESSAGE::" + "play music" + "::";
		
	var FunctionUnits_Evening_003 = "Showing recipes... ";
		FunctionUnits_Evening_003 += "UWM_ACTION::NEWBOTMESSAGE::" + "watch youtube dinner recipes" + "::";

	var FunctionUnits_Evening_004 = "Showing news live streams... ";
		var YID_SkyNews = "9Auq9mYxFEE";
		var thisLink1 = "https://www.youtube.com/embed/" + YID_SkyNews + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var YID_ABSCBN = "NvTuW6MES-c";
		var thisLink2 = "https://www.youtube.com/embed/" + YID_ABSCBN + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";	

		var YID_CNA = "U_XsRZXL2Ic";
		var thisLink3 = "https://www.youtube.com/embed/" + YID_CNA + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var thisLink4 = "https://www.worldometers.info/coronavirus/";

		var YID_EuroNews = "6xrJy-1_qS4";
		var thisLink5 = "https://www.youtube.com/embed/" + YID_EuroNews + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";

		var YID_AlJazeera = "WisZM9CMlTo";
		var thisLink6 = "https://www.youtube.com/embed/" + YID_AlJazeera + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=0";
		
		var ALL_LINKS = thisLink1 + "@888@" + thisLink2 + "@888@" + thisLink3 + "@888@" + thisLink4 + "@888@" + thisLink5 + "@888@" + thisLink6 + "@888@";;
		FunctionUnits_Evening_004 += "UWM_ACTION::OPENWINDOWS::" + ALL_LINKS;
		
	var FunctionUnits_Evening_005 = "Showing some videoke music... ";
		FunctionUnits_Evening_005 += "UWM_ACTION::NEWBOTMESSAGE::" + "watch youtube nonstop Starbucks music" + "::";
//--FUNCTIONS--END
//--------------------------------------------
//--ACTIONS-MORNING
	var ActionUnits_Morning = ["Would you like to hear some of the latest news?@888@FunctionUnits_Morning_001", "Would you like to play some great morning music?@888@FunctionUnits_Morning_002", "Would you like to see some breakfast suggestions?@888@FunctionUnits_Morning_003", "Would you like to watch live stream news?@888@FunctionUnits_Morning_004", "Would you like to play a relaxing music?@888@FunctionUnits_Morning_005"];
//--------------------------------------------
//--ACTIONS-AFTERNOON
	var ActionUnits_Afternoon = ["Would you like to hear some of the latest news?@888@FunctionUnits_Afternoon_001", "Would you like to play some great afternoon music?@888@FunctionUnits_Afternoon_002", "Would you like to see some lunch suggestions?@888@FunctionUnits_Afternoon_003", "Would you like to watch live stream news?@888@FunctionUnits_Afternoon_004", "Would you like to sing some videoke music?@888@FunctionUnits_Afternoon_005"];
//--------------------------------------------
//--ACTIONS-EVENING
	var ActionUnits_Evening = ["Would you like to hear some of the latest news?@888@FunctionUnits_Evening_001", "Would you like to play some great evening music?@888@FunctionUnits_Evening_002", "Would you like to see some dinner suggestions?@888@FunctionUnits_Evening_003", "Would you like to watch live stream news?@888@FunctionUnits_Evening_004", "Would you like to play some jazz music?@888@FunctionUnits_Evening_005"];
//
//--RESPONSES
//--------------------------------------------
//--RESPONSES - morning
	var ResponseUnits_Morning = ["Good morning!", "You are correct, it's a great morning!", "Great, it is so good to have a morning like this!", "Yes, it feels like its going to be a great morning!"];
//--RESPONSES - afternoon
	var ResponseUnits_Afternoon = ["Good afternoon!", "You are correct, it's a great afternoon!", "Great, it is so good to have an afternoon like this!", "Yes, it feels like its going to be a great afternoon!", "Good afternoon! What's your merienda today?"];
//--RESPONSES - evening
	var ResponseUnits_Evening = ["Good evening!", "You are correct, it's a great evening!", "Great, it is so good to have an evening like this!", "Yes, it feels like its going to be a great evening!", "Good evening! What's your dinner today? Me, I'm on a diet so I just ate some fruits!"];
//--RESPONSES - suggestions
	var ResponseUnits_ReSuggest = ["Sorry if I can't help you with that. ", "Let me think of something for you. ", "How about this one. ", "I know I should be able to help you with something. ", "Ok got that. ", "What if we do this instead. "];

//--
// PROCESSING LOGIC
writeLog("kvo data: kvp.ottoUserStatus: " + kvp.ottoUserStatus);
if (kvp.ottoUserStatus == "") {
	writeLog("PROCESSING RESPONSE...");
	writeLog("kvo data: kvp.ottoUserStatus: blank");
	if (FL_NOW_IS == "morning") {
		shuffle(ResponseUnits_Morning);
			output += ResponseUnits_Morning[0];
			//output += ". ";
		shuffle(ActionUnits_Morning);
			//output += ActionUnits_Morning[0];
			var aLen = ActionUnits_Morning.length - 1;
			var rNum = randomIntFromInterval(0,aLen);
			var action = ActionUnits_Morning[rNum];
			//interpret actions
			var SPL = action.split("@888@");
			kvp.ottoUserStatus = SPL[1];
			output += SPL[0];
			//output += ". ";
	} else if (FL_NOW_IS == "afternoon") {
		shuffle(ResponseUnits_Afternoon);
			output += ResponseUnits_Afternoon[0];
			//output += ". ";
		shuffle(ActionUnits_Afternoon);
			//output += ActionUnits_Afternoon[0];
			var aLen = ActionUnits_Afternoon.length - 1;
			var rNum = randomIntFromInterval(0,aLen);
			var action = ActionUnits_Afternoon[rNum];
			//interpret actions
			var SPL = action.split("@888@");
			kvp.ottoUserStatus = SPL[1];
			output += SPL[0];
			//output += ". ";
	} else if (FL_NOW_IS == "evening") {
		shuffle(ResponseUnits_Evening);
			output += ResponseUnits_Evening[0];
			//output += ". ";
		shuffle(ActionUnits_Evening);
			//output += ActionUnits_Evening[0];
			var aLen = ActionUnits_Evening.length - 1;
			var rNum = randomIntFromInterval(0,aLen);
			var action = ActionUnits_Evening[rNum];
			//interpret actions
			var SPL = action.split("@888@");
			kvp.ottoUserStatus = SPL[1];
			output += SPL[0];
			//output += ". ";
	}
}
//ACTIONS
//NEXT ACTIONS - MORNING
if (input == "general_confirm_yes" || input == "general_confirm_no") { 
	//writeLog("NEXT ACTIONS - MORNING...");
	writeLog("general_confirm_yes/general_confirm_no");
	if (kvp.ottoUserStatus == "FunctionUnits_Morning_001") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Morning_001;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionMorning();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Morning_002") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Morning_002;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionMorning();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Morning_003") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Morning_003;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionMorning();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Morning_004") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Morning_004;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionMorning();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Morning_005") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Morning_005;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionMorning();
		}
	}
}
//NEXT ACTIONS - AFTERNOON
if (input == "general_confirm_yes" || input == "general_confirm_no") { 
	//writeLog("NEXT ACTIONS - AFTERNOON...");
	writeLog("general_confirm_yes/general_confirm_no");
	if (kvp.ottoUserStatus == "FunctionUnits_Afternoon_001") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Afternoon_001;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionAfternoon();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Afternoon_002") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Afternoon_002;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionAfternoon();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Afternoon_003") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Afternoon_003;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionAfternoon();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Afternoon_004") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Afternoon_004;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionAfternoon();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Afternoon_005") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Afternoon_005;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionAfternoon();
		}
	}
}
//NEXT ACTIONS - EVENING
if (input == "general_confirm_yes" || input == "general_confirm_no") { 
	//writeLog("NEXT ACTIONS - EVENING...");
	writeLog("general_confirm_yes/general_confirm_no");
	if (kvp.ottoUserStatus == "FunctionUnits_Evening_001") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Evening_001;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") { 
			findAnotherActionEvening();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Evening_002") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Evening_002;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionEvening();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Evening_003") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Evening_003;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionEvening();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Evening_004") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Evening_004;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionEvening();
		}
	} else if (kvp.ottoUserStatus == "FunctionUnits_Evening_005") {
		if (input == "general_confirm_yes") { 
			output += FunctionUnits_Evening_005;
			//output += ". ";	
			kvp.ottoUserStatus = "";
			kvp.ottoCounter1 = "";
			kvp.ottoFillerStr1 = "";
		} else if (input == "general_confirm_no") {
			findAnotherActionEvening();
		}
	}
}
function findAnotherActionEvening() {
	writeLog("findAnotherActionEvening()");
	kvp.ottoFillerStr1 = kvp.ottoFillerStr1 + "|" + kvp.ottoUserStatus;
	writeLog("kvp.ottoFillerStr1: "+kvp.ottoFillerStr1);
	var curCounter = 0;
	if (kvp.ottoCounter1 == "") {
		curCounter = 0;
	} else {
		curCounter = parseInt(kvp.ottoCounter1);
	}
	writeLog("curCounter: "+curCounter);
	if (curCounter < 3 || curCounter == "" || curCounter == undefined || curCounter == "NaN") {
		var newCounter = curCounter + 1;
		kvp.ottoCounter1 = newCounter.toString();
		//show another action
		writeLog("show another action...");
		var i;
		for (i = 0; i < ActionUnits_Evening.length; i++) {
		  var text = ActionUnits_Evening[i];
		  var SPL = text.split("@888@");
		  var actStr = SPL[1];
		  var prevActs = kvp.ottoFillerStr1;
		  if (prevActs.indexOf(actStr) < 0) {
			kvp.ottoUserStatus = actStr;
			shuffle(ResponseUnits_ReSuggest);
			output += ResponseUnits_ReSuggest[0];
			output += SPL[0];
			//output += ". ";		
			break;
		  }
		}
	} else {
		output += "Alright, no problem!";
		//output += ". ";	
		kvp.ottoUserStatus = "";
		kvp.ottoCounter1 = "";
		kvp.ottoFillerStr1 = "";
	}
	writeLog("output: "+output);
}
function findAnotherActionAfternoon() {
	writeLog("findAnotherActionAfternoon()");
	kvp.ottoFillerStr1 = kvp.ottoFillerStr1 + "|" + kvp.ottoUserStatus;
	writeLog("kvp.ottoFillerStr1: "+kvp.ottoFillerStr1);
	var curCounter = 0;
	if (kvp.ottoCounter1 == "") {
		curCounter = 0;
	} else {
		curCounter = parseInt(kvp.ottoCounter1);
	}
	if (curCounter < 3 || curCounter == "" || curCounter == undefined || curCounter == "NaN") {
		var newCounter = curCounter + 1;
		kvp.ottoCounter1 = newCounter.toString();
		//show another action
		writeLog("show another action...");
		var i;
		for (i = 0; i < ActionUnits_Afternoon.length; i++) {
		  var text = ActionUnits_Afternoon[i];
		  var SPL = text.split("@888@");
		  var actStr = SPL[1];
		  var prevActs = kvp.ottoFillerStr1;
		  if (prevActs.indexOf(actStr) < 0) {
			kvp.ottoUserStatus = actStr;
			shuffle(ResponseUnits_ReSuggest);
			output += ResponseUnits_ReSuggest[0];
			output += SPL[0];
			//output += ". ";		
			break;
		  }
		}
	} else {
		output += "Alright, no problem!";
		//output += ". ";	
		kvp.ottoUserStatus = "";
		kvp.ottoCounter1 = "";
		kvp.ottoFillerStr1 = "";
	}
	writeLog("output: "+output);
}
function findAnotherActionMorning() {
	writeLog("findAnotherActionMorning()");
	kvp.ottoFillerStr1 = kvp.ottoFillerStr1 + "|" + kvp.ottoUserStatus;
	writeLog("kvp.ottoFillerStr1: "+kvp.ottoFillerStr1);
	var curCounter = 0;
	if (kvp.ottoCounter1 == "") {
		curCounter = 0;
	} else {
		curCounter = parseInt(kvp.ottoCounter1);
	}
	if (curCounter < 3 || curCounter == "" || curCounter == undefined || curCounter == "NaN") {
		var newCounter = curCounter + 1;
		kvp.ottoCounter1 = newCounter.toString();
		//show another action
		writeLog("show another action...");
		var i;
		for (i = 0; i < ActionUnits_Morning.length; i++) {
		  var text = ActionUnits_Morning[i];
		  var SPL = text.split("@888@");
		  var actStr = SPL[1];
		  var prevActs = kvp.ottoFillerStr1;
		  if (prevActs.indexOf(actStr) < 0) {
			kvp.ottoUserStatus = actStr;
			shuffle(ResponseUnits_ReSuggest);
			output += ResponseUnits_ReSuggest[0];
			output += SPL[0];
			//output += ". ";		
			break;
		  }
		}
	} else {
		output += "Alright, no problem!";
		//output += ". ";	
		kvp.ottoUserStatus = "";
		kvp.ottoCounter1 = "";
		kvp.ottoFillerStr1 = "";
	}
	writeLog("output: "+output);
}
//output += "Here is the google search for " + input;
//output += "UWM_ACTION::OPENWINDOW::" + "https://www.google.com/search?q=" + input + "::";
//output += "Sorry, I didn't get what you mean by "+input;
//--RANDOMIZER
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getTimeHourFromDate(timestamp) {
  writeLog("getTimeHourFromDate: " + timestamp);
  var spl = timestamp.split(" ");
  var time = spl[1];
  var TM = time.split(":");
  var hours = TM[0];
  return hours
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