import React from 'react';
import "../ManagerDetail/TrailerMovie.scss"

function TrailerMovie(props) {

    let link = "https://www.youtube.com/watch?v=KSFS0OfIK2c"
    return ( 
        <> 
            <div onClick={props.closeTrailer}
                className="trailer-movie-background">
                </div>
            <div className="trailer-movie-container">
                <iframe className='trailer-movie-video'
                    src={props.linkMovie}
                    title="Những Bản Lofi Việt Nhẹ Nhàng Cực Chill - Nhạc Lofi Chill Buồn Nhất 2022 - Lofi Gây Nghiện Hay Nhất"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
        </div>
        </>
     );
}

export default TrailerMovie;