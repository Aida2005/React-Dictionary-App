import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./dictionary.css";


export default function Dictionary(props){
    let [keyword, setKeyword] =useState ("Hello");
    let [results, setResults]= useState (null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] = useState (null);


    function handleResponse(response){
        console.log(response.data[0]);
        setResults (response.data[0]);
    }

    function handlePexlesResponse (response) {
        console.log(response.data);
        setPhotos (response.data.photos);
    }


    function search(){
        // documentation: https://dictionaryapi.dev/
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        let apiPexelsApiKey="563492ad6f917000010000019bf687387bdb41fa9cad99471d610816";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
        let headers = { Authorization : `Bearer ${apiPexelsApiKey}` };
        axios.get(pexelsApiUrl , { headers: headers }).then(handlePexlesResponse);
}
   
function handleSubmit(event){
    event.preventDefault();
    search();
    }

    function handleKeywordChange(evnet){
      setKeyword(evnet.target.value);

    }

    function load(){
        setLoaded (true);
        search();
    }
    
if (loaded){
    return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
         <form onSubmit={handleSubmit}>
             <input type="search" onChange={handleKeywordChange}
             defaultValue={props.defaultKeyword}/>
         </form>
         <div className="hint">
             Suggested words : Hello, Wonder, Well, etc
         </div>
         </section>
         <Results results={results} />
         <Photos photos={photos} />
        </div>
    );
} else{
    load();
    return "loading";
}
}