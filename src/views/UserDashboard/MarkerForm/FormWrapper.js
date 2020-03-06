import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

const MAX_LAT = 90;
const MAX_LONG = 180;
const MIN_LAT = -90;
const MIN_LONG = -180;

const schema = Yup.object().shape({
  title: Yup.string()
    .required('Required'),
  longitude: Yup.number('not a number')
    .required('Required')
    .min(MIN_LONG).max(MAX_LONG)
    .typeError('you must specify a number'),
  latitude: Yup.number()
    .required('Required')
    .min(MIN_LAT).max(MAX_LAT)
    .typeError('you must specify a number'),
});


const FormWrapper = (props) => {
  const [statelocation, setStateLocation] = useState(props.markerValues);
  const [formLocation, setformLocation] = useState(props.markerValues);
  const [touched, setTouched] = useState({latitude: false, longitude: false, title: false});
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    // When the markerValues (Redux State) change update the location.
    console.log(props.markerValues)
    setformLocation(props.markerValues)
  }, [props.markerValues])

  const updateLocation = (target, event) => {
    // Set that input has been touched
    setTouched({...touched, [target.name]: true});
    setformLocation({...formLocation, [target.name]: target.value});
    // Check the validation 
    Yup.reach(schema, target.name).validate(target.value).then(()=>{
      setErrors({...errors,  [target.name]: undefined})
      if(target.name === 'longitude' || target.name === 'latitude'){
        console.log(target.value)
        props.updateMarkerState({[target.name]: Number(target.value)})
      } else{
        props.updateMarkerState({[target.name]: target.value})
      }
    }).catch((err) => {
      console.log(err)
      setErrors({...errors, [target.name]: err.message})
    });
  }
  console.log(formLocation.title)
  return(
    <form
      onSubmit={(values)=> console.log(values)}>
          {touched.title && errors.title ? <div>{errors.title}</div> : null}
          <input
            name="title"
            placeholder="title"
            type="text"
            onChange={(e)=>{updateLocation(e.target, e)}}
            value={formLocation.title}
          />

          {touched.longitude && errors.longitude ? <div>{errors.longitude}</div> : null}
          <input
            name="longitude"
            type="text"
            placeholder="longitude"
            onChange={(e)=>{updateLocation(e.target)}}
            value={formLocation.longitude}
          />

          {touched.latitude && errors.latitude ? <div>{errors.latitude}</div> : null}
          <input
            name="latitude"
            type="text"
            placeholder="latitude"
            onChange={(e)=>{updateLocation(e.target)}}
            value={formLocation.latitude}
          />

          <div onClick={()=>console.log(formLocation)}>Cancel</div>
          <button type="submit">Save</button>
        </form>
  )
}

export default FormWrapper;