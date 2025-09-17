import Head from "next/head";
import Ld_container from "@/components/ld_container";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <main style={{ backgroundColor: "black" }}>
        <header>
          <div className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center">
            <div className="d-flex w-100 h-100 align-items-end">
              <Ld_container>
                <div
                  className="row g-0 border border-primary rounded overflow-hidden text-white flex-md-row shadow-sm h-md-250 position-relative"
                  style={{ minHeight: "250px" }}
                >
                  <div className="col-auto d-none d-md-block h-100">
                    <Image
                      src={
                        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1757565683/aboutme_yqsfko.jpg"
                      }
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
                    <div className="mb-1 text-body-secondary">2007-2025</div>
                    <div
                      className="overflow-y-scroll px-2"
                      style={{ maxHeight: "200px" }}
                    >
                      <h1 className="text-start">Pendahuluan</h1>
                      <p
                        className="card-text mb-auto"
                        style={{ textAlign: "justify" }}
                      >
                        Saya lahir pada tahun 2007 di Cianjur, sejak umur 2
                        tahun saya sudah diperkenalkan pada dunia komputer oleh
                        ayah saya dan saat saya menginjak bangku SMP saya
                        memberanikan diri untuk mempelajari ilmu komputer dengan
                        lebih mendalam mulai dari hardware hingga software saya
                        pelajari.
                      </p>
                      <h1 className="text-start mt-2">Dunia Hardware</h1>
                      <p
                        className="card-text mb-auto"
                        style={{ textAlign: "justify" }}
                      >
                        Saya mulai mendalami dunia hardware pada saat saya
                        menginjak bangku SMP, pada saat itu komputer yang saya
                        miliki mengalami mati total secara mendadak. Dan saya
                        bertekat untuk membenarkannya, di saat itulah saya mulai
                        mempelajari setiap komponen komponen yang ada pada
                        komputer saya, sampai akhirnya komputer saya kembali
                        menyala.
                      </p>
                      <h1 className="text-start mt-2">Dunia Software</h1>
                      <p
                        className="card-text mb-auto"
                        style={{ textAlign: "justify" }}
                      >
                        Saya tertarik pada dunia software ketika saya mulai
                        masuk ke jurusan PPLG atau Pengembangan Perangkat Lunak
                        dan Gim dimana para pelajar memang diarahkan untuk
                        mempelajari software dengan lebih mendalam. Disitulah
                        saya mulai serius mempelajari dunia pemograman.
                      </p>
                    </div>
                  </div>
                </div>
              </Ld_container>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
