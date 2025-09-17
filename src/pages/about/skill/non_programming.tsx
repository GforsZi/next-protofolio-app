import Head from "next/head";

export default function non_programming() {
  const basic_icon = [
    { tittle: "Software", icon: "/icon/stack/software-svgrepo-com.svg" },
    { tittle: "Hardware", icon: "/icon/stack/hardware-svgrepo-com.svg" },
  ];
  const os_icon = [
    { tittle: "Windows", icon: "/icon/stack/Windows 11.svg" },
    { tittle: "Linux", icon: "/icon/stack/Linux.svg" },
    { tittle: "Android", icon: "/icon/stack/Android.svg" },
  ];
  const office_icon = [
    {
      tittle: "MS office",
      icon: "/icon/stack/microsoft-office-svgrepo-com.svg",
    },
    { tittle: "Libreoffice", icon: "/icon/stack/Logo-libreoffice.svg" },
    { tittle: "WPS office", icon: "/icon/stack/wps-office-svgrepo-com.svg" },
  ];
  return (
    <>
      <Head>
        <title>Product page</title>
      </Head>
      <main>
        <link rel="stylesheet" href="/adminlte.min.css" />
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
          <div
            className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center"
            style={{ marginTop: "100px" }}
          >
            <div className="d-flex w-100 h-100 align-items-end">
              <div className="row">
                <div className="col-md-12">
                  <div className="timeline">
                    <div className="time-label">
                      <span className="text-bg-danger">
                        Non Programming Skill
                      </span>
                    </div>
                    <div>
                      <i className="timeline-icon bi bi-envelope text-bg-primary"></i>
                      <div className="timeline-item">
                        <span className="time"></span>
                        <h3 className="timeline-header">
                          <a href="#">Basic</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {basic_icon.map((icon, index) => (
                              <div key={index} className="col">
                                <div className="card border shadow-sm text-center p-3">
                                  <div className="mb-2 rounded-3 bg-white">
                                    <img
                                      src={icon.icon}
                                      width={"80"}
                                      alt={icon.icon}
                                    />
                                  </div>
                                  <h6 className="card-title text-primary fs-4">
                                    {icon.tittle}
                                  </h6>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <i className="timeline-icon bi bi-person text-bg-success"></i>
                      <div className="timeline-item">
                        <span className="time"></span>
                        <h3 className="timeline-header no-border">
                          <a href="#">System Opration</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {os_icon.map((icon, index) => (
                              <div key={index} className="col">
                                <div className="card border shadow-sm text-center p-3">
                                  <div className="mb-2 rounded-3 bg-white">
                                    <img
                                      src={icon.icon}
                                      width={"80"}
                                      alt={icon.icon}
                                    />
                                  </div>
                                  <h6 className="card-title text-primary fs-4">
                                    {icon.tittle}
                                  </h6>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <i className="timeline-icon bi bi-chat-text-fill text-bg-warning"></i>
                      <div className="timeline-item">
                        <span className="time"></span>
                        <h3 className="timeline-header">
                          <a href="#">Office</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {office_icon.map((icon, index) => (
                              <div key={index} className="col">
                                <div className="card border shadow-sm text-center p-3">
                                  <div className="mb-2 rounded-3 bg-white">
                                    <img
                                      src={icon.icon}
                                      width={"80"}
                                      alt={icon.icon}
                                    />
                                  </div>
                                  <h6 className="card-title text-primary fs-4">
                                    {icon.tittle}
                                  </h6>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="time-label">
                      <span className="text-bg-success">
                        Non Programming Skill
                      </span>
                    </div>
                    <div>
                      <i className="timeline-icon bi bi-clock-fill text-bg-dark"></i>
                    </div>
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
