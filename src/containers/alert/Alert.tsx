import styled from "@emotion/styled";

interface AlertProps {
  onClose?: () => void;
}

const Alert = ({ onClose }: AlertProps) => {
  return <div>로그인이 필요합니다.</div>;
};

export default Alert;
