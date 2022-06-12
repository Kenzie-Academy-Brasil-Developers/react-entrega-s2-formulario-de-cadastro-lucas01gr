import { useHistory, useParams } from "react-router-dom";
import { Container } from "./styles";

function Success() {
  const history = useHistory();
  const params = useParams();

  return (
    <Container>
      <h1>
        Bem vindo <span>{params.name}</span>
      </h1>
      <button onClick={() => history.push("/")}>Voltar</button>
    </Container>
  );
}
export default Success;
