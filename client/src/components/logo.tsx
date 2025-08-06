import logoPath from "@assets/logo_cty-removebg_1754388802842.png";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img
      src={logoPath}
      alt="HDT AI Logo"
      className={className}
    />
  );
}