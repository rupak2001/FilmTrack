import React, { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

var keysearch = 1;
function Searchres(props) {
  var [search_result_ini, search_result_up] = useState(
    <PropagateLoader color="#FFFFFF" size={20} />
  );


  useEffect(async () => {
    var apiLink = props.apilink;
    var search_result = null;

    await fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length == 0) {
            search_result = 
            <div className="w-full mt-4 bg-gray-700 flex flex-col justify-center items-center">
                <p className="text-red-500 mt-4 pr-4 pl-4 text-2xl">No results found for your search</p>
                <button className="w-24 mt-4 mb-4 rounded-lg h-6 bg-green-400 text-indgo-900" onClick = {()=>{props.returnfunc(1)}}>Return Back</button>
            </div>
        } else {
          search_result = data.results.map((datas) => {
            return (
              <div
              onClick={()=>{props.findmovinfo(datas.id)}}
                name={datas.id}
                className="w-64 mt-4 hover:scale-105 flex flex-col border-2 bg-gray-900 hover:bg-gray-800 cursor-pointer border-white justify-evenly justify-center items-center"
                key={++keysearch}
              >
                <img
                  src={datas.image}
                  id="tsearchimg"
                  className="h-64 w-full"
                  key={++keysearch}
                  alt={datas.title}
                />
                <h1
                  key={++keysearch}
                  className="text-white p-4 font-semibold text-center"
                >
                  {datas.title}
                </h1>
              </div>
            );
          });
        }
      });

    search_result_up(search_result);
  }, []);


  window.addEventListener('beforeunload', function (e) {
    e.preventDefault(); 
    e.returnValue = '';
  });

  return (
    <div className="w-screen pt-20 bg-gray-800">
      <hr />
      <h1 className="p-4 text-center text-5xl text-white bg-gray-700">
        The search results will appear below
      </h1>
      <hr />

      <div className=" w-screen flex pt-16 flex-row flex-wrap justify-center items-center justify-evenly">
        {search_result_ini}
      </div>
    </div>
  );
}

export default Searchres;
