import React, { useEffect, useState } from "react";
import downarrow from "./icons/down_arrow.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./startpg.css";

ChartJS.register(ArcElement, Tooltip, Legend);

var key = 1
function MovieInfo(props) {
  var [loadimgini, loadimgfin] = useState();
  var [loadcastini, loadcastfin] = useState();
  var [loadgraphini, loadgraphfin] = useState();
  var [loadupperini,loadupperfin] = useState();
  var [loadplotini,loadplotup] = useState();



  useEffect(async () => {
      var images = ""
      var actorList = ""
      var ratinggraph = ""
      var aboutObject = ""
      var ratingObject = ""
    await fetch("https://imdb-api.com/en/API/Title/k_of195apq/" + props.movID)
    .then((res) => res.json())
    .then((data)=>{
        loadupperfin(
            <div className="w-screen flex flex-col md:flex-row justify-start items-center ">
        <img
          src={data.image}
          id="posterimg"
          className="h-[38rem] w-full md:w-[38rem]"
        />
        <div className="flex flex-col justify-start items-start w-full pt-4">
          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Film Name: </p>
            <p className="text-gray-100 text-xl ml-4 ">
              {data.fullTitle}
            </p>
          </div>

          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Language: </p>
            <p className="text-gray-100 text-xl ml-4">
              {data.languages}
            </p>
          </div>

          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">
              Date Of Release:{" "}
            </p>
            <p className="text-gray-100 text-xl ml-4">
              {data.releaseDate}
            </p>
          </div>

          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Genre: </p>
            <p className="text-gray-100 text-xl ml-4">{data.genres}</p>
          </div>

          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Runtime: </p>
            <p className="text-gray-100 text-xl ml-4">
              {data.runtimeStr}
            </p>
          </div>

          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Directors: </p>
            <p className="text-gray-100 text-xl ml-4">
              {data.directors}
            </p>
          </div>

          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Writers: </p>
            <p className="text-gray-100 text-xl ml-4">{data.writers}</p>
          </div>

          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Key Casts: </p>
            <p className="text-gray-100 text-xl ml-4">{data.stars}</p>
          </div>

          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Companies: </p>
            <p className="text-gray-100 text-xl ml-4">
              {data.companies}
            </p>
          </div>
          <div className="flex flex-row justify-start items-center pl-4 mb-4 justify-evenly">
            <p className="text-white text-2xl font-semibold">Awards: </p>
            <p className="text-gray-100 text-xl ml-4">{data.awards}</p>
          </div>

          <a href="#plotid" className="ml-[40%]">
            <button className="w-10 h-6 animate-bounce  mt-6 mb-4">
              <img src={downarrow} alt="downarrow" />
            </button>
          </a>
        </div>
      </div>
        )
        loadplotup(
          <div className="w-screen pb-4 pt-4">
          <p className="w-full pl-4 pr-4 text-center text-white text-xl">
            {data.plot}
          </p>
        </div>
        )
        loadcastfin(
          data.actorList.map((datas) => {
            return (
                <a key={++key}
                href={`https://en.wikipedia.org/wiki/${datas.name}`}
                target="_blank"
                className="w-full mt-2 mb-2 flex flex-row border-2 bg-gray-900 hover:bg-gray-800 cursor-pointer border-white justify-evenly justify-center items-center"
                >
                <img key={++key} src={datas.image} alt="actorimg" className="h-24 w-24" />
                <p key={++key} className="text-white pl-2 pr-2">{datas.name}</p>
                <p key={++key} className="text-white pl-2 pr-2">
                    Character:({datas.asCharacter})
                </p>
                </a>
            )
            })
        )
    })

        
    

    await fetch(
      "https://imdb-api.com/en/API/Images/k_of195apq/" + props.movID + "/Short"
    )
      .then((res) => res.json())
      .then((data) => {
        images = data.items.slice(0, 10).map((datas) => {
            return (
              <div key={++key}>
                <img key={++key} src={datas.image} />
                <p key={++key} className="legend">{datas.title}</p>
              </div>
            );
          })

          loadimgfin(images)
        })
      

    await fetch("https://imdb-api.com/en/API/Ratings/k_of195apq/" + props.movID)
      .then((res) => res.json())
      .then((data) => {
      ratinggraph = {
        labels: [
          "imDB",
          "metacritic",
          "rottenTomatoes",
          "theMovieDb",
          "filmAffinity",
        ],
        datasets: [
          {
            label: "Ratings",
            data: [
              parseInt(data.imDb),
              parseInt(data.metacritic),
              parseInt(data.rottenTomatoes),
              parseInt(data.theMovieDb),
              parseInt(data.filmAffinity),
            ],
            backgroundColor: [
              "rgba(255, 159, 64, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderColor: [
              "rgba(255, 159, 64, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          }]}

        loadgraphfin(<Pie options={{ maintainAspectRatio: false }} width={"500%"} height={"500%"} data={ratinggraph}/>)
      })

  }, []);

  return (
    <div className="w-screen bg-gray-800 pt-16" id="movidtop">
      <h1 className="text-3xl text-white pl-10 mb-2 md:mb-0 bg-gray-700">
        Description
      </h1>
      {loadupperini}
      <hr className="text-white" />

      <h1 id="plotid" className="text-3xl text-white pl-10 mt-4 bg-gray-700">
        Film plot
      </h1>
      {loadplotini}
      <hr className="text-white" />
      <h1 className="text-3xl text-white pl-10 mt-4 bg-gray-700">Gallery</h1>
      <div className="w-screen flex justify-center items-center  pb-4 pt-4 bg-gray-800">
        <div className="w-[98%] md:w-[50%] h-full">
          <Carousel className="bg-gray-800" autoPlay infiniteLoop>
            {loadimgini}
          </Carousel>
        </div>
      </div>

      <hr className="text-white" />
      <h1 className="text-3xl text-white pl-10 mt-4 bg-gray-700">Ratings</h1>

      <div className="w-screen flex justify-center items-center mb-4 bg-gray-800">
        <div className="w-[90%] md:w-[50%]">{loadgraphini}</div>
      </div>

      <hr className="text-white" />
      <h1 className="text-3xl text-white pl-10 mt-4 bg-gray-700">Casts</h1>

      <div className="w-screen  flex flex-row justify-center items-center flex-wrap p-4 bg-gray-800">
        {loadcastini}
      </div>

      <hr className="text-white mt-4" />
      <a href="#movidtop">
        <button className="ml-[48%] w-24 mt-4 h-8 rounded-lg bg-yellow-400 text-black">
          Back To Top
        </button>
        <hr className="text-white mt-4" />
      </a>
    </div>
  );
}

export default MovieInfo;
