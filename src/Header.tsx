import { Component } from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

export default Header