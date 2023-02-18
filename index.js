function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let message;

    switch (string) {
        case string.toLowerCase():
            return message = "I can't hear you!";
        case string.toUpperCase():
            return message = "YES INDEED!";
        case "Let's have dinner together!":
            return message = "I would love to!";
    }
}