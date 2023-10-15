function Container1(prop) {
    return (
        <div className="container1">
            <div className="content">{prop.children}</div>
        </div>
    )
}

export default Container1