const API_BASE = import.meta.env.VITE_API_BASE as string;
const API_KEY  = import.meta.env.VITE_API_KEY as string;
const IMG_BASE = import.meta.env.VITE_IMG_BASE as string;


async function request(path: string, params: Record<string, string | number> = {}) {
  try {
    const url = new URL(API_BASE + path);
    url.search = new URLSearchParams({
      api_key: API_KEY,
      language: "fr-FR",
      ...params,
    }).toString();

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error("Erreur HTTP " + res.status);
    return await res.json();
  } catch (err) {
    console.error("Erreur fetch:", err);
    return null;
  }
}





// Accueil
export async function getPopularMovies() {
  const data = await request("/movie/popular");
  return data ? data.results : [];
}

export async function getTopRatedMovies() {
  const data = await request("/movie/top_rated");
  return data ? data.results : [];
}

export async function getUpcomingMovies() {
  const data = await request("/movie/upcoming");
  return data ? data.results : [];
}

// Movies 
export async function getMoviesByGenre(genreId: number) {
  const data = await request("/discover/movie", { with_genres: genreId });
  return data ? data.results : [];
}


//  SERIES 

export async function getPopularSeries() {
  const data = await request("/tv/popular");
  return data ? data.results : [];
}

export async function getTopRatedSeries() {
  const data = await request("/tv/top_rated");
  return data ? data.results : [];
}

export async function getSeriesByGenre(genreId: number) {
  const data = await request("/discover/tv", { with_genres: genreId });
  return data ? data.results : [];
}



export function img(path: string | null, size = "w500") {
  return path ? `${IMG_BASE}/${size}${path}` : "";
}


export  async function getSeriesById (id :string) {
  const data = await request  (`/tv/${id}`);
  return data; 
}
  
