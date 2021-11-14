import ButtonPresenter from "../presenter/ButtonPresenter";
import PropTypes from "prop-types";

function ButtonComponent(props) {
  return <ButtonPresenter>{props.content}</ButtonPresenter>;
}

ButtonComponent.propTypes = {
  content: PropTypes.string,
};

export default ButtonComponent;
