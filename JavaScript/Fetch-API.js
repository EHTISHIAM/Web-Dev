//API is basically called as Application Programming Interface which is used to take the data from the another server 


//Fetch API provides an interface for fetching the (sending/recieving) resources . It uses the request and response objects 
//The fetch method is used to fetch the resources (data) . They return the promises which has three states 
//let promise = fetch(url,[options]) when we do not add any particular opotion the fetch is sending the GET request to the server

const URL = "https://dogapi.dog/api-docs/v2/swagger.json"

const getFacts = async () => {
    console.log("Fetching the Data .........");
    let response =  await fetch(URL);
    console.log(response);
}

//We are not getting the actual data which is presents on tha API we are getting data in the form of the promises 

