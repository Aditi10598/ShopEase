import PremiumMessage from "../components/PremiumMessage";

const Contacts = () => {
  const contactFeatures = [
    "Returns",
    "Warrenty",
    "Brand Collaborations",
    "Contact us",
    "Affiliate and influencer requests",
    "Store Locations",
  ];

  return (
    <PremiumMessage
      title="Contact Features"
      description="Professoinal contact system with call support, admin dashboard and Email Functionality"
      features={contactFeatures}
    />
  );
};

export default Contacts;
