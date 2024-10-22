"use client";
import { useState } from "react";
import AppCard from "./components/AppCard";

const products = [
  {
    id: 1,
    name: "Latecomer",
    description:
      "Because your time is value, Latecomer is an app to promote punctuality, when you meet with friends and family, calculate the share bill based on arrival time. Late attendees should pay more and on time attendees should get rewarded.",
    topic: "social",
    path: "/latecomer",
    thumbnail: "/latecomer-thumbnail.webp",
  },
  {
    id: 2,
    name: "Metronome with Chord Progression",
    description:
      "Showing the chord progression within the metronome helps music learners follow the beats while guiding which chords to play, making it ideal for improvisation and practice.",
    topic: "music",
    path: "/chordmetronome",
    thumbnail: "/metronome-thumbnail.webp",
  },
  {
    id: 3,
    name: "Plant Profiler",
    description:
      "Optimize your gardening practices and ensure your plants thrive in the right conditions by getting customized care recommendations for various plant types.",
    topic: "gardening",
    path: "/plantprofiler",
    thumbnail: "/plantprofiler-thumbnail.webp",
  },
  {
    id: 4,
    name: "Plant Pot Volume Calculator",
    description:
      "Easily calculate the ideal pot volume for your plants based on pot shape and dimensions to ensure optimal growth and health.",
    topic: "gardening",
    path: "/plantpotvolume",
    thumbnail: "/plantpotvolume-thumbnail.webp",
  },
  {
    id: 5,
    name: "Word Counter",
    description:
      "Quickly count words and characters, and get estimated reading and speaking times for any text.",
    topic: "school",
    path: "/wordcounter",
    thumbnail: "/wordcounter-thumbnail.webp",
  },
  {
    id: 6,
    name: "Free Templates",
    description:
      "Explore our collection of free, downloadable MS Excel templates designed for various needs, including budgeting, planning, and organizing. Our templates are user-friendly and fully compatible with Excel, helping you manage personal and professional tasks efficiently. Best of all, your privacy is guaranteed, as no personal data is collected or stored.",
    topic: "free templates",
    path: "/freetemplates",
    thumbnail: "/freetemplates-thumbnail.webp",
  },
  // Add more products as needed
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewType, setViewType] = useState("card");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic === selectedTopic ? null : topic);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedTopic
        ? product.topic.toLowerCase() === selectedTopic.toLowerCase()
        : true)
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="flex items-center text-base">
        <strong className="mr-2">Search:</strong>
        <input
          type="text"
          placeholder="Search Apps and Articles..."
          className="input input-bordered w-auto max-w-s"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4">
          <strong className="ml-4">Topics:</strong>
          {[
            "Free Templates",
            "Music",
            "Gardening",
            "Technology",
            "Social",
            "School",
          ].map((topic) => (
            <button
              key={topic}
              className={`btn btn-sm btn-outline ${
                selectedTopic === topic
                  ? "text-white bg-secondary border-gray-200"
                  : ""
              }`}
              onClick={() => handleTopicClick(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Product Display */}
      <div
        className={`mt-8 grid ${
          viewType === "card" ? "grid-cols-1 md:grid-cols-3 gap-6" : ""
        }`}
      >
        {filteredProducts.map((product) => (
          <AppCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            topic={product.topic}
            path={product.path}
            thumbnail={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
