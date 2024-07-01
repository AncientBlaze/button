/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
export default function RefundReturnPolicy() {
    return (
        <div>
            <Nav />
            <div className="p-5 w-full h-auto bg-[#FAF9F4]">
                <p className=" text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Refund & Return Policy</span>
                </p>
                <div className="text-5xl font-jost py-5 px-10">
                    <p>Refund & Return Policy</p>
                    <p className="text-3xl py-10">Refund and Return Policy for Farm Natural Products</p>
                    <div className="grid text-base gap-10">
                        <p>
                            Our company, Farm Natural Produce, strives to provide a seamless and satisfactory shopping experience for our valued customers. To ensure transparency and customer satisfaction, we have established the following refund and return policy.
                        </p>
                    </div>
                    <p className="text-3xl py-10">
                        Cancellation by Customer
                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            Customers are empowered to cancel an order at any time before it has been dispatched by reaching out to our dedicated customer service team. Once an order has been dispatched, it becomes ineligible for cancellation. In cases of suspected fraudulent transactions or violations of our website's terms and conditions, we reserve the right to cancel such orders at our discretion, with or without prior notification to the customer. We maintain a negative list of all fraudulent transactions and customers and may deny access or cancel any orders placed by them.
                        </p>
                    </div>
                    <p className="text-3xl py-10">
                        Returns
                    </p>
                    <div className="grid text-base gap-10">
                        Due to the unique nature of our natural farm produce, we adhere to a strict no-return or exchange policy. However, we will consider exchanges or returns under the following circumstances:

                        <span className="pl-10">
                            <p>
                                1.The product is damaged, empty, or contains wrong/missing items upon delivery.
                            </p>
                            <p>
                                2.Customers are required to provide an unboxing video, a packaging defect video, as well as images of the damaged product or any questionable item.
                            </p>
                        </span>

                        For damaged, wrong, or missing product-related concerns, customers should promptly contact our customer service at [purefarmnatural@gmail.com] or call us at [98109 88725, 8130531333] within 48 hours of the product delivery. Each return will be handled on an individual and case-by-case basis. Customers are advised not to return the purchase to the farm and must provide the receipt number for expedited damaged product redressal.
                    </div>
                    <p className="text-3xl py-10">
                        Refunds
                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            Upon order cancellation, the refund process will be initiated, and the refunded amount will be reflected in the customer's bank account within 7-10 days. Please note that certain banks may take longer than this period for the amount to reflect in the account. For damaged product returns, once the return is received and inspected, customers will be notified via email regarding the approval or rejection of the refund. If approved, the refund will be processed, and a credit will automatically be applied to the original method of payment within 7-10 days.
                        </p>
                    </div>
                    <p className="text-3xl py-10">Late or Missing Refunds</p>
                    <div className="grid text-base gap-10">
                        <p>
                            Customers who have not received a refund should first check their bank account and then contact their bank. If there is still no sign of the refund, they should contact us at [farmnaturalproduc@gmail.com] or call us at [98109 88725].
                        </p>
                    </div>
                    <p className="text-3xl py-10">
                        Shipping
                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            For product returns, customers should mail the item to: [Farm Natural produce], [plot no 527, sector 8, IMT manesar, Gurgaon - 122050]. If an item is deemed damaged by our customer service team…
                        </p>
                    </div>
                    <p className="text-3xl py-10">

                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            We appreciate your understanding and cooperation with our refund and return policy. Should you have any further inquiries or require assistance, please do not hesitate to contact our customer service team. Thank you for choosing Farm Natural Produce.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}