// Builds a YouTube embed src from a normal watch URL, youtu.be link, or playlist URL.
export function youtubeEmbedSrc(url: string): string {
  const parsed = new URL(url);
  const listId = parsed.searchParams.get('list');
  const videoId = parsed.searchParams.get('v') || (parsed.hostname === 'youtu.be' ? parsed.pathname.slice(1) : '');

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}${listId ? `?list=${listId}` : ''}`;
  }
  if (listId) {
    return `https://www.youtube.com/embed/videoseries?list=${listId}`;
  }
  return url;
}
