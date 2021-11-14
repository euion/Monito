import MainContentComponent from "./MainContentComponent"; //본문 글에 뭐 들어가야할지
import DisplayPresenter from "../../presenter/DisplayPresenter"; //본문 전체에 대한 css
import ButtonComponent from "../ButtonComponent";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <DisplayPresenter>
      <MainContentComponent
        font_size="5rem"
        margin_top="10rem"
        content="하나뿐인 나의 학습메이트,"
      />
      <b>MONITO</b>와 함께 학습하세요
      <MainContentComponent
        margin_top="5rem"
        margin_bottom="5rem"
        content="MONITO는 당신의 학습 습관을 교정함과 동시에 다양한 피드백을 제공합니다."
      />
      <Link to="/cameraScreen">
        <ButtonComponent content="시작하기" />
      </Link>
    </DisplayPresenter>
  );
}

export default MainComponent;
