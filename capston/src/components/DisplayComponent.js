import DisplayPresenter from "../presenter/DisplayPresenter";
import InputComponent from "./InputComponent";

function DisplayComponent() {
  return (
    <DisplayPresenter>
      <InputComponent />
      <InputComponent />
    </DisplayPresenter>
  );
}

export default DisplayComponent;
