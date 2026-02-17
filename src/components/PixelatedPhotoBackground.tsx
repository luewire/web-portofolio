import { useEffect, useRef } from "react";

type PixelatedPhotoBackgroundProps = {
  src: string;
  className?: string;
};

const PixelatedPhotoBackground = ({ src, className = "" }: PixelatedPhotoBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const image = new Image();
    image.src = src;
    image.crossOrigin = "anonymous";

    const buffer = document.createElement("canvas");
    const bctx = buffer.getContext("2d", { willReadFrequently: true });
    if (!bctx) return;

    let imageData: Uint8ClampedArray | null = null;
    let sampleCols = 0;
    let sampleRows = 0;
    let rafId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let lastFrame = 0;
    const fpsInterval = 1000 / 30;

    const pointer = { x: -1000, y: -1000, tx: -1000, ty: -1000, active: false };
    const cell = window.innerWidth < 768 ? 8 : 7;
    const radius = window.innerWidth < 768 ? 88 : 130;
    const strength = window.innerWidth < 768 ? 9 : 12;

    const fitContain = (srcW: number, srcH: number, dstW: number, dstH: number) => {
      const ratio = Math.min(dstW / srcW, dstH / srcH);
      const zoom = window.innerWidth < 768 ? 1.35 : 1.6;
      const width = srcW * ratio * zoom;
      const height = srcH * ratio * zoom;
      const yOffset = window.innerWidth < 768 ? -height * 0.12 : -height * 0.16;
      return {
        x: (dstW - width) / 2,
        y: (dstH - height) / 2 + yOffset,
        width,
        height,
      };
    };

    const prepareBuffer = () => {
      if (!image.complete || !image.naturalWidth || !image.naturalHeight) return;
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!width || !height) return;

      sampleCols = Math.max(1, Math.floor(width / cell));
      sampleRows = Math.max(1, Math.floor(height / cell));
      buffer.width = sampleCols;
      buffer.height = sampleRows;
      bctx.clearRect(0, 0, sampleCols, sampleRows);

      const placement = fitContain(image.naturalWidth, image.naturalHeight, sampleCols, sampleRows);
      bctx.drawImage(image, placement.x, placement.y, placement.width, placement.height);
      imageData = bctx.getImageData(0, 0, sampleCols, sampleRows).data;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = host.clientWidth;
      const height = host.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      prepareBuffer();
    };

    const onMove = (event: MouseEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const draw = (time: number) => {
      rafId = window.requestAnimationFrame(draw);
      if (time - lastFrame < fpsInterval) return;
      lastFrame = time;
      if (!imageData) return;

      const width = host.clientWidth;
      const height = host.clientHeight;
      ctx.clearRect(0, 0, width, height);

      pointer.x += (pointer.tx - pointer.x) * 0.15;
      pointer.y += (pointer.ty - pointer.y) * 0.15;
      if (!pointer.active) {
        pointer.tx += (-1000 - pointer.tx) * 0.06;
        pointer.ty += (-1000 - pointer.ty) * 0.06;
      }

      for (let y = 0; y < sampleRows; y += 1) {
        for (let x = 0; x < sampleCols; x += 1) {
          const index = (y * sampleCols + x) * 4;
          const alpha = imageData[index + 3];
          if (alpha < 20) continue;

          const red = imageData[index];
          const green = imageData[index + 1];
          const blue = imageData[index + 2];
          const drawX = x * cell;
          const drawY = y * cell;

          const dx = drawX - pointer.x;
          const dy = drawY - pointer.y;
          const distance = Math.hypot(dx, dy);
          const influence = Math.max(0, 1 - distance / radius);
          const swirl = influence * influence * strength;
          const angle = Math.atan2(dy, dx);
          const offsetX = Math.cos(angle + Math.PI / 2) * swirl;
          const offsetY = Math.sin(angle + Math.PI / 2) * swirl;
          const size = Math.max(1, cell * 0.88 - influence * 1.2);

          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha / 255})`;
          ctx.fillRect(drawX + offsetX, drawY + offsetY, size, size);
        }
      }
    };

    const start = () => {
      resize();
      draw(0);
    };
    image.onload = start;

    resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(host);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("resize", resize);

    if (image.complete) start();

    return () => {
      window.cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [src]);

  return (
    <div ref={hostRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
    </div>
  );
};

export default PixelatedPhotoBackground;
