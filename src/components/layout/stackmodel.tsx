import React, { useRef, useEffect } from "react";

const TechModel: React.FC<{
  items: { label: string; tittle: string; body: string }[];
  icons: { tittle: string; icon: string }[];
}> = ({ items, icons }) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="modal fade"
          id={item.label}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby={item.label + "Label"}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark border border-primary rounded-3 shadow">
              <h3 className="mb-2 text-primary text-center mt-3">My stack</h3>
              <div
                className="modal-body p-4 text-center"
                style={{ maxHeight: "60vh", overflow: "scroll" }}
              >
                <div className="row gap-2">
                  {icons.map((icon, index) => (
                    <div key={index} className="col">
                      <div className="card border bg-dark border-primary shadow-sm text-center p-3">
                        <div className="mb-2 rounded-3 bg-white">
                          <img src={icon.icon} width={"80"} alt={icon.icon} />
                        </div>
                        <h6 className="card-title text-primary fs-4">
                          {icon.tittle}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
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
      ))}
    </>
  );
};

export default TechModel;
