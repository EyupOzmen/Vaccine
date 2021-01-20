import pfizer from "../assets/pfizer.jpg";
import moderna from "../assets/moderna.jpg";

export const nested = [
  {
    id: 1,
    src: pfizer,
    name: "PFIZER BIONTECH",
    title: "Information on how well the vaccine works",
    description: [
      "Based on evidence from clinical trials, the Pfizer-BioNTech vaccine was 95% effective at preventing laboratory-confirmed COVID-19 illness in people without evidence of previous infection.",
      "CDC will continue to provide updates as we learn more about how well the Pfizer-BioNTech vaccine works in real-world conditions.",
    ],
  },
  {
    id: 2,
    src: moderna,
    name: "MODERNA",
    title: "Information on how well the vaccine works",
    description: [
      "Based on evidence from clinical trials, the Moderna vaccine was 94.1% effective at preventing laboratory-confirmed COVID-19 illness in people who received two doses who had no evidence of being previously infected.",
      "The vaccine appeared to have high effectiveness in clinical trials (efficacy) among people of diverse age, sex, race, and ethnicity categories and among persons with underlying medical conditions.",
      "Although few people in the clinical trials were admitted to the hospital, this happened less often in the people who got the Moderna vaccine compared to people who got the saline placebo.",
      "CDC will continue to provide updates as we learn more about how well the Moderna vaccine works in real-world conditions.",
    ],
  },
];
