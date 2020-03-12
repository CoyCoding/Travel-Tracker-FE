import React from 'react';
import ReactMapGL from 'react-map-gl';

import { connect } from 'react-redux';
import { moveViewport } from '../../store/actions/locationActions';


const TOKEN = 'pk.eyJ1IjoiZmx1ZmZ5dG95Y295IiwiYSI6ImNrNzIwcWd0MjBiOXczb253OWpneXJpb2kifQ.WsxTXH54_UnRveYVwN6gNQ';

function Map(props) {
  const _onViewportChange = (viewport) => {
    props.moveViewport(viewport)
  }

  return (
    <ReactMapGL mapboxApiAccessToken={TOKEN} {...props.location.viewport} onViewportChange={_onViewportChange} mapStyle={ 'mapbox://styles/fluffytoycoy/ck76ur81x5esc1ink2fr223wd'}>
      {props.children}
    </ReactMapGL>
  );
}

const mapStateToProps = state => ({ location: state.location})
export default connect(
    mapStateToProps,
    { moveViewport }
)(Map);