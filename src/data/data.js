import nucleic from "../assets/nucleic.svg";
import protein from "../assets/protein.svg";
import viral from "../assets/viral.svg";
import whole from "../assets/whole.svg";

export const data = [
  {
    id: 1,
    src: whole,
    name: "WHOLE VIRUS",
    description:
      "Many conventional vaccines use whole viruses to trigger an immune response. There are two main approaches. Live attenuated vaccines use a weakened form of the virus that can still replicate without causing illness. Inactivated vaccines use viruses whose genetic material has been destroyed so they cannot replicate, but can still trigger an immune response. Both types use well-established technology and pathways for regulatory approval, but live attenuated ones may risk causing disease in people with weak immune systems and often require careful cold storage, making their use more challenging in low-resource countries. Inactivated virus vaccines can be given to people with compromised immune systems but might also need cold storage.",
  },
  {
    id: 2,
    src: protein,
    name: "PROTEIN SUBUNIT",
    description:
      "Subunit vaccines use pieces of the pathogen - often fragments of protein - to trigger an immune response. Doing so minimises the risk of side effects, but it also means the immune response may be weaker. This is why they often require adjuvants, to help boost the immune response. An example of an existing subunit vaccine is the hepatitis B vaccine.",
  },
  {
    id: 3,
    src: nucleic,
    name: "NUCLEIC ACID",
    description:
      "Nucleic acid vaccines use genetic material – either RNA or DNA – to provide cells with the instructions to make the antigen. In the case of COVID-19, this is usually the viral spike protein. Once this genetic material gets into human cells, it uses our cells' protein factories to make the antigen that will trigger an immune response. The advantages of such vaccines are that they are easy to make, and cheap. Since the antigen is produced inside our own cells and in large quantities, the immune reaction should be strong. A downside, however, is that so far, no DNA or RNA vaccines have been licensed for human use, which may cause more hurdles with regulatory approval. In addition, RNA vaccines need to be kept at ultra-cold temperatures, -70C or lower, which could prove challenging for countries that don’t have specialised cold storage equipment, particularly low- and middle-income countries. ",
  },
  {
    id: 4,
    src: viral,
    name: "VIRAL VECTOR",
    description:
      "Viral vector vaccines also work by giving cells genetic instructions to produce antigens. But they differ from nucleic acid vaccines in that they use a harmless virus, different from the one the vaccine is targeting, to deliver these instructions into the cell. One type of virus that has often been used as a vector is adenovirus, which causes the common cold. As with nucleic acid vaccines, our own cellular machinery is hijacked to produce the antigen from those instructions, in order to trigger an immune response. Viral vector vaccines can mimic natural viral infection and should therefore trigger a strong immune response. However, since there is a chance that many people may have already been exposed to the viruses being used as vectors, some may be immune to it, making the vaccine less effective.",
  },
];
