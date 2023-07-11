"use client";

export const Button = () => {
  return (
    <button
      onClick={() => {
        alert("서브모듈 테스트");
      }}
    >
      서브모듈 테스트
    </button>
  );
};
