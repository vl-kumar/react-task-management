import { memo } from "react";
import { TextView } from "./style";

interface HeaderTextProps {
  text: string;
}
const HeaderText: React.FC<HeaderTextProps> = memo(({ text }) => {
  return <TextView>{text}</TextView>;
});

export default HeaderText;
