function Square(props) {
    return(
        <div className={'square'} {...props}>{props.X ? 'X': (props.O ? 'O': '')}</div>
    );
}

export default Square;