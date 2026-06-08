function DiscountNew(props) {
    return (
        <div
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: props.colorbg,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "10px",
                left: "220px",
            }}
        >
            {props.name}
        </div>
    );
}
export default DiscountNew;
