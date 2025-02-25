import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const HeavyComponent = dynamic(() => import("../components/layout/shell"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
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
      <main>
        <header
          className=" w-100 vh-100 position-relative d-flex align-items-center"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url('/img/main.jpg');",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
            minHeight: "35rem",
          }}
        >
          <div
            className="container-lg px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center"
            ref={headerRef}
          >
            <div className="d-flex w-100 h-100 align-items-center">
              <div className="container-lg text-center">
                <div className="row gap-3">
                  <div
                    className="col w-100 p-2 rounded"
                    style={{
                      minWidth: "350px",
                    }}
                  >
                    <div className="w-100">
                      <Image
                        src={"/img/mainchar.png"}
                        alt="mainchar"
                        className="w-100 object-fit-contain"
                        width={"400"}
                        height={"400"}
                      />
                      <div className="position-relative mx-xl-5">
                        <h1
                          className="mx-auto my-0 text-uppercase rounded fs-3"
                          style={{
                            background:
                              "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))",
                            letterSpacing: "0.8rem",
                            height: "20px",
                          }}
                        ></h1>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col w-100 d-flex p-2 rounde align-items-center"
                    style={{ minWidth: "350px" }}
                  >
                    <div className="card border-primary mb-3 text-bg-dark">
                      <div className="card-header"></div>
                      <div className="card-body text-primary">
                        <h3 className="card-title mb-4">
                          Givaldi Gumelar Setiawan
                        </h3>
                        <p className="card-text fs-5">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                      <div className="card-header"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          className=" w-100 vh-100 position-relative d-flex align-items-center"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.4) 75%, #000 100%)",
          }}
        >
          <div className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center">
            <div className="d-flex w-100 h-100 align-items-center">
              <div className="container-lg text-center">{/* isi */}</div>
            </div>
          </div>
        </div>
        <div className=" w-100 vh-100 position-relative d-flex align-items-center">
          <div className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center">
            <div className="d-flex w-100 h-100 align-items-center">
              <div className="container-lg text-center">{/* isi */}</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
