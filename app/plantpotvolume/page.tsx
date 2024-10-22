"use client";
import React, { useState } from "react";
import type { Metadata } from "next";

const PlantPotVolume = () => {
  const [shape, setShape] = useState("");
  const [volume, setVolume] = useState<number | null>(null);

  // State for input values
  const [dimensions, setDimensions] = useState({
    topRadius: 0,
    bottomRadius: 0,
    height: 0,
    diameter: 0,
    width: 0,
    depth: 0,
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDimensions({ ...dimensions, [name]: parseFloat(value) });
  };

  // Calculate Volume
  const calculateVolume = () => {
    let calculatedVolume = 0;

    if (shape === "Cylindrical") {
      const radius = dimensions.diameter / 2;
      calculatedVolume = Math.PI * Math.pow(radius, 2) * dimensions.height;
    } else if (shape === "Rectangular") {
      calculatedVolume =
        dimensions.width * dimensions.depth * dimensions.height;
    } else if (shape === "Conical") {
      calculatedVolume =
        (1 / 3) *
        Math.PI *
        dimensions.height *
        (Math.pow(dimensions.topRadius, 2) +
          Math.pow(dimensions.bottomRadius, 2) +
          dimensions.topRadius * dimensions.bottomRadius);
    }

    // Convert to Liters and set result
    setVolume(calculatedVolume / 1000);
  };

  return (
    <div className="flex justify-center align-top min-h-fit">
      <metadata>
        <title>Plant Pot Volume Calculator</title>
        <meta
          name="description"
          content="Calculate the volume of your plant pot"
        />
      </metadata>
      <div className="bg-slate-50 p-4 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          Plant Pot Volume Calculator
        </h1>

        {/* Description */}
        <p className="text-justify text-base mb-6">
          The Plant Pot Volume Calculator is a simple and intuitive tool
          designed to help gardeners and plant enthusiasts calculate the volume
          of their plant pots based on different shapes. Users can select from
          three popular pot shapes—
          <strong>Cylindrical, Rectangular, and Conical</strong>—and input the
          respective dimensions. The calculator will then compute the volume in
          liters, making it easy to determine the amount of soil or water needed
          for the planter.
        </p>

        {/* Shape Selector */}
        <div className="form-control mb-6">
          <label className="label font-bold">Select Plant Pot Shape</label>
          <select
            className="select select-bordered w-full"
            value={shape}
            onChange={(e) => setShape(e.target.value)}
          >
            <option value="">Choose Shape</option>
            <option value="Cylindrical">Cylindrical</option>
            <option value="Rectangular">Rectangular</option>
            <option value="Conical">Conical</option>
          </select>
        </div>

        {/* Shape-specific Input Fields */}
        {shape && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {shape === "Cylindrical" && (
              <>
                <div className="form-control">
                  <label className="label font-bold">Diameter (cm)</label>
                  <input
                    type="number"
                    name="diameter"
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
            {shape === "Rectangular" && (
              <>
                <div className="form-control">
                  <label className="label font-bold">Width (cm)</label>
                  <input
                    type="number"
                    name="width"
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">Depth (cm)</label>
                  <input
                    type="number"
                    name="depth"
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
            {shape === "Conical" && (
              <>
                <div className="form-control">
                  <label className="label font-bold">Top Radius (cm)</label>
                  <input
                    type="number"
                    name="topRadius"
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">Bottom Radius (cm)</label>
                  <input
                    type="number"
                    name="bottomRadius"
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold">Height (cm)</label>
                  <input
                    type="number"
                    name="height"
                    className="input input-bordered"
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
          </div>
        )}

        {/* Calculate Button */}
        <div className="flex justify-center">
          <button
            className="btn btn-primary text-white"
            onClick={calculateVolume}
          >
            Calculate Planter Volume
          </button>
        </div>

        {/* Result */}
        {volume !== null && (
          <div className="text-center mt-6">
            <h1 className="text-2xl font-bold">
              Volume: {volume.toFixed(2)} Liters
            </h1>
          </div>
        )}

        {/* Recommendation Table */}
        {volume !== null && (
          <div className="mt-10">
            <h2 className="text-xl font-bold text-center mb-4">
              Plant Recommendations Based on Pot Volume
            </h2>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Volume (Liters)</th>
                    <th>Recommended Plant Types</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0 - 1 L</td>
                    <td>Succulents, Herbs, Small Cacti</td>
                  </tr>
                  <tr>
                    <td>1 - 5 L</td>
                    <td>Small Flowers, Miniature Shrubs, Baby Vegetables</td>
                  </tr>
                  <tr>
                    <td>5 - 15 L</td>
                    <td>Medium Flowers, Herbs, Leafy Greens</td>
                  </tr>
                  <tr>
                    <td>15 - 30 L</td>
                    <td>Dwarf Fruit Trees, Tomatoes, Peppers</td>
                  </tr>
                  <tr>
                    <td>30+ L</td>
                    <td>Large Shrubs, Small Trees, Root Vegetables</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantPotVolume;
