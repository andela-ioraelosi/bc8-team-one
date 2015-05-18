var Tweet = function (user, message) {
  this.tweeter = user.handle;
  if(!message) {
    return false;
  }
  this.message = message;
};

var User = function (handleName, name) {
  this.handle = handleName;
  this.username = name;
};

var Message = function(mentions, hashtags, links, text) {

  function getHandles(array) {
    var handleString = '';
    for (var i = 0; i < array.length; i++)
    {
      handleString += array[i].handle;
    }
    return handleString;
  }

  function getHashTags (hashTagArray) {
    return hashTagArray.join('');
  }

  function getLink(linkObject) {
    return linkObject.content;
  }

  function constrainToOneForty(textObject){
    if(textObject.length <= 140){
      return textObject;
    }

    return {
      overBy: textObject.length - 140,
      accepted: false
    };
  }
};