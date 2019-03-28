import React, { PureComponent } from 'react';

import TextToggle from '../TextToggle/TextToggle';
import css from './_App.scss';
import darkBulb from '../assets/dark-bulb.png';
import lightBulb from '../assets/light-bulb.png';
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
export default class App extends PureComponent {
  render () {
    return (
      <div id={css.app}>
        <h1>TextToggle</h1>

        <div className={css.examples + ' ' + css.dark}>
          <h2>ON/OFF: </h2>&nbsp;
          <TextToggle defaultItem='dark'
            style={{
              borderRadius: '10px'
            }}
            leftItem={{
              value: 'dark',
              label: <img src={darkBulb} height='24px' />,
              style: {
                background: '#333',
                padding: '7px'
              }
            }}

            rightItem={{
              value: 'light',
              label: <img src={lightBulb} height='24px' />,
              style: {
                background: '#555'
              }
            }} />
        </div>

        <div className={css.examples + ' ' + css.dark}>
          <h2>Dark or Light: </h2>&nbsp;
          <TextToggle defaultItem='dark'
            leftItem={{
              value: 'dark',
              label: 'DARK'
            }}
            rightItem={{
              value: 'light',
              label: 'LIGHT'
            }} />
        </div>

        <div className={css.examples + ' ' + css.dark}>
          <h2>Night or Day: </h2>&nbsp;
          <TextToggle defaultItem='sun'
            style={{
              borderRadius: '50%'
            }}
            leftItem={{
              value: 'moon',
              label: <img src={moon} height='24px' />,
              style: {
                borderRadius: '50%',
                padding: '3px',
                boxShadow: 'inset 0 0 15px rgba(0,0,0,0.99)'
              }
            }}
            rightItem={{
              value: 'sun',
              label: <img src={sun} height='30px' />,
              style: {
                borderRadius: '50%'
              }
            }} />
        </div>

        <div className={css.examples + ' ' + css.light}>
          <h2>online/offline: </h2>&nbsp;
          <TextToggle defaultItem='offline'
            style={{
              boxShadow: 'none',
              border: '2px solid lightgray',
              outline: '1px solid gray'

            }}
            leftItem={{
              value: 'online',
              label: 'ONLINE',
              style: {
                background: 'white',
                color: 'blue',
                fontWeight: 'bolder',
                padding: '7px'
              }
            }}

            rightItem={{
              value: 'offline',
              label: 'OFFLINE',
              style: {
                background: 'white',
                fontWeight: 'bolder',
                color: 'tomato'
              }
            }} />
        </div>

        <div className={css.examples + ' ' + css.light}>
          <h2>Left or Right: </h2>&nbsp;
          <TextToggle defaultItem='left'
            leftItem={{
              value: 'left',
              label: 'LEFT'
            }}
            rightItem={{
              value: 'right',
              label: 'RIGHT'
            }} />
        </div>
      </div>
    );
  }
}
