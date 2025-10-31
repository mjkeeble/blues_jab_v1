export const getMapUrl = (venue: string, town: string): string => {
  const baseUrl = 'https://www.google.com/maps?q=';
  const formattedVenue: string = venue.split(' ').join('+');
  const townParts = town.split(' ').filter(Boolean);
  townParts.pop();
  const formattedTown = townParts.join('+');
  const query = `${formattedVenue}+${formattedTown}`;
  return `${baseUrl}${query}`;
};
