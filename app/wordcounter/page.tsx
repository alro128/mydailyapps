"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    calculateMetrics();
  });

  const calculateMetrics = () => {
    // Remove special characters and split by spaces to count words
    const wordsArray = text.trim().split(/\s+/).filter(Boolean);
    const characters = text.length;
    setWordCount(wordsArray.length);
    setCharCount(characters);
  };

  // Calculate estimated reading and speaking time in minutes and seconds
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes} min ${seconds} sec`;
  };

  const readingTimeInSeconds = (wordCount / 200) * 60; // 200 WPM reading speed
  const speakingTimeInSeconds = (wordCount / 130) * 60; // 130 WPM speaking speed

  return (
    <div className="flex justify-center align-top min-h-screen bg-base-200 p-6">
      <Head>
        <title>Word Counter</title>
        <meta
          name="description"
          content="Count words, characters, and view word density"
        />
      </Head>
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-6">Word Counter</h1>
        {/* Description */}
        <p className="text-justify text-base mb-6">
          Quickly count words and characters, and get estimated reading and
          speaking times for any text.
        </p>
        {/* Text Area Input */}
        <div className="form-control mb-6">
          <label className="label font-bold">Enter your text below</label>
          <textarea
            className="textarea textarea-bordered w-full h-40"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        {/* Results Table */}
        <div className="overflow-x-auto mb-10">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className="text-base">Metric</th>
                <th className="text-base">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-base font-bold">Number of Words</td>
                <td className="text-xl">{wordCount}</td>
              </tr>
              <tr>
                <td className="text-base font-bold">Number of Characters</td>
                <td className="text-xl">{charCount}</td>
              </tr>
              <tr>
                <td className="text-base font-bold">Estimated Reading Time</td>
                <td className="text-xl">{formatTime(readingTimeInSeconds)}</td>
              </tr>
              <tr>
                <td className="text-base font-bold">Estimated Speaking Time</td>
                <td className="text-xl">{formatTime(speakingTimeInSeconds)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WordCounter;
