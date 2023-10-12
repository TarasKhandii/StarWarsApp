export const getIdFromData = (url: string) => {
  return (url.match(new RegExp('([0-9]+)')) as RegExpMatchArray)?.[0];
};
