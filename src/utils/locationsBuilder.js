export const buildLocationArray = (user, withFollowers) => {
  let locArray = [];
  locArray = user.locations.map((location) => {
    location.user = user.username;
    return location
  })

  if(withFollowers){
      user.following.forEach(followedUser => {
       followedUser.locations.forEach(location => {
         location.user = followedUser.username;
         locArray.push(location);
       });
    });
  }
  return locArray;
}

export default buildLocationArray;