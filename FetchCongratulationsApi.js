export default async function FetchCongratulations(){
  const randomOffset = Math.floor(Math.random() * 100); 
    return(
         
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.EXPO_PUBLIC_API_URL_GIPHY}&q=cute+animals&limit=10&offset=${randomOffset}&rating=g&lang=en&bundle=messaging_non_clips`)
        .then((response) => {
              if (!response.ok) {
              throw new Error("Error in fetch from GIPHY : " + response.statusText);
            }

            return response.json();
          })
  )}