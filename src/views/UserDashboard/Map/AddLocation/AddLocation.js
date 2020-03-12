import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {Marker} from 'react-map-gl';
import LocationIcon from '../../../../comps/Map/LocationIcon';
import { moveLocation } from '../../../../store/actions/locationActions';

function AddLocation(props) {
  const [position, setPosition] = useState(props.location.location);
  useEffect(()=>{
    setPosition(props.location.location);
  }, [props.location.location]);

  const _onMarkerDragStart = event => {
    //this._logDragEvent('onDragStart', event);
    props.moveLocation({
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      });
  };

  const _onMarkerDrag = event => {
    //this._logDragEvent('onDrag', event);
    props.moveLocation({
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      });
  };

  const _onMarkerDragEnd = event => {
    //this._logDragEvent('onDragEnd', event);
    props.moveLocation({
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      });
  };

  const initMarkerState = {
    draggable: true,
    onDrag: _onMarkerDrag,
    onDragStart: _onMarkerDragStart,
    onDragEnd: _onMarkerDragEnd,
  }

  console.log(position)
  return (
    <>
      <Marker
      {...initMarkerState}
      {...position}
      offsetLeft={-8}
      offsetTop={-8} >
          <LocationIcon className={'moveable'}/>
      </Marker>
    </>
  );
}

const mapStateToProps = state => ({ location: state.location})
export default connect(
    mapStateToProps,
    { moveLocation }
)(AddLocation);