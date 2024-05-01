export async function fetchContents() {
  let response;
  try {
    response = await fetch(
      ``
    ).then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong with the request");
      }
      return response.json();
    });
  } catch (error) {
    console.log('No han llegado los datos al destino: ' + error)
    // hacer algo para controlar el errrr
  }
  return response;
}