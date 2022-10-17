
import Head from "next/head";
import { useState, useEffect } from 'react';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link'
import { WindowDock } from "react-bootstrap-icons";



export const Skills = () => {

  const [query, setQuery] = useState('');

  const [genre, setGenre] = useState('');
  const [genre_title, setGenre_title] = useState('');

  const [setting, setSetting] = useState('');
  const [setting_title, setSetting_title] = useState('');
  
  const [character, setCharacter] = useState('');
  const [character_title, setCharacter_title] = useState('');
  


  const handleChange = event => {
    setQuery(event.target.value);
  }; 

  const [data, setData] = useState( { text:'' });
  const [data_title, setData_title] = useState( { text:'' });
  
  const [search, setSearch] = useState('');
  const [search_title, setSearch_title] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading_title, setIsLoading_title] = useState(false);

  const [visible, setVisible] = useState(false);
  const [invisible, setInvisible] = useState(true);

 

  const removeElement = event => {
   setVisible(true);
    
  };

  const removePlaceholder = event => {
    setInvisible(false);
   };
 
  useEffect(() => {
    const fetchData = async () => {
      if (character, setting, genre) {
      setIsLoading(true);
      
     const res = await fetch(`/api/openai`, {
        body: JSON.stringify({
          name: character, setting, genre
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }};
    

    fetchData();
  }, [search]);
  


  useEffect(() => {
    const fetchData_title = async () => {
      if (character_title, genre_title, setting_title) {
      setIsLoading_title(true);
      
     const res_title = await fetch(`/api/movie_title`, {
        body: JSON.stringify({
          name: character_title, setting_title, genre_title, data
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      const data_title = await res_title.json();
      setData_title(data_title);
      setIsLoading_title(false);
    }};
    

    fetchData_title();
  }, [search_title]);
 

 

    
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 

  return (
    <section className="skill" id="skills">
    

      
        <div className="container">
          
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                    <section class="step-wizard">
        <ul class="step-wizard-list">
            <li class="step-wizard-item current-item">
                <span class="progress-count">1</span>
                <span class="progress-label">Movie Charateristics</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">2</span>
                <span class="progress-label">Poster Designing</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">3</span>
                <span class="progress-label">Review Results</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">4</span>
                <span class="progress-label">Review Your Movie With AI</span>
            </li>
        </ul>
    </section>
                        <h2 className="title">Create Your Very Own Movie Name &  Movie Plot</h2>

                        <p>Enter the Genre, Characters and Story Setting<br></br> and the AI will generate a movie plot based on your selections</p>

                       
                        <br></br>
                        <br></br>
                       

                        
                        <div className="movie_title">
                        <br></br> 
                    
                        {visible &&  <button className="regenerate_title" onClick={() => {setSearch_title([genre_title, character_title, setting_title])}} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Regenerate Movie Title</button>}
                        <br></br>
                        <br></br>

                        <h3>Movie Title:</h3>
                        <br></br>
                        {invisible && <p className="placeholders">Please select your movie genre, character & setting to view your movie title here</p>}
                 
                       
                        {isLoading_title ? (<div>AI's Creating a Movie Title ...</div>) : (
                       <p className="title_AI">{data_title.text}</p> )}
                      
                       
                        </div>


                        <div className="forms">
                        <div className="dropdown">
                         <br></br>
                         <br></br>
                         <h1 className="dropdown-titles">Genre</h1>
                        <select value={genre} onChange={event => {setGenre(event.target.value); setGenre_title(event.target.value)}}>
                         <option val="">Select A Genre</option>
                         <option val="Action">Action</option>
                         <option val="Aventure">Adventure</option>
                         <option val="Comedy">Comedy</option>
                         <option val="Romantic">Romantic</option>
                         <option val="Romantic-Comedy">Romantic-Comedy</option>
                         <option val="Fantasy">Fantasy</option>
                         <option val="Sci-Fi">Sci-Fi</option>
                         <option val="Horror">Horror</option>
                         <option val="Thriller">Thriller</option>
                         <option val="Horror">Crime</option>
                         <option val="Horror">Mystery</option>
                        </select>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <h1 className="dropdown-titles">Character</h1>
                        <input type="text" className="input_type" value={character} placeholder="Enter a Character" onChange={event => {setCharacter(event.target.value); setCharacter_title(event.target.value)}}/> 
                 
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 className="dropdown-titles">Setting</h1>
                        <input type="text" className="input_type" value={setting} placeholder="Enter a Setting" onChange={event => {setSetting(event.target.value); setSetting_title(event.target.value)}}/> 
                        <br></br>
                        <br></br>
                        <br></br>
                        <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => {setSearch([genre, character, setting]); setSearch_title([genre, character, setting]); removeElement(); removePlaceholder()}}>Generate</button>
                          
                        <br></br>
                       
                       
                       
          

                        </div>
                        
                    
                      
                        
                        <div className="input_div">
                        <br></br> 
                        {visible && <button className="regenerate_plot"  onClick={() => {setSearch([genre, character, setting])}} type="button" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Regenerate Movie Plot</button>}
                        <br></br> 
                        <br></br> 
                        <h3>Movie Plot:</h3>
                        <br></br>
                        {invisible && <p className="placeholders">Please select your movie genre, character & setting to view your movie title here</p>}
                        {isLoading ? (<div>AI's Thinking of a Movie Plot ...</div>) : (
                       <p className="movie_plot">{data.text}</p> )}
                      
                    

                        </div>
                       
                        
                       
                       
                        </div>
                      
                       
                       
                       
                        <br></br>
                        {visible && <p>Once you are happy with the movie title and plot created, please select the Confirm & Continue button below to start building your movie poster</p>}
                        <br></br>
                        {visible && <button className="continue_button" type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Confirm & Continue</button> }

                    </div>
                  
                </div>
            </div>
        </div>
      
    </section>
  )

}

