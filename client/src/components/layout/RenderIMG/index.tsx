import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { GoZoomIn, GoZoomOut } from "react-icons/go";

const RenderIMG = ({
  images,
  currentIndex,
}: {
  images: string[];
  currentIndex: number;
}) => {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const total = images.length;

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    setPos((p) => ({ x: p.x + dx, y: p.y + dy }));
    last.current = { x: e.clientX, y: e.clientY };
  };

  const endDrag = () => (dragging.current = false);

  useEffect(() => {
    if (scale === 1) setPos({ x: 0, y: 0 });
  }, [scale]);

  useEffect(() => {
    setPos({ x: 0, y: 0 });
    setScale(1);
  }, [currentIndex]);

  return (
    <div
      className="relative w-full h-auto overflow-hidden "
      onMouseMove={onMouseMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={clsx(
          "w-full h-full",
          "max-w-[684px] object-cover rounded-lg",
          scale > 1 && "cursor-grab",
          scale === 1 && "cursor-default",
          dragging.current && "cursor-grabbing",
        )}
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          transition: dragging.current ? "none" : "transform 0.3s ease-in-out",
          transformOrigin: "center center",
        }}
        onMouseDown={onMouseDown}
        draggable={false}
      />

      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/40 text-white text-sm px-2 py-1 rounded-lg">
        {currentIndex + 1}/{total}
      </span>

      <button
        className="absolute bottom-5 right-3 bg-black/40 text-white p-1 rounded-lg hover:bg-black/60 transition-colors"
        onClick={() => setScale((s) => Math.min(5, s + 1))}
      >
        <GoZoomIn size={20} />
      </button>

      <button
        className={clsx(
          "absolute bottom-5 right-14 bg-black/40 text-white p-1 rounded-lg hover:bg-black/60 transition-colors",
          scale > 1 ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setScale((s) => Math.max(1, s - 1))}
      >
        <GoZoomOut size={20} />
      </button>
    </div>
  );
};

export default RenderIMG;
