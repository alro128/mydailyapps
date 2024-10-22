"use client";
import React, { useState, useEffect, useRef } from "react";
import { TbMetronome } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { FaPlay, FaStop } from "react-icons/fa";

const ChordMetronome: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Metronome");
  const [tempo, setTempo] = useState(120); // Default tempo is 120 BPM
  const [timeSignature, setTimeSignature] = useState("4/4");
  const [totalBars, setTotalBars] = useState(12);
  const [chordProgression, setChordProgression] = useState(
    "I,I,I,I,IV,IV,I,I,V,IV,I,I"
  );
  const [startFromZero, setStartFromZero] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBar, setCurrentBar] = useState(startFromZero ? 0 : 1);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentChord, setCurrentChord] = useState("I");

  const metronomeInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const chords = chordProgression.split(",");
    setTotalBars(chords.length);
  }, [chordProgression]);

  // Handler to start the metronome
  const startMetronome = () => {
    if (metronomeInterval.current) {
      clearInterval(metronomeInterval.current);
    }

    setIsPlaying(true);
    setCurrentBar(startFromZero ? 0 : 1);
    setCurrentStep(1);

    metronomeInterval.current = setInterval(() => {
      setCurrentStep((prevStep) => {
        const nextStep = prevStep === 4 ? 1 : prevStep + 1;
        return nextStep;
      });
    }, (60 / tempo) * 1000);
  };

  // Handler to stop the metronome
  const stopMetronome = () => {
    if (metronomeInterval.current) {
      clearInterval(metronomeInterval.current);
      metronomeInterval.current = null;
    }
    setIsPlaying(false);
    setCurrentBar(startFromZero ? 0 : 1);
    setCurrentStep(1);
  };

  useEffect(() => {
    const chords = chordProgression.split(",");

    setCurrentBar((prevBar) => {
      let newBar = prevBar;
      if (currentStep === 1 && prevBar >= (startFromZero ? 0 : 1)) {
        newBar = prevBar + 1;
      }
      return newBar > totalBars ? (startFromZero ? 0 : 1) : newBar;
    });

    setCurrentChord(chords[currentBar - 1] || chords[0]);
  }, [currentStep, chordProgression]);

  return (
    <div className="flex justify-center align-top min-h-fit p-4 text-base">
      <metadata>
        <title>Metronome with Chord Progression</title>
        <meta
          name="description"
          content="Metronome with Chord Progression, music improvisation, music learning"
        />
      </metadata>
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-6xl">
        {/* Title and Description */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Metronome with Chord Progression
        </h1>
        <p className="text-justify mb-8">
          Showing the chord progression within the metronome helps music
          learners follow the beats while guiding which chords to play, making
          it ideal for improvisation and practice.
        </p>

        {/* Tabs Navigation Bottom Style */}
        <div className="w-full flex left-0 items-center justify-center bg-slate-50 border-b border-gray-200">
          <div className="flex justify-around">
            <button
              className={`btn btn-ghost rounded-none flex flex-col items-center justify-center border-l border-r border-gray-200 ${
                activeTab === "Metronome"
                  ? "text-secondary bg-gray-200"
                  : "text-primary"
              }`}
              onClick={() => setActiveTab("Metronome")}
            >
              <TbMetronome
                className='text-xl mb-1 ${
              activeTab === "Metronome" ? "text-secondary" : "text-primary"
            }`}'
              />
              <span className="text-base">Metronome</span>
            </button>

            <button
              className={`btn btn-ghost rounded-none flex flex-col items-center justify-center border-l border-r border-gray-200 ${
                activeTab === "Settings"
                  ? "text-secondary bg-gray-200"
                  : "text-primary"
              }`}
              onClick={() => setActiveTab("Settings")}
            >
              <IoMdSettings
                className='text-xl mb-1 ${
              activeTab === "Settings" ? "text-secondary" : "text-primary"
            }`}'
              />
              <span className="text-base">Settings</span>
            </button>
          </div>
        </div>

        {/* Metronome Tab */}
        {activeTab === "Metronome" && (
          <div className="text-center">
            {/* Tempo and Time Signature Display */}
            <div className="stats shadow mb-8">
              <div className="stat">
                <div className="stat-title">Tempo</div>
                <div className="stat-value">{tempo}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Time Signature</div>
                <div className="stat-value">{timeSignature}</div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                className="btn btn-success text-base"
                onClick={startMetronome}
                disabled={isPlaying}
              >
                <FaPlay className="text-base" />
                Play
              </button>
              <button
                className="btn btn-error text-base"
                onClick={stopMetronome}
                disabled={!isPlaying}
              >
                <FaStop className="text-base" />
                Stop
              </button>
            </div>

            {/* Step Indicator */}
            <div className="steps mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`step ${
                    currentStep >= step ? "step-primary" : ""
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <p></p>
            {/* Current Bar and Chord */}
            <div className="stats shadow mb-8">
              <div className="stat">
                <div className="stat-title">Bar</div>
                <div className="stat-value">{currentBar}</div>
              </div>
              <div className="stat">
                <div className="stat-title">Chord</div>
                <div className="stat-value">{currentChord}</div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "Settings" && (
          <div className="text-center space-y-4">
            {/* Time Signature */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time Signature</span>
              </label>
              <select
                className="select select-bordered"
                value={timeSignature}
                onChange={(e) => setTimeSignature(e.target.value)}
              >
                <option value="4/4">4/4</option>
                {/* Add more time signature options here */}
              </select>
            </div>

            {/* Tempo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tempo (BPM)</span>
              </label>
              <select
                className="select select-bordered"
                value={tempo}
                onChange={(e) => setTempo(parseInt(e.target.value))}
              >
                {Array.from({ length: 161 }, (_, i) => 40 + i).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Bars */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Total Number of Bars</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={totalBars}
                min={1}
                onChange={(e) => setTotalBars(parseInt(e.target.value))}
              />
            </div>

            {/* Chord Progression */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Chord Progression</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={chordProgression}
                onChange={(e) => setChordProgression(e.target.value)}
              />
            </div>

            {/* Start Counting from Zero */}
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text">Start Bar Counting from 0</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={startFromZero}
                  onChange={(e) => setStartFromZero(e.target.checked)}
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChordMetronome;
