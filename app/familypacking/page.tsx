"use client";
import React, { useState } from "react";

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
const familyItems: PackingItem[] = [
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
    item: "trousers",
    dayqty: 0.5,
    weight: 500.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "shorts",
    dayqty: 0.5,
    weight: 250.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "underwear",
    dayqty: 1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "swimwear",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Clothing",
    item: "hat",
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
    item: "toothpaste",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Toiletries",
    item: "deodorant",
    dayqty: -1.0,
    weight: 75.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Toiletries",
    item: "razor",
    dayqty: -1.0,
    weight: 25.0,
    handcarry: "n",
  },
  {
    size: "Men",
    category: "Toiletries",
    item: "comb",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Tech Devices",
    item: "Phone",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Tech Devices",
    item: "charger",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Tech Devices",
    item: "laptop",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Tech Devices",
    item: "headphones",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Documents",
    item: "tickets",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Documents",
    item: "wallet",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Documents",
    item: "ID",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Miscellaneous",
    item: "Sunglasses",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Miscellaneous",
    item: "books",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Men",
    category: "Miscellaneous",
    item: "medications",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "tops",
    dayqty: 1.0,
    weight: NaN,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "pants",
    dayqty: 1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "dresses",
    dayqty: 1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "underwear",
    dayqty: 1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "swimwear",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Clothing",
    item: "hat",
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
    item: "toothpaste",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Toiletries",
    item: "deodorant",
    dayqty: -1.0,
    weight: 75.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Toiletries",
    item: "comb",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Toiletries",
    item: "makeup essentials",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Tech Devices",
    item: "Phone",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Tech Devices",
    item: "charger",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Tech Devices",
    item: "camera",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Tech Devices",
    item: "headphones",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Documents",
    item: "tickets",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Documents",
    item: "wallet",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Documents",
    item: "ID",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Miscellaneous",
    item: "Sunglasses",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Miscellaneous",
    item: "books",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Women",
    category: "Miscellaneous",
    item: "medications",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Women",
    category: "Miscellaneous",
    item: "jewelry",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Boy",
    category: "Clothing",
    item: "T-shirts",
    dayqty: 1.0,
    weight: 200.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Clothing",
    item: "shorts",
    dayqty: 0.5,
    weight: 250.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Clothing",
    item: "underwear",
    dayqty: 1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Clothing",
    item: "socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Clothing",
    item: "jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Clothing",
    item: "swimwear",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Clothing",
    item: "hat",
    dayqty: -1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Shoes",
    item: "Sport Shoes",
    dayqty: -1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Shoes",
    item: "Sandals",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Toiletries",
    item: "Toothbrush",
    dayqty: -1.0,
    weight: 20.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Toiletries",
    item: "toothpaste",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Toiletries",
    item: "comb",
    dayqty: -1.0,
    weight: 75.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Toiletries",
    item: "baby wipes",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Tech Devices",
    item: "Tablet",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Boy",
    category: "Tech Devices",
    item: "headphones",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Boy",
    category: "Tech Devices",
    item: "charger",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Boy",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Boy",
    category: "Documents",
    item: "tickets",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Boy",
    category: "Documents",
    item: "school ID",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Boy",
    category: "Miscellaneous",
    item: "Sunglasses",
    dayqty: -1.0,
    weight: 35.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Miscellaneous",
    item: "book",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Boy",
    category: "Miscellaneous",
    item: "toys",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Boy",
    category: "Miscellaneous",
    item: "snacks",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Clothing",
    item: "T-shirts",
    dayqty: 1.0,
    weight: 200.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Clothing",
    item: "dresses",
    dayqty: 1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Clothing",
    item: "underwear",
    dayqty: 1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Clothing",
    item: "socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Clothing",
    item: "jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Clothing",
    item: "swimwear",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Clothing",
    item: "hat",
    dayqty: -1.0,
    weight: 50.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Shoes",
    item: "Sport Shoes",
    dayqty: -1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Shoes",
    item: "Sandals",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Toiletries",
    item: "Toothbrush",
    dayqty: -1.0,
    weight: 20.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Toiletries",
    item: "toothpaste",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Toiletries",
    item: "comb",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Toiletries",
    item: "hair ties",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Tech Devices",
    item: "Tablet",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Tech Devices",
    item: "headphones",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Tech Devices",
    item: "charger",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Documents",
    item: "tickets",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Documents",
    item: "school ID",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Miscellaneous",
    item: "Sunglasses",
    dayqty: -1.0,
    weight: 35.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Miscellaneous",
    item: "book",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Girl",
    category: "Miscellaneous",
    item: "toys",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Girl",
    category: "Miscellaneous",
    item: "snacks",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Clothing",
    item: "onesies",
    dayqty: 1.0,
    weight: 150.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Clothing",
    item: "pajamas",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Clothing",
    item: "pairs of socks",
    dayqty: 1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Clothing",
    item: "jacket",
    dayqty: -1.0,
    weight: 700.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Clothing",
    item: "hats",
    dayqty: -1.0,
    weight: 30.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Shoes",
    item: "Soft shoes",
    dayqty: -1.0,
    weight: 400.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Shoes",
    item: "Sandals",
    dayqty: -1.0,
    weight: 300.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Toiletries",
    item: "Baby shampoo",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Toiletries",
    item: "lotion",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "n",
  },
  {
    size: "Baby",
    category: "Toiletries",
    item: "wipes",
    dayqty: -1.0,
    weight: 100.0,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "diapers",
    dayqty: 2.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "baby powder",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "baby lotion",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "baby formula",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "bottles",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "pacifiers",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "bibs",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "toys",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "baby carrier",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "baby food",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Baby Essentials",
    item: "Baby monitor",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Tech Devices",
    item: "charger",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Tech Devices",
    item: "Tablet",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Documents",
    item: "Passport",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Documents",
    item: "birth certificate",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Miscellaneous",
    item: "Baby blankets",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Miscellaneous",
    item: "toys",
    dayqty: -1.0,
    weight: NaN,
    handcarry: "y",
  },
  {
    size: "Baby",
    category: "Miscellaneous",
    item: "stroller",
    dayqty: -1.0,
    weight: NaN,
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
  const [days, setDays] = useState<number>(0);
  const [packingList, setPackingList] = useState<PackingItem[]>([]);
  const [totalWeight, setTotalWeight] = useState<number>(0);
  const [numBaggage, setNumBaggage] = useState<number>(0);

  const calculatePackingList = () => {
    const consolidatedList: { [key: string]: PackingItem } = {};
    let weight = 0;

    familyItems.forEach((item) => {
      const quantity = calculateTotalQuantity(item, familyCounts, days);

      if (quantity > 0) {
        const key = `${item.size}-${item.item}`;
        if (!consolidatedList[key]) {
          consolidatedList[key] = {
            ...item,
            dayqty: quantity,
          };
        } else {
          consolidatedList[key].dayqty += quantity;
        }

        if (item.handcarry !== "y") {
          weight += item.weight * quantity;
        }
      }
    });

    setPackingList(Object.values(consolidatedList));
    setTotalWeight(weight / 1000); // convert grams to kg
    setNumBaggage(Math.ceil(weight / (23 * 1000))); // 23kg limit per baggage
  };

  const calculateTotalQuantity = (
    item: PackingItem,
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
    const perDayQuantity = item.dayqty === -1 ? 1 : item.dayqty;

    return (
      sizeMap[item.size.toLowerCase() as keyof FamilyCounts] *
      perDayQuantity *
      days
    );
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        Family Packing List
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Enter Family Details</h2>
          <form className="space-y-4">
            {["men", "women", "boys", "girls", "babies"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <label htmlFor={type} className="capitalize">
                  {type}:
                </label>
                <input
                  id={type}
                  type="number"
                  min="0"
                  className="input input-bordered w-full"
                  value={familyCounts[type as keyof FamilyCounts]}
                  onChange={(e) =>
                    setFamilyCounts({
                      ...familyCounts,
                      [type]: Number(e.target.value),
                    })
                  }
                />
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <label htmlFor="days">Travel Days:</label>
              <input
                id="days"
                type="number"
                min="0"
                className="input input-bordered w-full"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={calculatePackingList}
            >
              Calculate Packing List and Total Weight
            </button>
          </form>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Packing List</h2>
          <table className="table w-full mb-4">
            <thead>
              <tr>
                <th>Size</th>
                <th>Item</th>
                <th>Total Quantity</th>
              </tr>
            </thead>
            <tbody>
              {packingList.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.size}</td>
                  <td>{item.item}</td>
                  <td>{item.dayqty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mb-2">Metrics</h2>
          <table className="table w-full">
            <tbody>
              <tr>
                <td>Total Weight (Kg)</td>
                <td>{totalWeight.toFixed(2)} kg</td>
              </tr>
              <tr>
                <td>Estimated Number of Baggage</td>
                <td>{numBaggage}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FamilyPacking;
