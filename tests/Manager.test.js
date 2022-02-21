const Manager = require("../lib/Manager");

describe("Manager constructor", () => {
  it("retrieves correct values from each property", () => {
    const newEmployee = new Manager ("Ann Smith", "127", "annsmith@email.com", "1234");
    expect(newEmployee.name).toEqual("Ann Smith");
    expect(newEmployee.id).toEqual("127");
    expect(newEmployee.email).toEqual("annsmith@email.com");
    expect(newEmployee.officeNumber).toEqual("1234");
  });

  describe("methods on manager constructor", () => {
      it("getRole() methods returns value of 'manager'", () => {
    const newEmployee = new Manager("Ann Smith","127","annsmith@email.com","1234");
    expect(newEmployee.getRole()).toEqual("Manager");
      });
  });
})