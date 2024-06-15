import Consult from './Consult.jsx';

const NextDiv = () => (
  <div className="w-full h-auto bg-[#006944] px-5 rounded-t-[40px]">
    <div className="container mx-auto my-16 font-jost bg-[#006944]">
      <div className="flex flex-col md:flex-row justify-around items-center px-10">
        <Consult para={'Consult our Experts and make your Daily Life Healthy'} notKnown={"Not Sure What to Buy?"}/>
        <div className="w-full md:w-1/2 relative">
          <img src="https://farmnaturelle.com/cdn/shop/files/desk.png?v=1698732439" alt="" className="w-full absolute -bottom-[217px] p-5" />
        </div>
      </div>
    </div>
  </div>
);

export default NextDiv;

