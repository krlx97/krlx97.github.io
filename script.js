const testnetRef = document.getElementById("testnet");
const testnetSectionRef = document.getElementById("testnetSection");
const mainnetRef = document.getElementById("mainnet");
const mainnetSectionRef = document.getElementById("mainnetSection");
const sliderRef = document.getElementById("slider");
const appProgressBarRef = document.getElementById("appProgressBar");
const appRef = document.getElementById("app");

testnetRef.onclick = () => {
  sliderRef.style.transform = "translateX(0%)";
  testnetSectionRef.style.display = "initial";
  testnetSectionRef.style.opacity = "1";
  mainnetSectionRef.style.display = "none";
  mainnetSectionRef.style.opacity = "0";
};

mainnetRef.onclick = () => {
  sliderRef.style.transform = "translateX(100%)";
  testnetSectionRef.style.display = "none";
  testnetSectionRef.style.opacity = "0";
  mainnetSectionRef.style.display = "initial";
  mainnetSectionRef.style.opacity = "1";
};

appRef.onscroll = () => {
  const {scrollTop, scrollHeight, clientHeight} = appRef;
  const percent = scrollTop / (scrollHeight - clientHeight) * 100;
  appProgressBarRef.style.width = `${percent}%`;
};

document.body.onload = () => {
  testnetSectionRef.style.display = "initial";
  testnetSectionRef.style.opacity = "1";
};