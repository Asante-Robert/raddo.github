(function (window) {
    var helloSpeaker = function (name) {
        console.log(speakWord + " " + name);
    }
    var speakWord = "Hello";
    window.helloSpeaker = helloSpeaker;
})(window);