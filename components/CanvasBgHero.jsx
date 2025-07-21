'use client'
import React, { useRef, useEffect, useState } from 'react';

const ParticlesCanvas = ({ masked }) => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const settings = {
    cursorRadius: 85,
    dotsColor: '#636363',
    dotsRadius: 1,
    xSpacing: 35,
    ySpacing: 35,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    const generateParticles = () => {
      const newParticles = [];
      for (let x = 0; x < canvas.width / settings.xSpacing; x++) {
        for (let y = 0; y < canvas.height / settings.ySpacing; y++) {
          newParticles.push({
            x: x * settings.xSpacing,
            y: y * settings.ySpacing,
            xo: x * settings.xSpacing,
            yo: y * settings.ySpacing,
            r: settings.dotsRadius,
            color: settings.dotsColor,
          });
        }
      }
      return newParticles;
    };

    let animationFrameId;
    let currentParticles = generateParticles();
    setParticles(currentParticles);

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < currentParticles.length; i++) {
        const p = currentParticles[i];

        context.beginPath();
        context.fillStyle = p.color;
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
        context.fill();

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= settings.cursorRadius) {
          p.x -= dx * 0.6;
          p.y -= dy * 0.6;
        }

        const dxo = p.x - p.xo;
        const dyo = p.y - p.yo;
        p.x -= dxo * 0.7;
        p.y -= dyo * 0.7;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      resizeCanvas();
      currentParticles = generateParticles();
    };

    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouse.x, mouse.y]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 ${
        masked ? 'mask-image: linear-gradient(to bottom, black, transparent)' : ''
      }`}
    />
  );
};

export default ParticlesCanvas;