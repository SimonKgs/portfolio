import React, { useEffect, useRef } from 'react'


interface Star {
    x: number;
    y: number;
    radius: number;
    speed: number;
}

export const Stars: React.FC  = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current!;
      // Get the 2D rendering context of the canvas
      const ctx = canvas.getContext('2d')!;

      // Adjusting the canvas to the width of the window 
      const resizeCanvas = () => {
            canvas.width = window.innerWidth - 20;
            canvas.height = window.innerHeight - 20;
            // Optionally, you might want to reset stars here if needed
      };

      // Initialize canvas size
      resizeCanvas();
        
      // Here I will store the stars and how many then i add to it at random position
      // also add a random radius and postion to make them different
      const stars: Star[] = [];
      const numStars = 100;
  
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
        });
      }
      
      // To draw and animate the stars
      const drawStars = () => {
        // redraw the stars on each frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'white';
  
        stars.forEach(star => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
  
          // Move the star
          star.y += star.speed;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });
        
        // call draw stars again before repainting
        requestAnimationFrame(drawStars);
      }
  
      drawStars();
  
     // Resize handler
     const handleResize = () => {
     resizeCanvas();
     // Reinitialize the stars after resizing
     stars.forEach(star => {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
        });
     };

     window.addEventListener('resize', handleResize);

     return () => {
        window.removeEventListener('resize', handleResize);
     };
    }, []);

  return (
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
  )
}
