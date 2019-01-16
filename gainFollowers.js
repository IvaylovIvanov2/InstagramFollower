var followedCount = 0;
var remainingUsersPresent = true;
var nextBtn = null;
var followDelayMultiplier = 10000;

function start() {
    if(followedCount < 40) {
        var showSuggesstionsBtn = document.querySelectorAll('._5f5mN')[1];
        showSuggesstionsBtn ? useSuggestionsBtn(showSuggesstionsBtn) : document.querySelector('.YlNGR') ? true : showSuggestions();
        var followButtonsArr = Array.from(document.getElementsByTagName('button')).filter(x => x.innerHTML == 'Follow');
        setTimeout(() => { followOrGetNewUser(followButtonsArr) }, followButtonsArr.length * 2000);
    }
    else {
        followedCount = 0;
        setTimeout(() => { start(); }, 3600000);
    }
}

function followOrGetNewUser(followButtonsArr){
    var remainingUsersPresent = followButtonsArr.length > 0;

    remainingUsersPresent ? followUsers(followButtonsArr) : getNewMainUser()
    nextBtn = document.querySelector('.Kf8kP');
}

function showSuggestions() {
    var followBtn = document.querySelector('.nZSzR').getElementsByTagName('button')[0];
    followBtn.innerHTML == 'Follow' ? followBtn.click() : checkForOpenSuggestions();
}

function checkForOpenSuggestions() {
    document.querySelector('.YlNGR') ? true : window.history.back();
    setTimeout(() => {start()}, followDelayMultiplier);
}

function useSuggestionsBtn(showSuggesstionsBtn) {
    !showSuggesstionsBtn.classList.contains('m4t9r') ? showSuggesstionsBtn.click() : 0;
}

function follow(btn) {
    btn.click();
    followedCount++;
}

function followUsers(followButtons) {
    let timeOutBonusSeconds = 1;
    for(let btn of followButtons){
        setTimeout(() => { follow(btn) }, timeOutBonusSeconds * followDelayMultiplier);
        timeOutBonusSeconds++;
    }
    
    if(nextBtn) setTimeout (() => {nextBtn.click()}, timeOutBonusSeconds * followDelayMultiplier);

    setTimeout(() => { start() }, timeOutBonusSeconds * followDelayMultiplier + 2000);
}

function getNewMainUser() {
    var suggestedUsers = document.querySelectorAll('.FPmhX');
    suggestedUsers[suggestedUsers.length - 1].click();
    setTimeout(() => { start(); }, followDelayMultiplier);
}

start();