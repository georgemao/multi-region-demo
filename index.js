const functions = require('@google-cloud/functions-framework');
const {Firestore} = require('@google-cloud/firestore');

const http = require('node:http');

// Create a new client
const firestore = new Firestore({ databaseId: 'people-db'});

let counter = 0;
let instanceID = "";
let region = "";
// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('helloHttp', async (req, res) => {
  console.log("Starting ...");
  counter++;
  console.log(`This container has been invoked: ${counter} times`)
  
  console.log(req.headers)
  let userEmail = req.headers['x-goog-authenticated-user-email'];
  console.log(userEmail);
  userEmail=userEmail.replace("accounts.google.com:", '');


  getMetadata("/computeMetadata/v1/instance/id");
  getMetadata("/computeMetadata/v1/instance/region");

  let doc = await readDoc(userEmail);

  // Sleep for 3 seconds
  await sleep(3000);
  console.log("Ended!");

  let response = {
    instanceID: instanceID,
    counter: counter,
    region: region,
    person: doc
  }
  
  //res.status(200).send(`${instanceID} served this request. \n This container has been invoked: ${counter} times`);
  res.status(200).json(response);
});


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


function getMetadata(pathUrl){
  const options = {
    hostname: 'metadata.google.internal',
    path: pathUrl,
    method: 'GET',
    headers: {
      'Metadata-Flavor': 'Google'
    }
  };

  const instanceReq = http.request(options, (res) => {
    let data = '';
  
    res.on('data', (chunk) => {
      data += chunk;
    });
  
    res.on('end', () => {
      if(pathUrl == "/computeMetadata/v1/instance/id"){
        instanceID = data;
        console.log(`The instance ID is: ${data}`);
      } 
      else if(pathUrl == "/computeMetadata/v1/instance/region"){
        region = data;
        console.log(`The region is: ${data}`);
      }
      else{
        console.error("Invalid path");
      }
      
    });
  });
  
  instanceReq.on('error', (error) => {
    console.error(error);
  });
  
  instanceReq.end();
}

async function readDoc(userEmail) {
  try {
      console.log(`Reading document: ${userEmail}`)
      //const document = firestore.doc('person/i6unxO1gkdtfz1bkKu8B');
      const document = firestore.collection('person').doc(userEmail);
      
      // Read the document.
      const doc = await document.get();
      if (!doc.exists) {
          console.log('No such document!');
          return;
      }
      console.log('Read the document');
      console.log(doc.data());

      return doc.data();
  } 
  catch (error) {
      console.error('Error retrieving Firestore document:', error);
      return null;
}
}