import React from 'react';
import '../containers/styles.css';

const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--green '
                    type="search" 
                    placeholder='alpha team members ' 
                    onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;