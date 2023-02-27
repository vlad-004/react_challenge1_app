import './Card.css';

export const Card = (props) => {
    let classes = props.className
        ? "card " + props.className
        : "card";
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}