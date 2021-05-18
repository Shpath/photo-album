import React from 'react';

const AlbumThumbnail = props => {
    const { album } = props;
    const imagePath = album.photos.length > 0 ? album.photos[0].thumbnailUrl : ''; 
    return(
        <div className="mb-8">
            {imagePath && <img className="rounded shadow-md" src={imagePath} alt="" /> }
            <p>{album.title}</p>
            <p>{album.photos.length} Photos</p>
        </div>
    )
}

export default AlbumThumbnail;