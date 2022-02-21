const Intern = require("../lib/Intern");

describe("Intern constructor", () => {
  it("retrieves correct values from each property", () => {
    const newEmployee = new Intern ("Ann Smith", "127", "annsmith@email.com", "Monash University");
    expect(newEmployee.name).toEqual("Ann Smith");
    expect(newEmployee.id).toEqual("127");
    expect(newEmployee.email).toEqual("annsmith@email.com");
  });
  
  describe("methods on intern", () => {
      it("getSchool() method retrieves property stored under this.school", () => {
     const newEmployee = new Intern ("Ann Smith", "127", "annsmith@email.com", "Monash University");
     expect(newEmployee.getSchool()).toEqual("Monash University");
     expect(newEmployee.getSchool()).toEqual(newEmployee.school);
      });
      
      it("getRole() method to returns 'intern'", () => {
     const newEmployee = new Intern ("Ann Smith", "127", "annsmith@email.com", "Monash University");
     expect(newEmployee.getRole()).toEqual("Intern");
  });
});

})