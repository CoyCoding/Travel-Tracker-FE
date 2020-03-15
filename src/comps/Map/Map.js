import React from 'react';
import ReactMapGL from 'react-map-gl';

import { connect } from 'react-redux';
import { moveViewport } from '../../store/actions/locationActions';


const TOKEN = 'pk.eyJ1IjoiZmx1ZmZ5dG95Y295IiwiYSI6ImNrNzIwcWd0MjBiOXczb253OWpneXJpb2kifQ.WsxTXH54_UnRveYVwN6gNQ';

const settings = {
  dragRotate: false,
  touchRotate: false,
  minZoom: 1.7,
}
function Map(props) {
  const _onViewportChange = (viewport) => {
    props.moveViewport(viewport)
  }

  return (
    <div className="map platformed">
      <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...props.location.viewport}
      {...settings}
      onViewportChange={_onViewportChange}
      mapStyle={ 'mapbox://styles/fluffytoycoy/ck76ur81x5esc1ink2fr223wd'}>
        {props.children}
      </ReactMapGL>
    </div>
  );
}

const mapStateToProps = state => ({ location: state.location})
export default connect(
    mapStateToProps,
    { moveViewport }
)(Map);