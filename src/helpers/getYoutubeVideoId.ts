function getYoutubeVideoId(url: string): string | undefined {
  const match = url.match(/embed\/([\w-]+)$/);
  return match ? match[1] : undefined;
}

export { getYoutubeVideoId };
