import React, { useEffect, useState } from 'react';
import Api from './Api'
import AlbumThumbnail from './AlbumThumbnail'
import AlbumGallery from './AlbumGallery';

const Albums = props => {
    const AlbumsPath = 'albums';
    const PhotosPath = 'photos';
    const [albums, setAlbums] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [mappedAlbums, setMappedAlbums] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);

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

    const onTitleClicked = (albumId) => {
        let album = mappedAlbums.find(album => album.id === albumId);
        setSelectedAlbum(album);
    }

    return(
        <>                       
            <div className="flex flex-wrap -mx-4">
                {!selectedAlbum && mappedAlbums.map(album => <AlbumThumbnail key={album.id} album={album} onTitleClicked={onTitleClicked} />)}
                { selectedAlbum && <AlbumGallery photos={selectedAlbum.photos} onBackClicked={() => setSelectedAlbum(null) } />} 
            </div>                 
        </>
    )
}

export default Albums;