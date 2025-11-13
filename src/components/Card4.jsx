import React from "react";
import { motion } from "framer-motion";
import tokenerc20 from "../assets/tokenerc20.png"
import milo from "../assets/milo.png.png"

const Card = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <a href="https://ethglobal.com/showcase/rosca-dapp-sm9ky" target="_blank">
        <img
          class="rounded-t-lg w-full"
          src= "https://ethglobal.storage/projects/sm9ky/video/high.mp4?t=1763046074069"
          alt=""
        />
        <video width="640" height="360" controls>
    <source src="https://ethglobal.storage/projects/sm9ky/video/high.mp4?t=1763046300284" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
      </a>
      <div class="p-5">
        <a href="https://ethglobal.com/showcase/rosca-dapp-sm9ky" target="_blank">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ROSCA dapp

          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        ROSCA dapp, a decentralized platform for managing this financial mechanism on-chain.
                </p>
        <a
          href="https://eth-online-2025-rosca-web.vercel.app/pages/my-roscas"
          target="_blank"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Live Demo
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://github.com/s3bc40/eth-online-2025-rosca"
          target="_blank"
          class="inline-flex items-center py-2 px-3 mx-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read code
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="https://ethglobal.com/showcase/rosca-dapp-sm9ky"
          target="_blank"
          class="inline-flex items-center py-2 px-3 mx-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Project's page on ethglobal
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
