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
    this.fi = fluidinfo({username: "username", password: "password"});
  });

  describe("Bookreader object", function() {
    it("should allow a user to log in for a session", function() {
    });

    it("should allow a user to log out of a session", function() {
    });

    it("should store session details locally on the browser", function() {
    });

    it("should remember session details from the browser local storage", function() {
    });

  });

  describe("Work object", function() {
  });

  describe("Friends object", function() {
  });

  describe("Block object", function() {
  });

  describe("Library object", function() {
  });

  afterEach(function() {
    this.server.restore();
  });
});
