import React from "react";
// import CommonItemsLayout from "./CommonItemsLayout/CommonItemsLayout";
import CommonLayout from "./CommonItemsLayout/CommonLayout";

const data = [
  {
    id: "1",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-225-225,pr-true,f-webp,q-80/inventory/product/ee12cb22-b49f-4c47-a05a-894dd180c5f1-Photo.jpeg",
    price: "₹30",
  },
  {
    id: "2",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/b0b9e457-8eef-449c-a926-e6bb6d219aeb-0bb78c36-9ee8-4952-9533-d94870b2acf5.jpeg",
  },
  {
    id: "3",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/4afd5fa1-f2e1-4261-8125-2d8f95025399-b936b4a3-685d-437a-825e-6b366c91e72c.jpeg",
  },
  {
    id: "4",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1200-800,pr-true,f-webp,q-80/inventory/product/085bc952-b795-4628-8d33-8ace385a1fb2-websiteimage_1_1200x.webp",
  },
  {
    id: "5",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/1130f951-3937-49cb-9b6c-59d7203b68b9-30232aee-b8a0-4920-944f-ea20f0878c21.jpeg",
  },
  {
    id: "6",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/ab56f228-8c98-4f1c-a491-c7bae8ee546d-0d232f7c-7996-4ffe-9813-ee6e08890e2c.jpeg",
  },
  {
    id: "7",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/d193005a-7236-4fe3-b356-f653cbde0a89-Photo.jpeg",
  },
  {
    id: "8",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-515,pr-true,f-webp,q-80/inventory/product/44b56ba3-d4f3-48dc-aa25-a8708ca92b64-b9e0381c-e7dc-47b4-ab9e-e46530e2203d.jpeg",
  },
  {
    id: "9",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-900-531,pr-true,f-webp,q-80/inventory/product/16b39c54-c595-46a1-8f22-ab4abd07ac69-Photo.jpeg",
  },
  {
    id: "10",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1024-1024,pr-true,f-webp,q-80/inventory/product/c9086f25-fff3-42c2-952e-7aa0c4e28886-/tmp/20230410-1002131.jpeg",
  },
  {
    id: "11",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-4008-4008,pr-true,f-webp,q-80/inventory/product/f8a73d5c-53b5-4d8e-9c80-50c66f4f43ca-shutterstock_486923446.jpg",
  },
  {
    id: "12",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-4520-3613,pr-true,f-webp,q-80/inventory/product/cc9e44cc-06af-49f0-b8cd-b5ef0d73a0f0-shutterstock_1978892732.jpg",
  },
  {
    id: "13",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/f3ec9ea8-e00a-4fa4-bfe5-02a236c9c506-Musk_melon_(1pc)_&_Watermelon_(1pc)_Combo.jpg",
  },
  {
    id: "14",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-700-800,pr-true,f-webp,q-80/inventory/product/6e28107b-aef4-41c4-9a12-9afc0296f957-Photo.jpeg",
  },
  {
    id: "15",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1022,pr-true,f-webp,q-80/inventory/product/2e256ec1-4f92-4d71-b952-41f8188b9dfd-tmp/6d2288ae-a5f3-4af0-89e6-c419ea40d387.jpeg",
  },
  {
    id: "16",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-600-600,pr-true,f-webp,q-80/inventory/product/265078b3-08ef-4f8d-afa4-b41916e7a7f1-4c05f4d0-415d-483f-b9f4-66c3a79f9637-539a319d-65dd-46ea-b5d8-dd4ae740c1f9.webp",
  },
  {
    id: "17",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/37815e21-604f-4868-8287-1c7a27b9ef46-tmp/27ba1e7f-4166-4362-aee2-6fda4bd3a74d.jpeg",
  },
  {
    id: "18",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-800-800,pr-true,f-webp,q-80/inventory/product/7dbeaaf9-a9ba-49d2-a81e-769d854ec8f3-6173dddb-5197-4ddc-893f-5504c917c0fc.jpeg",
  },
  {
    id: "19",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-800-800,pr-true,f-webp,q-80/inventory/product/2681ec0d-670c-4fe3-b1e9-a00b99efb64f-c8ae2eab-4090-4219-bcc5-ef4d5ed140f4.jpeg",
  },
  {
    id: "20",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-5616-3744,pr-true,f-webp,q-80/inventory/product/fdf64a3a-fafc-4f60-9f42-50f6b90e85e2-image",
  },
  {
    id: "21",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/e65a8abd-2cca-4926-bc70-05f2e43fb221-10000369_13-fresho-guava.webp",
  },
  {
    id: "22",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/9ea9610f-6d11-4320-8977-625969c0385d-b6c6fb77-3423-494f-b916-66e9becab505-image_file.png",
  },
  {
    id: "1",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-225-225,pr-true,f-webp,q-80/inventory/product/ee12cb22-b49f-4c47-a05a-894dd180c5f1-Photo.jpeg",
  },
  {
    id: "1",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-225-225,pr-true,f-webp,q-80/inventory/product/ee12cb22-b49f-4c47-a05a-894dd180c5f1-Photo.jpeg",
  },
];

function FruitsAndVeg() {
  return (
    <div>
      Fruits & Vegetables (229)
      <CommonLayout totalItems={data} />
    </div>
  );
}

export default FruitsAndVeg;
