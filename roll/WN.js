var rply = {
    default: 'on',
    type: 'text',
    text: ''
};

gameName = function () {
    return 'Demo'
}

gameType = function () {
    return 'Demo:hktrpg'
}
prefixs = function () {
    //[mainMSG[0]的prefixs,mainMSG[1]的prefixs,   <---這裡是一對  
    //mainMSG[0]的prefixs,mainMSG[1]的prefixs  ]  <---這裡是一對
    //如前面是 /^1$/ig, 後面是/^1D100$/ig, 即 prefixs 變成 1 1D100 
    ///^(?=.*he)(?!.*da).*$/ig
    return [/^.$/i, /^啊$/i]
}
getHelpMessage = function () {
    return "【魔女狩獵之夜】" + "\
	\n  .wn xDn(+-)y  x\
\n.wn x@n(+-)y\
		\n "
}
initialize = function () {
    return rply;
}

rollDiceCommand = async function (inputStr, mainMsg, groupid, userid, userrole, botname, displayname, channelid, displaynameDiscord, membercount) {
    rply.text = '';
    switch (true) {
        case /^help$/i.test(mainMsg[1]) || !mainMsg[1]:
            rply.text = this.getHelpMessage();
            return rply;
        case /^\d+$/i.test(mainMsg[0]):
            rply.text = 'Demo' + mainMsg[1]
            return rply;
        case /^(?![\s\S])/.test(mainMsg[0] || ''):
            rply.text = 'Demo'
            return rply;
        default:
            break;
    }
}


module.exports = {
    rollDiceCommand: rollDiceCommand,
    initialize: initialize,
    getHelpMessage: getHelpMessage,
    prefixs: prefixs,
    gameType: gameType,
    gameName: gameName
};