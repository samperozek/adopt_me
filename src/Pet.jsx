const Pet = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.animal}</h1>
            <h2>{props.breed}</h2>
        </div>
    )
}

export default Pet;