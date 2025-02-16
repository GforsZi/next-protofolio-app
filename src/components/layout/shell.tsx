import { useRouter } from "next/router";
import Navbar from "./Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type shellProps = {
  children: React.ReactNode
}

const disableNavbar = ["/404"];

export default function Shell(props:shellProps) {
  const {children} = props
  const {pathname} = useRouter()
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(leftDoorRef.current, { x: "-100%", duration: 1.5, ease: "power3.inOut" })
      .to(rightDoorRef.current, { x: "100%", duration: 1.5, ease: "power3.inOut" }, "-=1.5")
  }, []);
  
  return (
    <div>
            <div className="position-relative vh-100">
      {/* Gerbang Kiri */}
      <div
        ref={leftDoorRef}
        className="position-fixed z-3 top-0 start-0 w-50 h-100 bg-dark"
        style={{ transform: "translateX(0%)" }}
      ></div>

      {/* Gerbang Kanan */}
      <div
        ref={rightDoorRef}
        className="position-fixed z-3 top-0 end-0 w-50 h-100 bg-dark"
        style={{ transform: "translateX(0%)" }}
      ></div>

      {!disableNavbar.includes(pathname)&&<Navbar />}
      {children}
    </div>
    </div>
  )
}