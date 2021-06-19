import React from 'react';
import Gallery from './Gallery';
import Details from './Details';
import data from '../data/data'
import facebook from '../img/icons/facebook.png';
import linkedin from '../img/icons/linkedin.png';
import instagram from '../img/icons/instagram.png';


const Menu = ({data}) => {
    return (
        <div className="menu">
            <Gallery data={data} />
			<Details data={data} />
        </div>
    );
};

export default Menu;