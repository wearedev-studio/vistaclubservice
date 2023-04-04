function getYoutubeVideoId(url: string): string | undefined {
  // parse the URL
  const urlObj = new URL(url);
  // get the pathname of the URL
  const pathName = urlObj.pathname;
  // split the pathname using '/' as separator
  const segments = pathName.split("/");
  // return the last segment
  return segments[segments.length - 1];
}

export { getYoutubeVideoId };
