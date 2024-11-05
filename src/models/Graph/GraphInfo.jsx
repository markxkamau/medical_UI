import React from "react";

export default function Graph(props) {
  return (
    <>
    {/* Adjust  the width and height of the graph as needed */}
      <div className="w-full  bg-gray-100">
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900">
              Your Health Overview
            </h1>
            <p className="text-gray-600 mt-2">
              See how your medication and other factors are impacting your
              health over time.
            </p>

            {/*<!-- Graph Section -->*/}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Medication Adherence
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                <canvas id="medicationChart"></canvas>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Sleep Quality
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                <canvas id="sleepChart"></canvas>
              </div>
            </div>

            {/*<!-- Additional Graphs -->*/}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/*<!-- Placeholder for other survey charts -->*/}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <canvas id="surveyChart1"></canvas>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <canvas></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
