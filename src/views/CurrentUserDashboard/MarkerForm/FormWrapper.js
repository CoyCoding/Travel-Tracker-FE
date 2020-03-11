import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

const MAX_LAT = 90;
const MAX_LONG = 180;
const MIN_LAT = -90;
const MIN_LONG = -180;

const schema = Yup.object().shape({
  title: Yup.string()
    .required('Required'),
  longitude: Yup.number()
    .required('Required')
    .min(MIN_LONG, 'The min for longitude is -180').max(MAX_LONG, 'The max for longitude is 180')
    .typeError('This is not a vaild number'),
  latitude: Yup.number()
    .required('Required')
    .min(MIN_LAT, 'The min for latitude is -90').max(MAX_LAT, 'The max for latitude is 90')
    .typeError('This is not a valid number'),
});

const FormWrapper = (props) => {
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
        props.updateMarkerState({[target.name]: Number(target.value)})
      } else{
        props.updateMarkerState({[target.name]: target.value})
      }
    }).catch((err) => {
      setErrors({...errors, [target.name]: err.message})
    });
  }

  const submitForm = (e) => {
    e.preventDefault();
    schema.validate(formLocation).then(()=>{
      props.submit(formLocation)
    }).catch((err)=>{
      console.log(err)
    })

  }

  console.log(props.markerValues)

  return(
    <form
      onSubmit={(e) => {submitForm(e)}}>
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