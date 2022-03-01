import React from "react";
import downarrow from "./icons/down_arrow.svg"

const apikey = import.meta.env.VITE_API_KEY
function Finderpg(props){
    var apilink = "https://imdb-api.com/API/AdvancedSearch/"+apikey+ "?"
    var genres_arr = []
    var groups_arr = []
    var companies_arr = []
    var colors_arr = []

    document.addEventListener('keypress',(event)=>{
        if(event.key == "Enter"){
            apibuilder()
        }
    })



    function check_genres(){
        var checks = []
        for(var i = 1;i<=26;i++){
            var stringbuilder = "genres-" + i
            if(document.getElementById(stringbuilder).checked){

                checks.push(document.getElementById(stringbuilder).value)
            }
        }
        genres_arr = checks
    }

    function check_groups(){
        var checks = []
        for(var i = 1;i<=20;i++){
            var stringbuilder = "groups-" + i
            if(document.getElementById(stringbuilder).checked){

                checks.push(document.getElementById(stringbuilder).value)
            }
        }
        groups_arr = checks
    }

    function apibuilder(){
        var apilinkbuild = apilink

        if(genres_arr.length !== 0){
            for(var i = 0;i<genres_arr.length;i++){
                if(i == 0){
                    apilinkbuild += "&genres=" +genres_arr[i]; 
                }
                else{
                    apilinkbuild += "," + genres_arr[i];
                }
            }
            
        }


        if(groups_arr.length !== 0){
            for(var i = 0;i<groups_arr.length;i++){
                if(i == 0){
                    apilinkbuild += "&groups=" +groups_arr[i]; 
                }
                else{
                    apilinkbuild += "," + groups_arr[i];
                }
            }
            
        }

        if(companies_arr.length !== 0){
            for(var i = 0;i<companies_arr.length;i++){
                if(i == 0){
                    apilinkbuild += "&companies=" +companies_arr[i]; 
                }
                else{
                    apilinkbuild += "," + companies_arr[i];
                }
            }
            
        }

        if(colors_arr.length !== 0)
            for(var i = 0;i<colors_arr.length;i++){
                if(i == 0){
                    apilinkbuild += "&colors=" +colors_arr[i]; 
                }
                else{
                    apilinkbuild += "," + colors_arr[i];
                }
            }
        

        if(document.getElementById("country").value){
            apilinkbuild += "&countries=" + document.getElementById("country").value
        }


        if(document.getElementById("language").value){
            apilinkbuild += "&languages=" + document.getElementById("language").value
        }


        if(document.getElementById("name").value){
            apilinkbuild += "&title=" + document.getElementById("name").value
        }


        if(document.getElementById("yrfrom").value){
            apilinkbuild += "&release_date=" + document.getElementById("yrfrom").value
            if(document.getElementById("yrto").value){
                apilinkbuild += "," + document.getElementById("yrto").value
            }
        }

        if(document.getElementById("keyword").value){
            apilinkbuild += "&keywords=" + document.getElementById("keyword").value
        }

        if(document.getElementById("loc").value){
            apilinkbuild += "&locations=" + document.getElementById("loc").value
        }

        if(document.getElementById("plot").value){
            apilinkbuild += "&plot=" + document.getElementById("plot").value
        }

        
        props.apilink(apilinkbuild)
    }


    function check_colors(){
        var checks = []
        for(var i = 1;i<=4;i++){
            var stringbuilder = "colors-" + i
            if(document.getElementById(stringbuilder).checked){

                checks.push(document.getElementById(stringbuilder).value)
            }
        }
        colors_arr = checks
    }

    function check_companies(){
        var checks = []
        for(var i = 1;i<=8;i++){
            var stringbuilder = "companies-" + i
            if(document.getElementById(stringbuilder).checked){

                checks.push(document.getElementById(stringbuilder).value)
            }
        }
        companies_arr = checks
        
    }


    return(
        <div className="pt-20 w-screen bg-gray-800 overflow-x-hidden">
            <div className = "flex flex-col w-screen justify-center items-center">
            <hr className="text-white w-screen"/>
            <h1 className="pt-4 text-5xl md:text-6xl w-screen font-bold pb-4 text-gray-100 text-center bg-gray-700">SEARCH YOUR MOVIE</h1>
            <p className="pt-2 text-2xl w-screen font-semibold pb-2 text-gray-100 text-center bg-gray-700">There are multiple fields below based on different criterias</p>
            <p className="pt-2 text-2xl w-screen font-semibold pb-2 text-gray-100 text-center bg-gray-700">You may fill one or more fields according to your preference</p>
            <p className="pt-2 text-xl w-screen font-semibold pb-2 text-gray-100 text-center bg-gray-700">For example: If you want to find all hindi movies between 2015-2021: just enter language "hindi" and release year "2015" to "2021"</p>
            <div className="w-full pb-4 pt-4 bg-gray-700 flex flex-row justify-center items-center">
            <a href="#searchFields"><button className="animate-bounce"><img className="h-10 w-10" src={downarrow} alt="downarrow" /></button></a>
            </div>
            <hr className="text-white w-screen"/>
            </div>

            <div id = "searchFields" className="w-screen flex flex-col justify-center items-center justify-evenly">
                <h1 className="pt-4 text-4xl w-screen font-semibold pb-2 text-gray-100 text-center">Search fields-</h1>
                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className="pb-2 text-2xl md:text-xl text-white ">Film Name: </h1>
                    <input id = "name" type="text" className = "w-64 p-4 h-6 md:h-8 outline-none rounded-xl" placeholder="Enter film name"/>
                </div>
                
                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className="pb-2 text-2xl md:text-xl text-white ">Year range: </h1>
                    <div className="flex flex-row justify-center items-center pb-2">
                        <input id = "yrfrom" type="text" className = "w-[10rem] md:w-64 p-4 h-6 md:h-8 outline-none rounded-xl" placeholder = "enter year from"/>
                        <p className="pl-4 pr-4 text-xl text-white">to</p>
                        <input id = "yrto" type="text" className = "w-[10rem] md:w-64 p-4 h-6 md:h-8 outline-none rounded-xl" placeholder="enter year to" />
                    </div>
                    <p className="text-red-400 text-center">*if you want to put only 1 year then leave the second slot empty</p>
                </div>

                <div className="flex w-full flex-wrap flex-col justify-center items-center mb-8">
                    <h1 className = "pb-2 text-2xl md:text-xl text-white">
                        Genres:
                    </h1>
                    <table className="ml-2 md:ml-0" id = "genrestable" onClick={check_genres}><tbody><tr><td className = "pr-4"><input id="genres-1" type="checkbox" name="genres" value="action" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="genres-1">Action</label></td><td className = "pr-4"><input id="genres-2" type="checkbox" name="genres" value="adventure" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-2">Adventure</label></td><td className = "pr-4"><input id="genres-3" type="checkbox" name="genres" value="animation" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-3">Animation</label></td><td className = "pr-4"><input id="genres-4" type="checkbox" name="genres" value="biography" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-4">Biography</label></td></tr><tr className="mb-4"><td className = "pr-4"><input id="genres-5" type="checkbox" name="genres" value="comedy" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-5">Comedy</label></td><td className = "pr-4"><input id="genres-6" type="checkbox" name="genres" value="crime" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-6">Crime</label></td><td className = "pr-4"><input id="genres-7" type="checkbox" name="genres" value="documentary" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-7">Documentary</label></td><td className = "pr-4"><input id="genres-8" type="checkbox" name="genres" value="drama" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-8">Drama</label></td></tr><tr className="mb-4"><td className = "pr-4"><input id="genres-9" type="checkbox" name="genres" value="family" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-9">Family</label></td><td className = "pr-4"><input id="genres-10" type="checkbox" name="genres" value="fantasy" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-10">Fantasy</label></td><td className = "pr-4"><input id="genres-11" type="checkbox" name="genres" value="film_noir" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-11">Film-Noir</label></td><td className = "pr-4"><input id="genres-12" type="checkbox" name="genres" value="game_show" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-12">Game-Show</label></td></tr><tr className="mb-4"><td className = "pr-4"><input id="genres-13" type="checkbox" name="genres" value="history" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-13">History</label></td><td className = "pr-4"><input id="genres-14" type="checkbox" name="genres" value="horror" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-14">Horror</label></td><td className = "pr-4"><input id="genres-15" type="checkbox" name="genres" value="music" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-15">Music</label></td><td className = "pr-4"><input id="genres-16" type="checkbox" name="genres" value="musical" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-16">Musical</label></td></tr><tr className="mb-4"><td className = "pr-4"><input id="genres-17" type="checkbox" name="genres" value="mystery" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-17">Mystery</label></td><td className = "pr-4"><input id="genres-18" type="checkbox" name="genres" value="news" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-18">News</label></td><td className = "pr-4"><input id="genres-19" type="checkbox" name="genres" value="reality_tv" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-19">Reality-TV</label></td><td className = "pr-4"><input id="genres-20" type="checkbox" name="genres" value="romance" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-20">Romance</label></td></tr><tr className="mb-4"><td className = "pr-4"><input id="genres-21" type="checkbox" name="genres" value="sci_fi" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-21">Sci-Fi</label></td><td className = "pr-4"><input id="genres-22" type="checkbox" name="genres" value="sport" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-22">Sport</label></td><td className = "pr-4"><input id="genres-23" type="checkbox" name="genres" value="talk_show" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-23">Talk-Show</label></td><td className = "pr-4"><input id="genres-24" type="checkbox" name="genres" value="thriller" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-24">Thriller</label></td></tr><tr className="mb-4"><td className = "pr-4"><input id="genres-25" type="checkbox" name="genres" value="war" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-25">War</label></td><td className = "pr-4"><input id="genres-26" type="checkbox" name="genres" value="western" className="mr-2 w-6 h-4"/><label className="text-white" htmlFor="genres-26">Western</label></td></tr></tbody></table>
                </div>


                <div className="flex flex-col justify-center items-center mb-8">
                <h1 className = "pb-2 text-2xl md:text-xl text-white text-center">
                        Title Groups:
                    </h1>
                    <table className="ml-2 md:ml-0" onClick={check_groups}><tbody><tr><td className="pr-4"><input id="groups-1" type="checkbox" name="groups" value="top_100" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-1">IMDb "Top 100"</label></td><td className="pr-4"><input id="groups-2" type="checkbox" name="groups" value="top_250" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-2">IMDb "Top 250"</label></td><td className="pr-4"><input id="groups-3" type="checkbox" name="groups" value="top_1000" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-3">IMDb "Top 1000"</label></td></tr><tr><td className="pr-4"><input id="groups-4" type="checkbox" name="groups" value="oscar_winners" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-4">Oscar-Winning</label></td><td className="pr-4"><input id="groups-5" type="checkbox" name="groups" value="emmy_winners" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-5">Emmy Award-Winning</label></td><td className="pr-4"><input id="groups-6" type="checkbox" name="groups" value="golden_globe_winners" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-6">Golden Globe-Winning</label></td></tr><tr><td className="pr-4"><input id="groups-7" type="checkbox" name="groups" value="oscar_nominees" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-7">Oscar-Nominated</label></td><td className="pr-4"><input id="groups-8" type="checkbox" name="groups" value="emmy_nominees" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-8">Emmy Award-Nominated</label></td><td className="pr-4"><input id="groups-9" type="checkbox" name="groups" value="golden_globe_nominees" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-9">Golden Globe-Nominated</label></td></tr><tr><td className="pr-4"><input id="groups-10" type="checkbox" name="groups" value="oscar_best_picture_winners" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-10">Best Picture-Winning</label></td><td className="pr-4"><input id="groups-11" type="checkbox" name="groups" value="oscar_best_director_winners" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-11">Best Director-Winning</label></td><td className="pr-4"><input id="groups-12" type="checkbox" name="groups" value="now-playing-us" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-12">Now-Playing</label></td></tr><tr><td className="pr-4"><input id="groups-13" type="checkbox" name="groups" value="oscar_best_picture_nominees" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-13">Best Picture-Nominated</label></td><td className="pr-4"><input id="groups-14" type="checkbox" name="groups" value="oscar_best_director_nominees" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-14">Best Director-Nominated</label></td><td className="pr-4"><input id="groups-15" type="checkbox" name="groups" value="national_film_registry" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-15">National Film Board Preserved</label></td></tr><tr><td className="pr-4"><input id="groups-16" type="checkbox" name="groups" value="razzie_winners" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-16">Razzie-Winning</label></td><td className="pr-4"><input id="groups-17" type="checkbox" name="groups" value="bottom_100" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-17">IMDb "Bottom 100"</label></td><td className="pr-4"><input id="groups-18" type="checkbox" name="groups" value="bottom_250" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-18">IMDb "Bottom 250"</label></td></tr><tr><td className="pr-4"><input id="groups-19" type="checkbox" name="groups" value="razzie_nominees" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-19">Razzie-Nominated</label></td><td className="pr-4"><input id="groups-20" type="checkbox" name="groups" value="bottom_1000" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="groups-20">IMDb "Bottom 1000"</label></td></tr></tbody></table>
                </div>

                
                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className = "pb-2 text-2xl md:text-xl text-white">
                        Companies:
                    </h1>
                    <table className="ml-2 md:ml-0" onClick={check_companies}><tbody><tr><td className="pr-4"><input id="companies-1" type="checkbox" name="companies" value="fox" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="companies-1">20th Century Fox</label></td><td className="pr-4"><input id="companies-2" type="checkbox" name="companies" value="columbia" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="companies-2">Sony</label></td><td className="pr-4"><input id="companies-3" type="checkbox" name="companies" value="dreamworks" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="companies-3">DreamWorks</label></td><td className="pr-4"><input id="companies-4" type="checkbox" name="companies" value="mgm" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="companies-4">MGM</label></td></tr><tr><td className="pr-4"><input id="companies-5" type="checkbox" name="companies" value="paramount" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="companies-5">Paramount</label></td><td className="pr-4"><input id="companies-6" type="checkbox" name="companies" value="universal" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="companies-6">Universal</label></td><td className="pr-4"><input id="companies-7" type="checkbox" name="companies" value="disney" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="companies-7">Walt Disney</label></td><td className="pr-4"><input id="companies-8" type="checkbox" name="companies" value="warner" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="companies-8">Warner Bros.</label></td></tr></tbody></table>
                </div >
                
                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className = "pb-2 text-2xl md:text-xl text-white">
                        Color-Info:
                    </h1>
                <table className="ml-2 md:ml-0" onClick={check_colors}><tbody><tr><td className="pr-4"><input id="colors-1" type="checkbox" name="colors" value="color" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="colors-1">Color</label></td><td className="pr-4"><input id="colors-2" type="checkbox" name="colors" value="black_and_white" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="colors-2">Black &amp; White</label></td><td className="pr-4"><input id="colors-3" type="checkbox" name="colors" value="colorized" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="colors-3">Colorized</label></td><td className="pr-4"><input id="colors-4" type="checkbox" name="colors" value="aces" className="mr-2 w-6 h-4"/><label className = "text-white" htmlFor="colors-4">ACES</label></td></tr></tbody></table>
                </div>



                <div className="flex flex-col justify-center items-center mb-8">
                <h1 className = "pb-2 text-2xl md:text-xl text-white">
                    Countries:
                </h1>
                    <select id = "country"   multiple="" name="countries" className="rounded-xl outline-none pl-2" size="7"><option value="af">Afghanistan</option><option value="ax">Åland Islands</option><option value="al">Albania</option><option value="dz">Algeria</option><option value="as">American Samoa</option><option value="ad">Andorra</option><option value="ao">Angola</option><option value="ai">Anguilla</option><option value="aq">Antarctica</option><option value="ag">Antigua and Barbuda</option><option value="ar">Argentina</option><option value="am">Armenia</option><option value="aw">Aruba</option><option value="au">Australia</option><option value="at">Austria</option><option value="az">Azerbaijan</option><option value="bs">Bahamas</option><option value="bh">Bahrain</option><option value="bd">Bangladesh</option><option value="bb">Barbados</option><option value="by">Belarus</option><option value="be">Belgium</option><option value="bz">Belize</option><option value="bj">Benin</option><option value="bm">Bermuda</option><option value="bt">Bhutan</option><option value="bo">Bolivia</option><option value="bq">Bonaire, Sint Eustatius and Saba</option><option value="ba">Bosnia and Herzegovina</option><option value="bw">Botswana</option><option value="bv">Bouvet Island</option><option value="br">Brazil</option><option value="io">British Indian Ocean Territory</option><option value="vg">British Virgin Islands</option><option value="bn">Brunei Darussalam</option><option value="bg">Bulgaria</option><option value="bf">Burkina Faso</option><option value="bumm">Burma</option><option value="bi">Burundi</option><option value="kh">Cambodia</option><option value="cm">Cameroon</option><option value="ca">Canada</option><option value="cv">Cape Verde</option><option value="ky">Cayman Islands</option><option value="cf">Central African Republic</option><option value="td">Chad</option><option value="cl">Chile</option><option value="cn">China</option><option value="cx">Christmas Island</option><option value="cc">Cocos (Keeling) Islands</option><option value="co">Colombia</option><option value="km">Comoros</option><option value="cg">Congo</option><option value="ck">Cook Islands</option><option value="cr">Costa Rica</option><option value="ci">Côte d'Ivoire</option><option value="hr">Croatia</option><option value="cu">Cuba</option><option value="cy">Cyprus</option><option value="cz">Czech Republic</option><option value="cshh">Czechoslovakia</option><option value="cd">Democratic Republic of the Congo</option><option value="dk">Denmark</option><option value="dj">Djibouti</option><option value="dm">Dominica</option><option value="do">Dominican Republic</option><option value="ddde">East Germany</option><option value="ec">Ecuador</option><option value="eg">Egypt</option><option value="sv">El Salvador</option><option value="gq">Equatorial Guinea</option><option value="er">Eritrea</option><option value="ee">Estonia</option><option value="et">Ethiopia</option><option value="fk">Falkland Islands</option><option value="fo">Faroe Islands</option><option value="yucs">Federal Republic of Yugoslavia</option><option value="fm">Federated States of Micronesia</option><option value="fj">Fiji</option><option value="fi">Finland</option><option value="fr">France</option><option value="gf">French Guiana</option><option value="pf">French Polynesia</option><option value="tf">French Southern Territories</option><option value="ga">Gabon</option><option value="gm">Gambia</option><option value="ge">Georgia</option><option value="de">Germany</option><option value="gh">Ghana</option><option value="gi">Gibraltar</option><option value="gr">Greece</option><option value="gl">Greenland</option><option value="gd">Grenada</option><option value="gp">Guadeloupe</option><option value="gu">Guam</option><option value="gt">Guatemala</option><option value="gg">Guernsey</option><option value="gn">Guinea</option><option value="gw">Guinea-Bissau</option><option value="gy">Guyana</option><option value="ht">Haiti</option><option value="hm">Heard Island and McDonald Islands</option><option value="va">Holy See (Vatican City State)</option><option value="hn">Honduras</option><option value="hk">Hong Kong</option><option value="hu">Hungary</option><option value="is">Iceland</option><option value="in">India</option><option value="id">Indonesia</option><option value="ir">Iran</option><option value="iq">Iraq</option><option value="ie">Ireland</option><option value="im">Isle of Man</option><option value="il">Israel</option><option value="it">Italy</option><option value="jm">Jamaica</option><option value="jp">Japan</option><option value="je">Jersey</option><option value="jo">Jordan</option><option value="kz">Kazakhstan</option><option value="ke">Kenya</option><option value="ki">Kiribati</option><option value="xko">Korea</option><option value="xkv">Kosovo</option><option value="kw">Kuwait</option><option value="kg">Kyrgyzstan</option><option value="la">Laos</option><option value="lv">Latvia</option><option value="lb">Lebanon</option><option value="ls">Lesotho</option><option value="lr">Liberia</option><option value="ly">Libya</option><option value="li">Liechtenstein</option><option value="lt">Lithuania</option><option value="lu">Luxembourg</option><option value="mo">Macao</option><option value="mg">Madagascar</option><option value="mw">Malawi</option><option value="my">Malaysia</option><option value="mv">Maldives</option><option value="ml">Mali</option><option value="mt">Malta</option><option value="mh">Marshall Islands</option><option value="mq">Martinique</option><option value="mr">Mauritania</option><option value="mu">Mauritius</option><option value="yt">Mayotte</option><option value="mx">Mexico</option><option value="md">Moldova</option><option value="mc">Monaco</option><option value="mn">Mongolia</option><option value="me">Montenegro</option><option value="ms">Montserrat</option><option value="ma">Morocco</option><option value="mz">Mozambique</option><option value="mm">Myanmar</option><option value="na">Namibia</option><option value="nr">Nauru</option><option value="np">Nepal</option><option value="nl">Netherlands</option><option value="an">Netherlands Antilles</option><option value="nc">New Caledonia</option><option value="nz">New Zealand</option><option value="ni">Nicaragua</option><option value="ne">Niger</option><option value="ng">Nigeria</option><option value="nu">Niue</option><option value="nf">Norfolk Island</option><option value="kp">North Korea</option><option value="vdvn">North Vietnam</option><option value="mp">Northern Mariana Islands</option><option value="no">Norway</option><option value="om">Oman</option><option value="pk">Pakistan</option><option value="pw">Palau</option><option value="xpi">Palestine</option><option value="ps">Palestinian Territory</option><option value="pa">Panama</option><option value="pg">Papua New Guinea</option><option value="py">Paraguay</option><option value="pe">Peru</option><option value="ph">Philippines</option><option value="pl">Poland</option><option value="pt">Portugal</option><option value="pn">Pitcairn</option><option value="pr">Puerto Rico</option><option value="qa">Qatar</option><option value="mk">Republic of Macedonia</option><option value="re">Réunion</option><option value="ro">Romania</option><option value="ru">Russia</option><option value="rw">Rwanda</option><option value="bl">Saint Barthélemy</option><option value="sh">Saint Helena</option><option value="kn">Saint Kitts and Nevis</option><option value="lc">Saint Lucia</option><option value="mf">Saint Martin (French part)</option><option value="pm">Saint Pierre and Miquelon</option><option value="vc">Saint Vincent and the Grenadines</option><option value="ws">Samoa</option><option value="sm">San Marino</option><option value="st">Sao Tome and Principe</option><option value="sa">Saudi Arabia</option><option value="sn">Senegal</option><option value="rs">Serbia</option><option value="csxx">Serbia and Montenegro</option><option value="sc">Seychelles</option><option value="xsi">Siam</option><option value="sl">Sierra Leone</option><option value="sg">Singapore</option><option value="sk">Slovakia</option><option value="si">Slovenia</option><option value="sb">Solomon Islands</option><option value="so">Somalia</option><option value="za">South Africa</option><option value="gs">South Georgia and the South Sandwich Islands</option><option value="kr">South Korea</option><option value="suhh">Soviet Union</option><option value="es">Spain</option><option value="lk">Sri Lanka</option><option value="sd">Sudan</option><option value="sr">Suriname</option><option value="sj">Svalbard and Jan Mayen</option><option value="sz">Swaziland</option><option value="se">Sweden</option><option value="ch">Switzerland</option><option value="sy">Syria</option><option value="tw">Taiwan</option><option value="tj">Tajikistan</option><option value="tz">Tanzania</option><option value="th">Thailand</option><option value="tl">Timor-Leste</option><option value="tg">Togo</option><option value="tk">Tokelau</option><option value="to">Tonga</option><option value="tt">Trinidad and Tobago</option><option value="tn">Tunisia</option><option value="tr">Turkey</option><option value="tm">Turkmenistan</option><option value="tc">Turks and Caicos Islands</option><option value="tv">Tuvalu</option><option value="vi">U.S. Virgin Islands</option><option value="ug">Uganda</option><option value="ua">Ukraine</option><option value="ae">United Arab Emirates</option><option value="gb">United Kingdom</option><option value="us">United States</option><option value="um">United States Minor Outlying Islands</option><option value="uy">Uruguay</option><option value="uz">Uzbekistan</option><option value="vu">Vanuatu</option><option value="ve">Venezuela</option><option value="vn">Vietnam</option><option value="wf">Wallis and Futuna</option><option value="xwg">West Germany</option><option value="eh">Western Sahara</option><option value="ye">Yemen</option><option value="xyu">Yugoslavia</option><option value="zrcd">Zaire</option><option value="zm">Zambia</option><option value="zw">Zimbabwe</option></select>
                </div>

                <div className="flex flex-col justify-center items-center mb-8">
                <h1 className = "pb-2 text-2xl md:text-xl text-white">
                    Language:
                </h1>
                    <select id = "language" multiple="" name="languages" className="rounded-xl outline-none pl-2" size="7"><option value="ab">Abkhazian</option><option value="qac">Aboriginal</option><option value="guq">Aché</option><option value="qam">Acholi</option><option value="af">Afrikaans</option><option value="qas">Aidoukrou</option><option value="ak">Akan</option><option value="sq">Albanian</option><option value="ale">Aleut</option><option value="alg">Algonquin</option><option value="ase">American Sign Language</option><option value="am">Amharic</option><option value="apa">Apache languages</option><option value="ar">Arabic</option><option value="an">Aragonese</option><option value="arc">Aramaic</option><option value="arp">Arapaho</option><option value="aqc">Archi</option><option value="hy">Armenian</option><option value="as">Assamese</option><option value="asb">Assiniboine</option><option value="aii">Assyrian Neo-Aramaic</option><option value="ath">Athapascan languages</option><option value="asf">Australian Sign Language</option><option value="awa">Awadhi</option><option value="ay">Aymara</option><option value="az">Azerbaijani</option><option value="ast">Bable</option><option value="qbd">Baka</option><option value="ban">Balinese</option><option value="bm">Bambara</option><option value="ba">Bashkir</option><option value="eu">Basque</option><option value="bsc">Bassari</option><option value="be">Belarusian</option><option value="bem">Bemba</option><option value="bn">Bengali</option><option value="ber">Berber languages</option><option value="bho">Bhojpuri</option><option value="qbi">Bicolano</option><option value="qbh">Bodo</option><option value="bfw">Bonda</option><option value="bs">Bosnian</option><option value="bzs">Brazilian Sign Language</option><option value="br">Breton</option><option value="bfi">British Sign Language</option><option value="bg">Bulgarian</option><option value="my">Burmese</option><option value="bsk">Burushaski</option><option value="yue">Cantonese</option><option value="ca">Catalan</option><option value="km">Central Khmer</option><option value="ccp">Chakma</option><option value="qax">Chaozhou</option><option value="ce">Chechen</option><option value="chr">Cherokee</option><option value="chy">Cheyenne</option><option value="hne">Chhattisgarhi</option><option value="zh">Chinese</option><option value="ckt">Chukchi</option><option value="kw">Cornish</option><option value="co">Corsican</option><option value="cr">Cree</option><option value="mus">Creek</option><option value="hr">Croatian</option><option value="cro">Crow</option><option value="cs">Czech</option><option value="da">Danish</option><option value="prs">Dari</option><option value="dso">Desiya</option><option value="din">Dinka</option><option value="qaw">Djerma</option><option value="doi">Dogri</option><option value="nl">Dutch</option><option value="dyu">Dyula</option><option value="dz">Dzongkha</option><option value="qbc">East-Greenlandic</option><option value="frs">Eastern Frisian</option><option value="egy">Egyptian (Ancient)</option><option value="en">English</option><option value="eo">Esperanto</option><option value="et">Estonian</option><option value="ee">Ewe</option><option value="qbg">Faliasch</option><option value="fo">Faroese</option><option value="fil">Filipino</option><option value="fi">Finnish</option><option value="qbn">Flemish</option><option value="fon">Fon</option><option value="fr">French</option><option value="fsl">French Sign Language</option><option value="fur">Friulian</option><option value="ff">Fulah</option><option value="fvr">Fur</option><option value="gd">Gaelic</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="gsg">German Sign Language</option><option value="grb">Grebo</option><option value="el">Greek</option><option value="grc">Greek, Ancient (to 1453)</option><option value="kl">Greenlandic</option><option value="gn">Guarani</option><option value="gu">Gujarati</option><option value="gnn">Gumatj</option><option value="gup">Gunwinggu</option><option value="gbj">Gutob</option><option value="ht">Haitian</option><option value="hai">Haida</option><option value="hak">Hakka</option><option value="bgc">Haryanvi</option><option value="qav">Hassanya</option><option value="ha">Hausa</option><option value="haw">Hawaiian</option><option value="he">Hebrew</option><option value="hi">Hindi</option><option value="hmn">Hmong</option><option value="hoc">Ho</option><option value="qab">Hokkien</option><option value="hop">Hopi</option><option value="hu">Hungarian</option><option value="iba">Iban</option><option value="qag">Ibo</option><option value="is">Icelandic</option><option value="icl">Icelandic Sign Language</option><option value="ins">Indian Sign Language</option><option value="id">Indonesian</option><option value="iu">Inuktitut</option><option value="ik">Inupiaq</option><option value="ga">Irish Gaelic</option><option value="iru">Irula</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="jsl">Japanese Sign Language</option><option value="dyo">Jola-Fonyi</option><option value="ktz">Ju'hoan</option><option value="qbf">Kaado</option><option value="kea">Kabuverdianu</option><option value="kab">Kabyle</option><option value="xal">Kalmyk-Oirat</option><option value="kn">Kannada</option><option value="kpj">Karajá</option><option value="mjw">Karbi</option><option value="kar">Karen</option><option value="kk">Kazakh</option><option value="kca">Khanty</option><option value="kha">Khasi</option><option value="ki">Kikuyu</option><option value="rw">Kinyarwanda</option><option value="qar">Kirundi</option><option value="tlh">Klingon</option><option value="kfa">Kodava</option><option value="trp">Kokborok</option><option value="kok">Konkani</option><option value="ko">Korean</option><option value="kvk">Korean Sign Language</option><option value="khe">Korowai</option><option value="qaq">Kriolu</option><option value="kro">Kru</option><option value="kyw">Kudmali</option><option value="qbb">Kuna</option><option value="ku">Kurdish</option><option value="kgg">Kusunda</option><option value="kwk">Kwakiutl</option><option value="ky">Kyrgyz</option><option value="lbj">Ladakhi</option><option value="lad">Ladino</option><option value="lo">Lao</option><option value="la">Latin</option><option value="lv">Latvian</option><option value="lif">Limbu</option><option value="ln">Lingala</option><option value="lt">Lithuanian</option><option value="nds">Low German</option><option value="lb">Luxembourgish</option><option value="mk">Macedonian</option><option value="qbm">Macro-Jê</option><option value="mag">Magahi</option><option value="mai">Maithili</option><option value="mg">Malagasy</option><option value="ms">Malay</option><option value="ml">Malayalam</option><option value="pqm">Malecite-Passamaquoddy</option><option value="qap">Malinka</option><option value="mt">Maltese</option><option value="mnc">Manchu</option><option value="cmn">Mandarin</option><option value="man">Mandingo</option><option value="mni">Manipuri</option><option value="mi">Maori</option><option value="arn">Mapudungun</option><option value="mr">Marathi</option><option value="mh">Marshallese</option><option value="mas">Masai</option><option value="mls">Masalit</option><option value="myn">Maya</option><option value="men">Mende</option><option value="mic">Micmac</option><option value="enm">Middle English</option><option value="nan">Min Nan</option><option value="min">Minangkabau</option><option value="mwl">Mirandese</option><option value="qmt">Mixtec</option><option value="lus">Mizo</option><option value="moh">Mohawk</option><option value="mn">Mongolian</option><option value="moe">Montagnais</option><option value="qaf">More</option><option value="mfe">Morisyen</option><option value="qbl">Nagpuri</option><option value="nah">Nahuatl</option><option value="qba">Nama</option><option value="nv">Navajo</option><option value="nbf">Naxi</option><option value="nd">Ndebele</option><option value="nap">Neapolitan</option><option value="yrk">Nenets</option><option value="ne">Nepali</option><option value="ncg">Nisga'a</option><option value="zxx">None</option><option value="non">Norse, Old</option><option value="nai">North American Indian</option><option value="no">Norwegian</option><option value="qbk">Nushi</option><option value="nyk">Nyaneka</option><option value="ny">Nyanja</option><option value="oc">Occitan</option><option value="oj">Ojibwa</option><option value="qaz">Ojihimba</option><option value="ang">Old English</option><option value="or">Oriya</option><option value="pap">Papiamento</option><option value="qaj">Parsee</option><option value="ps">Pashtu</option><option value="paw">Pawnee</option><option value="fa">Persian</option><option value="qai">Peul</option><option value="myp">Pirahã</option><option value="pl">Polish</option><option value="qah">Polynesian</option><option value="pt">Portuguese</option><option value="fuf">Pular</option><option value="pa">Punjabi</option><option value="tsz">Purepecha</option><option value="qu">Quechua</option><option value="qya">Quenya</option><option value="raj">Rajasthani</option><option value="qbj">Rawan</option><option value="xrr">Rhaetian</option><option value="ro">Romanian</option><option value="rm">Romansh</option><option value="rom">Romany</option><option value="rtm">Rotuman</option><option value="ru">Russian</option><option value="rsl">Russian Sign Language</option><option value="qao">Ryukyuan</option><option value="qae">Saami</option><option value="sm">Samoan</option><option value="sa">Sanskrit</option><option value="sat">Santali</option><option value="sc">Sardinian</option><option value="qay">Scanian</option><option value="sr">Serbian</option><option value="qbo">Serbo-Croatian</option><option value="srr">Serer</option><option value="qad">Shanghainese</option><option value="qau">Shanxi</option><option value="shp">Shipibo</option><option value="sn">Shona</option><option value="shh">Shoshoni</option><option value="scn">Sicilian</option><option value="qsg">Silbo Gomero</option><option value="sjn">Sindarin</option><option value="sd">Sindhi</option><option value="si">Sinhala</option><option value="sio">Sioux</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="so">Somali</option><option value="son">Songhay</option><option value="snk">Soninke</option><option value="wen">Sorbian languages</option><option value="st">Sotho</option><option value="qbe">Sousson</option><option value="es">Spanish</option><option value="ssp">Spanish Sign Language</option><option value="srn">Sranan</option><option value="sw">Swahili</option><option value="sv">Swedish</option><option value="gsw">Swiss German</option><option value="syl">Sylheti</option><option value="nmn">Taa</option><option value="tl">Tagalog</option><option value="tg">Tajik</option><option value="tmh">Tamashek</option><option value="ta">Tamil</option><option value="tac">Tarahumara</option><option value="tt">Tatar</option><option value="te">Telugu</option><option value="qak">Teochew</option><option value="th">Thai</option><option value="bo">Tibetan</option><option value="qan">Tigrigna</option><option value="tli">Tlingit</option><option value="tpi">Tok Pisin</option><option value="to">Tonga (Tonga Islands)</option><option value="ts">Tsonga</option><option value="tsc">Tswa</option><option value="tn">Tswana</option><option value="tcy">Tulu</option><option value="tup">Tupi</option><option value="tr">Turkish</option><option value="tk">Turkmen</option><option value="tyv">Tuvinian</option><option value="tue">Tuyuca</option><option value="tzo">Tzotzil</option><option value="uk">Ukrainian</option><option value="ukl">Ukrainian Sign Language</option><option value="qat">Ungwatsi</option><option value="ur">Urdu</option><option value="uz">Uzbek</option><option value="vi">Vietnamese</option><option value="qaa">Visayan</option><option value="was">Washoe</option><option value="cy">Welsh</option><option value="wo">Wolof</option><option value="xh">Xhosa</option><option value="sah">Yakut</option><option value="yap">Yapese</option><option value="yi">Yiddish</option><option value="yo">Yoruba</option><option value="ypk">Yupik</option><option value="zu">Zulu</option></select>
                </div>

                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className="pb-2 text-2xl md:text-xl text-white ">Keywords:</h1>
                    <input id = "keyword" className = "w-64 p-4 h-6 md:h-8 outline-none rounded-xl" type="text" placeholder="Enter a keyword"/>
                    <p className="pt-2 text-red-400">*Enter a notable object, concept, style or aspect.</p>
                </div>
                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className="pb-2 text-2xl md:text-xl text-white ">Filming Location:</h1>
                    <input id = "loc" className = "w-64 p-4 h-6 md:h-8 outline-none rounded-xl" type="text" placeholder="Enter location"/>
                </div>
                <div className="flex flex-col justify-center items-center mb-8">
                    <h1 className="pb-2 text-2xl md:text-xl text-white ">Plot:</h1>
                    <input id = "plot" className = "w-64 p-4 h-6 md:h-8 outline-none rounded-xl" type="text" placeholder="Enter plot"/>
                    <p className="pt-2 text-red-400">*Enter words that might appear in the plot summary.</p>
                </div>
                <button onClick={apibuilder} className="w-32 h-10 rounded-xl hover:bg-yellow-500 mb-6 bg-yellow-400 text-gray-800">FIND MOVIES</button>
                {/* <button className="w-10 h-6 bg-green-100" onClick={()=>props.retrive_api(apilink)}></button> */}
            </div>
        </div>

    )
}

export default Finderpg;