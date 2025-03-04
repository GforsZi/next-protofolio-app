import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Ld_container from "@/components/layout/ld_container";
import Link from "next/link";
import Card from "@/components/layout/card";

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

  const items = [
    {
      label: "card-1",
      title: "Gambar 1",
      description: "yahahi",
      image: "/img/office.jpg",
    },
    {
      label: "card-2",
      title: "Gambar 2",
      description: "yahahai",
      image: "/img/backendbg.jpg",
    },
    {
      label: "card-3",
      title: "Gambar 3",
      description: "yahahai",
      image: "/img/frontend.jpg",
    },
  ];

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
                        priority
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
                        <p className="card-text fs-5 text-start">
                          Saya merupakan seorang programmer dibidang
                          pengembangan website khususnya diranah backend...
                          <a
                            type="button"
                            className="ms-1"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                          >
                            Detail
                          </a>
                        </p>
                      </div>
                      <div className="card-header w-100 d-flex justify-content-end">
                        <a href="https://givaldigumelarsetiawan@gmail.com">
                          <Image
                            src={"/icon/mail.svg"}
                            alt=""
                            className="mx-1"
                            width={"30"}
                            height={"30"}
                          />
                        </a>
                        <a href="https://wa.me/qr/KCC4Z7RZPKW4O1">
                          <Image
                            src={"/icon/message-circle.svg"}
                            alt=""
                            className="mx-1"
                            width={"30"}
                            height={"30"}
                          />
                        </a>
                        <a href="https://www.instagram.com/giv.aldi07?igsh=cDVlZWdsZmFqMGJk">
                          <Image
                            src={"/icon/instagram.svg"}
                            alt=""
                            className="mx-1"
                            width={"30"}
                            height={"30"}
                          />
                        </a>
                        <a href="https://github.com/GforsZi">
                          <Image
                            src={"/icon/github.svg"}
                            alt=""
                            className="mx-1"
                            width={"30"}
                            height={"30"}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Ld_container>
          <div
            className="row g-0 border border-primary rounded overflow-hidden text-white flex-md-row shadow-sm h-md-250 position-relative"
            style={{ minHeight: "250px" }}
          >
            <div className="col-auto d-none d-md-block h-100">
              <Image
                src={"/img/aboutme.jpg"}
                alt=""
                priority
                className="h-100 ms-5"
                height={"250"}
                width={"250"}
              />
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Hello World
              </strong>
              <h3 className="mb-0">About Me</h3>
              <div className="mb-1 text-body-secondary">Nov 12</div>
              <p className="card-text mb-auto">
                Saya lahir pada 2007 di Cianjur, sejak umur 2 tahun saya sudah
                diperkenalkan pada dunia komputer oleh ayah saya dan saat saya
                menginjak bangku SMP saya memberanikan diri untuk mempelajari
                ilmu komputer dengan lebih mendalam mulai dari hardware hingga
                software saya pelajari. Sampai hingga akhirnya saya terjun ke
                dunia programming pada usia 15 tahun...
              </p>
              <Link href={"/about"}>Continue reading</Link>
            </div>
          </div>
        </Ld_container>
        <Ld_container>
          <div>
            <div
              id="carouselExampleCaptions"
              className="carousel slide border border-primary p-3"
            >
              <h1 className="text-primary border-bottom border-primary">
                My skill
              </h1>
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    src={"/img/frontend.jpg"}
                    alt=""
                    priority
                    unoptimized
                    className="w-100 object-fit-cover"
                    width={"250"}
                    height={"400"}
                  />
                  <div className="carousel-caption border border-primary rounded-2 bg-dark text-white">
                    <Link
                      href={"/about/skill/frontend"}
                      className="fs-4 text-decoration-none"
                    >
                      Frontend
                    </Link>
                    <p className="d-none d-md-block">
                      Saya memiliki keahlian dalam penggunaan frontend framework
                      yakni: bootstrap, tailwind, reactjs, dan vuejs
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    src={"/img/backendbg.jpg"}
                    alt=""
                    priority
                    unoptimized
                    className="w-100 object-fit-cover"
                    width={"250"}
                    height={"400"}
                  />
                  <div className="carousel-caption border border-primary rounded-2 bg-dark text-white">
                    <Link
                      href={"/about/skill/backend"}
                      className="fs-4 text-decoration-none"
                    >
                      Backend
                    </Link>
                    <p className="d-none d-md-block">
                      Saat ini saya menguasai dua bahasa pemograman yakni nodejs
                      dan php beserta framework populernya.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    src={"/img/office.jpg"}
                    alt=""
                    priority
                    unoptimized
                    className="w-100 object-fit-cover"
                    width={"250"}
                    height={"400"}
                  />
                  <div className="carousel-caption border border-primary rounded-2 bg-dark text-white">
                    <Link
                      href={"/about/skill/non_programming"}
                      className="fs-4 text-decoration-none"
                    >
                      other
                    </Link>
                    <p className="d-none d-md-block">
                      Selain coding saya juga menguasai beberapa skil seperti:
                      editing, design, office, dan lain lain.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </Ld_container>
        <Ld_container>
          <Card items={items} />
        </Ld_container>
      </main>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark border border-primary rounded-3 shadow">
            <div className="modal-body p-4 text-center">
              <h5 className="mb-2 text-primary">Givaldi Gumelar Setiawan</h5>
              <p className="mb-0 text-start text-white">
                Saya merupakan seorang programmer dibidang pengembangan website
                khususnya diranah backend. Saya selalu berusaha menerapkan
                konsep clean code di semua project yang saya kerjakan agar mudah
                dikembangkan dan dipelihara.
              </p>
            </div>
            <div className="modal-footer  p-0">
              <button
                type="button"
                className="btn btn-dark text-primary fs-6 text-decoration-none w-100 py-3 m-0 rounded-0"
                data-bs-dismiss="modal"
              >
                oke
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
