import React, { useRef, useEffect } from "react";

const Model: React.FC<{
  items: { label: string; tittle: string; body: string }[];
}> = ({ items }) => {
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
              <div className="modal-body p-4 text-center">
                <h5 className="mb-2 text-primary">{item.tittle}</h5>
                <p className="mb-0 text-start text-white">{item.body}</p>
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

export default Model;
