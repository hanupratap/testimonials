import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MyDropZone from './DropZone';

export default function UserProfiles() {
    const [userProfiles, setUserProfiles] = useState([]);

    const fetchUserProfiles = () => {
        axios.get("http://localhost:8080/api/v1/user-profile")
        .then(res => {
            console.log(res);
            setUserProfiles(res.data);
        });
        }
        useEffect(() => {
        fetchUserProfiles();
        }, []);

    return userProfiles.map((userProfile, index) => {
        return (
            <div key={index}>
                <h1>{userProfile.username}</h1>
                <p>{userProfile.userProfileId}</p>
                <MyDropZone {...userProfile}/>
            </div>
        )

    })
}
