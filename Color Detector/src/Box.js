const Box=( {colorvalue,hexvalue})=>{
    return (
        <section className="box" style={{
                backgroundColor:colorvalue
            }}>
            <p>{colorvalue ? colorvalue : "Color Not Defined"}</p>
            <p>{hexvalue ? hexvalue: null }</p>
        </section>
    )
}
Box.defaultProps={
    colorvalue: "EMPTY COLOR VALUE"
}

export default Box;