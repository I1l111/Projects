import { useState, useEffect, useRef } from "react";

export function useQuery(queryFn) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryFnRef = useRef(null);
  queryFnRef.current = queryFn;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);

        const data = await queryFnRef.current({ signal });

        setData(data);
        setError(null);
      }
      catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    data,
    loading,
    error,
  };
}