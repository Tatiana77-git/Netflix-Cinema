

const API_BASE = import.meta.env.VITE_API_BASE as string;
const API_KEY  = import.meta.env.VITE_API_KEY as string;
const IMG_BASE = import.meta.env.VITE_IMG_BASE as string;

/**
 * Универсальный GET с try/catch.
 * НИКАКОГО body и JSON.stringify здесь не нужно — это GET-запрос.
 */
async function request<T>(path: string, params: Record<string, string | number> = {}): Promise<T> {
  try {
    const url = new URL(API_BASE + path);
    url.search = new URLSearchParams({
      api_key: API_KEY,
      language: "fr-FR",
      ...params as Record<string, string>
    }).toString();

    const res = await fetch(url.toString(), { method: "GET" });
    if (!res.ok) {
      const text = await res.text(); // читаем текст ошибки для диагностики
      throw new Error(`HTTP ${res.status} – ${text}`);
    }
    return (await res.json()) as T;
  } catch (err) {
    console.error("API request error:", err);
    throw err; // пробрасываем наверх, чтобы страница могла показать сообщение
  }
}

// 🎬 Accueil — 3 ленты
export async function getPopularMovies() {
  const data = await request<{ results: any[] }>("/movie/popular");
  return data.results; // массив фильмов
}

export async function getTopRatedMovies() {
  const data = await request<{ results: any[] }>("/movie/top_rated");
  return data.results;
}

export async function getUpcomingMovies() {
  const data = await request<{ results: any[] }>("/movie/upcoming");
  return data.results;
}

// 📷 helper для картинок (poster/backdrop)
export function img(path: string | null, size = "w500") {
  return path ? `${IMG_BASE}/${size}${path}` : "";
}




/**
 * 🔎 Важно:
 * JSON.stringify и body НУЖНЫ только для POST/PUT/PATCH.
 * Для нашего brief на главной — все запросы GET, тело не отправляем.
 * Пример POST (НЕ нужен сейчас, просто для понимания):
 *
 * async function examplePost() {
 *   const res = await fetch("https://example.com/api", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({ name: "hello" })
 *   });
 * }
 */
