import React, { useState } from 'react';
import css from './_TextToggle.scss';

export default function TextToggle (props) {
  const [side, setSide] = useState((props.defaultItem === props.rightItem.value) || false);
  const handleClick = () => {
    setSide(prevSide => {
      props.onChange(!prevSide ? props.rightItem.value : props.leftItem.value);
      return !prevSide;
    });
  };
  const getItemLabel = (item) => {
    return item.label || item.value;
  };

  return (
    <div className={css.textToggle} style={{ ...props.style }} onClick={(handleClick)}>
      <div className={css.toggle + ' ' + css.leftToggle} style={{ left: (side ? '-100%' : '0%'), ...props.leftItem.style }}>{ getItemLabel(props.leftItem) }</div>
      <div className={css.toggle + ' ' + css.rightToggle} style={{ left: (side ? '0%' : '100%'), ...props.rightItem.style }}>{ getItemLabel(props.rightItem) }</div>
      <div className={css.toggleGroup}>
        <div className={css.extra} style={{ ...props.leftItem.style }}>{ getItemLabel(props.leftItem) }</div>
        <div className={css.extra} style={{ ...props.rightItem.style }}>{ getItemLabel(props.rightItem) }</div>
      </div>
    </div>
  );
}

TextToggle.defaultProps = {
  defaultItem: false,
  rightItem: {},
  leftItem: {},
  onChange: () => {}
};
