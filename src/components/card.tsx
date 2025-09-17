import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const Card: React.FC<{
  items: { label: string; title: string; description: string; image: string }[];
  title: string;
}> = ({ items, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
      );
    }
  }, [items]);

  return (
    <div
      className="container border border-primary p-3 mt-4"
      style={{ maxHeight: "90vh" }}
    >
      <h1 className="text-primary border-bottom border-primary ms-4 p-2">
        My {title}
      </h1>
      <div
        className="row row-cols-2 mt-3 h-100 row-cols-md-3 g-3"
        style={{ overflowY: "scroll", maxHeight: "70vh" }}
        ref={containerRef}
      >
        {items.map((item, index) => (
          <>
            <div key={index} className="col">
              <div className="card border bg-dark border-primary shadow-sm">
                <a
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target={"#" + item.label}
                  className="text-decoration-none"
                >
                  <div className="card-body text-center text-primary">
                    <h6 className="card-title">{item.title}</h6>
                  </div>
                </a>
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded-bottom"
                />
              </div>
            </div>
            <div
              className="modal fade "
              id={item.label}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby={item.label + "Label"}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark border border-primary p-4 text-center rounded-3 shadow">
                  <div className="modal-body ">
                    <h5 className="mb-2 text-primary">{item.title}</h5>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded-bottom"
                    />
                    <p className="mb-0 mt-2 text-white text-start">
                      {item.description}
                    </p>
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
          </>
        ))}
      </div>
    </div>
  );
};

export default Card;
