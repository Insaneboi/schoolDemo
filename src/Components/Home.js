const Home = (props) => {
    console.log(props);
    let { firstname, designation } = props;
    return (
        // <div>
        //   <h1>Home Component</h1>
        //   <h5>
        //     I am {firstname} and My designation is {designation}
        //   </h5>
        //   <p>I stay in {props.person.location}</p>
        // </div>
        <div class="card" style={{ width: "18rem" }}>
            <img
                src="https://th.bing.com/th/id/OIP.AtVCrpvi9yOLxMhL2VsU1gHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title">{props.person.firstname}</h5>
                <p class="card-text">{props.person.age}</p>
                <p class="card-text">{props.person.location}</p>
            </div>
        </div>
    );
};

export default Home;