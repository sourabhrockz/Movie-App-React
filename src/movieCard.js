
export default function movieCard(props){
    
    
        const {title,plot,price,rating,starCt,fav,isCartAdded,poster} = props.movie;
        return(
            <div className="main" key={title}>
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" 
                        src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" 
                                onClick={() => props.decstars(props.movie)}/>
                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"/>
                                <img className="str-btn" alt="" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                onClick={() => props.addstars(props.movie)}/>
                                <span className="starCount">{starCt}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={() => props.favclick(props.movie)}>{fav? "Un-favourite":"Favourite"}</button>
                            <button className={isCartAdded?"uncart-btn":"cart-btn"} onClick={() => props.cartclick(props.movie)}>{isCartAdded? "Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}