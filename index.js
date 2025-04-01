const normal = require("@stdlib/random/base/normal");
const plot = require("@stdlib/plot");
const F = require("@stdlib/stats/base/dists/f");
const { Normal } = require("@stdlib/stats/base/dists/normal");

// Simulate website page views (with occasional outliers):
const rand = normal.factory(0.0, 5.0); // Base normal distribution (μ=0, σ=5)
const data = Array.from({ length: 100 }, () => rand());

// Simulate a few anomalous bursts in traffic:
data.push(50, 55, 60);

// Compute basic statistics from the data:
const sampleMean = data.reduce((sum, x) => sum + x, 0) / data.length;
const sampleVariance =
  data.reduce((sum, x) => sum + Math.pow(x - sampleMean, 2), 0) / data.length;
const sampleStdev = Math.sqrt(sampleVariance);

// Create a normal distribution object fitted to the synthetic data:
const fittedNormal = new Normal(sampleMean, sampleStdev);

// Extract distribution properties for reference:
const theoreticalMean = fittedNormal.mean;
const theoreticalMedian = fittedNormal.median;

// For additional context, compute an F-distribution mean (demonstration only):
const fMean = F.mean(5, 10); // Using degrees of freedom 5 and 10

// Create an x-axis array representing sequential time steps (e.g., each second):
const x = Array.from({ length: data.length }, (_, i) => i);

// Create the plot by providing the x and y data arrays and configuration options:
const plt = plot([x], [data], {
  title: `Page Views Over Time\nMean: ${theoreticalMean.toFixed(
    2
  )} | Median: ${theoreticalMedian.toFixed(2)}`,
  xLabel: "Time (seconds)",
  yLabel: "Page Views",
  width: 1024,
  height: 768,
  grid: true,
  legendPosition: "top-left",
  renderFormat: "html",
});

// Render the plot as HTML and save it to a file for review:
const html = plt.render();
require("fs").writeFileSync("pageviews-visualization.html", html);
console.log("Plot rendered as HTML and saved as pageviews-visualization.html");
console.log(`F-distribution mean (df=5,10): ${fMean}`);
