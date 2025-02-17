import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeavyComponent = dynamic(() => import('../components/layout/shell'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

export default function Index() {
  const headerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.from(headerRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 3,
      ease: "power3.out",
    });

  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main >
      <header className=" w-100 vh-100 position-relative d-flex align-items-center" style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url('/img/main.jpg');", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "cover", minHeight: "35rem"}}>
    <div className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center" ref={headerRef}>
      <div className="d-flex w-100 h-100 align-items-center">
      <div className="container-lg text-center">
        <div className="row gap-3">
          <div className="col w-100 border border-white p-2 rounded" style={{minWidth: "300px"}}>
            Column
                <h2>yahahi</h2>
          </div>
          <div className="col w-100 border border-white p-2 rounded" style={{minWidth: "300px"}}>
                {/* <h1 className="mx-auto my-0 text-uppercase" style={{background: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))", letterSpacing: "0.8rem"}}>RFID-app</h1> */}
                <h2 className="text-white-50 mx-auto mt-2 mb-5 fs-5 " style={{maxWidth: "20rem",}}>Sebuah perangkat lunak yang dirancang untuk kebutuhan absensi menggunakan RFID sensor</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  </header>
      </main>
    </>
  );
}
