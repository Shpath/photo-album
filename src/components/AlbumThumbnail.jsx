import React from 'react';

const AlbumThumbnail = props => {
    const { album, onTitleClicked } = props;
    const imagePath = album.photos.length > 0 ? album.photos[0].thumbnailUrl : ''; 
    return(

        
                
        <section className="md:w-1/3 py-2 px-4">
            <div className="hidden md:block md:w-1/1 px-4 object-left">
            {imagePath && <img className="rounded shadow-md " onClick={() => onTitleClicked(album.id) } src={imagePath} alt="" /> }
            <h1 className="text-base pt-2 md:text-lg font-semibold md:text-gray-500 capitalize" onClick={() => onTitleClicked(album.id) }>{album.title}</h1>
            <p className="text-base md:text-md font-normal md:text-gray-500 capitalize">{album.photos.length} Photos</p>
        </div>
       
        
        </section>
       
    )
}

export default AlbumThumbnail;