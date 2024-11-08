// Función para obtener películas populares
export const getPopularMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDU5MGE1YTEzZWVkZTdmYmZiMmFmOWQ5OTViYyIsIm5iZiI6MTcyOTYyMzM3MC43NDQyODMsInN1YiI6IjVmYjIyYjc3MzdiM2E5MDA0MDA0NGZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2VSBdc2H2fk-ATD97nW6SkSSalgUeyvK-FCi5wpg_hU",
    },
  };

  try {
    // Usa await para esperar la respuesta del fetch
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options,
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Lanza un error si la respuesta no es exitosa
    }

    const data = await response.json(); // Convierte la respuesta a JSON

    return data.results; // Retorna solo los resultados de las películas
  } catch (err) {
    console.error("Error al obtener las películas populares:", err);
    throw err; // Propaga el error para que sea manejado por el componente que llame a esta función
  }
};

export const movieById = async (mediaId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDU5MGE1YTEzZWVkZTdmYmZiMmFmOWQ5OTViYyIsIm5iZiI6MTcyOTYyMzM3MC43NDQyODMsInN1YiI6IjVmYjIyYjc3MzdiM2E5MDA0MDA0NGZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2VSBdc2H2fk-ATD97nW6SkSSalgUeyvK-FCi5wpg_hU",
    },
  };
  try {
    // Usa await para esperar la respuesta del fetch
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${mediaId}?language=en-US`,
      options,
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Lanza un error si la respuesta no es exitosa
    }

    const data = await response.json(); // Convierte la respuesta a JSON

    return data; // Retorna solo los resultados de las películas
  } catch (err) {
    console.error("Error al obtener las películas populares:", err);
    throw err; // Propaga el error para que sea manejado por el componente que llame a esta función
  }
};

export const movieByGender = async (mediaId) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDI5NDU5MGE1YTEzZWVkZTdmYmZiMmFmOWQ5OTViYyIsIm5iZiI6MTcyOTYyMzM3MC43NDQyODMsInN1YiI6IjVmYjIyYjc3MzdiM2E5MDA0MDA0NGZhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2VSBdc2H2fk-ATD97nW6SkSSalgUeyvK-FCi5wpg_hU",
    },
  };
  try {
    // Usa await para esperar la respuesta del fetch
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${mediaId}`,
      options,
    );

    // Verifica si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Lanza un error si la respuesta no es exitosa
    }

    const data = await response.json(); // Convierte la respuesta a JSON
    console.log(data.results);
    return data.results; // Retorna solo los resultados de las películas
  } catch (err) {
    console.error("Error al obtener las películas por genero:", err);
    throw err; // Propaga el error para que sea manejado por el componente que llame a esta función
  }
};
