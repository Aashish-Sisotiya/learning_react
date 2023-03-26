import "./Video.css";

function Video({ children, title, id, channel = 'coder dost', views, time, verified ,deleteVideo,editVideo}) {

    return (
        <>
            <div className="container">
                <button className="close" onClick={()=>deleteVideo(id)}>X</button>
                <button className="edit" onClick={()=>editVideo(id)}>edit</button>
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/160/91`} alt="Alan L. Hart" />
                </div>
                <div className="title">{title}</div>
                {verified ? <div className="channel">{channel} 👍</div> : <div className="channel">{channel} </div>}
                <div className="views">{views}
                    views<span>.</span>{time}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}



export default Video;
