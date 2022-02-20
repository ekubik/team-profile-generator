
const generateHTML = (data) => {
return 

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title> Our Team </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous""> </link>
</head>
<body>
<div> ${generateManagerCard(data)} <div>

</body>

</html>`;

}


generateManagerCard = (data) => {
return ` <div class="card">
  <h5 class="card-header"> ${data.name}</h5>
  <div class="card-body">
    <h5 class="card-title"> Manager </h5>
    <p class="card-text">
      Employee ID: ${data.id}
    </p>
    <p>Office ID: ${data.officeNumber}</p>
    <a href= "mailto:${data.email}" >
      ${data.email}
    </a>
  </div>
</div>`
}

generateEngineerCard = (data) => {
return ` <div class="card">
  <h5 class="card-header"> ${data.name}</h5>
  <div class="card-body">
    <h5 class="card-title"> Engineer </h5>
    <p class="card-text">
      Employee ID: ${data.id}
    </p>
    <p> Github: <a href="https://www.github.com/${data.githubUser}"> ${data.githubUser}</a></p>
    <a href= "mailto:${data.email}" >
      ${data.email}
    </a>
  </div>
</div>`
}

generateInternCard = (data) => {
  return ` <div class="card">
  <h5 class="card-header"> ${data.name}</h5>
  <div class="card-body">
    <h5 class="card-title"> Intern </h5>
    <p class="card-text">
      Employee ID: ${data.id}
    </p>
    <p> School: ${data.school} </p>
    <a href= "mailto:${data.email}" >
      ${data.email}
    </a>
  </div>
</div>`;
};

module.exports = {generateHTML, generateEngineerCard, generateManagerCard, generateInternCard}