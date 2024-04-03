const CakeCard = (props) => {
    console.log(props);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src={"./image/" + props.cake.image}
                className="card-img-top"
                alt="..."
                style={{ width: "18rem", height: "18rem " }}
            />
            <div className="card-body">
                <h5 className="card-title">{props.cake.name}</h5>
                <p className="card-text">{props.cake.price}</p>
                <a href=".." className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default CakeCard;