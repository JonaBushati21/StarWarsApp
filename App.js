import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class StarWars extends React.Component {
   
  
 token = null;
  state = {
    query: "",
    queryplanets:"",
    queryfilms:"",
    planets: [],
    people: [],
    films: [],
    name: "",
    height: "",
    mass:"",
    hair_color:"",
    rotation_period:"",
    orbital_period:" ",
    diameter: "",
    climate:"",
    title:"",
    director:"",
    episode_id:"",
    edited:"",
    showMe:false

  };
 
   

  onChange = event => {
    const { value } = event.target;
    this.setState({
      query: value,
     
    });

    this.search(value);
  };

  onChange = event => {
    const { valueplanets } = event.target;
    this.setState({
      queryplanets: valueplanets,
     
    });

    this.search(valueplanets);
  };

onChange = event => {
    const { valuefilms } = event.target;
    this.setState({
      queryfilms: valuefilms,
     
    });

    this.search(valuefilms);
  };

 operation()
{
  this.setState({
    showMe:!this.state.showMe
  })
}



  search = query => {
    const url = `https://swapi.co/api/people?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ people: data.results });
        }
      });
  };

  search = queryplanets => {
    const url = `https://swapi.co/api/planets?search=${queryplanets}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ planets: data.results });
        }
      });
  };
search = queryfilms => {
    const url = `https://swapi.co/api/films?search=${queryfilms}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ films: data.results });
        }
      });
  };




  componentDidMount() {
    let initialPeople = [];
  
    fetch('https://swapi.co/api/people/')
        .then(response => {
            return response.json();
        }).then(data => {
        initialPeople = data.results.map((person) => {
            return person
        });
        console.log(initialPeople);
        this.setState({
            people: initialPeople,
        });
    });

 let initialPlanets = [];
    fetch('https://swapi.co/api/planets/') 
        .then(response => {
            return response.json();
        }).then(data => {
        initialPlanets = data.results.map((planetaria) => {
            return planetaria
        });
        console.log(initialPlanets);
        this.setState({
            planets: initialPlanets,
        });
    });

let initialfilms = [];
    fetch('https://swapi.co/api/films/')
        .then(response => {
            return response.json();
        }).then(data => {
        initialfilms = data.results.map((movies) => {
            return movies
        });
        console.log(initialfilms);
        this.setState({
            films: initialfilms,
        });
    });







  }



 handleChangename(event) {
        console.log(event.target.value);
        this.setState({
             name:event.target.value
        })
    }

handleChangeheight(event) {
        console.log(event.target.value);
        this.setState({
             height:event.target.value
        })
    }
    handleChangemass(event) {
        console.log(event.target.value);
        this.setState({
             mass:event.target.value
        })
    }
    handleChangehair_color(event) {
        console.log(event.target.value);
        this.setState({
             hair_color:event.target.value
        })
    }
    handleChangerotation_period(event) {
        console.log(event.target.value);
        this.setState({
             rotation_period:event.target.value
        })
    }
  
handleChangeorbital_period(event) {
        console.log(event.target.value);
        this.setState({
             orbital_period:event.target.value
        })
    }
    handleChangediameter(event) {
        console.log(event.target.value);
        this.setState({
             diameter:event.target.value
        })
    }
    handleChangeclimate(event) {
        console.log(event.target.value);
        this.setState({
             climate:event.target.value
        })
    }
handleChangetitle(event) {
        console.log(event.target.value);
        this.setState({
             title:event.target.value
        })
    }



handleChangedirector(event) {
        console.log(event.target.value);
        this.setState({
             director:event.target.value
        })
    }
    handleChangeepisode_id(event) {
        console.log(event.target.value);
        this.setState({
             episode_id:event.target.value
        })
    }

handleChangeedited(event) {
        console.log(event.target.value);
        this.setState({
             edited:event.target.value
        })
    }
onClick(event) {
        this.setState({ showResults: true });
    }

  render() {
   
       let people = this.state.people;
       let planets = this.state.planets;
       let films = this.state.films;
        let optionItemsname = people.map((person) =>
                <option key={person.name}>{person.name}</option> );
                let optionItemsheight = people.map((person) =>
                <option key={person.height}>{person.height}</option> );
                 let optionItemsmass = people.map((person) =>
                <option key={person.mass}>{person.mass}</option> );
                 let optionItemshair_color = people.map((person) =>
                <option key={person.hair_color}>{person.hair_color}</option> );
                 let optionItemsrotation_period = planets.map((planetaria) =>
                <option key={planetaria.rotation_period}>{planetaria.rotation_period}</option> );
                let optionItemsorbital_period = planets.map((planetaria) =>
                <option key={planetaria.orbital_period}>{planetaria.orbital_period}</option> );
                 let optionItemsdiameter = planets.map((planetaria) =>
                <option key={planetaria.diameter}>{planetaria.diameter}</option> );
                let optionItemsclimate = planets.map((planetaria) =>
                <option key={planetaria.climate}>{planetaria.climate}</option> );
                let optionItemstitle = films.map((movies) =>
                <option key={movies.title}>{movies.title}</option> );
                let optionItemsdirector = films.map((movies) =>
                <option key={movies.director}>{movies.director}</option> );
                let optionItemsepisode_id = films.map((movies) =>
                <option key={movies.episode_id}>{movies.episode_id}</option> );
                let optionItemsedited = films.map((movies) =>
                <option key={movies.edited}>{movies.edited}</option> );

    return (


<div class="bodyload ">
      <div class="container">
        <h1 class="text-center title"> Star Wars  </h1>
       
            <div class="generation mt-5">
                <div class="people mb-5">
                    <h3 class="people_title mb-5"> People </h3>
                            <div class="row">  
                              <div class="col-lg-3 col-md-3 col-12"> 
                                  <span class="tag">Name:</span> <select onChange ={this.handleChangename.bind(this)}>
                                    {optionItemsname}
                                  </select>               
                        <p class="typed">You chose: {this.state.name}</p>           
                              </div>
                             <div class=" col-lg-3 col-md-3 col-12">
                                  <span class="tag">Height:</span> <select onChange ={this.handleChangeheight.bind(this)}>
                                    {optionItemsheight}
                                  </select>    
                          <p class="typed">You chose:{this.state.height}</p>          
                                </div>       
                            <div class="col-lg-3 col-md-3 col-12"> 
                            <span class="tag">Mass: </span><select onChange ={this.handleChangemass.bind(this)}>
                                    {optionItemsmass}
                                  </select>   
                                   <p class="typed">You chose:{this.state.mass}</p> 
                            </div>
                            <div class="col-lg-3 col-md-3 col-12">
                            <span class="tag">Hair color: </span><select onChange ={this.handleChangehair_color.bind(this)}>
                                    {optionItemshair_color}
                                  </select>   
                                   <p class="typed">You chose:{this.state.hair_color}</p> 
                            </div>
          </div>
</div>
<div class="planets mb-5">
<h3 class="planets_title title_paragraphs mb-5"> Planets </h3>
                            <div class="row">  
                              <div class="col-lg-3 col-md-3 col-12"> 
                                 <span class="tag">Rotation period: </span><select onChange ={this.handleChangerotation_period.bind(this)}>
                                    {optionItemsrotation_period}
                                  </select>             
                        <p class="typed">You chose:{this.state.rotation_period}</p>           
                              </div>
                             <div class="col-lg-3 col-md-3 col-12">
                                  <span class="tag">Orbital Period: </span><select onChange ={this.handleChangeorbital_period.bind(this)}>
                                    {optionItemsorbital_period}
                                  </select>             
                        <p class="typed">You chose:{this.state.orbital_period}</p>           
                                </div>       
                            <div class="col-lg-3 col-md-3 col-12"> 
                            <span class="tag">Diameter: </span> <select onChange ={this.handleChangediameter.bind(this)}>
                                    {optionItemsdiameter}
                                  </select>             
                        <p class="typed">You chose:{this.state.diameter}</p>  
                            </div>
                            <div class="col-lg-3 col-md-3 col-12">
                           <span class="tag">Climate: </span> <select onChange ={this.handleChangeclimate.bind(this)}>
                                    {optionItemsclimate}
                                  </select>             
                        <p class="typed">You chose:{this.state.climate}</p>  
                            </div>
          </div>
</div>

<div class="films mb-5">
                    <h3 class="films_title mb-5"> Films </h3>
                            <div class="row">  
                              <div class="col-lg-3 col-md-3 col-12"> 
                                <span class="tag">Title: </span>  <select onChange ={this.handleChangetitle.bind(this)}>
                                    {optionItemstitle}
                                  </select>               
                        <p class="typed">You chose:{this.state.title}</p>    
                        
                             
                              </div>
                             <div class="col-lg-3 col-md-3 col-12">
                                <span class="tag">Director: </span>  <select onChange ={this.handleChangedirector.bind(this)}>
                                    {optionItemsdirector}
                                  </select>    
                         <p class="typed">You chose:{this.state.director}</p>          
                                </div>       
                            <div class="col-lg-3 col-md-3 col-12"> 
                            <span class="tag">Episode ID: </span><select onChange ={this.handleChangeepisode_id.bind(this)}>
                                    {optionItemsepisode_id}
                                  </select>   
                                   <p class="typed">You chose:{this.state.episode_id}</p> 
                            </div>
                            <div class="col-lg-3 col-md-3 col-12">
                            <span class="tag">Edited: </span><select onChange ={this.handleChangeedited.bind(this)}>
                                    {optionItemsedited}
                                  </select>   
                                  <p class="typed">You chose:{this.state.edited}</p> 
                            </div>
          </div>




</div>


<div class="DisplayPlot">
                    
                            <div class="row">  
                              <div class="col-lg-4 col-md-4 col-12"> 
                               
                                         
                              </div>
                             <div class="col-lg-4 col-md-4 col-12">
  <div class="mb-5 ">
        <h3 class="plot">
         Generate my Star Wars
        </h3>
        
        
        <button id="showme" onClick={()=>this.operation()}>My own Star Wars !!</button>
        {
          this.state.showMe?
          <div class="text mt-3">
          <h3>The untold story of { this.state.name } </h3>

          Hello Planet Earth!!!!
          
           You are talking to { this.state.name } about { this.state.height } cm tall. My mass here is { this.state.mass } and my hair color is { this.state.hair_color } .


          This is my story, which was not supposed to happen, but it did happen, I mean in this planet. Maybe in another parallel universe things would have been different. 
          But for now, this is my story and this is my planet. Can you guess where I am calling you from? 


          
          Its Rotation Period is { this.state.rotation_period }. Any opinion? What if i give you the diameter of it, okay it is { this.state.diameter }.

          So?? Not yet? What if you knew the orbital period { this.state.orbital_period } and its climate? {this.state.climate }. It should be easier now.

          Right? ...

       
        Note: Title of the movie { this.state.title }.
        Director: { this.state.director }
        Episode Id: { this.state.episode_id }
        Edited: { this.state.edited }



        
      


         
        
        </div>
        :null
        }
      </div>
    </div>
        
      
 
      
    </div>       
                            <div class="col-lg-4 col-md-4 col-12"> 
                            
                            </div>
                            
          </div>
















          
        </div>
    </div>
  </div>

  
  









  );
  }
}

export default StarWars;