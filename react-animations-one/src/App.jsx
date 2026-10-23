import { Gamepad , PersonStandingIcon,GamepadIcon} from 'lucide-react';
import Navigation from './Navgation';
import novaImage from './assets/nova.jpg'
import { Games } from './Games';
import {motion} from 'framer-motion'

export default function App() {
    return (
        <div className="min-h-screen bg-gray-950 text-white">

          <Navigation/>
            
            <hr className="border-gray-800 border-2"  />

            {/* the background image ad color  */}

            <div className='flex justify-between items-center'>

              <main className="flex min-h-[80vh] flex-col items-center justify-center text-center w-1/2">

                <motion.h2
               initial={{ opacity: 0, y: 40 }}
               whileInView={{opacity:1,y:0}}
               viewport={{amount:0.6}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-5xl font-bold text-center w-full"
                    >
                         ENTER THE NEXT LEVEL
                </motion.h2>

                <p className="mt-4 text-gray-400">
                    Discover your next gaming adventure.
                </p>

                {/* Two buttons section */}
                <section className="mt-6 flex items-center gap-4 tracking-wide">
                    <motion.button 
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 3 }}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white shadow-lg"
                >
             <GamepadIcon className="size-5" />
               <span>Explore Games</span>
               </motion.button>
                    <button className='bg-black p-3 rounded-xl tracking-wide'>
                      <span>Watch Traller</span>
                    </button>
                </section>

            </main>

{/* image part  */}
           <section className='bg-cover bg-no-repeat bg-center h-250 w-1/2 opacity-45 ' style={{
            backgroundImage:`url(${novaImage})`
           }}>

           </section>

            </div>
            {/* end of side image */}

            <section className='w-full inline-block text-center  tracking-wider text-2xl md:text-3xl'>
              <span className='h-2  bg-white inline-block w-20 mr-2 md:h-5'></span>
              <span className='capitalize' id='games'>More than just game</span>
            </section>

            <Games/>

        </div>
    );
}