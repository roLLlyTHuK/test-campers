import{s as l,u as h,r as m,a as y,g as j,j as e,b as z,W as N}from"./index-8493bd53.js";import{F as C,A as q,T as F,K as L,C as S,t as I}from"./CampersGallery-d7eb6d97.js";import{P as T}from"./PagesStyles.styled-c8b258e2.js";const V="/test-campers/assets/tv-a3af1c79.svg",M="/test-campers/assets/shower-fec19de3.svg",A="/test-campers/assets/van-0b91f168.svg",P="/test-campers/assets/alcove-8cb8fc9f.svg",E="/test-campers/assets/fully-integrated-7c534a1c.svg",W=l.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  h3 {
    margin-bottom: 48px;
  }

  input {
    width: 100%;
    height: 56px;
    padding: 18px;
    padding-left: 44px;
    border: none;
    border-radius: 10px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    outline: none;
  }

  input[type='checkbox'],
  input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  input[type='checkbox'] + label,
  input[type='radio'] + label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    max-width: 128px;
    width: 112px;
    height: 95px;
    border: 1px solid #10182833;
    border-radius: 10px;
    padding: 9px 24px;

    cursor: pointer;
  }
  label > p {
    text-align: center;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  label > img {
    width: 32px;
    height: 32px;
  }

  input[type='checkbox']:checked + label,
  input[type='radio']:checked + label {
    border: 1px solid var(--color-red);
  }

  input[type='checkbox'] + label::before,
  input[type='radio'] + label::before {
    display: block;
    font-size: 24px;
    line-height: 100px;
  }

  input[type='checkbox'] + label:hover,
  input[type='radio'] + label:hover {
    background-color: #f4f4f4;
  }

  .location-filter,
  .equipment-filter {
    margin-bottom: 32px;
  }

  .location-filter > div {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .equipment-filter > p {
    margin-bottom: 14px;
  }

  .type-filter {
    margin-bottom: 64px;
  }
`,D=l.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`,K=l.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`,B=l.button`
  width: 166px;
  height: 56px;
  padding: 16px 40px;
  border-radius: 200px;
  border: none;
  background-color: var(--color-red);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: center;
  color: var(--color-white);

  &:hover {
    background-color: #d84343;
  }
`,G=l(C)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 18px;
  cursor: pointer;
`,R=t=>{var o;return(o=t.campers)==null?void 0:o.campers},U=t=>t.campers.isFirstLoading,X=t=>t.campers.isFiltersLoading,_=t=>t.campers.isMoreLoading,H=t=>t.campers.filteredCampers,J=({onFiltersChange:t})=>{const o=h(R),[x,b]=m.useState(""),i=y(),[a,r]=m.useState({location:"",equipment:[],type:""});m.useEffect(()=>{(()=>{const c=o.filter(s=>{const f=s.location.toLowerCase().includes(a.location.toLowerCase()),u=a.equipment.every(w=>s.details[w]||s[w]),v=a.type===""||s.form===a.type;return f&&u&&v});i(z(c)),t(a)})()},[a,o,i,t]);const p=d=>{const{name:c,value:s}=d.target;b(s),r({...a,[c]:s})},n=d=>{const{name:c,checked:s}=d.target;r(s?{...a,equipment:[...a.equipment,c]}:{...a,equipment:a.equipment.filter(f=>f!==c)})},k=d=>{d.preventDefault(),r({location:"",equipment:[],type:""})};return m.useEffect(()=>{i(j())},[i]),e.jsx("form",{children:e.jsxs(W,{children:[e.jsxs("div",{className:"location-filter",children:[e.jsx("p",{children:"Location"}),e.jsxs("div",{children:[e.jsx(G,{style:{color:x!==""?"var(--color-black)":"var(--color-light-grey)"}}),e.jsx("input",{type:"text",name:"location",placeholder:"Kyiv, Ukraine",className:"search-input",value:a.location,onChange:p})]})]}),e.jsxs("div",{className:"equipment-filter",children:[e.jsx("p",{children:"Filters"}),e.jsx("h3",{children:"Vehicle equipment"}),e.jsxs(D,{children:[e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"airConditioner",id:"airConditioner",value:"airConditioner",checked:a.equipment.includes("airConditioner"),onChange:n}),e.jsxs("label",{htmlFor:"airConditioner",children:[e.jsx("img",{src:q,alt:"air conditioner"}),e.jsx("p",{children:"AC"})]})]}),e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"transmission",id:"transmission",value:"transmission",checked:a.equipment.includes("transmission"),onChange:n}),e.jsxs("label",{htmlFor:"transmission",children:[e.jsx("img",{src:F,alt:"transmission"}),e.jsx("p",{children:"Automatic"})]})]}),e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"kitchen",id:"kitchen",value:"kitchen",checked:a.equipment.includes("kitchen"),onChange:n}),e.jsxs("label",{htmlFor:"kitchen",children:[e.jsx("img",{src:L,alt:"kitchen"}),e.jsx("p",{children:"Kitchen"})]})]}),e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"TV",id:"TV",value:"TV",checked:a.equipment.includes("TV"),onChange:n}),e.jsxs("label",{htmlFor:"TV",children:[e.jsx("img",{src:V,alt:"telvision"}),e.jsx("p",{children:"TV"})]})]}),e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"shower",id:"shower",value:"shower",checked:a.equipment.includes("shower"),onChange:n}),e.jsxs("label",{htmlFor:"shower",children:[e.jsx("img",{src:M,alt:"shower"}),e.jsx("p",{children:"Shower/WC"})]})]})]})]}),e.jsxs("div",{className:"type-filter",children:[e.jsx("h3",{children:"Vehicle type"}),e.jsxs(K,{children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"type",id:"panelTruck",value:"panelTruck",checked:a.type==="panelTruck",onChange:p}),e.jsxs("label",{htmlFor:"panelTruck",children:[e.jsx("img",{src:A,alt:"panel truck"}),e.jsx("p",{children:"Van"})]})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"type",id:"fullyIntegrated",value:"fullyIntegrated",checked:a.type==="fullyIntegrated",onChange:p}),e.jsxs("label",{htmlFor:"fullyIntegrated",children:[e.jsx("img",{src:E,alt:"fully integrated"}),e.jsx("p",{children:"Fully integrated"})]})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"type",id:"alcove",value:"alcove",checked:a.type==="alcove",onChange:p}),e.jsxs("label",{htmlFor:"alcove",children:[e.jsx("img",{src:P,alt:"alcove"}),e.jsx("p",{children:"Alcove"})]})]})]})]}),e.jsx(B,{type:"submit",onClick:k,children:"Clear filters"})]})})},O=l.button`
  width: 145px;
  height: 56px;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  background: transparent;
  color: #101828;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.005em;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-red);
  }
`,Q=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .stage {
    position: relative;
    min-height: 80vh;
    width: 800px;
    margin: auto;
  }

  .ground-line {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    height: 6px;
  }
  .ground-line div {
    width: 1600px;
    font-size: 0;
    -webkit-animation: roadLine 3s infinite linear;
    -moz-animation: roadLine 3s infinite linear;
    animation: roadLine 3s infinite linear;
  }
  .ground-line span {
    height: 6px;
    display: inline-block;
    background-color: #4b1a61;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    vertical-align: bottom;
    margin-right: 20px;
  }
  .ground-line .line1 {
    width: 80px;
  }
  .ground-line .line2 {
    width: 580px;
  }
  .ground-line .line3 {
    width: 80px;
  }

  .tree-wrap {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
  }

  .tree {
    position: absolute;
    right: 0;
    margin-left: -30px;
    bottom: 6px;
    z-index: 8;
    -webkit-animation: tree 6.2s infinite linear;
    -moz-animation: tree 6.2s infinite linear;
    animation: tree 6.2s infinite linear;
  }
  .tree .stem {
    width: 6px;
    -webkit-border-radius: 6px 6px 0 0;
    -moz-border-radius: 6px 6px 0 0;
    border-radius: 6px 6px 0 0;
    height: 100px;
    background-color: #5b1f75;
  }
  .tree .stem .branch {
    width: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    background-color: #5b1f75;
    position: absolute;
    z-index: 10;
  }
  .tree .stem .branch1 {
    bottom: 25px;
    height: 30px;
    left: 10px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .tree .stem .branch2 {
    bottom: 40px;
    height: 20px;
    right: 8px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .tree .stem .branch3 {
    bottom: 60px;
    height: 15px;
    left: 5px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .tree .leef {
    z-index: -1;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    background-color: #abec39;
    border: solid 4px #5b1f75;
  }
  .tree .leef1 {
    width: 48px;
    height: 48px;
    top: -15px;
    left: -22px;
  }
  .tree .leef2 {
    width: 68px;
    height: 68px;
    top: 18px;
    left: -32px;
  }
  .tree .leef2::after {
    content: "";
    width: 50%;
    height: 50%;
    position: absolute;
    background-color: #abec39;
    z-index: 9;
    left: 25%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    top: -18px;
  }

  .vehicle-body {
    width: 500px;
    height: 220px;
    position: absolute;
    right: 20%;
    bottom: 33px;
    z-index: 9;
    -webkit-border-radius: 15px 60px 0 15px;
    -moz-border-radius: 15px 60px 0 15px;
    border-radius: 15px 60px 0 15px;
  }
  .vehicle-body .wrap-body {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-animation: body 3s infinite ease;
    -moz-animation: body 3s infinite ease;
    animation: body 3s infinite ease;
  }
  .vehicle-body .body-cover {
    position: absolute;
    border: solid 5px #4b1a61;
    width: 100%;
    background-color: #c6edff;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    -webkit-border-radius: 15px 60px 0 15px;
    -moz-border-radius: 15px 60px 0 15px;
    border-radius: 15px 60px 0 15px;
  }

  .top-roof {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ffe400;
    border-bottom: solid 4px #4b1a61;
    width: 100%;
    height: 14px;
  }

  .rooftop {
    background-color: #fa7775;
    border: solid 4px #4b1a61;
    border-bottom: none;
    bottom: 100%;
    overflow: hidden;
    position: absolute;
  }
  .rooftop::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    background-color: #f96461;
    height: 50%;
  }
  .rooftop.back {
    width: 60px;
    left: 20%;
    height: 15px;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
  }
  .rooftop.front {
    width: 80px;
    left: 40%;
    height: 25px;
    -webkit-border-radius: 4px 20px 0 0;
    -moz-border-radius: 4px 20px 0 0;
    border-radius: 4px 20px 0 0;
  }

  .side-guard {
    background-color: #fa7775;
    border-top: solid 4px #4b1a61;
    bottom: 4px;
    position: absolute;
    left: 4px;
    width: calc(100% - 8px);
    height: 50px;
    -webkit-border-radius: 0 0 0 10px;
    -moz-border-radius: 0 0 0 10px;
    border-radius: 0 0 0 10px;
  }
  .side-guard .shade {
    position: absolute;
    left: 0px;
    -webkit-border-radius: 0 0 0 15px;
    -moz-border-radius: 0 0 0 15px;
    border-radius: 0 0 0 15px;
    bottom: 0px;
    width: 100%;
    background-color: #f96461;
    height: 40%;
  }
  .side-guard .bumper {
    position: absolute;
    border: solid 4px #4b1a61;
    height: 18px;
    position: absolute;
    background-color: #a6a6a6;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .side-guard .bumper.front {
    right: -12px;
    width: 22px;
    height: 22px;
    bottom: -10px;
  }
  .side-guard .bumper.back {
    width: 29px;
    top: 11px;
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    left: -15px;
  }
  .side-guard .front-indicator {
    width: 26px;
    height: 11px;
    -webkit-box-shadow: 0 3px 0 #f96461;
    -moz-box-shadow: 0 3px 0 #f96461;
    box-shadow: 0 3px 0 #f96461;
    position: absolute;
    border: solid 3px #4b1a61;
    right: 10px;
    background-color: #ffe400;
    top: 5px;
  }

  .indi {
    width: 24px;
    height: 10px;
    -webkit-box-shadow: 0 3px 0 #a7e3ff;
    -moz-box-shadow: 0 3px 0 #a7e3ff;
    box-shadow: 0 3px 0 #a7e3ff;
    position: absolute;
    border: solid 3px #4b1a61;
    left: 10px;
    background-color: #ffa700;
  }
  .indi.back-top-indicator {
    top: 24px;
  }
  .indi.back-bottom-indicator {
    bottom: 60px;
  }

  .back-window {
    height: 53%;
    top: 14%;
    left: 50px;
    width: 190px;
    position: absolute;
  }
  .back-window .window-base {
    width: 100%;
    height: 12px;
    background-color: #abec39;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    border: solid 3px #4b1a61;
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 1;
  }
  .back-window .window-base.top {
    top: 0;
  }
  .back-window .window-base.bottom {
    bottom: 0;
    position: absolute;
    left: 0;
  }
  .back-window .sun-shade {
    background-color: #fa7775;
    border: solid 4px #4b1a61;
    border-top: none;
    width: 90%;
    margin-left: 4.5%;
    height: 23px;
    position: relative;
    z-index: 0;
  }
  .back-window .curtain {
    position: relative;
    width: 90%;
    margin-left: 5%;
    font-size: 0;
    z-index: 2;
  }
  .back-window .curtain span {
    width: calc(100% / 8);
    height: 15px;
    -webkit-border-radius: 0 0 15px 15px;
    -moz-border-radius: 0 0 15px 15px;
    border-radius: 0 0 15px 15px;
    display: inline-block;
    background-color: #fa7775;
    border: solid 4px #4b1a61;
    border-top: none;
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    margin-left: -4px;
    -webkit-animation: curtain 0.5s infinite linear;
    -moz-animation: curtain 0.5s infinite linear;
    animation: curtain 0.5s infinite linear;
  }
  .back-window .curtain span:nth-child(even) {
    background-color: #fff;
  }
  .back-window .curtain span + span {
    width: calc((100% / 8) + 2px);
  }
  .back-window .windows-glass-wrap {
    background-color: #f5f4f1;
    border-left: solid 4px #4b1a61;
    height: 60px;
    width: 80%;
    margin-left: 9%;
    margin-top: -10px;
    border-right: solid 4px #4b1a61;
    padding: 2px 5px;
    font-size: 0;
  }
  .back-window .windows-glass-wrap .glass {
    background-color: #7ad5ff;
    overflow: hidden;
    border: solid 3px #4b1a61;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    width: 46%;
    height: 100%;
    margin-top: -3px;
    display: inline-block;
    position: relative;
    z-index: 0;
  }
  .back-window .windows-glass-wrap .glass::after {
    content: "";
    position: absolute;
    background-color: rgba(71, 197, 255, 0.5);
    width: 100%;
    -webkit-border-radius: 0 0 10px 10px;
    -moz-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
    height: 60%;
    top: 0;
    left: 0;
  }
  .back-window .windows-glass-wrap .glass + .glass {
    margin-left: 4%;
  }
  .back-window .windows-glass-wrap .light {
    width: 130%;
    height: 100%;
    position: absolute;
    top: -7px;
    left: -45%;
    -webkit-opacity: 0.5;
    -moz-opacity: 0.5;
    opacity: 0.5;
    z-index: 0;
    -webkit-transform: rotate(115deg);
    -moz-transform: rotate(115deg);
    transform: rotate(115deg);
    -webkit-animation: glare 2s infinite linear;
    -moz-animation: glare 2s infinite linear;
    animation: glare 2s infinite linear;
  }
  .back-window .windows-glass-wrap .light span {
    width: 100%;
    display: block;
    margin-bottom: 2px;
    background-color: #fff;
  }
  .back-window .windows-glass-wrap .light .light1 {
    height: 10px;
  }
  .back-window .windows-glass-wrap .light .light2 {
    height: 3px;
  }
  .back-window .windows-glass-wrap .light .light3 {
    height: 6px;
  }

  .main-door {
    position: absolute;
    right: 120px;
    bottom: 0;
    border: solid 4px #4b1a61;
    -webkit-border-radius: 10px 10px 0 0;
    -moz-border-radius: 10px 10px 0 0;
    border-radius: 10px 10px 0 0;
    width: 80px;
    height: 80%;
    z-index: 9;
    background-color: #f5f4f1;
  }
  .main-door::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 11%;
    background-color: #eae8e2;
  }
  .main-door .glass {
    background-color: #60cdff;
    border: solid 3px #4b1a61;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    width: 85%;
    height: 60px;
    margin-top: 5px;
    display: inline-block;
    overflow: hidden;
    position: relative;
    z-index: 0;
  }
  .main-door .glass::after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    -webkit-border-radius: 12px 12px 10px 10px;
    -moz-border-radius: 12px 12px 10px 10px;
    border-radius: 12px 12px 10px 10px;
    height: 60%;
    bottom: 0;
    left: 0;
  }
  .main-door .glass .light {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-opacity: 0.5;
    -moz-opacity: 0.5;
    opacity: 0.5;
    z-index: 0;
  }
  .main-door .glass .light span {
    height: 70%;
    margin-top: 15%;
    display: inline-block;
    background-color: #14b5ff;
  }
  .main-door .glass .light .light1 {
    width: 15px;
    -webkit-border-radius: 10px 0 0 10px;
    -moz-border-radius: 10px 0 0 10px;
    border-radius: 10px 0 0 10px;
  }
  .main-door .glass .light .light2 {
    width: 10px;
    -webkit-border-radius: 0 10px 10px 0;
    -moz-border-radius: 0 10px 10px 0;
    border-radius: 0 10px 10px 0;
  }
  .main-door .door-handle {
    background-color: #fa7775;
    border: solid 0.2em #4b1a61;
    width: 10px;
    margin-left: 4.5%;
    height: 22px;
    position: absolute;
    z-index: 0;
    right: 5px;
    bottom: 40%;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
  .main-door .door-handle::before {
    content: "";
    position: absolute;
    width: 50%;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
    height: 100%;
    display: block;
  }

  .front-window {
    top: 14%;
    right: 20px;
    width: 70px;
    height: 60%;
    position: absolute;
  }
  .front-window .window-base {
    width: 100%;
    height: 10px;
    background-color: #abec39;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    border: solid 3px #4b1a61;
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 1;
    top: 0;
  }
  .front-window .sun-shade {
    background-color: #fa7775;
    border: solid 4px #4b1a61;
    border-top: none;
    width: 90%;
    margin-left: 4.5%;
    height: 23px;
    position: relative;
    z-index: 0;
  }
  .front-window .curtain {
    position: relative;
    width: 90%;
    margin-left: 6%;
    font-size: 0;
    z-index: 2;
  }
  .front-window .curtain span {
    width: calc(100% / 3);
    height: 15px;
    -webkit-border-radius: 0 0 15px 15px;
    -moz-border-radius: 0 0 15px 15px;
    border-radius: 0 0 15px 15px;
    display: inline-block;
    background-color: #fa7775;
    border: solid 4px #4b1a61;
    border-top: none;
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.15);
    margin-left: -4px;
  }
  .front-window .curtain span:nth-child(even) {
    background-color: #fff;
  }
  .front-window .curtain span + span {
    width: calc((100% / 3) + 2px);
  }
  .front-window .windows-glass-wrap {
    height: 40px;
    width: 80%;
    margin-left: 9%;
    margin-top: -10px;
    border: solid 4px #4b1a61;
    border-top: none;
    background-color: #7ad5ff;
    -webkit-border-radius: 0 0 10px 10px;
    -moz-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
    padding: 2px 5px;
    font-size: 0;
    overflow: hidden;
    position: relative;
  }
  .front-window .windows-glass-wrap .light {
    width: 120%;
    height: 100%;
    position: absolute;
    top: -7px;
    left: -15%;
    -webkit-opacity: 0.4;
    -moz-opacity: 0.4;
    opacity: 0.4;
    z-index: 0;
    -webkit-transform: rotate(115deg);
    -moz-transform: rotate(115deg);
    transform: rotate(115deg);
    -webkit-animation: glare 1.5s infinite linear;
    -moz-animation: glare 1.5s infinite linear;
    animation: glare 1.5s infinite linear;
  }
  .front-window .windows-glass-wrap .light span {
    width: 100%;
    display: block;
    margin-bottom: 2px;
    background-color: #fff;
  }
  .front-window .windows-glass-wrap .light .light1 {
    height: 10px;
  }
  .front-window .windows-glass-wrap .light .light2 {
    height: 3px;
  }
  .front-window .windows-glass-wrap .light .light3 {
    height: 6px;
  }
  .front-window .air-hole {
    position: absolute;
    width: 100%;
    bottom: 5px;
    padding-top: 5px;
  }
  .front-window .air-hole span {
    width: 30px;
    height: 5px;
    background-color: #f5f4f1;
    display: block;
    margin: auto;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    border: solid 0.15em #4b1a61;
  }
  .front-window .air-hole span + span {
    margin-top: 1px;
  }

  .wheel-wrap {
    width: 80px;
    height: 80px;
    position: absolute;
    z-index: 9;
    bottom: -40px;
  }
  .wheel-wrap .wheel-shadow {
    width: 100%;
    height: 100%;
    display: block;
    border-top: solid 40px #4b1a61;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: relative;
    -webkit-animation: wheelShadow 3s infinite ease;
    -moz-animation: wheelShadow 3s infinite ease;
    animation: wheelShadow 3s infinite ease;
  }
  .wheel-wrap.back {
    left: 80px;
  }
  .wheel-wrap.front {
    right: 70px;
  }
  .wheel-wrap .wheel {
    width: 76%;
    height: 76%;
    left: 12%;
    top: 12%;
    position: absolute;
    text-align: center;
    font-size: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .wheel-wrap .wheel::after {
    content: "";
    top: 1px;
    left: 2px;
    height: 100%;
    position: absolute;
    width: calc(100% - 4px);
    -webkit-box-shadow: inset 0 7px 0 #747474;
    -moz-box-shadow: inset 0 7px 0 #747474;
    box-shadow: inset 0 7px 0 #747474;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    z-index: 9;
  }
  .wheel-wrap .wheel .wheel-outer {
    position: absolute;
    width: 100%;
    background-color: #a6a6a6;
    border: solid 3px #4b1a61;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    top: 0;
    left: 0;
    height: 100%;
    -webkit-animation: wheel 0.4s infinite linear;
    -moz-animation: wheel 0.4s infinite linear;
    animation: wheel 0.4s infinite linear;
  }
  .wheel-wrap .wheel .wheel-outer::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 5px;
    background-color: #b8b8b8;
    top: 5px;
    left: 16px;
    z-index: 8;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .wheel-wrap .wheel .wheel-cup {
    width: 60%;
    height: 60%;
    margin-top: 20%;
    display: inline-block;
    position: relative;
    background-color: #60cdff;
    border: solid 3px #3b154d;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    padding: 5px 4px;
  }
  .wheel-wrap .wheel .wheel-cup::after {
    content: "";
    width: 8px;
    position: absolute;
    left: 41%;
    top: 40%;
    height: 3px;
    background-color: #00aaf9;
    display: inline-block;
  }
  .wheel-wrap .wheel .wheel-cup span {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 1px;
    background-color: #a6a6a6;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: solid 1px #3b154d;
  }

  .love-wrap {
    position: absolute;
    left: 0;
    margin-top: 0;
    top: 0;
  }
  .love-wrap .love {
    width: 34px;
    height: 34px;
    position: relative;
    display: inline-block;
    font-size: 0;
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    transform: rotate(30deg);
  }
  .love-wrap .love .circle {
    background-color: #fe1239;
    width: 24px;
    height: 24px;
    position: absolute;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: inline-block;
  }
  .love-wrap .love .circle1 {
    left: 0;
    bottom: 0;
  }
  .love-wrap .love .circle2 {
    right: 0;
    top: 0;
  }
  .love-wrap .love .square {
    background-color: #fe1239;
    width: 24px;
    height: 24px;
    position: absolute;
    display: inline-block;
    right: 0;
    bottom: 0;
  }

  .love-front {
    position: absolute;
    right: 24%;
    bottom: 30%;
    z-index: 8;
    -webkit-transform: rotate(50deg);
    -moz-transform: rotate(50deg);
    transform: rotate(50deg);
  }
  .love-front .love-wrap {
    -webkit-opacity: 0;
    -moz-opacity: 0;
    opacity: 0;
  }
  .love-front .love-wrap:nth-child(1) {
    -webkit-animation: love1 5s infinite ease-in 0.5s;
    -moz-animation: love1 5s infinite ease-in 0.5s;
    animation: love1 5s infinite ease-in 0.5s;
  }
  .love-front .love-wrap:nth-child(2) {
    -webkit-animation: love1 5s infinite ease-in 1s;
    -moz-animation: love1 5s infinite ease-in 1s;
    animation: love1 5s infinite ease-in 1s;
  }
  .love-front .love-wrap:nth-child(3) {
    -webkit-animation: love1 5s infinite ease-in 1.5s;
    -moz-animation: love1 5s infinite ease-in 1.5s;
    animation: love1 5s infinite ease-in 1.5s;
  }
  .love-front .love-wrap:nth-child(4) {
    -webkit-animation: love1 5s infinite ease-in 2s;
    -moz-animation: love1 5s infinite ease-in 2s;
    animation: love1 5s infinite ease-in 2s;
  }
  .love-front .love-wrap:nth-child(5) {
    -webkit-animation: love2 6s infinite ease-in 2.5s;
    -moz-animation: love2 6s infinite ease-in 2.5s;
    animation: love2 6s infinite ease-in 2.5s;
  }
  .love-front .love-wrap:nth-child(6) {
    -webkit-animation: love2 6s infinite ease-in 3s;
    -moz-animation: love2 6s infinite ease-in 3s;
    animation: love2 6s infinite ease-in 3s;
  }
  .love-front .love-wrap:nth-child(7) {
    -webkit-animation: love2 6s infinite ease-in 3.5s;
    -moz-animation: love2 6s infinite ease-in 3.5s;
    animation: love2 6s infinite ease-in 3.5s;
  }
  .love-front .love-wrap:nth-child(8) {
    -webkit-animation: love2 6s infinite ease-in 4s;
    -moz-animation: love2 6s infinite ease-in 4s;
    animation: love2 6s infinite ease-in 4s;
  }
  .love-front .love-wrap:nth-child(9) {
    -webkit-animation: love3 4s infinite ease-in 4.5s;
    -moz-animation: love3 4s infinite ease-in 4.5s;
    animation: love3 4s infinite ease-in 4.5s;
  }
  .love-front .love-wrap:nth-child(10) {
    -webkit-animation: love3 4s infinite ease-in 5s;
    -moz-animation: love3 4s infinite ease-in 5s;
    animation: love3 4s infinite ease-in 5s;
  }
  .love-front .love-wrap:nth-child(11) {
    -webkit-animation: love3 4s infinite ease-in 5.5s;
    -moz-animation: love3 4s infinite ease-in 5.5s;
    animation: love3 4s infinite ease-in 5.5s;
  }
  .love-front .love-wrap:nth-child(12) {
    -webkit-animation: love3 4s infinite ease-in 6s;
    -moz-animation: love3 4s infinite ease-in 6s;
    animation: love3 4s infinite ease-in 6s;
  }

  .love-back {
    position: absolute;
    left: 18%;
    bottom: 20%;
    z-index: 5;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
  .love-back .love {
    -webkit-transform: rotate(100deg);
    -moz-transform: rotate(100deg);
    transform: rotate(100deg);
  }
  .love-back .love-wrap {
    right: 0;
  }
  .love-back .love-wrap:nth-child(1) {
    -webkit-animation: love4 4s infinite ease-in 0.5s;
    -moz-animation: love4 4s infinite ease-in 0.5s;
    animation: love4 4s infinite ease-in 0.5s;
  }
  .love-back .love-wrap:nth-child(2) {
    -webkit-animation: love4 4s infinite ease-in 1s;
    -moz-animation: love4 4s infinite ease-in 1s;
    animation: love4 4s infinite ease-in 1s;
  }
  .love-back .love-wrap:nth-child(3) {
    -webkit-animation: love4 4s infinite ease-in 1.5s;
    -moz-animation: love4 4s infinite ease-in 1.5s;
    animation: love4 4s infinite ease-in 1.5s;
  }
  .love-back .love-wrap:nth-child(4) {
    -webkit-animation: love4 4s infinite ease-in 2s;
    -moz-animation: love4 4s infinite ease-in 2s;
    animation: love4 4s infinite ease-in 2s;
  }
  .love-back .love-wrap:nth-child(1) {
    -webkit-animation: love4 4s infinite ease-in 0s;
    -moz-animation: love4 4s infinite ease-in 0s;
    animation: love4 4s infinite ease-in 0s;
  }
  .love-back .love-wrap:nth-child(5) {
    -webkit-animation: love5 3s infinite ease-in 2.5s;
    -moz-animation: love5 3s infinite ease-in 2.5s;
    animation: love5 3s infinite ease-in 2.5s;
  }
  .love-back .love-wrap:nth-child(6) {
    -webkit-animation: love5 3s infinite ease-in 3s;
    -moz-animation: love5 3s infinite ease-in 3s;
    animation: love5 3s infinite ease-in 3s;
  }
  .love-back .love-wrap:nth-child(7) {
    -webkit-animation: love5 3s infinite ease-in 3.5s;
    -moz-animation: love5 3s infinite ease-in 3.5s;
    animation: love5 3s infinite ease-in 3.5s;
  }
  .love-back .love-wrap:nth-child(8) {
    -webkit-animation: love5 3s infinite ease-in 4s;
    -moz-animation: love5 3s infinite ease-in 4s;
    animation: love5 3s infinite ease-in 4s;
  }

  @-webkit-keyframes love1 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
      -moz-transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
      transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
    }
  }
  @-moz-keyframes love1 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
      -moz-transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
      transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
    }
  }
  @-ms-keyframes love1 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
      -moz-transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
      transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
    }
  }
  @keyframes love1 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
      -moz-transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
      transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
    }
  }
  @-webkit-keyframes love2 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
      -moz-transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
      transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
    }
  }
  @-moz-keyframes love2 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
      -moz-transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
      transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
    }
  }
  @-ms-keyframes love2 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
      -moz-transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
      transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
    }
  }
  @keyframes love2 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
      -moz-transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
      transform: scale(0.7) rotate(-50deg) translate3d(-80px, -450px, 0);
    }
  }
  @-webkit-keyframes love3 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.65) rotate(-60deg)
        translate3d(-40px, -400px, 0);
      -moz-transform: scale(0.65) rotate(-60deg) translate3d(-40px, -400px, 0);
      transform: scale(0.65) rotate(-60deg) translate3d(-40px, -400px, 0);
    }
  }
  @-moz-keyframes love3 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.65) rotate(-60deg)
        translate3d(-40px, -400px, 0);
      -moz-transform: scale(0.65) rotate(-60deg) translate3d(-40px, -400px, 0);
      transform: scale(0.65) rotate(-60deg) translate3d(-40px, -400px, 0);
    }
  }
  @-ms-keyframes love3 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.65) rotate(-60deg)
        translate3d(-40px, -400px, 0);
      -moz-transform: scale(0.65) rotate(-60deg) translate3d(-40px, -400px, 0);
      transform: scale(0.65) rotate(-60deg) translate3d(-40px, -400px, 0);
    }
  }
  @keyframes love3 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      -moz-transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
      transform: scale(0.3) rotate(0deg) translate3d(100px, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.65) rotate(-60deg)
        translate3d(-40px, -400px, 0);
      -moz-transform: scale(0.65) rotate(-60deg) translate3d(-40px, -400px, 0);
      transform: scale(0.65) rotate(-60deg) translate3d(-40px, -400px, 0);
    }
  }
  @-webkit-keyframes love4 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      -moz-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
      -moz-transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
      transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
    }
  }
  @-moz-keyframes love4 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      -moz-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
      -moz-transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
      transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
    }
  }
  @-ms-keyframes love4 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      -moz-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
      -moz-transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
      transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
    }
  }
  @keyframes love4 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      -moz-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
      -moz-transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
      transform: scale(0.6) rotate(-25deg) translate3d(100px, -200px, 0);
    }
  }
  @-webkit-keyframes love5 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      -moz-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
      -moz-transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
      transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
    }
  }
  @-moz-keyframes love5 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      -moz-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
      -moz-transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
      transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
    }
  }
  @-ms-keyframes love5 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      -moz-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
      -moz-transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
      transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
    }
  }
  @keyframes love5 {
    0% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      -moz-transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
      transform: scale(0.2) rotate(0) translate3d(0, 0, 0);
    }
    50% {
      -webkit-opacity: 1;
      -moz-opacity: 1;
      opacity: 1;
    }
    100% {
      -webkit-opacity: 0;
      -moz-opacity: 0;
      opacity: 0;
      -webkit-transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
      -moz-transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
      transform: scale(0.5) rotate(-20deg) translate3d(200px, -250px, 0);
    }
  }
  @-webkit-keyframes wheel {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes wheel {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-ms-keyframes wheel {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes wheel {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes wheelShadow {
    0%,
    20%,
    40%,
    45%,
    60%,
    80%,
    100% {
      top: 0;
    }
    70% {
      top: 3px;
    }
    30%,
    90% {
      top: 6px;
    }
  }
  @-moz-keyframes wheelShadow {
    0%,
    20%,
    40%,
    45%,
    60%,
    80%,
    100% {
      top: 0;
    }
    70% {
      top: 3px;
    }
    30%,
    90% {
      top: 6px;
    }
  }
  @-ms-keyframes wheelShadow {
    0%,
    20%,
    40%,
    45%,
    60%,
    80%,
    100% {
      top: 0;
    }
    70% {
      top: 3px;
    }
    30%,
    90% {
      top: 6px;
    }
  }
  @keyframes wheelShadow {
    0%,
    20%,
    40%,
    45%,
    60%,
    80%,
    100% {
      top: 0;
    }
    70% {
      top: 3px;
    }
    30%,
    90% {
      top: 6px;
    }
  }
  @-webkit-keyframes body {
    0%,
    20%,
    40%,
    45%,
    60%,
    80%,
    100% {
      top: 0;
    }
    70% {
      top: 3px;
    }
    30%,
    90% {
      top: 6px;
    }
  }
  @-moz-keyframes body {
    0%,
    20%,
    40%,
    45%,
    60%,
    80%,
    100% {
      top: 0;
    }
    70% {
      top: 3px;
    }
    30%,
    90% {
      top: 6px;
    }
  }
  @-ms-keyframes body {
    0%,
    20%,
    40%,
    45%,
    60%,
    80%,
    100% {
      top: 0;
    }
    70% {
      top: 3px;
    }
    30%,
    90% {
      top: 6px;
    }
  }
  @keyframes body {
    0%,
    20%,
    40%,
    45%,
    60%,
    80%,
    100% {
      top: 0;
    }
    70% {
      top: 3px;
    }
    30%,
    90% {
      top: 6px;
    }
  }
  @-webkit-keyframes glare {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }
  @-moz-keyframes glare {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }
  @-ms-keyframes glare {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }
  @keyframes glare {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }
  @-webkit-keyframes roadLine {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(-800px, 0);
      -moz-transform: translate(-800px, 0);
      transform: translate(-800px, 0);
    }
  }
  @-moz-keyframes roadLine {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(-800px, 0);
      -moz-transform: translate(-800px, 0);
      transform: translate(-800px, 0);
    }
  }
  @-ms-keyframes roadLine {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(-800px, 0);
      -moz-transform: translate(-800px, 0);
      transform: translate(-800px, 0);
    }
  }
  @keyframes roadLine {
    from {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    to {
      -webkit-transform: translate(-800px, 0);
      -moz-transform: translate(-800px, 0);
      transform: translate(-800px, 0);
    }
  }
  @-webkit-keyframes tree {
    from {
      -webkit-transform: translate(50px, 0);
      -moz-transform: translate(50px, 0);
      transform: translate(50px, 0);
    }
    to {
      -webkit-transform: translate(-1600px, 0);
      -moz-transform: translate(-1600px, 0);
      transform: translate(-1600px, 0);
    }
  }
  @-moz-keyframes tree {
    from {
      -webkit-transform: translate(50px, 0);
      -moz-transform: translate(50px, 0);
      transform: translate(50px, 0);
    }
    to {
      -webkit-transform: translate(-1600px, 0);
      -moz-transform: translate(-1600px, 0);
      transform: translate(-1600px, 0);
    }
  }
  @-ms-keyframes tree {
    from {
      -webkit-transform: translate(50px, 0);
      -moz-transform: translate(50px, 0);
      transform: translate(50px, 0);
    }
    to {
      -webkit-transform: translate(-1600px, 0);
      -moz-transform: translate(-1600px, 0);
      transform: translate(-1600px, 0);
    }
  }
  @keyframes tree {
    from {
      -webkit-transform: translate(50px, 0);
      -moz-transform: translate(50px, 0);
      transform: translate(50px, 0);
    }
    to {
      -webkit-transform: translate(-1600px, 0);
      -moz-transform: translate(-1600px, 0);
      transform: translate(-1600px, 0);
    }
  }
  body {
    font-family: "Muli", sans-serif;
  }

  .footer {
    position: fixed;
    right: 10px;
    bottom: 10px;
    color: #ea4c89;
    text-decoration: none;
    text-align: left;
    font-weight: bold;
    font-size: 10px;
  }
  .footer span {
    font-size: 12px;
  }
  .footer a {
    font-weight: bold;
    font-size: 10px;
    color: #ea4c89;
    text-decoration: underline;
  }
  .footer a:hover {
    text-decoration: none;
  }
  .footer .dribble img {
    max-width: 100%;
    width: 26px;
    position: relative;
    top: -2px;
    vertical-align: middle;
  }
`,g=()=>e.jsxs(Q,{children:[e.jsxs("div",{className:"stage",children:[e.jsx("div",{className:"ground-line",children:e.jsxs("div",{children:[e.jsx("span",{className:"line1"}),e.jsx("span",{className:"line2"}),e.jsx("span",{className:"line3"}),e.jsx("span",{className:"line1"}),e.jsx("span",{className:"line2"}),e.jsx("span",{className:"line3"})]})}),e.jsx("div",{className:"tree-wrap",children:e.jsxs("div",{className:"tree",children:[e.jsxs("div",{className:"stem",children:[e.jsx("div",{className:"branch branch1"}),e.jsx("div",{className:"branch branch2"}),e.jsx("div",{className:"branch branch3"})]}),e.jsx("div",{className:"leef leef1"}),e.jsx("div",{className:"leef leef2"})]})}),e.jsxs("div",{className:"love-front",children:[e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})})]}),e.jsxs("div",{className:"love-back",children:[e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})}),e.jsx("div",{className:"love-wrap",children:e.jsxs("div",{className:"love",children:[e.jsx("span",{className:"circle circle1"}),e.jsx("span",{className:"circle circle2"}),e.jsx("span",{className:"square"})]})})]}),e.jsxs("div",{className:"vehicle-body",children:[e.jsxs("div",{className:"wrap-body",children:[e.jsx("div",{className:"rooftop back"}),e.jsx("div",{className:"rooftop front"}),e.jsxs("div",{className:"body-cover",children:[e.jsx("div",{className:"top-roof"}),e.jsx("div",{className:"indi back-top-indicator"}),e.jsx("div",{className:"indi back-bottom-indicator"}),e.jsxs("div",{className:"back-window",children:[e.jsx("div",{className:"window-base top"}),e.jsx("div",{className:"window-base bottom"}),e.jsx("div",{className:"sun-shade"}),e.jsxs("div",{className:"curtain",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsxs("div",{className:"windows-glass-wrap",children:[e.jsx("div",{className:"glass",children:e.jsxs("div",{className:"light",children:[e.jsx("span",{className:"light1"}),e.jsx("span",{className:"light2"}),e.jsx("span",{className:"light3"})]})}),e.jsx("div",{className:"glass",children:e.jsxs("div",{className:"light",children:[e.jsx("span",{className:"light1"}),e.jsx("span",{className:"light2"}),e.jsx("span",{className:"light3"})]})})]})]}),e.jsxs("div",{className:"front-window",children:[e.jsx("div",{className:"window-base"}),e.jsx("div",{className:"sun-shade"}),e.jsxs("div",{className:"curtain",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]}),e.jsx("div",{className:"windows-glass-wrap",children:e.jsxs("div",{className:"light",children:[e.jsx("span",{className:"light1"}),e.jsx("span",{className:"light2"}),e.jsx("span",{className:"light3"})]})}),e.jsxs("div",{className:"air-hole",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]})]}),e.jsxs("div",{className:"main-door",children:[e.jsx("div",{className:"glass",children:e.jsxs("div",{className:"light",children:[e.jsx("span",{className:"light1"}),e.jsx("span",{className:"light2"})]})}),e.jsx("div",{className:"door-handle"})]}),e.jsxs("div",{className:"side-guard",children:[e.jsx("div",{className:"shade"}),e.jsx("div",{className:"bumper back"}),e.jsx("div",{className:"bumper front"}),e.jsx("div",{className:"front-indicator"})]})]}),e.jsxs("div",{className:"wheel-wrap back",children:[e.jsx("div",{className:"wheel-shadow"}),e.jsx("div",{className:"wheel",children:e.jsx("div",{className:"wheel-outer",children:e.jsxs("div",{className:"wheel-cup",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})})]}),e.jsxs("div",{className:"wheel-wrap front",children:[e.jsx("div",{className:"wheel-shadow"}),e.jsx("div",{className:"wheel",children:e.jsx("div",{className:"wheel-outer",children:e.jsxs("div",{className:"wheel-cup",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})})})]})]})]}),e.jsxs("div",{className:"footer",children:["Made With",e.jsx("span",{children:"♥"}),"by",e.jsx("a",{href:"http://www.uxdots.com/",target:"_blank",rel:"noopener noreferrer",children:"UXDots"}),"| Inspired Dribble Shot"]})]}),Y=()=>{const t=h(H),o=t.length,x=h(U),b=h(_),[i,a]=m.useState(1),r=4,p=()=>{a(n=>n+1),I("Loading more campers...")};return e.jsx(e.Fragment,{children:x?e.jsx(g,{}):e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(S,{campers:t.slice(0,i*r)}),o>i*r&&e.jsx(O,{onClick:p,children:b?"Loading...":"Load more"})]})})},ae=()=>{const[t,o]=m.useState({}),x=h(X),b=i=>{o(i)};return e.jsx(N,{children:e.jsxs(T,{children:[e.jsx(J,{onFiltersChange:b}),x?e.jsx(g,{}):e.jsx(Y,{})]})})};export{ae as default};
