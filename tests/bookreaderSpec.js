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

  afterEach(function() {
    this.server.restore();
  });
});
