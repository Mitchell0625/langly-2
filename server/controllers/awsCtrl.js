const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');

module.exports = {
  addDoc: (req, res) => {
    const form = new multiparty.Form();
    form.parse(req, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timeStamp = Date.now().toString();
        const fileName = `bucketFolder/${timeStamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        return res.status(200).send(data);
      } catch (error) {
        return res.status(400).send(error);
      }
    });
  }
};
