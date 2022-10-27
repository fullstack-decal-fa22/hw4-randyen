import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [gallery, updateGallery] = useState([]);

    function create(shade) {
        updateGallery([shade, ...gallery]);
    }

    /* Use the map() function to render multiple Blocks! */
    const posts = gallery.map((clr) => <Block color={clr}/>); // TODO: edit this variable

    return (
        <div>
            <Menu update={create}/>
            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;