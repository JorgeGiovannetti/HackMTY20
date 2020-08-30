import React, { Component, Fragment } from "react";
import Tag from "./components/tag";

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTag: false,
      x: null,
      y: null,
      width: null,
    };
  }

  showTag = () => this.setState({ showTag: true });

  hideTag = () => this.setState({ showTag: false });

  getPosition = (element) => {
    const { x, y, width } = this.state;
    if (element) {
      const rect = element.getBoundingClientRect();
      if (width !== rect.width || x !== rect.x || y !== rect.y) {
        this.setState({
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height,
        });
      }
    }
  };

  render() {
    const { tag, children, align, position } = this.props;
    const { showTag, x, y, width, height } = this.state;

    const newChildren = React.Children.map(children, (child, index) => (
      <div
        className={child.props.className}
        ref={(element) => this.getPosition(element)}
      >
        {React.cloneElement(child, {
          index,
          // onMouseOver: this.showTag,
          // onFocus: this.showTag,
          // onMouseLeave: this.hideTag,
          ...child.props,
        })}
      </div>
    ));

    return (
      <Fragment>
        {showTag && (
          <Tag
            align={align}
            x={x}
            y={y}
            height={height}
            width={width}
            tag={tag}
            position={position}
          />
        )}
        {newChildren}
      </Fragment>
    );
  }
}

Tooltip.defaultProps = {
  align: "left",
  position: "top",
};

export default Tooltip;
