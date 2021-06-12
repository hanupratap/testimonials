import axios from 'axios'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import UserProfiles from './UserProfiles'

export default function MyDropZone( {userProfileId} ) {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        const file = acceptedFiles[0]
        console.log(file)
        const formData = new FormData();
        formData.append("file", file);
        axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
        formData,
        {
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        }
        ).then(()=> {
            console.log("File uploaded Successfully")
        })
        .catch(err => {
            console.log(err);
        });

      }, [])

      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
      return (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
      )
}
