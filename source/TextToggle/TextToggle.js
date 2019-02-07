import React, {PureComponent} from 'react';
import styles from './_TextToggle.scss';

export default class TextToggle extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      selectedSide: -1
    }
  }

  handleClick = (side) => {
    this.setState((prevState) => ({
      selectedSide: prevState.selectedSide * -1
    }));
  };

  render () {
    const {leftOption, rightOption, handleClick, customClass} = this.props;
    let style={};
    if (this.state.selectedSide === -1) {
      style = {
        leftStyle: {
          left: 0
        },
        rightStyle: {
          left: '100%'
        }
      }
    } else {
      style = {
        leftStyle: {
          left: '-100%'
        },
        rightStyle: {
          left: '0'
        }
      }
    }

    return (
      <div className={styles.textToggle + ' ' + customClass} onClick={this.handleClick}>
        <div className={styles.leftOption} style={style.leftStyle}>{leftOption}</div>
        <div className={styles.rightOption} style={style.rightStyle}>{rightOption}</div>
      </div>
    );
  }
}
