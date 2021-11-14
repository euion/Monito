import styled, { css } from "styled-components";

const MainPresenter = styled.div`
  text-align: center;
  ${(props) => {
    const selectSize = props.font_size;
    const selectMarginTop = props.margin_top;
    const selectMarginBottom = props.margin_bottom;
    return css`
      font-size: ${selectSize};
      margin-top: ${selectMarginTop};
      margin-bottom: ${selectMarginBottom};
    `;
  }}
`;

export default MainPresenter;
