import { Link } from "react-router-dom";
import Nav from "../src/components/header/Nav";
import Footer from "../src/components/footer/Footer";
function PrivacyPolicy() {
    return (
        <div>
            <Nav />
            <div className="p-5 w-full h-auto bg-[#FAF9F4]">
                <p className=" text-sm uppercase text-gray-500 font-jost font-light">
                    <Link to="/" title="Back to Home">
                        Home&nbsp;
                    </Link>
                    /<span className="text-black">&nbsp;Privacy Policy</span>
                </p>
                <div className="text-5xl font-jost py-5">
                    <p>Privacy Policy</p>
                    <p className="text-3xl py-10">Personal Information</p>
                    <div className="grid text-base gap-10">
                        <p>
                            Farm Natural Produce is a company dedicated to
                            providing high-quality natural produce and is
                            committed to safeguarding the privacy and protection
                            of personal information in compliance with
                            applicable laws and regulations.
                        </p>
                        <p>
                            Throughout this document, the terms "we," "us,"
                            "our," and "ours" refer to Farm Natural Produce.
                            Wherever we have said "you" or "your," this means
                            YOU.
                        </p>
                        <p>
                            We are committed to treating data privacy seriously.
                            This Privacy Policy provides the necessary details
                            about how your data is collected and used by us. By
                            accessing the services provided by us, you agree to
                            the collection and use of your data by us in
                            accordance with this Privacy Policy.
                        </p>
                    </div>
                    <p className="text-3xl py-10">
                        Personal Information Collected
                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            As part of your interactions with Farm Natural
                            Produce, we may collect personally identifiable
                            information, including but not limited to your name
                            (first and last), email address, contact details,
                            date of birth, gender, residential address, and
                            other information relevant to your engagement with
                            our services. We may also gather information about
                            your interactions with our website, such as the
                            pages you visited, links clicked, and browsing
                            activities.
                        </p>
                    </div>
                    <p className="text-3xl py-10">
                        Why We Collect Your Personal Information
                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            We collect personally identifiable information about
                            you for the purpose of registering you as a user of
                            our services, verifying your identity, processing
                            transactions, communicating with you, providing
                            promotional offers, and updating you about our
                            products and services. We use this information to
                            operate, provide, develop, and improve our products
                            and services.
                        </p>
                    </div>
                    <p className="text-3xl py-10">
                        Manner of Collection of Information
                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            We receive and store information whenever you
                            interact with us through our website or other
                            sources. Our servers may collect information
                            regarding your activities through cookies or other
                            tracking methods.
                        </p>
                    </div>
                    <p className="text-3xl py-10">Consent</p>
                    <div className="grid text-base gap-10">
                        <p>
                            By using our services and providing your personal
                            information, you consent to the collection and use
                            of the information you disclose to us in accordance
                            with this Privacy Policy.
                        </p>
                    </div>
                    <p className="text-3xl py-10">
                        Disclosure of Personal Information
                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            We do not sell or share your personal information
                            for commercial purposes. However, we may share your
                            personal information with our business associates,
                            payment gateway partners, and regulatory authorities
                            when required by law or for legitimate business
                            reasons.
                        </p>
                    </div>
                    <p className="text-3xl py-10">
                        Security and Protection of Personal Information
                    </p>
                    <div className="grid text-base gap-10">
                        <p>
                            We are committed to protecting your personal
                            information through security measures and
                            appropriate safeguards to prevent unauthorized
                            access, alteration, transmission, and deletion. We
                            retain your personal information for as long as it
                            is required for the purposes set out in this Privacy
                            Policy.
                        </p>
                    </div>
                    <p className="text-3xl py-10">Children&apos;s Privacy</p>
                    <div className="grid text-base gap-10">
                        <p>
                            All financial transactions on our website are to be
                            carried out by adults only. Minors are barred from
                            making purchases or submitting their personal
                            information on our website without adult
                            supervision.
                        </p>
                    </div>
                    <p className="text-3xl py-10">Contact Us</p>
                    <div className="grid text-base gap-10">
                        <p>
                            For any queries related to privacy or to correct any
                            inaccuracies in your personal information submitted
                            to us, please contact us at:
                        </p>
                        <p className="font-semibold">Contact email address: hello@farmnaturelle.com</p>
                        <p><span className="font-semibold">Phone:</span> +91 98109 88725</p>
                        <p><span className="font-semibold">Contact days:</span> Monday to Friday 10:00AM to 6PM</p>
                        <p>
                            Notification of Changes in the Privacy Policy We
                            keep our Privacy Policy under review and reserve the
                            right to change or update it at any time without
                            prior intimation. Any changes will be effective
                            immediately upon posting on our website.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
