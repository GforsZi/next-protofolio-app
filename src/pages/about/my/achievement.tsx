import Head from "next/head";
import Ld_container from "@/components/ld_container";
import Card from "@/components/card";

export default function my_achievement() {
  const items_ach = [
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
  const items_exp = [
    {
      label: "card-7",
      title: "Install VM Windows",
      description: "Mengistall vm windows di android",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758110446/Screenshot_2022-12-13-21-44-17-819_com.limbo.emu.main_qgj72l.jpg",
    },
    {
      label: "card-8",
      title: "Install VM Linux",
      description: "Mengistall vm linux di android",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758110294/Screenshot_2025-03-29-18-56-58-691_com.fct.tiny_a8xgeh.jpg",
    },
    {
      label: "card-9",
      title: "Service laptop",
      description:
        "Melakukan service laptop. Istalasi ram, nvme, ssd, dan cleaning",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758121263/Screenshot_2025-09-17_21-57-54_zaioco.png",
    },
    {
      label: "card-10",
      title: "IOT absen dengan scan",
      description:
        "Membuat IOT untuk kebutuhan mengirim scan rfid via api ke web",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758110358/IMG_20250219_173801_miq4x5.jpg",
    },
    {
      label: "card-11",
      title: "IOT running text",
      description: "Membuat IOT running text",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758110310/IMG_20250420_184414_q9i8fb.jpg",
    },
    {
      label: "card-12",
      title: "Service PC",
      description: "Melakukan service laptop. Istalasi komponen, dan cleaning",
      image:
        "https://res.cloudinary.com/dytsbyzd7/image/upload/v1758110636/IMG_20240919_082405_x8fac2.jpg",
    },
  ];

  const title = [
    {
      label: "achievement",
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
                <Card items={items_ach} title="Certificate" />
              </Ld_container>
              <Ld_container>
                <Card items={items_exp} title="Experience" />
              </Ld_container>
            </div>
          </div>
        </header>
      </main>
    </>
  );
}
