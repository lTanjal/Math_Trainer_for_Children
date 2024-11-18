export default async function FetchTranslate(text, sourceLang, targetLang ){
    return(
        fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}&key=${process.env.EXPO_PUBLIC_API_URL_MYMEMORY}`)  
        .then((response) => {
            if (!response.ok) {
              throw new Error("Error in fetch translate: " + response.statusText);
            }

            return response.json();
          })
  )}