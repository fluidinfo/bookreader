/**
 * Encapsulates the application logic and interraction with Fluidinfo for the
 * bookreader web application.
 */
var bookreader = function(options){
  // validate the options
  if(options && (options.username && options.password)) {
  } else {
    throw {
      name: "ValueError",
      message: "You must supply a username and password."
    }
  }
  var session = new Object();

  session.getWork = function(options) {
    if(options && (options.title)) {
        var work = new Object();
        return work;
    } else {
      throw {
        name: "ValueError",
        message: "You must supply the title of the work"
      }
    }
  };

  session.getFriends = function() {
    var friends = new Object();
    return friends;
  };

  session.getLibrary = function() {
    var library = new Object();
    return library;
  }

  return session;
};
