# Page Views Time Series Analysis

![image](https://github.com/user-attachments/assets/0a8c204e-b42f-4d46-820d-b12fe9b1de65)


## 📊 Overview
This project visualizes simulated website page views over time using statistical distributions and data visualization techniques from the stdlib library. It demonstrates:
- Synthetic time-series data generation
- Statistical distribution modeling
- Outlier detection visualization
- Interactive HTML plotting

## ✨ Features
- Generates realistic page view data with normal distribution
- Models theoretical traffic patterns using Normal distribution
- Identifies anomalous traffic bursts
- Compares sample statistics with theoretical distribution properties
- Interactive HTML visualization with time-axis formatting

## 📥 Installation
```bash
npm install @stdlib/stdlib
```

## 🚀 Usage
```javascript
node index.js
```
Outputs:
- `pageviews-visualization.html` - Interactive plot
  
## 📈 Key Visual Elements

1. **Time Series Plot** - Blue line with markers showing page views per second
2. **Theoretical Mean** - Red dashed line showing expected average traffic
3. **Theoretical Median** - Green solid line showing central tendency
4. **Traffic Bursts** - Clearly visible spikes in page views
5. **F-Distribution Reference** - Purple text annotation showing related distribution mean

## 📝 Code Explanation
### Data Generation
```javascript
// Normal distribution with μ=0, σ=5
const rand = normal.factory(0.0, 5.0);
const data = Array.from({ length: 100 }, () => rand());
```
Generates baseline traffic data with occasional outliers

### Statistical Modeling
```javascript
const fittedNormal = new Normal(sampleMean, sampleStdev);
```
Creates Normal distribution model based on sample data characteristics

### Visualization Setup
```javascript
const plt = plot([x], [data], {
  title: `Page Views Over Time...`,
  xLabel: "Time (seconds)",
  yLabel: "Page Views",
  renderFormat: "html"
});
```
Configures interactive plot with time-axis formatting

## 📌 Technical Details
| Aspect               | Implementation                 |
|----------------------|--------------------------------|
| Data Distribution    | Normal (μ=0, σ=5) + Outliers   |
| Visualization Library| @stdlib/plot                   |
| Statistical Models   | Normal, F distributions        |
| Output Format        | HTML + Console Summary         |
| Runtime              | Node.js ≥14                    |

## 📚 Documentation References
- [stdlib Random Numbers](https://stdlib.io/docs/api/latest/@stdlib/random)
- [stdlib Statistical Distributions](https://stdlib.io/docs/api/latest/@stdlib/stats/base/dists)
- [stdlib Plotting](https://stdlib.io/docs/api/latest/@stdlib/plot)

