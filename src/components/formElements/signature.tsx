import React, { useRef, useState, useEffect } from 'react';

export const Signatrure: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        setContext(ctx);
      }
    }
  }, []);

  const startDrawing = (event: React.MouseEvent) => {
    if (!context) return;
    setIsDrawing(true);
    context.beginPath();
    context.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
  };

  const stopDrawing = () => {
    if (!context) return;
    context.closePath();
    setIsDrawing(false);
  };

  const draw = (event: React.MouseEvent) => {
    if (!isDrawing || !context) return;
    context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    context.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={400}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      onMouseLeave={stopDrawing}
      style={{ border: '1px solid black' }}
    />
  );
};
