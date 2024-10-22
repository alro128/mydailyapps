"use client";
import React, { useState } from "react";
import Link from "next/link";

const PlantProfiler = () => {
  const [plantType, setPlantType] = useState("");

  // Plant recommendations
  const plantProfiles = {
    "Succulents, Herbs, Small Cacti": {
      volume: "0 - 1 Liters",
      sunlight: "Bright indirect light, tolerates direct sunlight",
      water: "Minimal water. Water only when the soil is completely dry.",
      nutrients: "Low NPK, with balanced micronutrients.",
    },
    "Small Flowers, Miniature Shrubs, Baby Vegetables": {
      volume: "1 - 5 Liters",
      sunlight: "Full sunlight for 4-6 hours daily",
      water: "Water thoroughly once soil surface is dry.",
      nutrients: "Balanced NPK ratio (10-10-10) once a month.",
    },
    "Medium Flowers, Herbs, Leafy Greens": {
      volume: "5 - 15 Liters",
      sunlight: "Full sunlight or partial shade",
      water: "Keep soil consistently moist. Water 2-3 times per week.",
      nutrients:
        "High nitrogen (N) fertilizer (20-10-10) during growth period.",
    },
    "Dwarf Fruit Trees, Tomatoes, Peppers": {
      volume: "15 - 30 Liters",
      sunlight: "Full sunlight for 6-8 hours daily",
      water: "Water deeply once or twice a week. Avoid waterlogging.",
      nutrients:
        "High phosphorus (P) and potassium (K) for fruiting (5-10-10).",
    },
    "Large Shrubs, Small Trees, Root Vegetables": {
      volume: "30+ Liters",
      sunlight: "Full sunlight for most of the day",
      water: "Water deeply once a week. Increase frequency in hot climates.",
      nutrients: "Balanced NPK (10-10-10) or root-boosting fertilizers.",
    },
  };

  return (
    <div className="flex justify-center align-top min-h-fit p-4 text-base">
      <metadata>
        <title>Plant Profiler</title>
        <meta
          name="description"
          content="Get customized plant care recommendations"
        />
      </metadata>
      <div className="bg-slate-50 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-4">Plant Profiler</h1>

        {/* Description */}
        <p className="text-justify text-base mb-6">
          Choosing the right pot size, sunlight exposure, watering routine, and
          nutrients is crucial for your plant’s health and growth. An
          inappropriate pot volume can lead to root binding or rot, incorrect
          sunlight exposure can stunt growth or cause leaf burn, and improper
          watering can either drown the plant or leave it parched. Each plant
          also requires specific nutrient ratios to thrive, making it essential
          to provide the correct NPK levels for optimal growth.
        </p>

        {/* Plant Type Selector */}
        <div className="form-control mb-8">
          <label className="label font-bold">Select Plant Type</label>
          <select
            className="select select-bordered w-full"
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
          >
            <option value="">Choose Plant Type</option>
            <option value="Succulents, Herbs, Small Cacti">
              Succulents, Herbs, Small Cacti
            </option>
            <option value="Small Flowers, Miniature Shrubs, Baby Vegetables">
              Small Flowers, Miniature Shrubs, Baby Vegetables
            </option>
            <option value="Medium Flowers, Herbs, Leafy Greens">
              Medium Flowers, Herbs, Leafy Greens
            </option>
            <option value="Dwarf Fruit Trees, Tomatoes, Peppers">
              Dwarf Fruit Trees, Tomatoes, Peppers
            </option>
            <option value="Large Shrubs, Small Trees, Root Vegetables">
              Large Shrubs, Small Trees, Root Vegetables
            </option>
          </select>
        </div>

        {/* Display Recommendations in Table */}
        {plantType && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              Recommendations for {plantType}
            </h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Criteria</th>
                    <th>Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Recommended Pot Volume</td>
                    <td>
                      {
                        plantProfiles[plantType as keyof typeof plantProfiles]
                          .volume
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Sunlight Exposure</td>
                    <td>
                      {
                        plantProfiles[plantType as keyof typeof plantProfiles]
                          .sunlight
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">Watering Amount & Frequency</td>
                    <td>
                      {
                        plantProfiles[plantType as keyof typeof plantProfiles]
                          .water
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">
                      Specific Nutrient Requirements
                    </td>
                    <td>
                      {
                        plantProfiles[plantType as keyof typeof plantProfiles]
                          .nutrients
                      }
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Link to Plant Pot Volume Calculator */}
        <div className="text-center mt-10">
          <Link href="/plantpotvolume" className="underline">
            Calculate Plant Pot Volume
          </Link>{" "}
          to validate if your plant pot meet the liter requirements for your
          plant.
        </div>
      </div>
    </div>
  );
};

export default PlantProfiler;
