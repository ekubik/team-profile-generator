const Engineer = require('../lib/Engineer');

describe("Engineer constructor", () => {
  it("saves data to correct property ", () => {
    const newEmployee = new Engineer ("Ann Smith", "127", "annesmith@email.com", "annsmith217");
    expect(newEmployee.name).toEqual("Ann Smith");
    expect(newEmployee.id).toEqual("127");
    expect(newEmployee.email).toEqual("annesmith@email.com");
    
  })


  it("returns github user when getGithub() methods called", () => {
    const newEmployee = new Engineer(
    "Ann Smith",
    "127",
    "annesmith@email.com",
    "annsmith217"
  );
  expect(newEmployee.getGithub()).toEqual("annsmith217");

  });

  it("returns role of 'engineer' when role function called", () => {
    const newEmployee = new Engineer(
      "Ann Smith",
      "127",
      "annesmith@email.com",
      "annsmith217"
    );
    expect(newEmployee.getRole()).toEqual("Engineer");
  });
})
