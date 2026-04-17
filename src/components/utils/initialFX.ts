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

type PreparedChars = {
  landing: HTMLElement[];
  secondary: HTMLElement[];
  t3: HTMLElement[];
  t4: HTMLElement[];
  t5: HTMLElement[];
};

let prepared: PreparedChars | null = null;

// Called while the loading screen is still visible — does all heavy DOM work
// (text splitting, initial gsap.set) so the main thread is free when the
// loading screen exits and initialFX() fires.
export function prepareFX() {
  const landing = splitIntoSpans(".landing-info h3, .landing-intro h2, .landing-intro h1", "chars");
  const secondary = splitIntoSpans(".landing-h2-info", "chars");
  const t3 = splitIntoSpans(".landing-h2-info-1", "chars");
  const t4 = splitIntoSpans(".landing-h2-1", "chars");
  const t5 = splitIntoSpans(".landing-h2-2", "chars");

  gsap.set([".header", ".icons-section", ".nav-fade"], { opacity: 0 });
  gsap.set(landing, { opacity: 0, y: 80, filter: "blur(5px)" });
  gsap.set(secondary, { opacity: 0, y: 80, filter: "blur(5px)" });
  gsap.set(".landing-info-h2", { opacity: 0, y: 30 });

  prepared = { landing, secondary, t3, t4, t5 };
}

// Called after the loading screen exits — GSAP-only, no DOM mutations.
export function initialFX() {
  if (!prepared) prepareFX();
  const { landing, secondary, t3, t4, t5 } = prepared!;
  prepared = null;

  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");

  const master = gsap.timeline();

  master.to(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 1, duration: 0.8, ease: "power1.inOut" },
    0
  );

  master.to("body", { backgroundColor: "#0b080c", duration: 0.5 }, 0.2);

  master.to(
    landing,
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.inOut", stagger: 0.025 },
    0.3
  );

  master.to(
    secondary,
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.inOut", stagger: 0.025 },
    0.5
  );

  master.to(
    ".landing-info-h2",
    { opacity: 1, y: 0, duration: 1.0, ease: "power1.inOut" },
    0.8
  );

  master.call(() => {
    LoopText(secondary, t3);
    LoopText(t4, t5);
  }, [], 2.5);
}

function LoopText(chars1: HTMLElement[], chars2: HTMLElement[]) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;
  tl.fromTo(chars2, { opacity: 0, y: 80 }, { opacity: 1, duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay }, 0)
    .fromTo(chars1, { y: 80 }, { duration: 1.2, ease: "power3.inOut", y: 0, stagger: 0.1, delay: delay2 }, 1)
    .fromTo(chars1, { y: 0 }, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay }, 0)
    .to(chars2, { y: -80, duration: 1.2, ease: "power3.inOut", stagger: 0.1, delay: delay2 }, 1);
}
