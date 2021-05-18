import React from 'react';

const RenderPhoto = ({ photo }) => {
    const PhotoClicked = () => {
        window.open(photo.url, "_blank")
    }

    return(     
        <section className="md:w-1/2 py-8 px-4">
          
            <div className="hidden md:block md:w-1/1 px-4 object-left">
                <img className="rounded shadow-md" src={photo.url} alt="" onClick={() => PhotoClicked() } />
            </div>
          
        </section>
    )
}

const AlbumGallery = props => {
    const { photos, onBackClicked } = props;
    return(
        <div className="flex flex-wrap">
            <div className="md:w-full mx-auto p-8"><button className="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500" onClick={() => onBackClicked() } >Back</button></div>            
            {photos.map(photo => <RenderPhoto photo={photo} key={photo.id} />)}
        </div>
    )
}

export default AlbumGallery;