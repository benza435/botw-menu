import React from 'react';


const Details = ({selected}) => {
    return (
        <div className="details" background-image={selected.icon}>
            <h3>{selected.title}</h3>
            {selected.description}
            {console.log(selected)}
        </div>
    );
};

export default Details;