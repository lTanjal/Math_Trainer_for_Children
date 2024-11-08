export default function FetchCongratulations(){
    return(
        fetch(`https://tenor.googleapis.com/v2/search?q=cute-animals&key=${process.env.EXPO_PUBLIC_API_URL_TONER}&contentfilter=medium&media_filter=gif&random=true&limit=10`)  
        .then((response) => {
            if (!response.ok) {
              throw new Error("Error in fetch: " + response.statusText);
            }

            return response.json();
          })
  )}