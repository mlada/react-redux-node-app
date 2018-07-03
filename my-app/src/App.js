import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ButtonOutline } from 'rebass';
import Main from './Routing/Main';
import {Header, Footer} from './Components';
import theme from 'styled-theming';

const boxBackgroundColor = theme('mode', {
    dayTheme: '#ddd',
    nightTheme: '#eee',
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDay: true,
      theme: 'dayTheme',
      title: 'Click the Sun to switch the theme'
    };
  }

  handleClick() {
    const isDay = !this.state.isDay;

    this.setState({
      isDay: isDay,
      theme: isDay ? 'dayTheme' : 'nightTheme',
      title: isDay ? 'Now click the Sun' : 'Now click the Moon'
    });
  }

  render() {
    return (
        <ThemeProvider theme={{ mode: this.state.theme }}>
          <div>
            <div> 
              <ButtonOutline 
                color='white'
                bg='grey'
                children={this.state.title}
                onClick={() => this.handleClick()}/>
            </div>
            <Header />
            <Main />
            <Footer />
          </div>
        </ThemeProvider>
    );
  }
}