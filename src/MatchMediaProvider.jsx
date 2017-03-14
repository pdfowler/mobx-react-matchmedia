import React, { Component } from 'react';
import { toJS, extendObservable, action, runInAction } from 'mobx';
import { matchMedia, setMatchMediaConfig } from './matchMedia';

let breakpoints;

export default class MatchMediaProvider extends Component {

  static propTypes = {
    children: React.PropTypes.node,
    breakpoints: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    if (!breakpoints) breakpoints = Object.assign({}, toJS(this.props.breakpoints));
    if (!this.templates) this.templates = Object.assign({}, toJS(breakpoints));
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize); // eslint-disable-line
    this.matchBreakpoints(); // set initials values
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize); // eslint-disable-line
  }

  handleResize = (e) => {
    e.preventDefault();
    this.matchBreakpoints();
  };

  matchBreakpoints = () => {
    runInAction('match breakpoints', () => {
      setMatchMediaConfig();
      Object.keys(this.templates)
        .forEach(key => this.updateBreakpoints(key, this.templates[key]));
    });
  };

  updateBreakpoints = action('update breakpoints', (key, val) => {
    const match = matchMedia(val).matches;
    extendObservable(this.props.breakpoints, { [key]: match });
  });

  render() {
    return (
      <div>
        {this.props && this.props.children}
      </div>
    );
  }
}
