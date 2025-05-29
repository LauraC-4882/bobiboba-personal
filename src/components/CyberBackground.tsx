'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      size: number = 1;
      color: string = '#ff00ff';
      alpha: number = 0.1;

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        const colors = ['#ff00ff', '#00ffff', '#00ff00'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.restore();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    let time = 0;
    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw floating geometric shapes
      ctx.save();
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < 5; i++) {
        const x = Math.sin(time * 0.001 + i) * 100 + canvas.width / 2;
        const y = Math.cos(time * 0.001 + i) * 100 + canvas.height / 2;
        const size = 50 + Math.sin(time * 0.002 + i) * 20;
        
        ctx.strokeStyle = i % 2 === 0 ? '#ff00ff' : '#00ffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - size / 2, y - size / 2, size, size);
      }
      ctx.restore();

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      time++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Generate consistent random positions for shapes only on client
  const getRandomPosition = (index: number) => {
    if (!isClient) return { x: 0, y: 0 };
    // Use a seed based on index to make it deterministic during the session
    const seed = index * 123.456;
    return {
      x: (Math.sin(seed) * 0.5 + 0.5) * window.innerWidth,
      y: (Math.cos(seed) * 0.5 + 0.5) * window.innerHeight
    };
  };

  const getRandomAnimationTarget = (index: number) => {
    if (!isClient) return { x: 0, y: 0 };
    const seed = index * 789.012;
    return {
      x: (Math.sin(seed + 1) * 0.5 + 0.5) * window.innerWidth,
      y: (Math.cos(seed + 1) * 0.5 + 0.5) * window.innerHeight
    };
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Animated geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {isClient && [...Array(6)].map((_, i) => {
          const initialPos = getRandomPosition(i);
          const animatePos = getRandomAnimationTarget(i);
          
          return (
            <motion.div
              key={i}
              className="absolute border border-cyber-pink/20 w-32 h-32"
              initial={{ 
                x: initialPos.x, 
                y: initialPos.y,
                rotate: 0 
              }}
              animate={{
                x: animatePos.x,
                y: animatePos.y,
                rotate: 360,
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                clipPath: i % 2 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
              }}
            />
          );
        })}

        {isClient && [...Array(4)].map((_, i) => {
          const initialPos = getRandomPosition(i + 6);
          const animatePos = getRandomAnimationTarget(i + 6);
          
          return (
            <motion.div
              key={`circle-${i}`}
              className="absolute border border-cyber-blue/20 w-24 h-24 rounded-full"
              initial={{ 
                x: initialPos.x, 
                y: initialPos.y,
                scale: 0.5
              }}
              animate={{
                x: animatePos.x,
                y: animatePos.y,
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default CyberBackground; 