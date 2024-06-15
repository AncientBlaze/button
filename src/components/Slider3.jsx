import CardComponent from "./CardComponent";

const CarouselComponent3 = () => {
    return (
        <div className="w-full h-auto bg-[#FAF9F4] py-10">
            <div className="w-full h-screen flex">
                <div className="w-1/3 h-full flex justify-center items-center">
                    <div className="w-3/4 h-2/4 p-5">
                        <div className="text-left text-[#855245] font-jost font-semibold text-4xl">
                            Bilona A2 Ghee
                        </div>
                        <div className="text-left text-[#855245] text-sm pt-[45px] my-2">
                            Pure, farm-sourced, made through traditional method.
                        </div>
                        <div className="text-left w-32 h-20 my-2 flex justify-center items-center gap-2 relative">
                        </div>
                        <button className="bg-[#855245] text-white w-[210px] h-[45px] rounded-lg hover:text-[#855245] border border-white hover:bg-white transition-colors duration-1000 hover:border hover:border-[#e0ccc7]">Shop Now</button>
                    </div>
                </div>
                <div className="w-2/3 h-full bg-transparent flex items-center">
                    <div className="w-full h-full flex justify-end items-center z-0">
                        <CardComponent save={34} PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_6ffc569d-4534-4507-97ba-2f4a6afb76d0_800x.jpg?v=1703749499" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_6334cefd-be7f-46fd-a2ec-f4afb83e43f4_800x.jpg?v=1703749493" title="From Naturelle 100%" content={789} PreviousPrice={519}/>
                        <CardComponent save={30} PlaceHolder="https://farmnaturelle.com/cdn/shop/files/3_58147d53-ae6c-4ab3-916e-50719d69ad36_800x.jpg?v=1708001313" ImageUrl="https://farmnaturelle.com/cdn/shop/files/2_749637ab-9d9e-4be2-9213-5a284f8f231e_800x.jpg?v=1708001310" title="Organic A2 Desi" content={1999} PreviousPrice={2865}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselComponent3;
