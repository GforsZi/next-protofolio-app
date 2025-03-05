import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

type headerProps = {
  children: React.ReactNode;
};

export default function HeaderContainer(props: headerProps) {
  const { children } = props;
  const headerRef = useRef(null);
  const router = useRouter();
  const [bg, setBg] = useState<string>("");

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.from(headerRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 3,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    setBg("/img/main.jpg");
  }, [router.asPath]);
  return (
    <>
      <header
        className=" w-100 vh-100 position-relative d-flex align-items-center "
        style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          minHeight: "35rem",
        }}
      >
        <div className="container-lg px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center">
          <div className="d-flex w-100 h-100 align-items-center">
            <div className="container-lg text-center">{children}</div>
          </div>
        </div>
      </header>
    </>
  );
}
