import { CameraPresenter } from "../../presenter/CameraPresenter";
import ButtonComponent from "../ButtonComponent";
import MainContentComponent from "../MainScreen/MainContentComponent";
import Module from "../../presenter/CameraFunc";

function CameraComponent() {
  return (
    <body>
      <CameraPresenter>
        <MainContentComponent
          font_size="2rem"
          margin_top="1rem"
          content="Monito"
        />
        <div id="container">
          <canvas class="center-block" id="canvasOutput" />
        </div>
        <div class="text-center">
          <input
            type="checkbox"
            id="face"
            name="classifier"
            value="face"
            checked
          />
          <label for="face">face</label>
        </div>
        <div class="invisible">
          <video id="video" class="hidden">
            Your browser does not support the video tag.
          </video>
        </div>
        <ul id="list">
          <li></li>
        </ul>
        <ButtonComponent content="시작하기" />
        <ButtonComponent content="돌아가기" />
      </CameraPresenter>
    </body>
  );
}

export default CameraComponent;
