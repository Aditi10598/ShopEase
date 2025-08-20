import PremiumMessage from "../components/PremiumMessage";

const Documentation = () => {
  const apiFeatures = [
    "Returns",
    "Warrenty",
    "Brand Collaborations",
    "Contact us",
    "Affiliate and influencer requests",
    "Store Locations",
  ];

  return (
    <PremiumMessage
      title="Documentation & Integration"
      description="documentation, testing tools, and integration resources for developers."
      features={apiFeatures}
    />
  );
};

export default Documentation;
