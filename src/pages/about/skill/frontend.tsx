import Head from "next/head";

export default function frontend() {
  const basic_icon = [
    { tittle: "HTML", icon: "/icon/stack/HTML5.svg" },
    { tittle: "CSS", icon: "/icon/stack/CSS3.svg" },
    { tittle: "Javascript", icon: "/icon/stack/JavaScript.svg" },
    { tittle: "Git", icon: "/icon/stack/Git.svg" },
    { tittle: "Github", icon: "/icon/stack/GitHub.svg" },
  ];
  const style_framework_icon = [
    { tittle: "Bootstrap", icon: "/icon/stack/Bootstrap.svg" },
    { tittle: "Tailwind", icon: "/icon/stack/Tailwind.CSS.svg" },
  ];
  const structure_framework_icon = [
    { tittle: "jQuery", icon: "/icon/stack/jQuery.svg" },
    { tittle: "Vite", icon: "/icon/stack/Vite.js.svg" },
    { tittle: "Ejs", icon: "/icon/stack/ejs-svgrepo-com.svg" },
    { tittle: "Livewire", icon: "/icon/stack/Livewire.svg" },
    { tittle: "React", icon: "/icon/stack/React.svg" },
    { tittle: "Vue", icon: "/icon/stack/Vue.js.svg" },
  ];
  const fe_tools_icon = [
    { tittle: "WordPress", icon: "/icon/stack/WordPress.svg" },
    { tittle: "Figma", icon: "/icon/stack/Figma.svg" },
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
                      <span className="text-bg-danger">FrontEnd Skill</span>
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
                          <a href="#">Styling FrameWork</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {style_framework_icon.map((icon, index) => (
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
                          <a href="#">Structure FrameWork</a> Skill
                        </h3>
                        <div className="timeline-body">
                          <div className="row gap-2">
                            {structure_framework_icon.map((icon, index) => (
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
                          <a href="#">FrontEnd Tools</a> Skill
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
                      <span className="text-bg-success">FrontEnd Skill</span>
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
