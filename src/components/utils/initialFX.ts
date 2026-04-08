import gsap from "gsap";

function splitIntoSpans(selector: string, type: "chars" | "words"): HTMLElement[] {
  const elements = document.querySelectorAll<HTMLElement>(selector);
  const spans: HTMLElement[] = [];
  elements.forEach((el) => {
    const text = el.innerText;
    el.innerHTML = "";
    const items = type === "chars" ? text.split("") : text.split(" ");
    items.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = type === "words" ? item + " " : item;
      span.style.display = "inline-block";
      el.appendChild(span);
      spans.push(span);
    });
  });
  return spans;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingChars = splitIntoSpans(".landing-info h3, .landing-intro h2, .landing-intro h1", "chars");
  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const landingChars2 = splitIntoSpans(".landing-h2-info", "chars");
  gsap.fromTo(
    landingChars2,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", y: 0, delay: 0.8 }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 }
  );

  const t3 = splitIntoSpans(".landing-h2-info-1", "chars");
  const t4 = splitIntoSpans(".landing-h2-1", "chars");
  const t2b = splitIntoSpans(".landing-h2-info", "chars");
  const t5 = splitIntoSpans(".landing-h2-2", "chars");

  LoopText(t2b, t3);
  LoopText(t4, t5);
}

function LoopText(chars1: HTMLElement[], chars2: HTMLElement[]) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;
  tl.fromTo(chars2, { opacity: 0, y: 80 }, { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay }, 0)
    .fromTo(chars1, { y: 80 }, { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay2 }, 1)
    .fromTo(chars1, { y: 0 }, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay }, 0)
    .to(chars2, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 }, 1);
}