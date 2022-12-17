import WelcomeMessage from "./PageIntroElements/WelcomeMessage";
import ProceedButton from "./PageIntroElements/ProceedButton";
import "../css/compiled/PageIntro.css";
import { useEffect } from "react";

function PageIntro() {
  useEffect(()=>{
    document.body.style.overflow="hidden";
  }, [])
  return (
    <div id="pageIntroWrapper">
      <WelcomeMessage />
      <ProceedButton />
    </div>
  );
}

export default PageIntro;
