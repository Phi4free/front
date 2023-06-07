import "./index.scss";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function DinamicInput(props) {
    const { value, label, type, id, onInput } = props;
    const [visivel, isVisivel] = useState(false);
    const [_type, setType] = useState(type);

    useEffect(() => {
        if (visivel && type == "password") {
            setType("text");
        } else if (type == "password") {
            setType("password");
        }
    });

    return (
        <label className="input">
            <input
                className="input__field"
                type={_type}
                id={id}
                onInput={onInput}
                placeholder=" "
                value={value}
            />
            {label != null ? (
                <span className="input__label">{label}</span>
            ) : null}
            {type == "password" ? (
                visivel ? (
                    <span
                        className="alinha_fim"
                        onClick={() => isVisivel(!visivel)}
                    >
                        <FontAwesomeIcon
                            icon={icon({
                                name: "eye",
                                style: "solid",
                            })}
                        />
                    </span>
                ) : (
                    <span
                        className="alinha_fim"
                        onClick={() => isVisivel(!visivel)}
                    >
                        <FontAwesomeIcon
                            icon={icon({
                                name: "eye-slash",
                                style: "solid",
                            })}
                        />
                    </span>
                )
            ) : null}
        </label>
    );
}
