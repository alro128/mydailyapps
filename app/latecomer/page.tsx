"use client";
import React, { useState } from "react";
import { format, parse } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaClock,
  FaUser,
  FaDollarSign,
  FaTrashAlt,
  FaPlus,
  FaPrint,
} from "react-icons/fa";

const LatecomerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("MeetingTime");
  const [meetingTime, setMeetingTime] = useState<Date | null>(new Date());
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [newAttendee, setNewAttendee] = useState("");
  const [newAttendeeTime, setNewAttendeetime] = useState(meetingTime);
  const [billAmount, setBillAmount] = useState<string>("");
  const [penalizationLimit, setPenalizationLimit] = useState("Up to 50%");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [attendeesBill, setAttendeesBill] = useState<Attendee[]>([]);
  const [sumBillAmount, setSumBillAmount] = useState<number>(0);

  // Helper function to format date
  const formatDate = (date: Date | null) =>
    date ? format(date, "dd/MM/yyyy HH:mm") : "";

  const parseDate = (dateString: string): Date => {
    return parse(dateString, "dd/MM/yyyy HH:mm", new Date());
  };

  // Function to handle adding attendees
  const addAttendee = () => {
    if (newAttendee.trim() && meetingTime) {
      const arrivalTime = newAttendeeTime
        ? newAttendeeTime
        : new Date(meetingTime.getTime());
      setAttendees([
        ...attendees,
        {
          id: Date.now().toString(),
          name: newAttendee.trim(),
          arrivalTime: arrivalTime,
          onTime: isOnTime(arrivalTime, meetingTime),
          penaltyPoints: calculatePenalty(arrivalTime, meetingTime),
          billShare: 0,
        },
      ]);
      setNewAttendee("");
    }
  };

  // Function to handle deleting attendees
  const deleteAttendee = (index: number) => {
    const updatedAttendees = attendees.filter((_, i) => i !== index);
    setAttendees(updatedAttendees);
  };

  // Attendee model in TypeScript
  interface Attendee {
    id: string;
    name: string;
    arrivalTime: Date;
    onTime: boolean;
    penaltyPoints: number;
    billShare: number;
  }

  function isOnTime(arrivalTime: Date, meetingTime: Date) {
    const minutesLate =
      (arrivalTime.getTime() - meetingTime.getTime()) / (1000 * 60);

    if (minutesLate <= 0) {
      return true;
    }

    return false;
  }

  // Function to calculate penalty points for an attendee
  function calculatePenalty(arrivalTime: Date, meetingTime: Date): number {
    const minutesLate =
      (arrivalTime.getTime() - meetingTime.getTime()) / (1000 * 60);

    let penalty = 0;

    if (minutesLate >= 1 && minutesLate <= 5) {
      penalty += minutesLate * 0.1;
    } else if (minutesLate >= 6 && minutesLate <= 10) {
      penalty += 5 * 0.1 + (minutesLate - 5) * 0.5;
    } else if (minutesLate >= 11 && minutesLate <= 15) {
      penalty += 5 * 0.1 + 5 * 0.5 + (minutesLate - 10) * 0.75;
    } else if (minutesLate >= 16 && minutesLate <= 20) {
      penalty += 5 * 0.1 + 5 * 0.5 + 5 * 0.75 + (minutesLate - 15) * 1.25;
    } else if (minutesLate >= 21 && minutesLate <= 25) {
      penalty +=
        5 * 0.1 + 5 * 0.5 + 5 * 0.75 + 5 * 1.25 + (minutesLate - 20) * 1.5;
    } else if (minutesLate >= 26 && minutesLate <= 30) {
      penalty +=
        5 * 0.1 +
        5 * 0.5 +
        5 * 0.75 +
        5 * 1.25 +
        5 * 1.5 +
        (minutesLate - 25) * 2.75;
    } else if (minutesLate >= 31 && minutesLate <= 35) {
      penalty +=
        5 * 0.1 +
        5 * 0.5 +
        5 * 0.75 +
        5 * 1.25 +
        5 * 1.5 +
        5 * 2.75 +
        (minutesLate - 30) * 3.75;
    } else if (minutesLate >= 36 && minutesLate <= 40) {
      penalty +=
        5 * 0.1 +
        5 * 0.5 +
        5 * 0.75 +
        5 * 1.25 +
        5 * 1.5 +
        5 * 2.75 +
        5 * 3.75 +
        (minutesLate - 35) * 4.5;
    } else if (minutesLate >= 41) {
      penalty +=
        5 * 0.1 +
        5 * 0.5 +
        5 * 0.75 +
        5 * 1.25 +
        5 * 1.5 +
        5 * 2.75 +
        5 * 3.75 +
        5 * 4.5 +
        (minutesLate - 40) * 4.83335;
    }

    return penalty;
  }

  function getPenaltyAmount(
    sumPenaltyPoints: number,
    penaltyPoints: number
  ): number {
    if (sumPenaltyPoints > penaltyLimit * 100) {
      return (
        (Number(billAmount) * penaltyLimit * penaltyPoints) / sumPenaltyPoints
      );
    } else {
      return Number(billAmount) * (penaltyPoints / 100);
    }
  }

  // Function to calculate bill shares for attendees
  const calculateBill = () => {
    setAttendeesBill([]);
    setSumBillAmount(0);

    const sumPenaltyPoints = attendees.reduce(
      (sum, attendee) => sum + attendee.penaltyPoints,
      0
    );

    // Check if any attendee is on time
    const anyOnTime = attendees.some((attendee) => attendee.onTime);

    if (!anyOnTime) {
      // Find the attendee with the earliest arrival time
      const earliestAttendee = attendees.reduce((earliest, current) =>
        current.arrivalTime < earliest.arrivalTime ? current : earliest
      );

      // Update attendees to set the earliest attendee's onTime to true
      attendees.map((attendee) =>
        attendee.id === earliestAttendee.id
          ? { ...attendee, onTime: true }
          : attendee
      );
    }

    attendees.map((attendee) => {
      attendee.billShare = 0;
      return attendee;
    });

    let totalSumAmount = 0;

    // Calculating share for latecomers
    const updatedAttendees = attendees.map((attendee) => {
      if (!attendee.onTime) {
        attendee.billShare = getPenaltyAmount(
          sumPenaltyPoints,
          attendee.penaltyPoints
        );
        totalSumAmount += attendee.billShare;
      }
      return attendee;
    });

    const remainingShare =
      (Number(billAmount) - totalSumAmount) / attendees.length;

    // Distributing remaining share equally among all attendees
    updatedAttendees.map((attendee) => {
      attendee.billShare += remainingShare;
      totalSumAmount += remainingShare;
      return attendee;
    });

    setAttendeesBill(updatedAttendees);
    setSumBillAmount(totalSumAmount);
  };

  const penaltyLimit =
    parseInt(penalizationLimit.replace("Up to ", "").replace("%", ""), 10) /
    100;

  // Helper function for printing the bill
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-4 rounded-lg shadow-lg max-w-3xl mx-auto bg-slate-50 text-base items-center">
      <h1 className="text-4xl font-bold text-center mb-4">
        Latecomer Bill Calculator
      </h1>
      {/* Description */}
      <p className="text-justify text-base mb-6">
        Because your time is value, Latecomer is an app to promote punctuality,
        when you meet with friends and family, calculate the shared bill based
        on arrival time. Late attendees should pay more and on time attendees
        should get rewarded.
      </p>
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-lifted md:tabs-lg">
        <a
          role="tab"
          className={`tab ${
            activeTab === "MeetingTime"
              ? "tab-active text-secondary [--tab-bg:#e5e7eb]"
              : "text-primary"
          }`}
          onClick={() => setActiveTab("MeetingTime")}
        >
          <FaClock
            className={`text-xl mb-1 mr-1 ${
              activeTab === "MeetingTime" ? "text-secondary" : "text-primary"
            }`}
          />{" "}
          Meeting Time
        </a>
        <a
          role="tab"
          className={`tab ${
            activeTab === "Attendees"
              ? "tab-active text-secondary [--tab-bg:#e5e7eb]"
              : "text-primary"
          }`}
          onClick={() => setActiveTab("Attendees")}
        >
          <FaUser
            className={`text-xl mb-1 mr-1 ${
              activeTab === "Attendees" ? "text-secondary" : "text-primary"
            }`}
          />{" "}
          Attendees
        </a>
        <a
          role="tab"
          className={`tab ${
            activeTab === "Bill"
              ? "tab-active text-secondary [--tab-bg:#e5e7eb]"
              : "text-primary"
          }`}
          onClick={() => setActiveTab("Bill")}
        >
          <FaDollarSign
            className={`text-xl mb-1 mr-1 ${
              activeTab === "Bill" ? "text-secondary" : "text-primary"
            }`}
          />{" "}
          Bill
        </a>
      </div>

      {/* Meeting Time Tab */}
      {activeTab === "MeetingTime" && (
        <div className="mt-4 flex flex-col items-center">
          <p className="mb-4 text-center">
            Set the meeting time for tracking attendees.
          </p>
          <button
            className={`btn btn-primary text-white text-base mb-4 ${
              attendees.length > 0 ? "btn-disabled" : ""
            }`}
            onClick={() => setShowDatePicker(true)}
          >
            Set Meeting Time
          </button>
          {attendees.length > 0 && (
            <p className="mt-2 text-red-500">
              Attendees list must be empty to change the meeting time.
            </p>
          )}
          {showDatePicker && (
            <DatePicker
              selected={meetingTime}
              onChange={(date) => {
                setMeetingTime(date);
                setNewAttendeetime(date);
                setShowDatePicker(false);
              }}
              showTimeSelect
              dateFormat="dd/MM/yyyy HH:mm"
              className="input input-bordered mt-4"
            />
          )}
          <p>
            Current Date and Time:{" "}
            <strong className="text-xl">{formatDate(meetingTime)}</strong>
          </p>
          <p className="mb-2 mt-4 text-center">Continue to Attendees Tab.</p>
        </div>
      )}
      {/* Attendees Tab */}
      {activeTab === "Attendees" && (
        <div className="mt-4 flex flex-col items-center">
          <p className="mb-4">Track attendees and their arrival time.</p>
          <div className="flex flex-wrap items-center justify-center space-x-1 md:space-x-4">
            <input
              type="text"
              placeholder="Attendee Name"
              className="input input-bordered w-2/6 md:w-1/4"
              value={newAttendee}
              onChange={(e) => setNewAttendee(e.target.value)}
            />
            <select
              className="select select-bordered text-base w-2/6 md:w-1/4"
              onChange={(e) => setNewAttendeetime(parseDate(e.target.value))}
              defaultValue={formatDate(newAttendeeTime)}
            >
              <option>{formatDate(meetingTime)}</option>
              {/* Next 40 minutes options */}
              {Array.from({ length: 40 }).map((_, i) => (
                <option key={i}>
                  {formatDate(
                    new Date(
                      (meetingTime ?? new Date()).getTime() + (i + 1) * 60000
                    )
                  )}
                </option>
              ))}
            </select>
            <button
              className="btn btn-success text-white text-base w-1/6 md:w-1/4"
              onClick={addAttendee}
              disabled={!newAttendee.trim()}
            >
              <FaPlus className="mr-2 hidden lg:block" />
              Add
            </button>
          </div>
          <div className="mt-4">
            {attendees.map((attendee, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 border-b py-2"
              >
                <FaClock
                  className={`mr-2 ${
                    attendee.arrivalTime <= meetingTime!
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                />
                <span className="flex-1">{attendee.name}</span>
                <span className="text-gray-500">
                  Arrived at {formatDate(attendee.arrivalTime)}
                </span>
                <button
                  className="btn btn-error btn-sm text-white "
                  onClick={() => deleteAttendee(index)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
          <p className="mb-2 mt-4 text-center">
            After all attendees are in the list, continue to Bill Tab.
          </p>
        </div>
      )}
      {/* Bill Tab */}
      {activeTab === "Bill" && (
        <div id="billTable" className="mt-4 flex flex-col items-center">
          <p className="mb-4">
            Enter the initial bill amount and the latecomer penalization limit,
            then Calculate Latecomer Shared Bill:
          </p>
          <div className="flex flex-wrap items-center justify-center space-y-1 space-x-1 md:space-x-4">
            <input
              type="text"
              placeholder="Bill Amount"
              className="input input-bordered w-2/6 md:w-1/4"
              value={billAmount}
              onChange={(e) =>
                setBillAmount(e.target.value.replace(/[^0-9.]/g, ""))
              }
            />
            <select
              className="select select-bordered text-base w-2/6 md:w-1/4"
              value={penalizationLimit}
              onChange={(e) => setPenalizationLimit(e.target.value)}
            >
              <option>Up to 10%</option>
              <option>Up to 15%</option>
              <option>Up to 25%</option>
              <option>Up to 50%</option>
              <option>Up to 75%</option>
              <option>Up to 100%</option>
            </select>
            <button
              className="btn btn-primary text-white text-base w-2/6 md:w-1/4"
              onClick={calculateBill}
              disabled={!billAmount}
            >
              Calculate
            </button>
          </div>

          {/* Display Calculated Bill Results */}
          {attendeesBill.length > 0 && (
            <div className="mt-8 w-full">
              <h3 className="text-lg font-semibold mb-4">
                Calculated Latecomer Bill
              </h3>
              <table className="table w-full text-center">
                <thead>
                  <tr>
                    <th className="text-base">Name</th>
                    <th className="text-base">Arrival Time</th>
                    <th className="text-base">$ Share</th>
                  </tr>
                </thead>
                <tbody>
                  {attendeesBill.map((item, index) => (
                    <tr key={index}>
                      <td className="text-base">{item.name}</td>
                      <td className="text-base">
                        {formatDate(item.arrivalTime)}
                      </td>
                      <td className="text-base">
                        ${item.billShare.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="text-base"></td>
                    <td className="text-base">Total</td>
                    <td className="text-base">${sumBillAmount.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <button
                className="btn btn-secondary mt-4 flex mx-auto text-white text-base"
                onClick={handlePrint}
              >
                <FaPrint className="mr-2" /> Share Bill
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LatecomerPage;
