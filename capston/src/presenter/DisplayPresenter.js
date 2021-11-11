import styled from "styled-components";

const DisplayPresenter = styled.div`
  position: absolute;
  width: 20rem;
  height: 20rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 1rem 2rem 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
`;

export default DisplayPresenter;
