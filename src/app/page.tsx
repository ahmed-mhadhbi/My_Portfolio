'use client';

import { motion } from "framer-motion";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";
import { Engine } from "@tsparticles/engine";
import Image from 'next/image';666666

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}; 

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <motion.main 
  className="min-h-screen px-4 py-12 md:px-8 relative overflow-hidden"
  initial={{ backgroundColor: '#f9fafb' }} // gray-50
  whileInView={{ backgroundColor: '#f0fdfa' }} // teal-50
  transition={{ duration: 10 }}
>
      
<div className="fixed inset-0 overflow-hidden pointer-events-none">
  
  {/* Floating circles */}
  <motion.div
    initial={{ x: -100, y: 100 }}
    animate={{
      x: [0, 100, 0, -100, 0],
      y: [0, 50, 100, 50, 0],
    }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear"
    }}
    className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-10 blur-xl"
  />
  
  {/* Floating triangles */}
  <motion.div
    initial={{ x: '80vw', y: '30vh' }}
    animate={{
      x: ['80vw', '70vw', '80vw', '85vw', '80vw'],
      y: ['30vh', '40vh', '50vh', '40vh', '30vh'],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute w-48 h-48 opacity-10 blur-lg"
    style={{
      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      background: 'linear-gradient(to bottom right, #8B5CF6, #3B82F6)'
    }}
  />
</div>
      {/* Animated Particle Background */}
      <Particles
        id="tsparticles"
        
        
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3B82F6", // Blue
            },
            links: {
              color: "#8B5CF6", // Purple
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-6xl mx-auto text-center py-20 relative z-10"
      >
        <motion.h1
  variants={fadeInUp}
  className="text-5xl md:text-6xl font-bold mb-4"
  animate={{
    backgroundImage: [
      'linear-gradient(to right, #3B82F6, #8B5CF6)',
      'linear-gradient(to right, #8B5CF6, #EC4899)',
      'linear-gradient(to right, #EC4899, #F59E0B)',
      'linear-gradient(to right, #F59E0B, #3B82F6)'
    ]
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    repeatType: "reverse"
  }}
  style={{
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundSize: '200% auto'
  }}
>
  Hi, I&apos;m Ahmed Mhadhbi
</motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-600 mb-8"
        >
          Full Stack Developer
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            View My Work
          </a>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="max-w-6xl mx-auto mt-12 py-12 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-12"
        >
          My Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
         {/* Project 1 - Medical AI Chatbot */}
<motion.div
  initial={{ 
    y: 50, 
    opacity: 0,
    rotate: -2 // Slight initial tilt
  }}
  whileInView={{ 
    y: 0, 
    opacity: 1,
    rotate: 0 
  }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 15,
    duration: 0.8
  }}
  whileHover={{
    y: -10,
    rotate: [0, 1.5, -1.5, 0], // Gentle wobble effect
    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
    transition: { 
      y: { type: "spring", stiffness: 300 },
      rotate: { duration: 0.8 }
    }
  }}
  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
>
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex space-x-4 mb-4 overflow-hidden"
  >
    <Image
      src="/a.png"
      alt="Medical AI Chatbot"
      width={300}
      height={200}
      className="w-1/2 rounded-lg object-cover h-40 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => window.open("/a.png", "_blank")}
    />
    <Image
      src="/b.png"
      alt="Medical AI Chatbot"
      width={300}
      height={200}
      className="w-1/2 rounded-lg object-cover h-40 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => window.open("/b.png", "_blank")}
    />
  </motion.div>
  
  <h3 className="text-xl font-semibold mb-2 text-black">Medical AI Chatbot</h3>
  
  <motion.p 
    className="text-gray-600 mb-4"
    whileHover={{ x: 5 }} // Slight hover movement
  >
    Tbiby is a Medical AI chatbot that analyzes symptoms and provides health advice with doctor recommendations.
  </motion.p>
  
  <div className="flex space-x-3">
    <motion.a
      href="https://github.com/ahmed-mhadhbi/medical-ai-app"
      target="_blank"
      
      rel="noopener noreferrer"
      
      whileHover={{ 
    scale: 1.05,
    backgroundColor: "#4B5563", // Gray-600
    color: "white"
  }}
        className="text-sm px-4 py-2 bg-gray-700 text-white hover:bg-gray-800 rounded-md transition-colors"

    >
      Code
    </motion.a>
    <motion.a
      href="https://github.com/ahmed-mhadhbi/medical-ai-app"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#3B82F6",
        color: "white"
      }}
      className="text-sm px-4 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-md transition-colors"
    >
      Live Demo
    </motion.a>
  </div>
</motion.div>

          {/* Project 2 */}
          <motion.div
  initial={{ 
    y: 50, 
    opacity: 0,
    rotate: -2 // Slight initial tilt
  }}
  whileInView={{ 
    y: 0, 
    opacity: 1,
    rotate: 0 
  }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 15,
    duration: 0.8
  }}
  whileHover={{
    y: -10,
    rotate: [0, 1.5, -1.5, 0], // Gentle wobble effect
    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
    transition: { 
      y: { type: "spring", stiffness: 300 },
      rotate: { duration: 0.8 }
    }
  }}
  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
>
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex space-x-4 mb-4 overflow-hidden"
  >
              <Image
                src="/c.png"
                alt="Affar E-commerce"
                width={300}
                height={200}
                className="w-1/2 rounded-lg object-cover h-40 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => window.open("/c.png", "_blank")}
              />
              <Image
                src="/d.png"
                alt="Affar E-commerce"
                width={300}
                height={200}
                className="w-1/2 rounded-lg object-cover h-40 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => window.open("/d.png", "_blank")}
              />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-black">Affar E-commerce</h3>
            <p className="text-gray-600 mb-4">
              A React-based e-commerce platform with product listings, cart functionality, and secure checkout.
            </p>
            <div className="flex space-x-3">
              <motion.a
                href="https://github.com/ahmed-mhadhbi/Affar.git"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
    scale: 1.05,
    backgroundColor: "#4B5563", // Gray-600
    color: "white"
  }}
                  className="text-sm px-4 py-2 bg-gray-700 text-white hover:bg-gray-800 rounded-md transition-colors"

              >
                Code
              </motion.a>
            </div>
          </motion.div>


{/* Project 3 - Gaming Website */}
<motion.div
  initial={{ 
    y: 50, 
    opacity: 0,
    rotate: -2 // Slight initial tilt
  }}
  whileInView={{ 
    y: 0, 
    opacity: 1,
    rotate: 0 
  }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{
    type: "spring",
    stiffness: 100,
    damping: 15,
    duration: 0.8
  }}
  whileHover={{
    y: -10,
    rotate: [0, 1.5, -1.5, 0], // Gentle wobble effect
    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
    transition: { 
      y: { type: "spring", stiffness: 300 },
      rotate: { duration: 0.8 }
    }
  }}
  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
>
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="flex space-x-4 mb-4 overflow-hidden"
  >
    <Image
      src="/e.png"
      alt="Gaming Website"
      width={300}
      height={200}
      className="w-1/2 rounded-lg object-cover h-40 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => window.open("/e.png", "_blank")}
    />
    <Image
      src="/f.png"
      alt="Gaming Website"
      width={300}
      height={200}
      className="w-1/2 rounded-lg object-cover h-40 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => window.open("/f.png", "_blank")}
    />
  </motion.div>
  
  <h3 className="text-xl font-semibold mb-2 text-black">Gaming Website </h3>
  
  <motion.p 
    className="text-gray-600 mb-4"
    whileHover={{ x: 5 }} // Slight hover movement
  >
    Gamefy is a gaming website that allows users to be updated with all the news. It has more than 750,000 games in its DB. It features a user-friendly interface,
  </motion.p>
  
  <div className="flex space-x-3">
    <motion.a
      href="https://github.com/ahmed-mhadhbi/GameFy"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
    scale: 1.05,
    backgroundColor: "#4B5563", // Gray-600
    color: "white"
  }}
        className="text-sm px-4 py-2 bg-gray-700 text-white hover:bg-gray-800 rounded-md transition-colors"

    >
      Code
    </motion.a>
    <motion.a
      href="https://github.com/ahmed-mhadhbi/GameFy"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "#3B82F6",
        color: "white"
      }}
      className="text-sm px-4 py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-md transition-colors"
    >
      Live Demo
    </motion.a>
  </div>
</motion.div>



          {/* Add more projects as needed */}
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto py-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          My Skills
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-4"
        >
          
{["React", "Next.js", "Angular", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Python", "Git"].map((skill, index) => (
  <motion.span
    key={skill}
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ 
      delay: index * 0.1,
      type: "spring",
      stiffness: 400, // Increased from 100
      damping: 20    // Increased from 10
    }}
    whileHover={{ 
      scale: 1.1,
      backgroundColor: '#3B82F6',
      color: 'white',
      transition: {
        duration: 0.2, // Quick transition
        type: "tween"  // Linear transition instead of spring
      }
    }}
    className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-200 text-gray-700 hover:shadow-md transition-all cursor-default"
  >
    {skill}
  </motion.span>
))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-20 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Let&apos;s Connect!
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { name: "Upwork", url: "https://www.upwork.com/freelancers/ahmedm855", icon: "💼" },
            { name: "GitHub", url: "https://github.com/ahmed-mhadhbi", icon: "🐙" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-mhadhbi-527741245", icon: "🔗" },
            { name: "Email", url: "mailto:ahmed.mhadhbil.75@gmail.com", icon: "✉️" },
          ].map((item) => (
            <motion.a
              key={item.name}
              variants={fadeInUp}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="text-lg bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 border border-gray-200"
            >
              <span>{item.icon}</span>
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </section>
    </motion.main >
  );
}
