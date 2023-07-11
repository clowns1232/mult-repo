const Button = () => {
  return (
    <button
      onClick={() => {
        alert("여긴 다른 레포입니다.");
      }}
    >
      서브모듈 테스트
    </button>
  );
};

export default Button;
