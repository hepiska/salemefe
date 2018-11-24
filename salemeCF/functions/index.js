const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const mimeTypes = require('mimetypes');
const bodyParser = require('body-parser')
const randomstring = require("randomstring");
const cors = require('cors');



const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
admin.initializeApp()

const db = admin.firestore();
const storage = admin.storage()
const dress = db.collection('dress')
const bucket = storage.bucket()


const uploadImage = (data) => {
  const image = data
  const mimeType = image.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1]
  const fileType = mimeTypes.detectExtension(mimeType)
  const base64EncodedImageString = image.replace(/^data:image\/\w+;base64,/, '')
  const imageBuffer = new Buffer(base64EncodedImageString, 'base64')

  const name = randomstring.generate()
  const newFile = bucket.file(`${name}.${fileType}`)
  newFile.save(imageBuffer, {
    metadata: { contentType: mimeType },
    public: true,
    validation: 'md5'
  })
  return new Promise((res, rej) => {
    const config = {
      action: 'read',
      expires: '03-17-2025'
    };
    newFile.getSignedUrl(config, (err, url) => {
      if (err) {
        return rej(err)
      }
      return res(url)
    });
  })
}


app.post('/dress', (req, res) => {
  dress.get()
    .then(snap => {
      snap.forEach(doc => {
        console.log(doc.data());

      })
    })
    .catch(err => {
      err
    })
  res.send('success')
})

app.post('/upload', (req, res) => {
  req.setTimeout(50000);
  return uploadImage(req.body.base64Data)
    .then(data => {
      console.log(data);

      return res(data)
    })
    .catch(err => {
      res.status(500)
      console.log(err);

      return res.send(err)
    })

})

exports.saleme = functions.https.onRequest(app);