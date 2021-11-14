import React from "react";
import MainContentPresenter from "../../presenter/MainContentPresenter";
import PropTypes from "prop-types";

function MainContentComponent({
  font_size,
  margin_top,
  margin_bottom,
  content,
}) {
  return (
    <MainContentPresenter
      font_size={font_size}
      margin_top={margin_top}
      margin_bottom={margin_bottom}
      content={content}
    >
      {content}
    </MainContentPresenter>
  );
}

MainContentComponent.propTypes = {
  font_size: PropTypes.string,
  margin_top: PropTypes.string,
  margin_bottom: PropTypes.string,
  content: PropTypes.string,
};

export default MainContentComponent;
