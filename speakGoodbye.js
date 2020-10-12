(function (window) {
    var byeSpeaker = function (name) {
        console.log(speakWord + " " + name);
    }
    var speakWord = "Good Bye";
    window.byeSpeaker = byeSpeaker;
})(window);