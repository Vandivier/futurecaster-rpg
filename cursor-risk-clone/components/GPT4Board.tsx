import React, { useRef, useEffect } from "react";

const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawHexagon = (
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number
  ) => {
    const hexHeight = size * Math.sqrt(3);
    context.beginPath();
    for (let i = 0; i < 6; i++) {
      context.lineTo(
        x + size * Math.cos((Math.PI / 3) * i),
        y + size * Math.sin((Math.PI / 3) * i)
      );
    }
    context.closePath();
    context.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        const size = 20; // Size of the hexagon
        const hexHeight = size * Math.sqrt(3);

        for (let row = 0; row < 30; row++) {
          for (let col = 0; col < 30; col++) {
            // Calculate the x and y position for each hexagon
            const x = ((size * 3) / 2) * col;
            const y = hexHeight * (row + 0.5 * (col % 2));
            drawHexagon(context, x, y, size);
          }
        }
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={1200} height={800} />;
};

export default Board;
