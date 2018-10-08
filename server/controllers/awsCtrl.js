const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

AWS.config.update({
  accessKeyId: process.env.MY_ACCESS_ID_AWS,
  secretAccessKey: process.env.MY_SECRET_ACCESS_AWS
});

AWS.config.setPromisesDependency(bluebird);

const s3 = new AWS.S3();

const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};

module.exports = {
  addDoc: (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        console.log(path);
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timeStamp = Date.now().toString();
        const fileName = `bucketFolder/${timeStamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        return res.status(200).send(data);
      } catch (error) {
        console.log(error);
        return res.status(400).send(error);
      }
    });
  }
};
