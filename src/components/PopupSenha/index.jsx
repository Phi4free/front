import './estilo'

export default function PopupSenha(props) {
    const { ...props } = props;

    // https://codepen.io/imprakash/pen/GgNMXO [Seguir esse tutorial]

    return (
        <div id="popup1" class="overlay">
            <div class="popup">
                <h2>Here i am</h2>
                <a class="close" href="#">
                    &times;
                </a>
                <div class="content">
                    Thank to pop me out of that button, but now i'm done so you
                    can close this window.
                </div>
            </div>
        </div>
    );
}
