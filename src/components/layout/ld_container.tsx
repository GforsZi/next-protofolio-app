type ldProps = {
  children: React.ReactNode;
};

export default function Ld_container(props: ldProps) {
  const { children } = props;
  return (
    <>
      <div className=" w-100 vh-100 position-relative d-flex align-items-center">
        <div className="container px-4 px-lg-5 d-flex h-100 d-flex align-items-center  justify-content-center">
          <div className="d-flex w-100 h-100 align-items-center">
            <div className="container-lg text-center">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
