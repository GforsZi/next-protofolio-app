import Head from "next/head";
import Ld_container from "@/components/ld_container";
import Card from "@/components/card";

export default function my_project() {
  const items_fe = [
    {
      label: "card-1",
      title: "NEXT-PROTOFOLIO-APP",
      description: "",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758119166/Screenshot_2025-09-17_21-25-39_zxidyq.png",
    },
    {
      label: "card-2",
      title: "UNI-BOOK",
      description: "",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758119160/Screenshot_2025-09-17_21-15-55_s7tilm.png",
    },
    {
      label: "card-3",
      title: "MIEX-APP",
      description: "",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758119160/Screenshot_2025-09-17_21-14-52_ou3ozp.png",
    },
  ];
  const items_be = [
    {
      label: "card-4",
      title: "PETRA",
      description: "",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758120484/Screenshot_2025-09-17_21-31-17_qvafwh.png",
    },
    {
      label: "card-5",
      title: "DC_APP",
      description: "",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758120480/Screenshot_2025-09-17_21-47-40_ahy7vj.png",
    },
    {
      label: "card-6",
      title: "API_APP",
      description: "",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758120480/Screenshot_2025-09-17_21-43-18_de2goq.png",
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <header
          className=" w-100 position-relative d-flex align-items-center"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url('');",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
            minHeight: "35rem",
          }}
        >
          <div className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center">
            <div className="d-flex flex-column w-100 h-100 align-items-end">
              <Ld_container>
                <Card items={items_fe} title="FrontEnd Project" />
              </Ld_container>
              <Ld_container>
                <Card items={items_be} title="BackEnd Project" />
              </Ld_container>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
