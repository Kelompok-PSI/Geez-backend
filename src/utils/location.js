export const haversine = (lat1, lon1, lat2, lon2) => {
  let lat1F = parseFloat(lat1)
  let lon1F = parseFloat(lon1)
  const toRadians = (degree) => degree * (Math.PI / 180);
  const dLat = toRadians(lat2 - lat1F);
  const dLon = toRadians(lon2 - lon1F);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1F)) *
    Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const radiusOfEarth = 6371; 
  return radiusOfEarth * c;
};