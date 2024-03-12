
import Image from "next/image"
import logo1 from "@/assets/companies/abdulmonem.png"
import logo2 from "@/assets/companies/abulkhair.png"
import logo3 from "@/assets/companies/aci.png"
import logo16 from "@/assets/companies/akij.png"
import logo4 from "@/assets/companies/AKKHAN.png"
import logo7 from "@/assets/companies/AnandaShipyard.png"
import logo8 from "@/assets/companies/banglalink.png"
import logo10 from "@/assets/companies/Bexi.png"
import logo9 from "@/assets/companies/BG.png"
import logo11 from "@/assets/companies/bkash.png"
import logo5 from "@/assets/companies/BSC.png"
import logo6 from "@/assets/companies/bsrm.png"
import logo12 from "@/assets/companies/BTI.png"
import logo13 from "@/assets/companies/citygroup.png"
import logo14 from "@/assets/companies/ConcordGrouplogo.png"
import logo15 from "@/assets/companies/ConfidenceGrouplogo.png"
import logo17 from "@/assets/companies/Edisongroup.png"
import logo18 from "@/assets/companies/Energypac.png"
import logo19 from "@/assets/companies/EskayefBangladesh.png"
import logo20 from "@/assets/companies/FairElectronics.png"
import logo21 from "@/assets/companies/foodpanda.png"
import logo22 from "@/assets/companies/grameenphone.png"
import logo23 from "@/assets/companies/Jamuna.png"
import logo25 from "@/assets/companies/Karnaphuli.png"
import logo24 from "@/assets/companies/kazi.png"
import logo26 from "@/assets/companies/KhulnaShipyard.png"
import logo27 from "@/assets/companies/ksrm.png"
import logo28 from "@/assets/companies/Meghna.png"
import logo29 from "@/assets/companies/Nasir.png"
import logo30 from "@/assets/companies/Navana.png"
import logo31 from "@/assets/companies/orion.png"
import logo32 from "@/assets/companies/partex.png"
import logo33 from "@/assets/companies/pathao.png"
import logo34 from "@/assets/companies/pran.png"
import logo35 from "@/assets/companies/Rangs.png"
import logo36 from "@/assets/companies/Reneta.png"
import logo37 from "@/assets/companies/RFL.png"
import logo38 from "@/assets/companies/Robi.png"
import logo39 from "@/assets/companies/RSRM.png"
import logo40 from "@/assets/companies/Runner.png"
import logo41 from "@/assets/companies/Sheltech.png"
import logo42 from "@/assets/companies/Sikder.png"
import logo43 from "@/assets/companies/Square.png"
import logo44 from "@/assets/companies/Summit.png"
import logo45 from "@/assets/companies/TK.png"
import logo46 from "@/assets/companies/Transcom.png"
import logo47 from "@/assets/companies/United.png"
import logo48 from "@/assets/companies/Walton.png"
import logo49 from "@/assets/companies/Western.png"

import "./companies.css"



export default function Companies() {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo16,
    logo4,
    logo7,
    logo8,
    logo10,
    logo9,
    logo11,
    logo5,
    logo6,
    logo12,
    logo13,
    logo14,
    logo15,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
    logo25,
    logo24,
    logo26,
    logo27,
    logo28,
    logo29,
    logo30,
    logo31,
    logo32,
    logo33,
    logo34,
    logo35,
    logo36,
    logo37,
    logo38,
    logo39,
    logo40,
    logo41,
    logo42,
    logo43,
    logo44,
    logo45,
    logo46,
    logo47,
    logo48,
    logo49,
  ]

  return (
    <section className="logoMarqueeSection">
      <div className="" id="logoMarqueeSection">
        <div className="default-content-container flex items-center">
          <div className="default-content-container-inner marquee-wrapper relative inline-block overflow-hidden">
            <div className="marquee" style={{ animationDuration: "100s" }}>
              {logos.map((logo, index) => (
                <a href="#" target="_blank" className="marqueelogo" key={index}>
                  <Image
                    src={logo}
                    alt={`Company Logo ${index}`}
                    style={{ width: "auto" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


