"use client";
import { useState } from "react";
import Image from "next/image";
import weightPic from "../../public/weight-2.webp";
import luggagePic from "../../public/luggage-2.webp";
import fpHeaderPic from "../../public/familypacking-header.webp";
import { FaPrint } from "react-icons/fa";

type PackingListItem = {
  size: string;
  item: string;
  quantity: number;
  handcarry: string;
};

type PackingItem = {
  size: string;
  category: string;
  item: string;
  dayqty: number;
  weight: number;
  handcarry: string;
};

type FamilyCounts = {
  men: number;
  women: number;
  boys: number;
  girls: number;
  babies: number;
};

// JSON constant for packing items
const PackingData: PackingItem[] = [
  {
    size: "Men",
    category: "Clothing",
    item: "T-shirts",
    dayqty: 1.0,
    weight: 200.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "Trousers",
    dayqty: 0.5,
    weight: 500.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "Shorts",
    dayqty: 0.5,
    weight: 250.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "Underwear",
    dayqty: 1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "Socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "Jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "Swimwear",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "Hat",
    dayqty: -1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Shoes",
    item: "Casual Shoes",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Shoes",
    item: "Sport Shoes",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Toiletries",
    item: "Toothbrush",
    dayqty: -1.0,
    weight: 20.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Toiletries",
    item: "Toothpaste",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Toiletries",
    item: "Deodorant",
    dayqty: -1.0,
    weight: 75.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Toiletries",
    item: "Razor",
    dayqty: -1.0,
    weight: 25.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Toiletries",
    item: "Comb",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Tech Devices",
    item: "Phone",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Tech Devices",
    item: "Charger",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Tech Devices",
    item: "Laptop",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Tech Devices",
    item: "Headphones",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Documents",
    item: "Tickets",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Documents",
    item: "Wallet",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Documents",
    item: "ID",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Miscellaneous",
    item: "Sunglasses",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Miscellaneous",
    item: "Books",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Miscellaneous",
    item: "Medications",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "Tops",
    dayqty: 1.0,
    weight: 0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "Pants",
    dayqty: 1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "Dresses",
    dayqty: 1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "Underwear",
    dayqty: 1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "Socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "Jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "Swimwear",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "Hat",
    dayqty: -1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Shoes",
    item: "Casual Shoes",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Shoes",
    item: "Sport Shoes",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Toiletries",
    item: "Toothbrush",
    dayqty: -1.0,
    weight: 20.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Toiletries",
    item: "Toothpaste",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Toiletries",
    item: "Deodorant",
    dayqty: -1.0,
    weight: 75.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Toiletries",
    item: "Comb",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Toiletries",
    item: "Makeup Essentials",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Tech Devices",
    item: "Phone",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Tech Devices",
    item: "Charger",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Tech Devices",
    item: "Camera",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Tech Devices",
    item: "Headphones",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Documents",
    item: "Tickets",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Documents",
    item: "Wallet",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Documents",
    item: "ID",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Miscellaneous",
    item: "Sunglasses",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Miscellaneous",
    item: "Books",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Miscellaneous",
    item: "Medications",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Miscellaneous",
    item: "Jewelry",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Boys",
    category: "Clothing",
    item: "T-shirts",
    dayqty: 1.0,
    weight: 200.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Clothing",
    item: "Shorts",
    dayqty: 0.5,
    weight: 250.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Clothing",
    item: "Underwear",
    dayqty: 1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Clothing",
    item: "Socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Clothing",
    item: "Jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Clothing",
    item: "Swimwear",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Clothing",
    item: "Hat",
    dayqty: -1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Shoes",
    item: "Sport Shoes",
    dayqty: -1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Shoes",
    item: "Sandals",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Toiletries",
    item: "Toothbrush",
    dayqty: -1.0,
    weight: 20.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Toiletries",
    item: "Toothpaste",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Toiletries",
    item: "Comb",
    dayqty: -1.0,
    weight: 75.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Toiletries",
    item: "Wipes",
    dayqty: -1.0,
    weight: 0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Tech Devices",
    item: "Tablet",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Boys",
    category: "Tech Devices",
    item: "Headphones",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Boys",
    category: "Tech Devices",
    item: "Charger",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Boys",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Boys",
    category: "Documents",
    item: "Tickets",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Boys",
    category: "Documents",
    item: "Student ID",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Boys",
    category: "Miscellaneous",
    item: "Sunglasses",
    dayqty: -1.0,
    weight: 35.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Miscellaneous",
    item: "Book",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Boys",
    category: "Miscellaneous",
    item: "Toys",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Boys",
    category: "Miscellaneous",
    item: "Snacks",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Clothing",
    item: "T-shirts",
    dayqty: 1.0,
    weight: 200.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Clothing",
    item: "Dresses",
    dayqty: 1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Clothing",
    item: "Underwear",
    dayqty: 1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Clothing",
    item: "Socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Clothing",
    item: "Jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Clothing",
    item: "Swimwear",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Clothing",
    item: "Hat",
    dayqty: -1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Shoes",
    item: "Sport Shoes",
    dayqty: -1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Shoes",
    item: "Sandals",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Toiletries",
    item: "Toothbrush",
    dayqty: -1.0,
    weight: 20.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Toiletries",
    item: "Toothpaste",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Toiletries",
    item: "Comb",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Toiletries",
    item: "Hair Ties",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Tech Devices",
    item: "Tablet",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Tech Devices",
    item: "Headphones",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Tech Devices",
    item: "Charger",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Documents",
    item: "Tickets",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Documents",
    item: "Student ID",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Miscellaneous",
    item: "Sunglasses",
    dayqty: -1.0,
    weight: 35.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Miscellaneous",
    item: "Book",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Girls",
    category: "Miscellaneous",
    item: "Toys",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Girls",
    category: "Miscellaneous",
    item: "Snacks",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Clothing",
    item: "Onesies",
    dayqty: 1.0,
    weight: 150.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Clothing",
    item: "Pajamas",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Clothing",
    item: "Socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Clothing",
    item: "Jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Clothing",
    item: "Hat",
    dayqty: -1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Shoes",
    item: "Soft Shoes",
    dayqty: -1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Shoes",
    item: "Sandals",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Toiletries",
    item: "Baby Shampoo",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Toiletries",
    item: "Lotion",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Babies",
    category: "Toiletries",
    item: "Wipes",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Diapers",
    dayqty: 2.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Baby powder",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Baby lotion",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Baby formula",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Bottles",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Pacifiers",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Bibs",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Toys",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Baby carrier",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Baby food",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Baby Essentials",
    item: "Baby monitor",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Tech Devices",
    item: "Charger",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Tech Devices",
    item: "Tablet",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Documents",
    item: "Birth Certificate",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Miscellaneous",
    item: "Baby Blankets",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Miscellaneous",
    item: "toys",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
  {
    size: "Babies",
    category: "Miscellaneous",
    item: "Stroller",
    dayqty: -1.0,
    weight: 0,
    handcarry: "y",
  },
];

const FamilyPacking: React.FC = () => {
  const [familyCounts, setFamilyCounts] = useState<FamilyCounts>({
    men: 0,
    women: 0,
    boys: 0,
    girls: 0,
    babies: 0,
  });
  const [days, setDays] = useState<number>(1);
  const [packingList, setPackingList] = useState<PackingListItem[]>([]);
  const [totalWeight, setTotalWeight] = useState<number>(0);
  const [numBaggage, setNumBaggage] = useState<number>(0);
  const [numFamily, setNumFamily] = useState<number>(0);

  const createPackingList = () => {
    const packlist: PackingListItem[] = [];
    let weight = 0;

    PackingData.forEach((data: PackingItem) => {
      const quantity = calculateTotalQuantity(data, familyCounts, days);

      if (quantity > 0) {
        data.size;
        packlist.push({
          size: data.size,
          item: data.item,
          quantity: quantity,
          handcarry: data.handcarry,
        } as PackingListItem);

        if (data.handcarry !== "y") {
          weight += data.weight * quantity;
        }
      }
    });

    setTotalWeight(weight / 1000); // convert grams to kg
    setNumBaggage(Math.ceil(weight / (23 * 1000))); // 23kg limit per baggage
    setPackingList(packlist);
  };

  const calculateTotalQuantity = (
    data: PackingItem,
    familyCounts: FamilyCounts,
    days: number
  ) => {
    const sizeMap = {
      men: familyCounts.men,
      women: familyCounts.women,
      boys: familyCounts.boys,
      girls: familyCounts.girls,
      babies: familyCounts.babies,
    };

    const perDayQuantity = data.dayqty;
    if (data.dayqty === -1) {
      return sizeMap[data.size.toLowerCase() as keyof FamilyCounts] * 1;
    }

    return (
      sizeMap[data.size.toLowerCase() as keyof FamilyCounts] *
      perDayQuantity *
      days
    );
  };

  // Helper function for printing the bill
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 rounded-lg shadow-lg max-w-3xl mx-auto bg-slate-50 text-base items-center justify-center">
      <div className="flex justify-center items-center bg-pink-200/85">
        <Image src={fpHeaderPic} alt="Family Travel Packing" />
      </div>
      <p className="text-justify text-base mb-6 mt-2">
        Ensure you never miss an essential item again by generating
        comprehensive packing lists tailored to your family's size and travel
        duration. Customize packing lists for each family member, from men and
        women to kids and babies. Automatically calculate the estimated total
        weight of packed items, and determine the number of baggage pieces
        needed for your trip.
      </p>
      <div>
        <h2 className="text-xl font-semibold mb-2">Travel Days:</h2>
        <select
          id="days"
          className="select select-bordered text-base w-2/6 md:w-1/4"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <h2 className="text-xl font-semibold mb-2 mt-2">Travel members:</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {["Men", "Women", "Boys", "Girls", "Babies"].map((label, index) => (
          <div key={index}>
            <label className="label">{label}:</label>
            <select
              value={
                index === 0
                  ? familyCounts.men
                  : index === 1
                  ? familyCounts.women
                  : index === 2
                  ? familyCounts.boys
                  : index === 3
                  ? familyCounts.girls
                  : familyCounts.babies
              }
              onChange={(e) => {
                const value = Number(e.target.value);
                if (index === 0) {
                  setFamilyCounts({
                    ...familyCounts,
                    ["men"]: Number(e.target.value),
                  });
                  setNumFamily(numFamily + Number(e.target.value));
                } else if (index === 1) {
                  setFamilyCounts({
                    ...familyCounts,
                    ["women"]: Number(e.target.value),
                  });
                  setNumFamily(numFamily + Number(e.target.value));
                } else if (index === 2)
                  setFamilyCounts({
                    ...familyCounts,
                    ["boys"]: Number(e.target.value),
                  });
                else if (index === 3)
                  setFamilyCounts({
                    ...familyCounts,
                    ["girls"]: Number(e.target.value),
                  });
                else
                  setFamilyCounts({
                    ...familyCounts,
                    ["babies"]: Number(e.target.value),
                  });
              }}
              className="select select-bordered w-full"
            >
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="btn btn-primary text-white text-base"
          onClick={createPackingList}
          disabled={numFamily < 1}
        >
          Create Packing List
        </button>
      </div>
      {packingList.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-2 mt-2">
            Estimated Weight & Baggage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-16">
                      <Image src={weightPic} alt="Weight in Kilograms" />
                    </div>
                  </div>
                </div>
                <div className="stat-title text-primary font-bold">
                  Total Weight
                </div>
                <div className="stat-value text-secondary">{totalWeight}</div>
                <div className="stat-desc text-base">kilograms</div>
              </div>
            </div>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar">
                    <div className="w-16">
                      <Image src={luggagePic} alt="Luggages" />
                    </div>
                  </div>
                </div>
                <div className="stat-title text-primary font-bold">
                  Baggages
                </div>
                <div className="stat-value text-secondary">{numBaggage}</div>
                <div className="stat-desc text-base">Bags</div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2 mt-2">Packing List</h2>
        </>
      )}
      {packingList.length > 0 && (
        <>
          <table className="table w-full mt-4">
            <thead>
              <tr>
                <th>Member</th>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {packingList.map((item, index) => (
                <tr key={index}>
                  <td>{item.size}</td>
                  <td>{item.item}</td>
                  <td>{Math.ceil(item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="btn btn-secondary mt-4 flex mx-auto text-white text-base"
            onClick={handlePrint}
          >
            <FaPrint className="mr-2" /> Share Packing List
          </button>
        </>
      )}
    </div>
  );
};

export default FamilyPacking;
