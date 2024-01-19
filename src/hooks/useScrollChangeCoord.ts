import { useEffect, useState } from "react";

export default function useScrollChangeCoord(nodeRef: any) {
  const [coord, setCoord] = useState<any>(null);
  useEffect(() => {
    const handleScroll = () => {
      setCoord(nodeRef.current?.getBoundingClientRect());
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    coord,
    setCoord,
  };
}
