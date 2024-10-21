import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOreder() {
  const [query,setQuery] = useState('')
  const navigate = useNavigate()

function hadleSubmit(e){
  e.preventDefault()
  if(!query) return
  navigate(`/order/${query}`)
  }


    return (
        <form onSubmit={hadleSubmit}>
            <input placeholder="Search Order #" value={query} onChange={e=>setQuery(e.target.value)}/>
        </form>
    );
  }

  
  export default SearchOreder;
  