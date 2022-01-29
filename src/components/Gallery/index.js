import React from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';
import photo from '../../assets/small/project/0.png';

function Gallery(props){
    const currentCategory = {
        name: 'project',
        description:'Photos and links of the projects'
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img src={photo}
                alt="sample" className='img-thumbnail mx-1'/>
            </div>
        </section>
    );
}
export default Gallery;