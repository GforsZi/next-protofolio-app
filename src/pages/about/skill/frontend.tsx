import Head from "next/head";

export default function frontend() {
  return(
    <>
      <Head>
      <title>Product page</title>
      </Head>
      <main>
      <header className=" w-100 vh-100 position-relative d-flex align-items-center" style={{background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url('');", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "scroll", backgroundSize: "cover", minHeight: "35rem"}}>
    <div className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center">
      <div className="d-flex w-100 h-100 align-items-end">
      <div className="container-lg text-center">
        <div className="row gap-3">
          <div className="col w-100 d-flex p-2 rounde align-items-end">
            <div className="w-100 justify-content-center">
                <h2 className="text-white-50 mx-auto mt-2 mb-5 fs-4 " style={{maxWidth: "30rem",}}>Sebuah perangkat lunak yang dirancang untuk kebutuhan absensi menggunakan RFID sensor</h2>

                <h1 className="mx-auto my-0 text-uppercase rounded fs-3" style={{background: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))", letterSpacing: "0.8rem"}}>Skill: Frontend</h1>
          </div>
        </div>
            </div>
      </div>
      </div>
    </div>
  </header>
      </main>
    </>
  )
}