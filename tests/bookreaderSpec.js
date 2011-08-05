/**
 * Some BDD style tests. The point is that reading these should be like
 * reading some sort of specification for the application being tested.
 */


/**
 * Encapsulates tests that describe the expected behaviour of the Fluidinfo
 * library.
 */
describe("bookreader.js", function() {

  beforeEach(function() {
    this.server = sinon.fakeServer.create();
    this.xhr = sinon.useFakeXMLHttpRequest();
    this.bookreader = bookreader({username: "username", password: "password"});
  });

  describe("Bookreader object", function() {
    it("should insist a user log in for a session", function() {
      try {
        var bookreader = bookreader();
      } catch(e) {
        var exception = e;
      }
      expect(exception.name).toEqual(ValueError);
      var options = {username: "test"}
      try {
        var bookreader = bookreader(options);
      } catch(e) {
        var exception = e;
      }
      expect(exception.name).toEqual(ValueError);
      var options = {password: "test"}
      try {
        var bookreader = bookreader(options);
      } catch(e) {
        var exception = e;
      }
      expect(exception.name).toEqual(ValueError);
      var bookreader = bookreader({username: "test", password: "test"});
      expect(typeof(bookreader)).toEqual("object");
    });

    it("should have a function to return an appropriately configured work object", function() {
      var work = this.bookreader.getWork({title: "The Three Bears"});
      expect(typeof(work)).toEqual("object");
    });

    it("should insist on a title of a work to be supplied to getWork", function() {
      try {
        var work = this.bookreader.getWork({});
      } catch(e) {
        var exception = e;
      }
      expect(exception.name).toEqual(ValueError);
    });

    it("should have a function to return an appropriately configured friends object", function() {
      var friends = this.bookreader.getFriends();
      expect(typeof(friends)).toEqual("object");
    });

    it("should have a function to return an appropriately configured library object", function() {
      var library = this.bookreader.getLibrary();
      expect(typeof(library)).toEqual("object");
    });
  });

  describe("Work object", function() {
    it("should return the title of the work", function() {
    });

    it("should return an array of the creators of the work", function() {
    });

    it("should return an array of top level blocks (table of contents)", function() {
    });

    it("should remember the current block (reader's location) in the work", function() {
    });

    it("should return an array of the next n blocks from the current block", function() {
    });

    it("should return an array of the blocks i-j", function() {
    });

    it("should be possible to attach a rating tag to the work", function() {
    });

    it("should be possible to attach a comment tag to the work", function() {
    });

    it("should be possible to attach a rating tag to each author", function() {
    });

    it("should be possible to attach a comment tag to each author", function() {
    });

    it("should be possible to mark the work as read", function() {
    });

    it("should be possible to mark blocks of range i-j as read", function() {
    });
  });

  describe("Friends object", function() {
    it("should return an array of friends whose tag's you're interested in", function() {
    });

    it("should allow you to add a Fluidinfo user to your friends list", function() {
    });

    it("should return an array of users who have you as a friend", function() {
    });

    it("should allow you to remove a user from your friends list", function() {
    });
  });

  describe("Friend object", function() {
    it("should return the name of the friend", function() {
    });

    it("should return the username of the friend", function() {
    });

    it("should return an array of the friend's library", function() {
    });

    it("should return an array of the friend's friends", function() {
    });

  });

  describe("Block object", function() {
    it("should return plain text associated with the block", function() {
    });

    it("should return HTML text associated with the block", function() {
    });

    it("should return an image src associated with the block", function() {
    });

    it("should return an audio URL associated with the block", function() {
    });

    it("should return the block's index", function() {
    });

    it("should be possible to return the parent work", function() {
    });

    it("should be possible to return the parent block", function() {
    });

    it("should be possible to return any child blocks", function() {
    });

    it("should be possible to attach a rating tag to the block", function() {
    });

    it("should be possible to attach a comment tag to the block", function() {
    });

    it("should be possible to see the tags associated with a block from a given array of users", function() {
    });

    it("should be possible to see all tags associated with a block", function() {
    });

    it("should be possible to add an index tag to the block", function() {
    });

    it("should be possible to add a text tag to the block", function() {
    });
  });

  describe("Library object", function() {
    it("should be possible to add a work to your library", function() {
    });

    it("should be possible to remove a work from your library", function() {
    });

    it("should be possible to get an array of works in your library", function() {
    });
  });

  afterEach(function() {
    this.server.restore();
  });
});
