export const metadata = {
  title: "Shipping Policy | APEAK",
  description: "Shipping and delivery policy for APEAK products.",
};

export default function ShippingPolicy() {
  return (
    <div className="policy-page-wrapper">
      <div className="container policy-container">
        <header className="policy-header">
          <span className="eyebrow-pill">Delivery Information</span>
          <h1>Shipping Policy</h1>
          <p className="policy-last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="policy-content">
          <section>
            <h2>1. Order Processing</h2>
            <p>
              All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days.
            </p>
          </section>

          <section>
            <h2>2. Shipping Rates & Delivery Estimates</h2>
            <p>
              Shipping charges for your order will be calculated and displayed at checkout.
            </p>
            <ul>
              <li><strong>Standard Shipping:</strong> 3-5 business days</li>
              <li><strong>Expedited Shipping:</strong> 1-2 business days</li>
            </ul>
            <p>
              Delivery delays can occasionally occur due to unforeseen circumstances.
            </p>
          </section>

          <section>
            <h2>3. Shipment Confirmation & Order Tracking</h2>
            <p>
              You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
            </p>
          </section>

          <section>
            <h2>4. Damages</h2>
            <p>
              APEAK is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
            </p>
          </section>

          <section>
            <h2>5. International Shipping</h2>
            <p>
              We currently do not ship outside the country. All orders must have a domestic shipping address.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
