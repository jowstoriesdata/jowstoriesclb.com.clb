import imgBanner from "figma:asset/6e041c23bbe6d39a19f5b5fe17d32d55e02bb0f5.png";
import { imgEncabezado, imgLogo } from "./svg-z2nfn";

function Banner() {
  return <div className="absolute bg-center bg-cover bg-no-repeat h-[764px] left-0 top-0 w-[1440px]" data-name="BANNER" style={{ backgroundImage: `url('${imgBanner}')` }} />;
}

function Encabezado() {
  return (
    <div className="absolute h-[154px] left-0 top-0 w-[1440px]" data-name="ENCABEZADO">
      <img className="block max-w-none size-full" src={imgEncabezado} />
    </div>
  );
}

function CorreoElectronico() {
  return (
    <div className="absolute contents top-[1550px]" data-name="Correo Electrónico" style={{ left: "calc(50% + 10px)" }}>
      <div className="absolute h-[60px] top-[1550px] w-[504px]" style={{ left: "calc(50% + 10px)" }}>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      </div>
      <div className="absolute flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] text-[16px] text-white top-[1579.5px] translate-y-[-50%] w-[453px]" style={{ left: "calc(50% + 34px)" }}>
        <p className="leading-[normal]">Ingresa tu correo electrónico</p>
      </div>
    </div>
  );
}

function RecibirButtom() {
  return (
    <div className="absolute contents top-[1550px]" data-name="Recibir Buttom" style={{ left: "calc(83.333% + 55px)" }}>
      <div className="absolute bg-white h-[60px] top-[1550px] w-[150px]" style={{ left: "calc(83.333% + 55px)" }} />
      <div className="absolute flex flex-col font-['Figtree:Bold',_sans-serif] font-bold justify-center leading-[0] text-[16px] text-black text-nowrap top-[1579.5px] translate-y-[-50%]" style={{ left: "calc(83.333% + 99px)" }}>
        <p className="leading-[normal] whitespace-pre">RECIBIR</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white relative size-full" data-name="Home">
      <Banner />
      <div className="absolute flex flex-col font-['Figtree:Bold',_sans-serif] font-bold h-[65px] justify-center leading-[0] left-[35px] text-[64px] text-white top-[579.5px] translate-y-[-50%] w-[837px]">
        <p className="leading-[normal]">CRONOLOGÍA HILLGRAVE</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Bold',_sans-serif] font-bold h-[43px] justify-center leading-[0] left-[35px] text-[36px] text-black top-[832.5px] translate-y-[-50%] w-[463px]">
        <p className="leading-[normal]">Bien, esperemos con calma.</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Regular',_sans-serif] font-normal h-[60px] justify-center leading-[0] left-[35px] text-[16px] text-white top-[653px] translate-y-[-50%] w-[594px]">
        <p className="leading-[normal]">Adéntrate en el universo de J.O. Watthom, un cosmos narrativo donde lo cotidiano se transforma en algo extraordinario. Sus historias, inspiradas en la vida del autor, exploran un mundo de fantasía y realidad.</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Black',_sans-serif] font-black h-[19px] justify-center leading-[0] left-[35px] text-[15px] text-white top-[713.5px] translate-y-[-50%] w-[154px]">
        <p className="leading-[normal]">VER MÁS DETALLES</p>
      </div>
      <Encabezado />
      <div className="absolute bg-black h-[196px] left-0 top-[1475px] w-[1440px]" />
      <div className="absolute aspect-[75/22] left-[2.43%] right-[92.36%] translate-y-[-50%]" data-name="LOGO" style={{ top: "calc(50% + 716.5px)" }}>
        <img className="block max-w-none size-full" src={imgLogo} />
      </div>
      <div className="absolute flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] left-[35px] text-[16px] text-nowrap text-white top-[1581.5px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Jow Stories CLB.</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] text-[16px] text-nowrap text-white top-[1542.5px] translate-y-[-50%]" style={{ left: "calc(16.667% + 104px)" }}>
        <p className="leading-[normal] whitespace-pre">Condiciones de uso</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] text-[16px] text-nowrap text-white top-[1572.5px] translate-y-[-50%]" style={{ left: "calc(16.667% + 104px)" }}>
        <p className="leading-[normal] whitespace-pre">Términos</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] text-[16px] text-nowrap text-white top-[1602.5px] translate-y-[-50%]" style={{ left: "calc(16.667% + 104px)" }}>
        <p className="leading-[normal] whitespace-pre">Políticas</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] text-[16px] text-nowrap text-white top-[1542.5px] translate-y-[-50%]" style={{ left: "calc(33.333% + 65px)" }}>
        <p className="leading-[normal] whitespace-pre">Originales</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] text-[16px] text-nowrap text-white top-[1572.5px] translate-y-[-50%]" style={{ left: "calc(33.333% + 65px)" }}>
        <p className="leading-[normal] whitespace-pre">Redes sociales</p>
      </div>
      <CorreoElectronico />
      <RecibirButtom />
      <div className="absolute flex flex-col font-['Figtree:ExtraBold',_sans-serif] font-extrabold justify-center leading-[0] text-[16px] text-nowrap text-white top-[1523.5px] translate-y-[-50%]" style={{ left: "calc(50% + 10px)" }}>
        <p className="leading-[normal] whitespace-pre">RECIBE NOTIFICACIONES DE JOW EN TU EMAIL.</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Medium',_sans-serif] font-medium justify-center leading-[0] text-[13px] text-nowrap text-white top-[1635px] translate-y-[-50%]" style={{ left: "calc(50% + 10px)" }}>
        <p className="leading-[normal] whitespace-pre">Todos los derechos reservados 2025. Jow Stories CLB.</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Bold_Italic',_sans-serif] font-bold italic justify-center leading-[0] left-[35px] opacity-[0.28] text-[48px] text-black text-nowrap top-[1067px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">No hay historias puestas en el calendario.</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Light_Italic',_sans-serif] font-light italic justify-center leading-[0] left-[35px] opacity-[0.28] text-[15px] text-black text-nowrap top-[1113px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Revisa nuevamente más tarde la página para encontrar más información.</p>
      </div>
    </div>
  );
}