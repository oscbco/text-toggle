import React, {PureComponent} from 'react';

import TextToggle from '../TextToggle/TextToggle';
import styles from './_App.scss';

export default class App extends PureComponent {
  render () {
    return (
      <div id={styles.app}>
        <br />
        <div style={{display: 'block'}}>
          <span style={{verticalAlign: 'middle'}}>Which side do you prefer? </span><TextToggle leftOption='LEFT' rightOption='RIGHT' customClass={styles.textToggle} />
        </div>
        <br />
        <div style={{display: 'block'}}>
          <span style={{verticalAlign: 'middle'}}>Which is better? </span><TextToggle leftOption='ONE' rightOption='ZERO' customClass={styles.textToggle} />
        </div>
        <br />
        <div style={{display: 'block'}}>
          <span style={{verticalAlign: 'middle'}}>Show?&nbsp; </span><TextToggle leftOption='ALWAYS' rightOption='NEVER' customClass={styles.textToggle} />
        </div>
      </div>
    );
  }
}
