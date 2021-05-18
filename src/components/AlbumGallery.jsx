import React from 'react';

const RenderPhoto = ({ photo }) => {
    const PhotoClicked = () => {
        window.open(photo.url, "_blank")
    }

    return(
        <div className="container mx-auto p-8">
        <div className="md:w-1/2 px-4 mb-8 md:mb-0">
            <img className="rounded shadow-md" src={photo.url} alt="" onClick={() => PhotoClicked() } />
        </div>
        </div>
    )
}

const AlbumGallery = props => {
    const { photos, onBackClicked } = props;
    return(
        <div className="container mx-auto p-8">
            <div className="mx-auto p-8"><button className="p-3 ml-4 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500" onClick={() => onBackClicked() } >Back</button></div>            
            {photos.map(photo => <RenderPhoto photo={photo} key={photo.id} />)}
        </div>
    )
}

export default AlbumGallery;