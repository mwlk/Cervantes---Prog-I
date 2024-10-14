export async function call(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`error en la peticion: ${url}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`error: ${error}`);
    throw error;
  }
}
