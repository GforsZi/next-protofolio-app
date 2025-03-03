import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Card: React.FC<{ items: { title: string; image: string }[] }> = ({
  items,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
      );
    }
  }, [items]);

  return (
    <div className="container border border-primary p-3 mt-4">
      <h1 className="text-primary border-bottom border-primary ms-4 p-2">
        My achivment
      </h1>
      <div className="row row-cols-2 row-cols-md-3 g-3" ref={containerRef}>
        {items.map((item, index) => (
          <div key={index} className="col">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center">
                <h6 className="card-title">{item.title}</h6>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid rounded-bottom"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
