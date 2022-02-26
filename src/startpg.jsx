import React, { useEffect, useState } from "react";
import "./startpg.css"
var contents250 = null
var key250 = 1;
function Startpg(props){
   
    var [ini250,up250] = useState()
    useEffect(async()=>{
        await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_of195apq")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            contents250 = data.items.map((datas)=>{
                return(
                    <div onClick={()=>{props.findmovinfo(datas.id)}} className="w-64 mt-4 hover:scale-105 flex flex-col border-2 bg-gray-900 hover:bg-gray-800 cursor-pointer border-white justify-evenly justify-center items-center" key = {++key250}>
                        <img id = "t250img" src={datas.image} className = "h-64 w-full" key = {++key250} alt={datas.title}/>
                        <h1 key = {++key250} className="text-white p-4 font-semibold text-center">
                            {datas.title}
                        </h1>
                    </div>
                )
            })
        })
        up250(contents250)
    },[])
    
    return(
        <div className="w-screen pt-16 bg-gray-800">
            <hr className="text-white"/>
            <div className="flex flex-col justify-center items-center mt-16 bg-gray-700">
                <h1 className="text-white text-6xl font-semibold text-white">
                    WELCOME TO "FilmTrack"
                </h1>
                <br />
                <br />
                <p className="text-4xl text-gray-100 font-semibold">Here are top 100 films for you to binge this weekend</p>
                <p className="text-2xl text-gray-100 font-bold">If you want to search for any film, just search it on the topbar</p>
                <p className="text-2xl text-gray-100 font-bold">To Explore more about different films just click on see more tab</p>
            </div>
            <hr className="text-white mt-6"/>
            <h2 className="text-gray-100 text-xl mt-4 ml-4">THE TOP 100 PICKS OF THIS WEEKEND-</h2>
            
            <div className="flex w-screen justify-evenly flex-row justify-start items-center p-6 flex-wrap">
                {ini250}
            </div>
        </div>
    )
}

export default Startpg