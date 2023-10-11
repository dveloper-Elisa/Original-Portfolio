import { useState, useEffect } from "react";
import Certificates from "../componets/certificate";

import certified from "../data/certificate";

const CertificatePage = (pros) => {
  const [certificates, setCirtificates] = useState([]);

  useEffect(() => {
    setCirtificates(certified);
  }, []);

  return (
    <>
      <div
        className={`grid grid-cols-1 capitalize lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-2 gap-10 px-16 py-10 ${
          pros.darkmode ? "bg-slate-900" : "bg-slate-300"
        }`}
      >
        {certificates.map((certificat) => {
          return (
            <>
              <Certificates
                image={certificat.image}
                description={certificat.description}
                link={certificat.link}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default CertificatePage;
