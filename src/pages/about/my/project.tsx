import Head from "next/head";
import Ld_container from "@/components/ld_container";
import Card from "@/components/card";

export default function my_project() {
  const items = [
    {
      label: "card-1",
      title: "Trial Class S1 Informatika",
      description:
        "Serifikat yang saya dapatkan setelah mengikuti trialclass di TelU",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1757562507/serti-s1infor_rpjhiz.png",
    },
    {
      label: "card-2",
      title: "Kunjungan Industri",
      description:
        "Sertifikat yang saya dapat setelah mengikuti kegiatan kunjungan industri di jogja",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1757562515/serti-kunjin_abi8qp.jpg",
    },
    {
      label: "card-3",
      title: "International Class",
      description:
        "Sertifikat yang saya dapatkan setelah mengikuti international class bersama mahasiswa dari korea",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1757562511/serti-interclass_rmmnqt.jpg",
    },
    {
      label: "card-4",
      title: "Camping Pendidikan Dasar",
      description:
        "Sertifikat yang saya dapatkan setelah mengikuti kegiatan CPD",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1757562510/serti-cpd_niox1o.jpg",
    },
    {
      label: "card-5",
      title: "NextSkill Backend class",
      description:
        "Sertifikat yang saya dapatkan setelah mengikuti kelas backend dari nextskill",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1757562461/Backend_xy3rff.png",
    },
    {
      label: "card-6",
      title: "NextSkill UI/UX class",
      description:
        "Sertifikat yang saya dapatkan setelah mengikuti kelas UI/UX dari nextskill",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1757562475/UIUX_izykjz.png",
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
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url('');",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
            backgroundSize: "cover",
            minHeight: "35rem",
          }}
        >
          <div className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center">
            <div className="d-flex w-100 h-100 align-items-end">
              <Ld_container>
                <Card items={items} title="project" />
              </Ld_container>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
