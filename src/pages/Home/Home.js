import { React, useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import { useAppContext } from "../../context/useContext";
import { toast } from "react-toastify";
const Home = () => {
  const { autoFetch } = useAppContext();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await autoFetch.get(`san-pham/sanphammoi`);
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        {/* <Sale /> */}
        <NewArrivals product={product} />
        {/* <BestSellers /> */}
        {/* <YearProduct />
        <SpecialOffers /> */}
      </div>
    </div>
  );
};

export default Home;
