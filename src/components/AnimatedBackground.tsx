import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const shapes = [
    { size: 300, x: "10%", y: "20%", delay: 0, duration: 20 },
    { size: 200, x: "80%", y: "10%", delay: 2, duration: 25 },
    { size: 250, x: "70%", y: "60%", delay: 4, duration: 22 },
    { size: 180, x: "20%", y: "70%", delay: 1, duration: 18 },
    { size: 150, x: "50%", y: "40%", delay: 3, duration: 23 },
    { size: 120, x: "90%", y: "80%", delay: 5, duration: 19 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
            opacity: [0.3, 0.5, 0.4, 0.6, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${20 + (i * 5)}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + i * 0.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
