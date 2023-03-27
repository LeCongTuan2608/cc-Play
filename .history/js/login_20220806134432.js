//id 991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com
//code : 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
// Imports the Google Cloud client library.
const { Storage } = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = new Storage();
// Makes an authenticated API request.
async function listBuckets() {
   try {
      const results = await storage.getBuckets();

      const [buckets] = results;

      console.log('Buckets:');
      buckets.forEach((bucket) => {
         console.log(bucket.name);
      });
   } catch (err) {
      console.error('ERROR:', err);
   }
}
listBuckets();
function test() {
   var let = true;
}
console.log(let);
