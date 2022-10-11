const Kart = (data) => {
    console.log(data);
    const { title, image, desc } = data;
    return (
        <div className="kart">
            <h1>{title}</h1>
            <img src={image} alt="" />
            <div className="card-over">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Kart;