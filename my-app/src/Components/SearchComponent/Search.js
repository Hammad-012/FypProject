import './Search.css';
import { useState , useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
const Search = () => {
   const Navigate =  useNavigate();
    const [disciplines, setDisciplines] = useState([]);
    const [Cities , setCities] = useState([]);
    const [city, setCity] = useState('');
    const optionCities = Cities.map((ele)=>{
        return <option id={ele.id} key={ele.id}>{ele.Cities}</option>
    })
    const optionData = disciplines.map((element) => {
        return <option id={element.id} key={element.id}>{element.Dicipline}</option>
    })
    useEffect(() => {
      fetch('http://127.0.0.1:8000/disciplines')
      .then((res) => {
        if(res.ok === false) {
            throw new Error('error');
        }
        return res.json();
      })
      .then((resData) => {
        setDisciplines(resData.disciplines)
      })
      .catch((err) => {
        console.log(err.message)
      })
    }, [])
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/Cities')
        .then((resp)=>{
            if(resp.ok === false) {
                throw new Error('error')
            }
            return resp.json()
        })
        .then((respData)=>{
         setCities(respData.cities)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }, [])


    const submitHandler= (event) => {
       event.preventDefault();
       Navigate(`/Search/${city}`)
    }
    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    }
    return (
        
        <form className='center-container' onSubmit={submitHandler}>
            <select type='text' placeholder='What to Study?' >
                <option>Select Discipline</option>
                {
                  optionData
                }
            </select>
            <select onChange={cityChangeHandler} value={city} type='text' placeholder='Where to Study?'>
            <option>Select Cities</option>
            {
                optionCities
            }
            </select>
            <button type='submit' className='SearchButton'>
            <ion-icon name="search-outline" className='SearchIcon'></ion-icon>
            </button>
        </form>
    )
}
export default Search;