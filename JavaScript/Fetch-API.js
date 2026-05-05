//API is basically called as Application Programming Interface which is used to take the data from the another server 


//Fetch API provides an interface for fetching the (sending/recieving) resources . It uses the request and response objects 
//The fetch method is used to fetch the resources (data) . They return the promises which has three states 
//let promise = fetch(url,[options]) when we do not add any particular opotion the fetch is sending the GET request to the server

const URL = "https://dogapi.dog/api/v2/facts?limit=3"

const getFacts = async () => {
    console.log("Fetching the Data .........");
    let response =  await fetch(URL);  //JSON 
    console.log(response);
}

//We are not getting the actual data which is presents on tha API we are getting data in the form of the promises 

//Understanding the Terms 
//AJAX is ASynchronomus JS and XML 

// When we send a request to a API we get Data in diff formats which is may XML file and JSON (JS Object Notation)
//We get response in JSON fromat and we then convert it in JS for this we use a method called JSON Method ()

//JSON Method () : returns a second Promise (because first promise is returned by the fetch ) that resolve the result of parsing the response of body text as JSON (Input is JSON and the output will be the JS)

const getData = async () =>{
    console.log("Fetching the Data ........");
    try {
    let response = await fetch(URL) ; 
    }
    console.log(response);
    let data = await response.json();
    console.log(data[0]);
}