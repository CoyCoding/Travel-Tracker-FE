import React, {Component} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import {HexagonLayer} from '@deck.gl/aggregation-layers';
import DeckGL from '@deck.gl/react';

// Set your mapbox token here
const MAPBOX_TOKEN = "pk.eyJ1IjoiZmx1ZmZ5dG95Y295IiwiYSI6ImNrH54_UnRveYVwN6gNQ"; // eslint-disable-line

// Source data CSV
const DATA_URL =
  'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv'; // eslint-disable-line

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000]
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000]
});

const lightingEffect = new LightingEffect({ambientLight, pointLight1, pointLight2});

const material = {
  ambient: 0.64,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [51, 51, 51]
};

const INITIAL_VIEW_STATE = {
  longitude: -1.4157267858730052,
  latitude: 52.232395363869415,
  zoom: 6.6,
  minZoom: 2.5,
  maxZoom: 15,
  pitch: 40.5,
  bearing: -27.396674584323023
};

const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78]
];

const elevationScale = {min: 1, max: 50};

/* eslint-disable react/no-deprecated */
export default class Map extends Component {
  static get defaultColorRange() {
    return colorRange;
  }

  constructor(props) {
    super(props);
    this.state = {
      elevationScale: elevationScale.min
    };
  }

  componentDidMount() {
    document.addEventListener('contextmenu', this._handleContextMenu);
  };

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this._handleContextMenu);
  }

  _handleContextMenu(event) {
      event.preventDefault();
       // this.setState({ visible: true });
       //
       // const clickX = event.clientX;
       // const clickY = event.clientY;
       // const screenW = window.innerWidth;
       // const screenH = window.innerHeight;
       // const rootW = this.root.offsetWidth;
       // const rootH = this.root.offsetHeight;
       //
       // const right = (screenW - clickX) > rootW;
       // const left = !right;
       // const top = (screenH - clickY) > rootH;
       // const bottom = !top;
       //
       // if (right) {
       //     this.root.style.left = `${clickX + 5}px`;
       // }
       //
       // if (left) {
       //     this.root.style.left = `${clickX - rootW - 5}px`;
       // }
       //
       // if (top) {
       //     this.root.style.top = `${clickY + 5}px`;
       // }
       //
       // if (bottom) {
       //     this.root.style.top = `${clickY - rootH - 5}px`;
       // }
   };

  _renderLayers() {
    const {data, radius = 1000, upperPercentile = 100, coverage = 1} = this.props;

    return [
      new HexagonLayer({
        id: 'heatmap',
        colorRange,
        coverage,
        data,
        elevationRange: [0, 3000],
        elevationScale: data && data.length ? 50 : 0,
        extruded: true,
        getPosition: d => d,
        onHover: this.props.onHover,
        pickable: Boolean(this.props.onHover),
        radius,
        upperPercentile,
        material,

        transitions: {
          elevationScale: 3000
        }
      })
    ];
  }

  render() {
    const {mapStyle = 'mapbox://styles/mapbox/dark-v9'} = this.props;
    return (
      <DeckGL
        layers={this._renderLayers()}
        effects={[lightingEffect]}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        onContextMenu="return false"
      >
        <StaticMap
          reuseMaps
          mapStyle={mapStyle}
          preventStyleDiffing={true}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </DeckGL>
    );
  }
}