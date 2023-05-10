import './index.scss'

export default function DinamicInput(props) {

  const {label, type, id, onInput} = props;

  return (
    <label className="input">
      <input className="input__field" type={type} id={id} onInput={onInput} placeholder=' ' />
      <span className="input__label">{label}</span>
    </label>
  )
}