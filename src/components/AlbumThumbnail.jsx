import React from 'react';

const AlbumThumbnail = props => {
    const { album, onTitleClicked } = props;
    const imagePath = album.photos.length > 0 ? album.photos[0].thumbnailUrl : ''; 
    return(

        <div className="container mx-auto px-4"> 
                
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="hidden md:block md:w-1/4 px-4">
        
            {imagePath && <img className="h-full w-full bg-cover rounded shadow-md " onClick={() => onTitleClicked(album.id) } src={imagePath} alt="" /> }
            <p onClick={() => onTitleClicked(album.id) }>{album.title}</p>
            <p>{album.photos.length} Photos</p>
       
        </div>
        </div>
        
        </section>
        </div>
    )
}

export default AlbumThumbnail;