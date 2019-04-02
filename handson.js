const URL = "http://www.json-generator.com/api/json/get/bTTBSFjsrS?indent=2";
const promise = fetch(URL);

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse)
   {
    document.getElementById('name-0').innerHTML = processedResponse[0].name;
    document.getElementById('email-0').innerHTML = processedResponse[0].email;
    document.getElementById('company-0').innerHTML = processedResponse[0].company;
    document.getElementById('name-1').innerHTML = processedResponse[1].name;
    document.getElementById('email-1').innerHTML = processedResponse[1].email;
    document.getElementById('company-1').innerHTML = processedResponse[1].company; 
     document.getElementById('name-2').innerHTML = processedResponse[2].name;
    document.getElementById('email-2').innerHTML = processedResponse[2].email;
    document.getElementById('company-2').innerHTML = processedResponse[2].company; 
     document.getElementById('name-3').innerHTML =processedResponse[3].name;
    document.getElementById('email-3').innerHTML = processedResponse[3].email;
    document.getElementById('company-3').innerHTML = processedResponse[3].company; 
     document.getElementById('name-4').innerHTML = processedResponse[4].name;
    document.getElementById('email-4').innerHTML = processedResponse[4].email;
    document.getElementById('company-4').innerHTML = processedResponse[4].company;
  });
  


