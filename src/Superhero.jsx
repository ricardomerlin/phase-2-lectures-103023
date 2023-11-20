function Superhero({name, image, group}) {
    return (
        <div 
        id="superhero"
        className="superhero"
        style={{
                color: "red",
                backgroundColor: "black",
                margin: "10vw",
                padding: "10px",
        }}
        >
            <p>{name}</p>
            <img 
            height = {300}
            width = {"auto"}
            src={image}
            />

            <p>{group}</p>

        </div>
    )
}

export default Superhero;