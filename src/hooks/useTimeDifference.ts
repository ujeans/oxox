import { useState, useEffect } from "react";

const calculateTimeDifference = (createAt: string) => {
  const createdAtDate = new Date(createAt);
  const now = new Date();
  const diffInMs = now.getTime() - createdAtDate.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) {
    return "방금전";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInDays > 0) {
    return `${diffInDays}일 전`;
  } else {
    return `${diffInHours}시간 전`;
  }
};

const useTimeDifference = (createAt: string | undefined) => {
  const [timeDifference, setTimeDifference] = useState<string>(() => {
    if (createAt) return calculateTimeDifference(createAt);
    return "";
  });

  useEffect(() => {
    if (!createAt) return;

    const intervalId = setInterval(() => {
      setTimeDifference(calculateTimeDifference(createAt));
    }, 60000);

    return () => clearInterval(intervalId);
  }, [createAt]);

  return timeDifference;
};

export default useTimeDifference;
