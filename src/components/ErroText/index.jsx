import { Erro } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

/**
 * NOTA SOBRE A CONFIGURAÇÃO DOS ÍCONES:
 * O FontAwesome, por alguma razão desconhecida, não permite a importação dinâmica do nome dos ícones,
 * sendo necessária a inclusão por extenso do mesmo.
 * 
 * Caso deseje adicionar um ícone diferente do circle-exclamation, você deverá:
 * 
 * 1 - Incluir ele no const icons, seguindo o formato do exemplo e separando por vírgula.
 * 2 - Na invocação do <ErroText/> passar o nome do novo icone para que ocorra a diferenciação
 * 
 * Ex: <ErroText iconName="meu-novo-icone" label="Minha label"/>
 * 
 * const icons = {
  'circle-exclamation': solid('circle-exclamation'),
  'meu-novo-icone': solid('meu-novo-icone')
  }
 */

const icons = {
  'circle-exclamation': solid('circle-exclamation')
}

export default function ErroText(props) {
    const { iconName, label } = props;
    
    return (
        <Erro>
            <FontAwesomeIcon
                icon={icons[iconName]}
            />
            {" "}
            {label}
        </Erro>
    );
}
