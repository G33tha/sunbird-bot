var message = {}
message.START = {
    "type": "button",
    "data": {
        "text": " Hello, I am Tara!<br>I am your DIKSHA guide<br>Please select your preference from the options I provide or type your query directly.",
        "buttons": [
            {
                "text": "Digital content",
                "value": "1"
            },
            {
                "text": "Courses",
                "value": "2"
            },
            {
                "text": "DIKSHA mobile app",
                "value": "3",
            },
            {
                "text": "Content contribution",
                "value": "4",
            },
            {
                "text": "Other DIKSHA queries",
                "value": "5",
            }
        ]
    }
}

message.CHOOSE_DIGITAL_CONTENT = {

    "type": "button",
    "data": {
        "text": " <span> What content would you like to explore?",
        "buttons": [
            {
                "text": "Textbook videos & practice questions",
                "value": 1,
            },
            {
                "text": "Critical thinking questions",
                "value": 2,
            },
            {
                "text": "Main Menu",
                "value": "0",
            }
        ]
    }
}

message.CHOOSE_BOARD =
{
    "type": "button",
    "data": {
        "text": " Tell me which board you belong to",
        "buttons": [
            {
                "text": "CBSE",
                "value": 1,
            },
            {
                "text": "State Board",
                "value": 2,
            },
            {
                "text": "Go Back",
                "value": "99",
            },
            {
                "text": "Main Menu",
                "value": "0",
            }
        ]
    }
}

message.CBSE_MESSAGE =
{
    "type": "button",
    "data": {
        "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/CBSE/explore/?utm_source=Tara'>DIKSHA CBSE</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br>",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.CHOOSE_STATE_BOARD =
{
    "type": "button",
    "data": {
        "text": " Which state board do you belong to? ",
        "buttons": [{
            "text": "Tamilnadu",
            "data": {"name": "state (tamil nadu)"},
            "value": 1,
        },
        {
            "text": "Karnataka",
            "data": {"name": "State (Karnataka)"},
            "value": 2,
        },
        {
            "text": "Gujarat",
            "data": {"name": "State (Gujarat)"},
            "value": 3,
        },
        {
            "text": "UttarPradesh",
            "data": {"channel": ""},
            "value": 4,
        },
        {
            "text": "Punjab",
            "data": {"channel": ""},
            "value": 5,
        },
        {
            "text": "Rajasthan",
            "data": {"channel": ""},
            "value": 6,
        },
        {
            "text": "Manipur",
            "data": {"channel": ""},
            "value": 7,
        },
        {
            "text": "Chhattisgarh",
            "data": {"channel": ""},
            "value": 8,
        },
        {
            "text": "Maharashtra",
            "data": {"channel": ""},
            "value": 9,
        },
        {
            "text": "Bihar",
            "data": {"channel": ""},
            "value": 10,
        },
        {
            "text": "Odisha",
            "data": {"channel": ""},
            "value": 11,
        },
        {
            "text": "Assam",
            "data": {"channel": ""},
            "value": 12,
        },
        {
            "text": "Madhya Pradesh",
            "data": {"channel": ""},
            "value": 13,
        },
        {
            "text": "Haryana",
            "data": {"channel": ""},
            "value": 14,
        },
        {
            "text": "Nagaland",
            "data": {"channel": ""},
            "value": 15,
        },
        {
            "text": "Goa",
            "data": {"channel": ""},
            "value": 16,
        },
        {
            "text": "Telangana",
            "data": {"channel": ""},
            "value": 17,
        },
        {
            "text": "Andhra Pradesh",
            "data": {"name": "state (andhra pradesh)"},
            "value": 18,
        },
        {
            "text": "Meghalaya",
            "data": {"channel": ""},
            "value": 19,
        },
        {
            "text": "NCERT",
            "data": {"channel": ""},
            "value": 20,
        },
        {
            "text": "Jharkhand",
            "data": {"channel": ""},
            "value": 21,
        },
        {
            "text": "Sikkim",
            "data": {"channel": ""},
            "value": 22,
        },
        {
            "text": "Chandigarh",
            "data": {"channel": ""},
            "value": 23,
        },
        {
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.BOARD =
{
    "type": "button",
    "data": {
        "text": " Please visit <a target='_blank' href='{$course_link}'>DIKSHA TAMILNADU</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br>",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}
message.NISHTHA_BOARD =
{
    "type": "button",
    "data": {
        "text": " Please visit <a target='_blank' href='[NISHTHA_COURSE_LINK]'>DIKSHA [%BOARD%]</a><br>Select the Medium and Class to view relevant subject textbook on the board website.<br>",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}


message.WEEKLY_CRITICAL_THINKING =
{
    "type": "button",
    "data": {
        "text": " Please visit: <a target='_blank' href='https://diksha.gov.in/play/collection/do_31290608850520473612338?contentType=TextBook&utm_source=Tara'>Critical thinking questions</a><br><br>Select the Subject to view relevant content on the page",
        "buttons": [
            {
                "text": "Go Back",
                "value": "99",
            },
            {
                "text": "Main Menu",
                "value": "0",
            }]
    }
}

message.TRAINING =
{
    "type": "button",
    "data": {
        "text": "  Select the course you would like to do<br>Type the number next to the course<br>",
        "buttons": [{
            "text": "State Courses",
            "value": 1,
        },
        {
            "text": "IGOT Courses",
            "value": 2,
        },
        {
            "text": "NISHTHA Courses",
            "value": 3,
        },
        {
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.CHOOSE_STATE_TRAINING_BOARD =
{
    "type": "button",
    "data": {
        "text": "Which state board do you belong to?<br>Type the number next to the State:<br>",
        "buttons": [{
            "text": "CBSE",
            "value": 1,
        },
        {
            "text": "Uttar Pradesh",
            "value": 2,
        },
        {
            "text": "Madhya Pradesh",
            "value": 3,
        },
        {
            "text": "Gujarat",
            "value": 4,
        },
        {
            "text": "Others",
            "value": 5,
        },
        {
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.TRAINING_CBSE_BOARD =
{

    "intent": "greet",
    "type": "buttons",
    "data": {
        "text": "Please visit:<a target='_blank' href='https://diksha.gov.in/explore-course?channel=01241974041332940818&appliedFilters=true&utm_source=Tara'>DIKSHA CBSE Course</a><br>Select the Topic, Medium, Class and Subject to view relevant course on the website.<br>",
        "buttons": [
            {
                "text": "Go Back",
                "value": "99",
            },
            {
                "text": "Main Menu",
                "value": "0",
            }]
    }
}

message.TRAINING_UP_BOARD =
{

    "intent": "greet",
    "type": "buttons",
    "data": {
        "text": "Please visit:<a target='_blank' href='https://diksha.gov.in/explore-course?channel=01246376237871104093&appliedFilters=true&utm_source=Tara'>DIKSHA UP Course </a>",
        "buttons": [
            {
                "text": "Go Back",
                "value": "99",
            },
            {
                "text": "Main Menu",
                "value": "0",
            }]
    }
}

message.TRAINING_MP_BOARD =
{

    "intent": "greet",
    "type": "buttons",
    "data": {
        "text": "Please visit:<a target='_blank' href='https://diksha.gov.in/explore-course?channel=012936530816278528135&appliedFilters=true&utm_source=Tara'>DIKSHA MP Course</a><br>Select the Topic, Medium, Class and Subject to view relevant course on the website.<br>",
        "buttons": [
            {
                "text": "Go Back",
                "value": "99",
            },
            {
                "text": "Main Menu",
                "value": "0",
            }]
    }
}

message.TRAINING_GJ_BOARD =
{

    "intent": "greet",
    "type": "buttons",
    "data": {
        "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/explore-course?channel=01260242422044262448&appliedFilters=true&utm_source=Tara'>DIKSHA GJ Course</a><br>Select the Topic, Medium, Class and Subject to view relevant course on the website.<br>",
        "buttons": [
            {
                "text": "Go Back",
                "value": "99",
            },
            {
                "text": "Main Menu",
                "value": "0",
            }]
    }
}

message.TRAINING_OTHERS_BOARD =
{

    "intent": "greet",
    "type": "buttons",
    "data": {
        "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/explore-course/?utm_source=Tara'>DIKSHA Course</a><br>Select the Topic, Medium, Class and Subject to view relevant course on the website.<br>",
        "buttons": [
            {
                "text": "Go Back",
                "value": "99",
            },
            {
                "text": "Main Menu",
                "value": "0",
            }]
    }
}

message.NISHTHA_TRAINING = message.CHOOSE_STATE_BOARD

message.CHOOSE_IGOT_TRAINING_OPTION =
{
    "type": "button",
    "data": {
        "text": "Select what you are looking for<br>Type the number next to the option:<br>",
        "buttons": [{
            "text": "Take IGOT course",
            "value": 1,
        },
        {
            "text": "Issues with course/certificate",
            "value": 2,
        },
        {
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }
        ]
    }
}

message.IGOT_TRAINING =
{
    "type": "button",
    "data": {
        "text": "Please visit:<a target='_blank' href='https://igot.gov.in/igot/explore-course/?utm_source=Tara'>IGOT Courses</a><br>Select the role to view relevant course on the website.<br>",
        "buttons": [
            {
                "text": "Go Back",
                "value": "99",
            },
            {
                "text": "Main Menu",
                "value": "0",
            }]
    }
}

message.CERTIFICATE_ISSUE =
{
    "type": "button",
    "data": {
        "text": " Please write your concern to support@i-got.freshdesk.com<br>",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.PLAYSTORE =
{
    "type": "buttons",
    "data": {
        "text": " Please visit: <a target='_blank' href='https://play.google.com/store/apps/details?id=in.gov.diksha.app&referrer=utm_source%3Dtara'>DIKSHA mobile app</a><br><br><strong>Step 1.</strong> Download the DIKSHA mobile app from the link given above<br><strong>Step 2.</strong> Install the DIKSHA app<br><strong>Step 3.</strong> Follow the instructions provided in the app<br><br>You are good to go!<br>",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.CONTRIBUTE_CONTENT =
{
    "type": "buttons",
    "data": {
        "text": " Please visit: <a target='_blank' href='https://vdn.diksha.gov.in/'>VIDYADAAN</a><br>Use a desktop or laptop to start contributing content to be used by the nation.<br>",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.OTHER_OPTIONS =
{
    "type": "buttons",
    "data": {
        "text": " Type the number next to your query:",
        "intent": "greet",
        "buttons": [{
            "text": "Scan QR code",
            "value": 1,
        },
        {
            "text": "Login issues",
            "value": 2,
        },
        {
            "text": "Reset password",
            "value": 3,
        },
        {
            "text": "Other queries",
            "value": 4,
        },
        {
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }
        ]
    }
}

message.SCAN_QRCODE =
{
    "type": "buttons",
    "data": {
        "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/help/getting-started/diksha-mobile-app/understanding-qr-code.html?utm_source=Tara'>Scan QR Code</a><br>",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.UNABLE_LOGIN =
{
    "type": "buttons",
    "data": {
        "text": " Please visit: <a target='_blank' href='https://diksha.gov.in/help/getting-started/login/index.html?utm_source=Tara'>Login issues​</a><br>",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.FORGOT_PASSWORD =
{
    "type": "buttons",
    "data": {
        "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/help/getting-started/recover-password/index.html?utm_source=Tara'>Reset password</a><br>",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.OTHERS =
{
    "type": "buttons",
    "data": {
        "text": "Please visit: <a target='_blank' href='https://diksha.gov.in/help/getting-started/explore-diksha/index.html?utm_source=Tara?utm_source=Tara'>Other issues</a><br>",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.UNKNOWN_OPTION =
{
    "type": "buttons",
    "data": {
        "text": "Sorry, I do not understand what you’re asking.",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.SORRY =
{
    "type": "buttons",
    "data": {
        "text": "Sorry, can you come again please?",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.WRONG_INPUT_AT_FIRST_LEVEL =
{
    "type": "buttons",
    "data": {
        "text": "<span>Sorry, I do not understand what you’re asking.</span>",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}

message.WRONG_INPUT_AT_SECOND_LEVEL =
{
    "type": "buttons",
    "data": {
        "text": "<span>Sorry, I do not understand what you're asking. Press 0 to go to Main Menu or type your query directly, so I can help you better.</span>",
        "intent": "greet",
        "buttons": [{
            "text": "Go Back",
            "value": "99",
        },
        {
            "text": "Main Menu",
            "value": "0",
        }]
    }
}


message.START_whatsapp =
{
    "text": "Hi, I’m TARA, your DIKSHA assistant. How may I help you today? \n Select from one of the following options. Send the number corresponding to your choice \n 1- To find and play content \n 2- To download/update the DIKSHA mobile app \n 3- Other Queries",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CHOOSE_BOARD_whatsapp =
{
    "text": "Tell me which of the following board you belong to, so that I can assist you better. Send the number corresponding to the board. \n1- CBSE  \n2- State Board ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CBSE_MESSAGE_whatsapp =
{
    "text": "Please visit 'https://diksha.gov.in/CBSE/explore to access eResources, videos, DFs and practice sheets from the topics in your syllabus.  Happy learning!\n\n Press 99 to go back to the previous menu or 0 to the main menu ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CHOOSE_STATE_BOARD_whatsapp =
{
    "text": "Which of the following state boards you belong to? Send the number corresponding to your choice \n1- Tamil Nadu \n2- Karnataka \n3- Gujarat \n4- Uttar Pradesh",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.TN_BOARD_whatsapp =
{
    "text": "Please visit https://diksha.gov.in/tn/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.KA_BOARD_whatsapp =
{
    "text": "Please visit https://diksha.gov.in/ka/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.GJ_BOARD_whatsapp =
{
    "text": "Please visit https://diksha.gov.in/gj/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UP_BOARD_whatsapp =
{
    "text": "Please visit https://diksha.gov.in/up/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.PLAYSTORE_whatsapp =
{
    "text": "Please visit https://play.google.com/store/apps/details?id=in.gov.diksha.app&hl=en_IN​. \n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHER_OPTIONS_whatsapp =
{
    "text": "Please select from the following options. Send the number corresponding to your choice - \n1- How to scan using qr code?  \n2- Not able to Login \n3- Others",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.SCAN_QRCODE_whatsapp =
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/diksha-mobile-app/understanding-qr-code.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu. ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNABLE_LOGIN_whatsapp =
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/sign-in/index.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHERS_whatsapp =
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/explore-diksha/index.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu. ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNKNOWN_OPTION_whatsapp =
{
    "text": "Sorry, I do not understand what you’re asking. Please choose from the following options or press 0 for the main menu, so I can help you better",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.SORRY_whatsapp =
{
    "text": "Sorry, can you come again please?",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.START_telegram =
{
    "text": "Hi, I’m TARA, your DIKSHA assistant. How may I help you today? \n Select from one of the following options. Send the number corresponding to your choice \n 1- To find and play content \n 2- To download/update the DIKSHA mobile app \n 3- Other Queries",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CHOOSE_BOARD_telegram =
{
    "text": "Tell me which of the following board you belong to, so that I can assist you better. Send the number corresponding to the board.: \n1- CBSE  \n2- State Board ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CBSE_MESSAGE_telegram =
{
    "text": "Please visit 'https://diksha.gov.in/CBSE/explore to access eResources, videos, DFs and practice sheets from the topics in your syllabus.  Happy learning!\n\n Press 99 to go back to the previous menu or 0 to the main menu ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.CHOOSE_STATE_BOARD_telegram =
{
    "text": "Which of the following state boards you belong to? Send the number corresponding to your choice \n1- Tamil Nadu \n2- Karnataka \n3- Gujarat \n4- Uttar Pradesh",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.TN_BOARD_telegram =
{
    "text": "Please visit https://diksha.gov.in/tn/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}
message.KA_BOARD_telegram =
{
    "text": "Please visit https://diksha.gov.in/ka/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.GJ_BOARD_telegram =
{
    "text": "Please visit https://diksha.gov.in/gj/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UP_BOARD_telegram =
{
    "text": "Please visit https://diksha.gov.in/up/explore Select the Medium and Class to view relevant subject textbook\n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.PLAYSTORE_telegram =
{
    "text": "Please visit https://play.google.com/store/apps/details?id=in.gov.diksha.app&hl=en_IN. \n\nPress 99 to go back to the previous menu or 0 to the main menu.",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHER_OPTIONS_telegram =
{
    "text": "Please select from the following options- \n1- How to scan using qr code?  \n2- Not able to Login \n3- Others",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.SCAN_QRCODE_telegram =
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/diksha-mobile-app/understanding-qr-code.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu. ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNABLE_LOGIN_telegram =
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/sign-in/index.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.OTHERS_telegram =
{
    "text": "Please visit: https://diksha.gov.in/help/getting-started/explore-diksha/index.html. \n\nPress 99 to go back to the previous menu or 0 to the main menu. ",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}

message.UNKNOWN_OPTION_telegram =
{
    "text": "Sorry, I do not understand what you’re asking. Please choose from the following options or press 0 for the main menu, so I can help you better",
    "intent": "greet",
    "type": "buttons",
    "buttons": []
}
module.exports.message = message;
