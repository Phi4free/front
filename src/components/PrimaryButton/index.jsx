import { Container } from './styles'

export default function PrimaryButton(props) {

  const {label, onClick} = props

  return (
    <Container onClick={onClick}>
      {label}
    </Container>
  )
}