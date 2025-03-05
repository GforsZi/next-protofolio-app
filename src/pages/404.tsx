"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const NotFound = () => {
  const countRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animasi angka 404 (count up)
    gsap.fromTo(
      countRef.current,
      { innerText: 0 },
      {
        innerText: 404,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
      }
    );

    // Animasi efek mengetik untuk teks "Page Not Found"
    const text = "Page Not Found";
    let currentText = "";
    let index = 0;

    const typingEffect = () => {
      if (index < text.length) {
        currentText += text[index];
        if (textRef.current) {
          textRef.current.innerText = currentText;
        }
        index++;
        setTimeout(typingEffect, 100);
      }
    };
    typingEffect();
  }, []);

  return (
    <div className="d-flex bg-black flex-column justify-content-center align-items-center vh-100 bg-light text-dark">
      <h1 className="display-1 text-primary fw-bold" ref={countRef}></h1>
      <h2 ref={textRef} className="fs-3 text-primary fw-medium"></h2>
    </div>
  );
};

export default NotFound;
