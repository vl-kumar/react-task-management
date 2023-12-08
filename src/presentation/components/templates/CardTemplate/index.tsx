import { memo } from "react";
import { Container } from "./style";

interface CardTemplateProps {
  children: React.ReactNode;
}
const CardTemplate: React.FC<CardTemplateProps> = memo(({ children }) => {
  return <Container>{children}</Container>;
});

export default CardTemplate;
