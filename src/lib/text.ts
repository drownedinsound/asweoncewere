// Minimal helper for the plain-text bio fields stored in content/bio.json.
// Splits on blank lines into paragraphs and turns **bold** into <strong>.
export function paragraphs(text: string): string[] {
  return text
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => p.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'));
}
