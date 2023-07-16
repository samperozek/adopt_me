import {useState} from 'react';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState("");
    const [animal, updateAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const breeds = ["Poodle"];

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        onChange = {(e) => setLocation(e.target.value)}
                        id="location" value={location} 
                        value = {location}
                        placeholder="Location">    
                    </input>
                </label> 
                <label htmlFor="animal">
                Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                        updateAnimal(e.target.value);
                        setBreed("");
                        }}
                        onBlur={(e) => {
                        updateAnimal(e.target.value);
                        setBreed("");
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                        <option key={animal} value={animal}>
                            {animal}
                        </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={!breeds.length}
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onBlur={(e) => setBreed(e.target.value)}
                    >
                        <option />
                        {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;