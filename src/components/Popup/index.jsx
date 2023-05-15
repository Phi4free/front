import './estilo.css'

export default function Popup(props) {
    const { id, title, children } = props;

    return (
        <div id={id} className="overlay">
            <div className="popup">
                <h2>{title}</h2>
                <a className="close" href="#">
                    &times;
                </a>
                <div className="content">
                    { children }
                </div>
            </div>
        </div>
    );
}
