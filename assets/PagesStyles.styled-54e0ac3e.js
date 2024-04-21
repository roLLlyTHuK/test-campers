import{s as t}from"./index-afb73bff.js";const o=t.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 64px;
  padding: 50px 64px;
  margin: 0 auto;
  max-width: 1440px;
`,i=t.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  max-width: 1440px;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    color: var(--color-yellow);
    font-size: 64px;
    font-weight: 600;
    line-height: 72px;
    text-align: center;
    pointer-events: none;
  }
  .button {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    color: var(--color-white);
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    background-color: var(--color-red);
    border: none;
    border-radius: 200px;
    padding: 16px 40px;
  }
`,n=t.div`
  display: flex;
  background: #000;
  width: 100%;
  height: 100%;

  .slide {
    height: calc(100vh - 100px);
    position: relative;
    z-index: 10;
    border: solid #fff;
    border-width: 1px;
    background-size: cover;
    background-position: center center;
    opacity: 0.25;
    width: 30%;
    transition: width 0.8s ease, opacity 0.5s ease;
    &:hover {
      width: 200%;
      opacity: 1;
    }
  }
`;export{i as H,o as P,n as S};
