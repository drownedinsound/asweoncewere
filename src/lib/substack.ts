export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  image: string;
}

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`));
  return match ? decodeEntities(match[1].trim()) : '';
}

function extractEnclosureImage(xml: string): string {
  const match = xml.match(/<enclosure url="([^"]+)"/);
  if (!match) return '';
  const url = decodeEntities(match[1]);
  // Substack sometimes attaches a podcast audio enclosure instead of an image one.
  return /\.(png|jpe?g|webp|gif)(\?|$)|\/image\//i.test(url) ? url : '';
}

export async function fetchSubstackPosts(feedUrl: string, limit = 4): Promise<SubstackPost[]> {
  try {
    const res = await fetch(feedUrl);
    if (!res.ok) return [];
    const xml = await res.text();
    const items = xml.split('<item>').slice(1);
    return items.slice(0, limit).map((item) => ({
      title: extractTag(item, 'title'),
      link: extractTag(item, 'link'),
      pubDate: extractTag(item, 'pubDate'),
      excerpt: extractTag(item, 'description'),
      image: extractEnclosureImage(item),
    }));
  } catch {
    return [];
  }
}
