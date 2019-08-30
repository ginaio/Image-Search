

export const createRequestJSON = paths => ({

  requests: paths.map(path => ({
    image: {
      source: {
        // DO NOT CHANGE! this is where the demo images are hosted
        imageUri: `gs://${path}`,
        //imageUri: `https://storage.googleapis.com/${path}`,
      },
    },
    // Hint: You need to ask for some features.
    // See https://cloud.google.com/vision/docs/request#json_request_format
    features: [
      {
        "type": "LABEL_DETECTION"
      }
    ],
  })),
});

let body = JSON.stringify(createRequestJSON(['interview-resources/office-images/1.jpg','interview-resources/office-images/6d0369ad-c6e7-4901-ba26-62781f26801b.jpg']))
const API_KEY = '';

export const getGoogleVisionUrl = () => {
  // Construct Google Vision API endpoint path.
  // Hint: You will need to use the `REACT_APP_GOOGLE_VISION_API_KEY` environment variable.
  // Google Vision API Docs: https://cloud.google.com/vision/docs/reference/rest/

  fetch('https://vision.googleapis.com/v1/images:annotate?key='+API_KEY, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body
  })
  .then(response => {
    const back = response.json()
    return back
  })
  .catch(error => {
    console.log('error:'+error)
  })

  return '';
};
