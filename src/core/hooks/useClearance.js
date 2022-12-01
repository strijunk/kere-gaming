import { useEffect, useRef, useState } from 'react';

const useClearance = () => {
  const [clearance, setClearance] = useState('calc(100vh - 0px)');

  const upper = useRef(null);
  const lower = useRef(null);

  useEffect(() => {
    if (upper.current && lower.current) {
      const offset = upper.current.offsetHeight + lower.current.offsetHeight;
      setClearance(`calc(100vh - ${offset}px)`);
    }
  }, [upper, lower]);

  return [clearance, upper, lower];
};

export default useClearance;
