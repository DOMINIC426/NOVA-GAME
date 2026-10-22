import { useState } from "react"
import GameType from "./GameType"

import one from './assets/one.jpg'
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import four from './assets/four.jpg'

export function Games(){

    const [game,setGames]=useState([
        {
            "id":1,
            "gameType":<GameType type="Action"/>,
            "image":one
        },
        ,
        {
             "id":2,
           "gameType":<GameType type="Action"/>,
            "image":two
        },
        {
             "id":3,
           "gameType":<GameType type="Action"/>,
            "image":three
        },
        {
             "id":4,
           "gameType":<GameType type="Action"/>,
            "image":four
        }
    ])
    
    return(
        <main>
           
            {/* Featured Games */}
            <section className="text-start tracking-widest ">
              <span className="border  w-1/8 inline-block mr-2 h-2 md:h-3" style={
                {
                    backgroundColor:'blue'
                }
              }></span>
              <span className="uppercase">Featured games</span>
            </section>

            {/*  */}


    {/* Movies */}

    <div className="border border-slate-900 shadow-2xl shadow-blue-950">
        <h2 className="capitalize tracking-wide text-2xl font-bold">Tranding now</h2>
           

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8" >
             {
          game.map(
            data=>
            <section className="bg-cover bg-no-repeat w-full h-150  size-1.5  border rounded-2xl border-slate-400 shadow-2xl shadow-blue-300 hover:-translate-y-4.5 transition-all duration-100 delay-75 hover:bg-blue-500" style={
                {
                    backgroundImage:`url(${data.image})`,
                    
                }
            } key={data.id}>
           <span className="flex w-full  ml-4 mt-2 ">{data.gameType}</span>         
            </section>
          )
         }
        </section>



    </div>


        </main>
    )
}