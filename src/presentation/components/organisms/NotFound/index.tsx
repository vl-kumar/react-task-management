import { memo } from "react";
import { Container, Header, SubHeader, SubTextView} from "./style";
const NotFound = memo(() => {
  return (
    <Container>
      <Header>Oops!</Header>
      <SubHeader>404</SubHeader>
      <SubTextView>The Page Your looking for does not exist</SubTextView>
    </Container>
  );
})

export default NotFound;
