# freeCodeCamp - File Metadata Microservice Project

## Summary

This is one of the projects that requires implementation as part of [freeCodeCamp's Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/).

As part of the [requirements](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) (including utilising the [boilerplate code provided by freeCodeCamp](https://github.com/freeCodeCamp/boilerplate-project-filemetadata/)), this project involves implementing an application where users can upload files and receive a JSON object in response that details the uploaded file's metadata (for the purposes of this project, only `name`, `type` and `size`).

## Setup

This project uses Node.js and Express in order to run this application, alongside the `multer` npm package to handle file uplaods. As such, make sure Node.js and npm are installed beforehand.

Once done, run the following commands in your terminal within the project's directory:

```
npm install
npm start
```

## Usage

### POST

```
<YOUR_PROJECT_URL>/api/fileanalyse

REQUEST FORM
file - File Upload (taken from index.html's input element with the name "upfile")
``` 

##### Output

Example: A `Test.txt` file was uploaded, containing only the text `These are some notes`:

```json
{
    "name": "Test.txt",
    "type": "text/plain",
    "size": 21
}
```

## Notes

- The files that get uploaded would be stored in the project's `uploads\` folder (which will get created if such a folder does not exist).
- The application checks to see if a file was selected for upload. If not, then it will return an error to the user as a JSON object, stating `A file must be uploaded.`.
