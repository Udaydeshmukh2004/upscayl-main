import path from "path";

export default function decodePath(filePath: string): string {
  try {
    return path.normalize(decodeURIComponent(filePath));
  } catch {
    return path.normalize(filePath);
  }
}
