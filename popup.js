document.addEventListener('DOMContentLoaded', function() {
    var followersBtn = document.getElementById("gainFollowers");
    var likesBtn = document.getElementById("likePosts");
    var unfollowBtn = document.getElementById("unfollow");

    followersBtn.addEventListener('click', injectFollowerScript);
    likesBtn.addEventListener('click', injectLikerScript);
    unfollowBtn.addEventListener('click', injectUnfollowerScript);
});

function injectFollowerScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "gainFollowers.js"});
    });
}

function injectLikerScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "likePosts.js"});
    });
}

function injectUnfollowerScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "unfollow.js"});
    });
}
