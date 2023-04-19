import React, { useState } from 'react'
import Dropzone from 'react-dropzone'

const MyDropzone = () => {
  const [files, setFiles] = useState([])

  const onDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const onSelect = (event) => {
    const filesArray = Array.from(event.target.files)
    setFiles(
      filesArray.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  return (
    <div>
      <div className="dropZoneContainer">
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>Drag and drop files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
        <div className="button">
          <label htmlFor="file-upload">Select files</label>
          <input id="file-upload" type="file" multiple onChange={onSelect} />
        </div>
      </div>
      <div className="preview">
        {files.map((file) => (
          <img src={file.preview} key={file.name} alt={file.name} />
        ))}
      </div>
      <style jsx>{`
        .dropZoneContainer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          width: 100%;
          position: relative;
        }
        .dropzone {
          cursor: pointer;
          border: 2px dashed #ccc;
          border-radius: 5px;
          padding: 40px;
          text-align: center;
          font-size: 1.2rem;
          margin-top: 20px;
          width: 70%;
          width: 100%;
          position: relative;
        }

        .button {
          position: absolute;
          right: 20px;
          width: 122px;
          height: 41px;
          background: #fbfdfe;
          border: 1px solid #0a3556;
          border-radius: 5px;
        }

        .button label {
          text-align: center;
          padding-top: 10px;
          display: inline-block;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          text-transform: uppercase;
          cursor: pointer;
          color: #0a3556;
          transition: all 0.3s ease;
          width: 100%;
          height: 100%;
        }

        .button label:hover {
          background-color: #aaa;
        }

        .button input[type='file'] {
          display: none;
        }

        .preview {
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .preview img {
          max-width: 200px;
          max-height: 200px;
          margin: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 0 5px #ccc;
        }
      `}</style>
    </div>
  )
}

export default MyDropzone
