import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fakeData from '~/data/fakeData';
import Loader from '~/components/ui/Loader';

export default class SecondPage extends Component {
  static propTypes = {
    routes: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const parent = this;
    const { routes } = this.props;

    console.info(`SecondPage: Emulate request to ${routes.someRequest}`);

    setTimeout(
      () =>
        parent.setState({
          data: fakeData,
          loading: false,
        }),
      1000,
    );
  }

  prepareElements() {
    const { data } = this.state;
    const items = data.map(item => <p key={item}>{item}</p>);
    return items;
  }

  render() {
    const { loading } = this.state;

    // If loading - show loader
    if (loading) return <Loader />;

    // If loaded - show content
    return (
      <>
        <h1>🛠 SecondPage</h1>
        {this.prepareElements()}
      </>
    );
  }
}
