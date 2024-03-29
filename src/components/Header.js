import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery,setSearchQuery]=useState(""); // once states changes react triggers the 
    //reconcillaition process
    const [suggestions,setSuggestion]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);
    const searchCache=useSelector((store)=>store.search)

   useEffect(()=>{
        // console.log(searchQuery);
        const timer=  setTimeout(()=>{
            if(searchCache[searchQuery]){
                setSuggestion(searchCache[searchQuery])
            }else{
                getSearchSuggestions()
            }
         },200); // if time diff btw two key press
        // is less then
        // 200ms do not make the api call

        return ()=>clearTimeout(timer); // we are clearing the timer, it will be called whenm component is
        //destroyed

    },[searchQuery]); // api call will be made evrytime searchQuery is modified

    const getSearchSuggestions= async () => { 
        const data =await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json=await data.json();
        setSuggestion(json[1]);

        //update cache
        dispatch(
            cacheResults({
                [searchQuery]:json[1]
            })
        );
    };

    const dispatch=useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className='flex col-span-1'>
            <img 
            onClick={toggleMenuHandler}
            className='h-8 cursor-pointer'
            alt="menu"
            src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'
            />
            
            <a href='/'>
            <img
            className='h-8 mx-2'
            alt="logo"
            src='data:image/png;base64,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'
            />
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <div className='relative'>
            <div>
            <input className="rounded-l-full w-1/2 border p-2 border-gray-400"
             type="text"
             value={searchQuery}
             onChange={(e)=>setSearchQuery(e.target.value)}
             onFocus={()=>setShowSuggestions(true)}
             onBlur={()=>setShowSuggestions(false)}

             />
            <button className='border border-gray-400  p-2 rounded-r-full'>Search</button>

            </div>
        {showSuggestions &&    ( <div className='absolute bg-white py-2 px-2 w-[21rem] shadow-lg rounded-lg border'>
           <ul>
               { suggestions.map((s)=>(
                    <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                        {s}
                    </li>
            ))}
            </ul>
        </div>)}
        </div>
        </div>
        <div className='flex col-span-1'>
            <img className='h-8' alt='notification' src='data:image/jpeg;base64,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'/>
            <img className="h-8" alt="user" src="data:image/png;base64,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"/>

        </div>
    </div>
  )
}

export default Header