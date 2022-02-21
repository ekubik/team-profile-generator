const Employee = require("../lib/Employee")


describe("Employee constructor", () => {
  it("retrieves correct values from each property", () => {
    const newEmployee = new Employee("Ann Smith", "127", "annsmith@email.com");
    expect(newEmployee.name).toEqual("Ann Smith");
    expect(newEmployee.id).toEqual("127");
    expect(newEmployee.email).toEqual("annsmith@email.com");
  });

  it("returns name when getName() method called", () => {
    const newEmployee = new Employee(
      "Ann Smith",
      "127",
      "annesmith@email.com",
    );
    expect(newEmployee.getName()).toEqual("Ann Smith");
  });

  it("returns employee id when getId() method called", () => {
    const newEmployee = new Employee ("Ann Smith", "127", "annesmith@email.com");
    expect(newEmployee.getId()).toEqual("127");
  });

  it("returns employee email when getEmail() method called", () => {
    const newEmployee = new Employee("Ann Smith", "127", "annesmith@email.com");
    expect(newEmployee.getEmail()).toEqual("annesmith@email.com");
  });

  it("returns role of 'employee' when role function called", () => {
    const newEmployee = new Employee(
      "Ann Smith",
      "127",
      "annesmith@email.com",
    );
    expect(newEmployee.getRole()).toEqual("Employee");
  });
});
