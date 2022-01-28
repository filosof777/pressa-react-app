import styled from "styled-components";
import { Width } from "./Variables";

const Container = styled.div`
  width: ${Width.container_width};
  width: 100%;
  padding-left: ${Width.padding};
  padding-right: ${Width.padding};
  margin-left: auto;
  margin-right: auto;
`

export { Container };