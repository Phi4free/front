import "./index.scss";

export default function BasicInput(props) {
    const { id, placeholder, onInput } = props;
    return (
        <label className="input">
            <input
                className="input__field"
                id={id}
                onInput={onInput}
                placeholder={placeholder}
            />
        </label>
    );
}
