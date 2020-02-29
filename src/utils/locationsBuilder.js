export const buildLocationArray = (user) => {
  const locArray1 = user.locations.map((location) => {
    location.user = user.username;
    return location
  })
  let locArray2 = [];
   user.following.forEach(user => {
    user.locations.forEach(location => {
      location.user = user.username;
      locArray2.push(location);
    })
  })
  return [...locArray1, ...locArray2];
}

export default buildLocationArray;