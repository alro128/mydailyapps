import React from "react";
import { FaDownload } from "react-icons/fa";

const FreeTemplates: React.FC = () => {
  // Sample Data for Excel Templates
  const templates = [
    {
      id: 1,
      name: "Mortgage Calculator",
      description:
        "Helps you calculate monthly mortgage payments based on interest rate, loan amount, and loan term.",
      link: "MortgageCalculatorWithAmortization-office365.xlsx",
    },
    {
      id: 2,
      name: "Travel Packing Checklist",
      description:
        "Organize your packing for any trip with this handy checklist template.",
      link: "/Family_Travel_Packing_List.xlsx",
    },
    {
      id: 3,
      name: "Apartment Inventory",
      description: "Keep track of your apartment's inventory and valuables.",
      link: "/ApartmentRental_inventory.xlsx",
    },
  ];

  return (
    <div className="flex justify-center align-top min-h-fit p-4 text-base">
      <metadata>
        <title>Free Templates</title>
        <meta
          name="description"
          content="Get customized plant care recommendations"
        />
      </metadata>
      <div className="bg-slate-50 p-8 rounded-lg shadow-lg w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-8">
          Free MS Excel Templates
        </h1>
        {/* Description */}
        <p className="text-justify text-base mb-6">
          In this web, we provide useful functionality and tools for users in an
          open-source and completely free way. We prioritize your privacy and
          don't collect any personal information. Because of this, calculators
          or planners that require personal data input, such as financial
          planning or inventory tracking, are made available as downloadable,
          free MS Excel-compatible templates. This allows you to use our tools
          locally, ensuring your sensitive data remains secure on your own
          device. Enjoy a variety of templates, from mortgage calculators and
          travel packing checklists to apartment inventory and retirement
          planners—all tailored to make your life easier!
        </p>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className="text-left text-base">Template Name</th>
                <th className="text-left text-base">Description</th>
                <th className="text-center text-base">Download Link</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template) => (
                <tr key={template.id}>
                  <td className="text-base">
                    <strong>{template.name}</strong>
                  </td>
                  <td className="text-base">{template.description}</td>
                  <td className="text-base">
                    <a
                      href={template.link}
                      className="btn btn-md btn-primary text-base text-white"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FreeTemplates;
