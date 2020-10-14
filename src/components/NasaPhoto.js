import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

// variable que guarda la api key de nasa-apod alojada en archivo .env, esto es para no exponer nuestras api
const apiKey = process.env.REACT_APP_NASA_KEY;

export default function Nasaphoto() {
    const [ photoData, setPhotoData] = useState ('');

    useEffect(()=> {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;

    return(
        <>
            <NavBar  />
            <div>
                { photoData.media_type === "image" ? (
                    <img src={photoData.url} alt={photoData.title}/>
                ) : (
                    <iframe
                    title="space-video"
                    src={photoData.url}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    className="photo"
                    />
                )}
                <div>
                    <h1>{photoData.title}</h1>
                    <p>{photoData.date}</p>
                    <p>{photoData.explanation}</p>
                </div>
            </div>
        </>
    )
}
