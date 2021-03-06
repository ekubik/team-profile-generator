
const createTeam = (team) => {

generateManagerCard = (data) => {
return ` <div class="card">
  <h5 class="card-header"> ${data.name}</h5>
  <div class="card-body">
    <h5 class="card-title"> Manager </h5>
    <br>
    <p class="card-text">
      <b>Employee ID: </b> ${data.id}
    </p>
    <p><b>Office ID: </b> ${data.officeNumber}</p>
    <p> <b>Email:</b> <a href= "mailto:${data.email}" >
      ${data.email}
    </a> </p>
  </div>
</div>`
};

generateEngineerCard = (data) => {
return ` <div class="card">
  <h5 class="card-header"> ${data.name}</h5>
  <div class="card-body">
    <h5 class="card-title"> Engineer </h5>
    <br>
    <p class="card-text">
      <b>Employee ID:</b> ${data.id}
    </p>
    <p> <b> Github: </b> <a href="https://www.github.com/${data.githubUser}" target="_blank"> ${data.githubUser}</a></p>
    <p> <b>Email: </b> <a href= "mailto:${data.email}" >
      ${data.email}
    </a> </p>
  </div>
</div>`
};

generateInternCard = (data) => {
  return ` <div class="card">
  <h5 class="card-header"> ${data.name}</h5>
  <div class="card-body">
    <h5 class="card-title"> Intern </h5>
    <br>
    <p class="card-text">
      <b>Employee ID:</b> ${data.id}
    </p>
    <p><b> School:</b> ${data.school} </p>
    <p> <b> Email: </b> <a href= "mailto:${data.email}" >
      ${data.email}
    </a> </p>
  </div>
</div>`
}

const htmlCards = [];

   htmlCards.push(team
       .filter(employee => employee.getRole() === "Manager")
       .map(manager => generateManagerCard(manager))
   ),
   htmlCards.push(team
       .filter(employee => employee.getRole() === "Engineer")
       .map(engineer => generateEngineerCard(engineer))
       .join("")
   );
   htmlCards.push(team
       .filter(employee => employee.getRole() === "Intern")
       .map(intern => generateInternCard(intern))
       .join("")
   );
   return htmlCards.join("")};


const generateHTML = (data) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
   <title> Our Team </title>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous""> </link>
   <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@300&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="../style.css"> </link>
</head>
<body>
<header>
<h1> Our Team </h1> </header>
<section>
<div id="container">
 ${createTeam(data)} 
</div>
</section>
<footer></footer>
</body>
</html>`;
}

module.exports = generateHTML;
