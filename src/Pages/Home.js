import React from "react";
import "./Home.css";
import ExploreByCategories from "../Components/ExploreByCategories";
import { Link } from "react-router-dom";
// import CommonItemsLayout from "../Components/CommonItemsLayout/CommonItemsLayout";

const exploreByCategories = [
  {
    id: "1",
    routePath: "/firstRoute",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-420,ar-664-452,pr-true,f-webp,q-80/inventory/category/fad86a63-828f-4381-b9e8-58b39d48ed41-Frame_11049_(1).png",
  },
  {
    id: "2",
    routePath: "/attaRiceOilDals",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-420,ar-692-471,pr-true,f-webp,q-80/inventory/category/80f85556-668a-4953-975d-c9b8c7147ddf-Atta,_Rice,_Oil_&_Dals-01.png",
  },
  {
    id: "3",
    routePath: "/masalaDryFruits",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/dfbc7b23-ddd8-4c20-8b0c-4e8e3d5d2612-imageWithName",
  },
  {
    id: "4",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/0bb572e4-7c2a-472c-9d26-2c19cb8897ba-imageWithName",
  },
  {
    id: "5",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/844f1946-5dfd-415f-9d4a-83bef891af5b-imageWithName",
  },
  {
    id: "6",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/4cfc43e9-78b8-419c-8d03-6d0adcfa8729-imageWithName",
  },
  {
    id: "7",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/954dd3f4-2b40-4cba-9e8c-d7cf2da47ac0-imageWithName",
  },
  {
    id: "8",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/16913142-c1a3-49bd-bd15-9a68818dd3e8-imageWithName",
  },

  {
    id: "9",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/bb61d61d-8654-4029-a0de-592f14563c82-imageWithName",
  },
  {
    id: "10",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/fc2684a7-3ee9-47a7-88fc-40c08184431a-imageWithName",
  },
  {
    id: "11",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/a936056e-08fc-4051-a471-504e0706c934-imageWithName",
  },
  {
    id: "12",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/a30ecdc7-b9a8-4af0-b681-6461f1ba09cd-imageWithName",
  },
  {
    id: "13",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-332-425,pr-true,f-webp,q-80/inventory/category/221b2f83-d4f6-4a22-886f-8c352f3ded3a-imageWithName",
  },
  {
    id: "14",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/a480a7c9-2c3b-4fe3-9e4e-13f87517e481-imageWithName",
  },
  {
    id: "15",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/0114bff9-3036-4434-92a1-817d88f59509-imageWithName",
  },
  {
    id: "16",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/776754fb-0209-4305-8f8d-4d9c626c6b30-imageWithName",
  },
  {
    id: "17",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/fe26c8cb-d8eb-4acf-a3f5-2ee79f218949-imageWithName",
  },
  {
    id: "18",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/8a9eda1e-06cb-403e-8830-006991ec824f-imageWithName",
  },
  {
    id: "19",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/c3f0b92d-38ac-4a43-8739-5c5dc83e8c6e-imageWithName",
  },
  {
    id: "20",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/af95a989-fde0-4079-a3ea-f2e61b4847c4-imageWithName",
  },
  {
    id: "21",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-325-425,pr-true,f-webp,q-80/inventory/category/308c76dd-3b3d-4f16-9229-64cdc89752dc-imageWithName",
  },
  {
    id: "22",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-210,ar-312-408,pr-true,f-webp,q-80/inventory/category/7f7750aa-8539-44de-8630-df4ddad35df2-imageWithName",
  },
];

function Home() {
  return (
    <div className="overall-wrapper">
      {/* <CommonItemsLayout /> */}
      <h1>Home Page</h1>

      {/* ------------------------------------------------------ */}
      {/*                  Home Page Banners                     */}
      {/* ------------------------------------------------------ */}

      <div className="homePageBanners">
        <Link to="/paanCorner">
          <img
            src="https://cdn.zeptonow.com/mweb-prod/tr:w-1280,ar-1438-235,pr-true,f-webp,q-80//images/paan-corner/paan-corner-banner-desktop.png"
            alt=""
          />
        </Link>

        {/* small banner */}
        <div className="smallBanners d-flex ">
          <img
            width={475}
            src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/b881ec4d-66b2-409d-a08e-8565b2626784-Banner-carousel.png"
            alt=""
          />
          <img
            width={475}
            src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/813f0428-07c5-4c3d-b90f-731f968fc7d2-Banner-Carousel-Final_May-Phase.png"
            alt=""
          />
          <img
            width={475}
            src="https://cdn.zeptonow.com/production///tr:w-969,ar-969-501,pr-true,f-webp,q-80/inventory/banner/0bad21ef-ef07-47ec-803f-434d138bb9ee-BANNER_CAROUSEL_Centrum.png"
            alt=""
          />
        </div>

        <img
          src="https://cdn.zeptonow.com/production///tr:w-981,ar-981-342,pr-true,f-webp,q-80/inventory/banner/620cec69-1b68-4edd-8f99-2197c8929ed1-Premium-Promo_Zepto-Caf.png"
          alt=""
        />
      </div>

      {/* ------------------------------------------------------ */}
      {/*                  Explore By Categories                 */}
      {/* ------------------------------------------------------ */}
      <ExploreByCategories exploreByCategories={exploreByCategories} />
    </div>
  );
}

export default Home;
