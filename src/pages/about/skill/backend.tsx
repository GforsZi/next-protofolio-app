import Head from "next/head";

export default function backend() {
  const basic_icon = [
    { tittle: "PHP", icon: "/icon/stack/PHP.svg" },
    { tittle: "Javascript", icon: "/icon/stack/JavaScript.svg" },
    { tittle: "JSON", icon: "/icon/stack/JSON.svg" },
    {
      tittle: "UML",
      icon: "/icon/stack/Unified-Modelling-Language(UML).svg",
    },
    { tittle: "Git", icon: "/icon/stack/Git.svg" },
    { tittle: "Github", icon: "/icon/stack/GitHub.svg" },
  ];
  const advance_icon = [
    { tittle: "Apache", icon: "/icon/stack/Apache.svg" },
    { tittle: "Node", icon: "/icon/stack/Node.js.svg" },
    { tittle: "Typescript", icon: "/icon/stack/TypeScript.svg" },
    { tittle: "NPM", icon: "/icon/stack/NPM.svg" },
    { tittle: "Composer", icon: "/icon/stack/Composer.svg" },
    { tittle: "Arduino", icon: "/icon/stack/Arduino.svg" },
  ];
  const db_icon = [
    { tittle: "MySQL", icon: "/icon/stack/MySQL.svg" },
    { tittle: "Firebase", icon: "/icon/stack/Firebase.svg" },
    { tittle: "SQLite", icon: "/icon/stack/SQLite.svg" },
    { tittle: "Prisma", icon: "/icon/stack/prisma-svgrepo-com.svg" },
  ];
  const framework_icon = [
    { tittle: "Express", icon: "/icon/stack/Express.svg" },
    { tittle: "Next", icon: "/icon/stack/Next.js.svg" },
    { tittle: "Laravel", icon: "/icon/stack/Laravel.svg" },
  ];
  const fe_tools_icon = [
    { tittle: "Postman", icon: "/icon/stack/Postman.svg" },
    { tittle: "Swagger", icon: "/icon/stack/Swagger.svg" },
    {
      tittle: "Visual Studio Code",
      icon: "/icon/stack/Visual-Studio-Code-(VS Code).svg",
    },
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
                      <span className="text-bg-danger">BackEnd Skill</span>
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
                          <a href="#">Advance</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {advance_icon.map((icon, index) => (
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
                          <a href="#">DataBase</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {db_icon.map((icon, index) => (
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
                      <i className="timeline-icon bi bi-chat-text-fill text-bg-danger"></i>
                      <div className="timeline-item">
                        <span className="time"></span>
                        <h3 className="timeline-header">
                          <a href="#">FrameWork</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {framework_icon.map((icon, index) => (
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
                      <i className="timeline-icon bi bi-chat-text-fill text-bg-info"></i>
                      <div className="timeline-item">
                        <span className="time"></span>
                        <h3 className="timeline-header">
                          <a href="#">BackEnd Tools</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {fe_tools_icon.map((icon, index) => (
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
                      <span className="text-bg-success">BackEnd Skill</span>
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
