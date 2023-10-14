Data Analysis Tool for Wine Dataset

This project is a data analysis tool for a wine dataset, providing utility functions to calculate class-wise mean, median, and mode of "Flavanoids." Additionally, it introduces a new property "Gamma" for each data point, followed by calculating class-wise mean, median, and mode of "Gamma."

Getting Started

1- Clone the Repository: Clone this repository to your local machine:
git clone https://github.com/dev-abhishekk3108/DataVisualization.git

2- Install Dependencies: Install project dependencies:
npm install

3- Start the Development Server: Launch the development server:
npm start

4- View in the Browser: Open your browser and visit http://localhost:3000 to use the data analysis tool.

Project Structure

The project is structured as follows:

    src: The source code directory for your React application.
        DataVisualization: The main module for data visualization.
            Formula: Contains utility functions for statistical calculations.
                Median.tsx: Function to calculate the median of a dataset.
                Mode.tsx: Function to calculate the mode of a dataset.
                Mean.tsx: Function to calculate the mean of a dataset.
            Index.tsx: Main component to display statistics for "Flavanoids."
        Table: Contains components related to rendering tabular data.
            Table.tsx: A reusable component for rendering tabular data.
            table.css: CSS styles for the table component.
        Visualization: Contains components for various data visualizations.
            Flavanoids.tsx: Component for visualizing Flavanoids data.
            Gamma.tsx: Component to calculate and visualize the "Gamma" property.
        Index.tsx: Main entry point of your data visualization application.
        WineData.ts: Sample dataset for the project.

Usage
Flavanoids Analysis

To calculate and display class-wise statistics for "Flavanoids":

    Open the tool in your browser.
    Check the "Flavanoids Analysis" Data.

Gamma Analysis

To calculate and display class-wise statistics for "Gamma":

    Open the tool in your browser.
    Check the "Gamma Analysis" Data.
