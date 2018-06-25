var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

Handlebars.registerHelper("calculateAge", function (birthYear) {
  var age = new Date().getFullYear()- birthYear;

  if (age > 0) {
    return age + " years old.";
  }
  else {
    return "Leass than a year old.";
  }
})

function createHTML (petsData){
  //Selecting string with id=petsTemplate in index.hmtl file.
  var rawTemplate = document.getElementById("petsTemplate").innerHTML;
  //Using Handlebars to make a dynamic template out of the selected string.
  var compiledTemplate = Handlebars.compile(rawTemplate);
  //Populate our template with JSON Data
  var ourGeneratedHTML = compiledTemplate(petsData);

  //Output it on HTML page
  var petsContainer = document.getElementById("pets-container");
  petsContainer.innerHTML = ourGeneratedHTML;
}
