const Badge = (props) => {
    return (
        <div
            style={{
                border: "3px solid black",
                width: "300px",
                borderRadius: "8px",
                padding: "6px",
                display: "flex",
                height: "60px",
            }}
        >
            <div style={{ width: "75%" }}>
                <h4>{props.firstName} {props.lastName}</h4>
            </div>
            <img src={props.avatar} height="60px"/>
        </div>
    );
}

export default Badge;