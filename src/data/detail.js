import nucleic from "../assets/nucleic.svg";
import protein from "../assets/protein.svg";
import viral from "../assets/viral.svg";
import whole from "../assets/whole.svg";

export const details = [
  {
    id: 1,
    src: whole,
    name: "WHOLE VIRUS",
    description:
      "Whole virus vaccines use a weakened (attenuated) or deactivated form of the pathogen that causes a disease to trigger protective immunity to it.  There are two types of whole virus vaccines. Live attenuated vaccines use a weakened form of the virus, which can still grow and replicate, but does not cause illness. Inactivated vaccines contain viruses whose genetic material has been destroyed by heat, chemicals or radiation so they cannot infect cells and replicate, but can still trigger an immune response.",
    titleOne: "ADVANTAGES AND DISADVANTAGES OF LIVE ATTENUATED VACCINES",
    detailsOne: [
      "Well-established technology",
      "Strong immune response",
      "Immune response involves B cells and T cells",
      "Relatively simple to manufacture",
      "Unsuitable for people with compromised immune systems",
      "May trigger disease in very rare cases",
      "Relatively temperature sensitive, so careful storage necessary",
    ],
    titleTwo: "ADVANTAGES AND DISADVANTAGES OF INACTIVATED VIRUS VACCINES",
    detailsTwo: [
      "Well-established technology",
      "Suitable for people with compromised immune systems",
      "No live components, so no risk of the vaccine triggering disease",
      "Relatively simple to manufacture",
      "Relatively stable",
      "Booster shots may be required",
    ],
  },
  {
    id: 2,
    src: protein,
    name: "PROTEIN SUBUNIT",
    description:
      "Rather than injecting a whole pathogen to trigger an immune response, subunit vaccines (sometimes called acellular vaccines) contain purified pieces of it, which have been specially selected for their ability to stimulate immune cells. Because these fragments are incapable of causing disease, subunit vaccines are considered very safe. There are several types: protein subunit vaccines contain specific isolated proteins from viral or bacterial pathogens; polysaccharide vaccines contain chains of sugar molecules (polysaccharides) found in the cell walls of some bacteria; conjugate subunit vaccines bind a polysaccharide chain to a carrier protein to try and boost the immune response. Only protein subunit vaccines are being developed against the virus that causes COVID-19.",
    title: "ADVANTAGES AND DISADVANTAGES OF PROTEIN SUBUNIT VACCINES",
    details: [
      "Well-established technology",
      "Suitable for people with compromised immune systems",
      "No live components, so no risk of the vaccine triggering disease",
      "Relatively stable",
      "Relatively complex to manufacture",
      "Adjuvants and booster shots may be required",
      "Determining the best antigen combination takes time",
    ],
  },
  {
    id: 3,
    src: nucleic,
    name: "NUCLEID ACID",
    description:
      "Nucleic acid vaccines use genetic material from a disease-causing virus or bacterium (a pathogen) to stimulate an immune response against it. Depending on the vaccine, the genetic material could be DNA or RNA; in both cases it provides the instructions for making a specific protein from the pathogen, which the immune system will recognise as foreign (an antigen). Once inserted into host cells, this genetic material is read by the cell’s own protein-making machinery and used to manufacture antigens, which then trigger an immune response.",
    title: "ADVANTAGES AND DISADVANTAGES OF NUCLEIC ACID VACCINES",
    details: [
      "Immune response involves B cells and T cells",
      "No live components, so no risk of the vaccine triggering disease",
      "Relatively easy to manufacture",
      "Some RNA vaccines require ultra-cold storage",
      "Never been licensed in humans",
      "Booster shots may be required",
    ],
  },
  {
    id: 4,
    src: viral,
    name: "VIRAL VECTOR",
    description:
      "Viral vector-based vaccines differ from most conventional vaccines in that they don’t actually contain antigens, but rather use the body’s own cells to produce them. They do this by using a modified virus (the vector) to deliver genetic code for antigen, in the case of COVID-19 spike proteins found on the surface of the virus, into human cells. By infecting cells and instructing them to make large amounts of antigen, which then trigger an immune response, the vaccine mimics what happens during natural infection with certain pathogens - especially viruses. This has the advantage of triggering a strong cellular immune response by T cells as well the production of antibodies by B cells. An example of a viral vector vaccine is the rVSV-ZEBOV vaccine against Ebola.",
    title: "ADVANTAGES AND DISADVANTAGES OF VIRAL VECTOR-BASED VACCINES",
    details: [
      "Well-established technology",
      "Strong immune response",
      "Immune response involves B cells and T cells",
      "Previous exposure to the vector could reduce effectiveness",
      "Relatively complex to manufacture",
    ],
  },
];
