let errorCodes = {
    404: "Seems like this link is bogus. Check your URL and try again!",
    500: "Looks like the server flipped it's wig. Try again later.",
    403: "Don't snap your cap... but you need the right credentials to continue.",
    503: "The servers are all Joed... come back later."
}

async function fetchData(sourceURL) {
    debugger;
        // ask for a resource, and then do something with it when it resolves
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200) {
            throw new Error(`Ain't that a bite! Error ${response.status}: ${errorCodes[response.status]}`);
        } 
        
        return response;           
    });

    // fetch uses the Promise API, so it'll return with the resource or return false - either way, it resolves the promise

    // we'll assume success and pass through a parsed JavaScript object from the JSON data we get
    let dataset = await resource.json();

    return dataset[0];
    }

async function postData(sourceURL) {
    // use fetch or Axios to post to a database here

    return "this is the postData endpoint!";
}


export { fetchData, postData };