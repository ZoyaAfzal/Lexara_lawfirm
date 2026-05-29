import workers from "@/assets/case-workers.jpg";
import realestate from "@/assets/case-realestate.jpg";
import termination from "@/assets/case-termination.jpg";
import divorce from "@/assets/case-divorce.jpg";

export const casesData = [
  {
    id: "workers-compensation",
    img: workers,
    title: "Workers' Compensation",
    amount: "$600,000",
    tag: "Industrial Injury",
    description:
      "Successfully secured a $600,000 settlement for a client who suffered severe spinal injuries in a construction site accident. The case involved complex litigation against multiple subcontractors and insurance providers.",
    challenge:
      "The primary challenge was proving the shared liability of multiple parties on a busy construction site and overcoming the insurance company's initial denial of the extent of the long-term disability.",
    outcome:
      "After extensive medical expert testimony and site analysis, we reached a comprehensive settlement that covers life-long medical care, vocational rehabilitation, and significant pain and suffering compensation.",
  },
  {
    id: "real-estate-lawsuit",
    img: realestate,
    title: "Real Estate Lawsuit",
    amount: "$400,000",
    tag: "Commercial Dispute",
    description:
      "Resolved a high-stakes commercial real estate dispute involving a breached lease agreement and property damage claims for a major retail space in Manhattan.",
    challenge:
      "The opposing party contested the property condition at the time of handover and alleged that the client had failed to provide necessary maintenance, attempting to offset the owed rent.",
    outcome:
      "Through meticulous documentation and third-party inspections, we demonstrated the client's compliance with all lease terms. The court awarded full back-rent plus damages for the repairs.",
  },
  {
    id: "wrongful-termination",
    img: termination,
    title: "Wrongful Termination",
    amount: "$500,000",
    tag: "Employment Law",
    description:
      "Represented a senior executive in a wrongful termination suit against a Fortune 500 company, alleging age discrimination and breach of contract.",
    challenge:
      "The company argued that the termination was part of a broader corporate restructuring and that the executive's performance metrics had declined in the final quarter.",
    outcome:
      "Our team uncovered internal communications that suggested a targeted effort to replace older staff. We secured a $500,000 settlement including severance, equity vesting, and a positive reference.",
  },
  {
    id: "divorce-settlement",
    img: divorce,
    title: "Divorce Settlement",
    amount: "$300,000",
    tag: "Family Law",
    description:
      "Navigated a complex high-net-worth divorce settlement involving multi-state assets and child custody arrangements.",
    challenge:
      "Valuing non-liquid business interests and ensuring an equitable distribution of property acquired during a 15-year marriage while maintaining a stable environment for the children.",
    outcome:
      "We achieved a $300,000 immediate cash settlement for our client, plus a structured share of future business profits and a favorable joint custody arrangement that prioritized the children's well-being.",
  },
];
