// Import required modules - using distribution versions as specified
const normal = require("@stdlib/random/base/normal");
const plot = require("@stdlib/plot"); // Use documented usage
const F = require("@stdlib/stats/base/dists/f"); // F-distribution
const { Normal } = require("@stdlib/stats/base/dists/normal");

// Generate synthetic data with outliers
const rand = normal.factory(0.0, 5.0); // Normal distribution (μ=0, σ=5)
const data = Array.from({ length: 100 }, () => rand());
data.push(50, 55, 60); // Add outliers

// Compute sample mean and sample standard deviation from data
const sampleMean = data.reduce((sum, x) => sum + x, 0) / data.length;
const sampleVariance =
  data.reduce((sum, x) => sum + Math.pow(x - sampleMean, 2), 0) / data.length;
const sampleStdev = Math.sqrt(sampleVariance);

// Create a normal distribution fitted to our data
const fittedNormal = new Normal(sampleMean, sampleStdev);

// Calculate statistics using distribution methods
const theoreticalMean = fittedNormal.mean;
const theoreticalMedian = fittedNormal.median;

// Demonstrate F-distribution mean (not used directly in the plot)
const fMean = F.mean(5, 10); // Degrees of freedom 5 and 10

// Create x-axis data (using indices for the observations)
const x = Array.from({ length: data.length }, (_, i) => i);

// Create a new plot by supplying the x and y data arrays and options:
const plt = plot([x], [data], {
  title: `Distribution Statistics Comparison\nTheoretical Mean: ${theoreticalMean.toFixed(
    2
  )}\nTheoretical Median: ${theoreticalMedian.toFixed(2)}`,
  xLabel: "Observation",
  yLabel: "Value",
  width: 1024,
  height: 768,
  grid: true,
  legendPosition: "top-left",
  renderFormat: "html", // Use HTML as the render format
});

// Render the plot as HTML:
const html = plt.render();
require("fs").writeFileSync("distribution-stats.html", html);
console.log("Plot rendered as HTML and saved as distribution-stats.html");
console.log(`F-distribution mean (df=5,10): ${fMean}`);
