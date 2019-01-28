var loginController = require("../controllers/Login");
describe("Login controller", function() {
    it("should have a method extend which returns a child instance", function(next) {
        expect(loginController.extend).toBeDefined();
        var child = loginController.extend({ name: "my child controller" });
        expect(child.run).toBeDefined();
        expect(child.name).toBe("my child controller");
        next();
    });
    it("should be able to create different childs", function(next) {
        var childA = loginController.extend({ name: "child A", customProperty: 'value' });
        var childB = loginController.extend({ name: "child B" });
        expect(childA.name).not.toBe(childB.name);
        expect(childB.customProperty).not.toBeDefined();
        next();
    });
});