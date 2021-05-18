import React, { useEffect, useState } from 'react';
import Api from './Api'
import AlbumThumbnail from './AlbumThumbnail'

const Albums = props => {
    const AlbumsPath = 'albums';
    const PhotosPath = 'photos';
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [mappedAlbums, setMappedAlbums] = useState([]);

    useEffect(()=> {
        Api.get('albums', (data) => {
            setAlbums(data);
        });
        Api.get('photos', (data) => {
            setPhotos(data);
        });
    }, [AlbumsPath, PhotosPath]);

    useEffect(() => {
        let tempAlbums = []
        albums.forEach(album => {
            album.photos = photos.filter(photo => photo.albumId === album.id);
            tempAlbums.push(album);
        });
        setMappedAlbums(tempAlbums);
    }, [photos, albums]);

    return(
        <>                       
            <div className="flex flex-wrap -mx-4">
                {mappedAlbums.map(album => <AlbumThumbnail album={album} />)}            
            </div>                 
        </>
    )
}

export default Albums;