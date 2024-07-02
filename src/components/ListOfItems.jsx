import { Link } from 'react-router-dom'
import Circle from './Circle.jsx'
const ListOfItems = () => {
    return (
        <>
            <div>
                <div className="py-16 w-full h-auto flex-col justify-center items-center text-[#006944] text-[40px] font-medium font-jost relative">
                    <div>
                        <div className='w-full'>
                            <div>
                                <div className='absolute left-0 top-0'>
                                    <img src="https:/farmnaturelle.com//cdn/shop/files/image_12379.png?v=1696446650" alt="flower" />
                                </div>
                                <div className='absolute right-0 top-0'>
                                    <img src="https://farmnaturelle.com/cdn/shop/files/image_12377.png?v=1696446650" alt="flower" />
                                </div>
                            </div>
                        </div>
                        <img className="mx-auto pt-10" width={142} src="https://farmnaturelle.com/cdn/shop/files/Group_110799_3_1_1.png?v=1713349843" alt="Doctor Picture" />
                        <p className="font-jost text-center">Shop by Concern</p>
                    </div>
                </div>
                <div className="px-20 grid grid-cols-8 gap-10">
                    <Link to={"/collections/herbal-juice/products/piles-vanish"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_6_24e9fd87-8d72-4cf4-a91e-b8d58c46e4ef.png?v=1696445848' alt='Cough' text='Piles Relief' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/smiling-liver"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_7_f43a62bb-4ead-44b1-8e52-b44fe23971e8.png?v=1696445849' alt='Cough' text='Smiling Liver' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/magical-man-booster"}>
                        <Circle imageUrl="https://farmnaturelle.com/cdn/shop/files/Rectangle_9266-1.png?v=1702629134" text='Mega Man Booster' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/digestive-fitness"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_9_b6d20a9e-d9d7-4bf9-9c26-5a50d18d0915.png?v=1696445848' alt='Cough' text='Digestive Fitness' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/easing-diabetes"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_10_b04616a2-fa08-4f84-a390-d77af8526335.png?v=1696445848' alt='Cough' text='Easing Diabetes' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/anti-hangover-ready-to-drink-shot"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_11_fe94ef7f-d9ea-43a6-9524-9da79b56c67f.png?v=1696445848' alt='Cough' text='Hangover Shots' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/anti-hangover-ready-to-drink-shot"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_12_168077f6-8d15-42d4-b8a1-0c9833330d11.png?v=1696445848' alt='Cough' text='Revital Body Shots' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/kidney-stone-crusher-juice"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/kidney_3b9826a7-b960-485f-8869-76c74e89d592.png?v=1698733388' alt='Cough' text='Kidney Stone Care' />
                    </Link>
                </div>
                <div className="px-32 py-10 grid grid-cols-7 gap-4 ">
                    <Link to={"/collections/herbal-juice/products/women-glow"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_14_b6ae83be-2fc7-4d3a-8f8c-260ca1da3769.png?v=1696445969' alt='Cough' text='Glowing Woman' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/strees-buster"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_15_befcc569-f39d-41f1-bb2c-024d0e3be98b.png?v=1696445969' alt='Cough' text='Strees Buster' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/piles-vanish"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_16_2fbf5bb7-6a0c-455b-a445-d1e934ea2ada.png?v=1696445968' alt='Cough' text='Powerful Heart' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/joints-and-body-pain-relief"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_17_0b4dc4f7-3c95-4480-95f9-389ebb77f1ca.png?v=1696445969' alt='Cough' text='Pain Relief' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/joints-and-body-pain-relief"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_19_e6d4489d-0481-4c6b-bdfe-b2632d559643.png?v=1696445969' alt='Cough' text='Win Weight' />
                    </Link>
                    <Link to={"/collections/herbal-juice/products/detox-miracle-shots-ready-to-drink-shots"}>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9764.png?v=1698733453' alt='Cough' text='Detox Miracle Shot' />
                    </Link>
                    <Link>
                        <Circle imageUrl='https://farmnaturelle.com/cdn/shop/files/Rectangle_9266_22_9d78f915-7080-4535-aafc-1051e5b420fa.png?v=1696445969' alt='Cough' text='Immunity Zoom Shots' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ListOfItems