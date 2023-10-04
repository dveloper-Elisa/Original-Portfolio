import { useState, useEffect } from "react";

const DarckComponet = () => {
  const [darkmode, setDarkMode] = useState(true);
  useEffect(() => {
    setDarkMode(false);
  }, []);
  return <>{darkmode}</>;
};

export default DarckComponet;
