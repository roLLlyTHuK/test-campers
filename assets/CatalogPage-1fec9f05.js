import{s as h,u as m,r as d,a as k,g as C,j as e,b as w,L as j,W as F}from"./index-4c291cb6.js";import{F as L,A as q,T as I,K as T,C as V,t as S}from"./CampersGallery-313774d8.js";import{P as A}from"./PagesStyles.styled-3e7e08e4.js";const M="/test-campers/assets/tv-a3af1c79.svg",P="/test-campers/assets/shower-fec19de3.svg",z="/test-campers/assets/van-0b91f168.svg",E="/test-campers/assets/alcove-8cb8fc9f.svg",K="/test-campers/assets/fully-integrated-7c534a1c.svg",N=h.div`
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
`,B=h.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`,W=h.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`,D=h.button`
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
`,G=h(L)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  left: 18px;
  cursor: pointer;
`,R=i=>{var s;return(s=i.campers)==null?void 0:s.campers},U=i=>i.campers.isFirstLoading,H=i=>i.campers.isFiltersLoading,J=i=>i.campers.isMoreLoading,O=i=>i.campers.filteredCampers,Q=({onFiltersChange:i})=>{const s=m(R),[x,u]=d.useState(""),n=k(),[t,o]=d.useState({location:"",equipment:[],type:""});d.useEffect(()=>{(()=>{const p=s.filter(r=>{const g=r.location.toLowerCase().includes(t.location.toLowerCase()),y=t.equipment.every(f=>r.details[f]||r[f]),v=t.type===""||r.form===t.type;return g&&y&&v});n(w(p)),i(t)})()},[t,s,n,i]);const a=c=>{const{name:p,value:r}=c.target;u(r),o({...t,[p]:r})},l=c=>{const{name:p,checked:r}=c.target;o(r?{...t,equipment:[...t.equipment,p]}:{...t,equipment:t.equipment.filter(g=>g!==p)})},b=c=>{c.preventDefault(),o({location:"",equipment:[],type:""})};return d.useEffect(()=>{n(C())},[n]),e.jsx("form",{children:e.jsxs(N,{children:[e.jsxs("div",{className:"location-filter",children:[e.jsx("p",{children:"Location"}),e.jsxs("div",{children:[e.jsx(G,{style:{color:x!==""?"var(--color-black)":"var(--color-light-grey)"}}),e.jsx("input",{type:"text",name:"location",placeholder:"Kyiv, Ukraine",className:"search-input",value:t.location,onChange:a})]})]}),e.jsxs("div",{className:"equipment-filter",children:[e.jsx("p",{children:"Filters"}),e.jsx("h3",{children:"Vehicle equipment"}),e.jsxs(B,{children:[e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"airConditioner",id:"airConditioner",value:"airConditioner",checked:t.equipment.includes("airConditioner"),onChange:l}),e.jsxs("label",{htmlFor:"airConditioner",children:[e.jsx("img",{src:q,alt:"air conditioner"}),e.jsx("p",{children:"AC"})]})]}),e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"transmission",id:"transmission",value:"transmission",checked:t.equipment.includes("transmission"),onChange:l}),e.jsxs("label",{htmlFor:"transmission",children:[e.jsx("img",{src:I,alt:"transmission"}),e.jsx("p",{children:"Automatic"})]})]}),e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"kitchen",id:"kitchen",value:"kitchen",checked:t.equipment.includes("kitchen"),onChange:l}),e.jsxs("label",{htmlFor:"kitchen",children:[e.jsx("img",{src:T,alt:"kitchen"}),e.jsx("p",{children:"Kitchen"})]})]}),e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"TV",id:"TV",value:"TV",checked:t.equipment.includes("TV"),onChange:l}),e.jsxs("label",{htmlFor:"TV",children:[e.jsx("img",{src:M,alt:"telvision"}),e.jsx("p",{children:"TV"})]})]}),e.jsxs("li",{children:[e.jsx("input",{type:"checkbox",name:"shower",id:"shower",value:"shower",checked:t.equipment.includes("shower"),onChange:l}),e.jsxs("label",{htmlFor:"shower",children:[e.jsx("img",{src:P,alt:"shower"}),e.jsx("p",{children:"Shower/WC"})]})]})]})]}),e.jsxs("div",{className:"type-filter",children:[e.jsx("h3",{children:"Vehicle type"}),e.jsxs(W,{children:[e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"type",id:"panelTruck",value:"panelTruck",checked:t.type==="panelTruck",onChange:a}),e.jsxs("label",{htmlFor:"panelTruck",children:[e.jsx("img",{src:z,alt:"panel truck"}),e.jsx("p",{children:"Van"})]})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"type",id:"fullyIntegrated",value:"fullyIntegrated",checked:t.type==="fullyIntegrated",onChange:a}),e.jsxs("label",{htmlFor:"fullyIntegrated",children:[e.jsx("img",{src:K,alt:"fully integrated"}),e.jsx("p",{children:"Fully integrated"})]})]}),e.jsxs("div",{children:[e.jsx("input",{type:"radio",name:"type",id:"alcove",value:"alcove",checked:t.type==="alcove",onChange:a}),e.jsxs("label",{htmlFor:"alcove",children:[e.jsx("img",{src:E,alt:"alcove"}),e.jsx("p",{children:"Alcove"})]})]})]})]}),e.jsx(D,{type:"submit",onClick:b,children:"Clear filters"})]})})},X=h.button`
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
`,Y=()=>{const i=m(O),s=i.length,x=m(U),u=m(J),[n,t]=d.useState(1),o=4,a=()=>{t(l=>l+1),S("Loading more campers...")};return e.jsx(e.Fragment,{children:x?e.jsx(j,{}):e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(V,{campers:i.slice(0,n*o)}),s>n*o&&e.jsx(X,{onClick:a,children:u?"Loading...":"Load more"})]})})},ee=()=>{const[i,s]=d.useState({}),x=m(H),u=n=>{s(n)};return e.jsx(F,{children:e.jsxs(A,{children:[e.jsx(Q,{onFiltersChange:u}),x?e.jsx(j,{}):e.jsx(Y,{})]})})};export{ee as default};