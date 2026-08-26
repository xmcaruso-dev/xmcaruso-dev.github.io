import { PRICE_LABEL, STRIPE_PAYMENT_LINK } from "@/lib/site";

type PayButtonProps = {
  className?: string;
};

export function PayButton({ className = "" }: PayButtonProps) {
  return (
    <a
      className={`btn btn-primary ${className}`.trim()}
      href={STRIPE_PAYMENT_LINK}
      data-pay-link="stripe"
    >
      Pay {PRICE_LABEL}
    </a>
  );
}
