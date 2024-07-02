import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function consult({ para, notKnown,header }) {
    return (
        <div className="w-full md:w-1/2 overflow-visible">
            <div className="pb-10 overflow-visible text-white mt-12">
                <p className='pb-1'>{header}</p>
                <h2 className="text-4xl font-semibold mb-4 ">{notKnown}</h2>
                <p>{para}</p>
            </div>
            <ul className="grid mt-2 grid-cols-2 gap-4 text-nowrap font-bold">
                <li className="flex items-center px-6 py-2 rounded-md bg-white">
                    <img src="https://farmnaturelle.com/cdn/shop/files/Group.svg?v=1696442650" alt="" className="mr-2" />
                    Ayurvedic Products
                </li>
                <li className="flex items-center px-6 py-2 rounded-md bg-white">
                    <img src="https://farmnaturelle.com/cdn/shop/files/Group_1.svg?v=1696443200" alt="" className="mr-2" />
                    Lifestyle Recommendation
                </li>
                <li className="flex items-center px-6 py-2 rounded-md bg-white">
                    <img src="https://farmnaturelle.com/cdn/shop/files/Group_2.svg?v=1696443200" alt="" className="mr-2" />
                    Custom Diet Plan
                </li>
                <li className="flex items-center px-6 py-2 rounded-md bg-white">
                    <img src="https://farmnaturelle.com/cdn/shop/files/Group_3.svg?v=1696443198" alt="" className="mr-2" />
                    Doctor’s Advice
                </li>
            </ul>
            <Link to={"pages/consult-an-acharya"}>
            <button className="transition-colors duration-900 w-full border border-white hover:bg-white hover:text-[#006944] text-white text-sm py-3 px-4 rounded-md my-2 cursor-pointer">BOOK Consultation @ RS 99</button>
            </Link>
        </div>
    )
}

consult.propTypes = {
    para: PropTypes.string,
    notKnown: PropTypes.string
};

export default consult
