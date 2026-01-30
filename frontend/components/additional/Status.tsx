// потом удалим, это просто пример

import { useEffect, useState } from "react";

export const Status = () => {
  const [status, setStatus] = useState("Loading...");
  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch(() => setStatus("Error"));
  }, []);

  return <div>Status: {status}</div>;
};
