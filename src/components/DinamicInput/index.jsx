import "./index.scss";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function DinamicInput(props) {
    const { label, type, id, onInput } = props;
    const [visivel, isVisivel] = useState(false);
    const [_type, setType] = useState(type);

    useEffect(() => {
        if (visivel) {
            setType("text");
        } else {
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
            />
            <span className="input__label">{label}</span>
            <span className="alinha_fim" onClick={() => isVisivel(!visivel)}>
                {type == "password" ? (
                    visivel ? (
                        <FontAwesomeIcon
                            icon={icon({
                                name: "eye",
                                style: "solid",
                            })}
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={icon({
                                name: "eye-slash",
                                style: "solid",
                            })}
                        />
                    )
                ) : null}
            </span>
        </label>
    );
}
