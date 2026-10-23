import GameType from "./GameType";
import { motion } from "framer-motion";

import one from "./assets/one.jpg";
import two from "./assets/two.jpg";
import three from "./assets/three.jpg";
import four from "./assets/four.jpg";
import five from "./assets/five.jpg";
import six from "./assets/six.jpg";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Games() {
  const games = [
    {
      id: 1,
      gameType: <GameType type="Fighting" />,
      image: one,
    },
    {
      id: 2,
      gameType: <GameType type="Action" />,
      image: two,
    },
    {
      id: 3,
      gameType: <GameType type="Action" />,
      image: three,
    },
    {
      id: 4,
      gameType: <GameType type="Racing" />,
      image: four,
    },
    {
      id: 5,
      gameType: <GameType type="War" />,
      image: five,
    },
    {
      id: 6,
      gameType: <GameType type="Racing" />,
      image: six,
    },
  ];

  return (
    <main className="bg-gray-950 p-6 text-white">
      {/* Featured Games */}
      <section className="mb-8 text-start tracking-widest">
        <span
          className="mr-2 inline-block h-1 w-16 rounded"
          style={{
            background: "linear-gradient(to right, blue, purple)",
          }}
        />

        <span className="uppercase">Featured Games</span>
      </section>

      {/* Trending Games */}
      <div className="border border-slate-900 p-4 shadow-2xl shadow-blue-950">
        <h2 className="mb-6 text-2xl font-bold capitalize tracking-wide">
          Trending Now
        </h2>

        {/* Animated Game Cards Container */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {games.map((data) => (
            <motion.section
              key={data.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.97 }}
              className="h-96 w-full rounded-2xl border border-slate-400 bg-cover bg-center bg-no-repeat shadow-2xl shadow-blue-950"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
            >
              <span className="ml-4 mt-4 inline-flex">
                {data.gameType}
              </span>
            </motion.section>
          ))}
        </motion.section>
      </div>
    </main>
  );
}