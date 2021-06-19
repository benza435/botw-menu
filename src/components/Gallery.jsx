import React from 'react';





const Gallery = ({data}) => {
    return (
    <>

    <div className="logoGrid">
        {data.map((site) => {
            return(
            <div className="logoHole" key={site.id}>
                <img className="smallImage" src={site.icon} alt={`450px logo for {site.title}`}/>
            </div>
            )
        })}
    </div>
    </>
    );
};

export default Gallery;