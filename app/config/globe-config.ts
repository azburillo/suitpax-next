export const GLOBE_CONFIG = {
  width: 1000,
  height: 2000,
  scale: 1.6,
  maxScale: 1.5,
  minScale: 0.5,
  baseColor: [0.1, 0.1, 0.1],
  markerColor: [0.58, 0.77, 0.45], // #93c572 in RGB
  glowColor: [0.58, 0.77, 0.45], // Same as markerColor
  mapBrightness: 6,
  baseRotationSpeed: 0.003,
  markers: [
    { location: [37.0902, -95.7129], size: 0.1 }, // North America
    { location: [54.526, 15.2551], size: 0.1 }, // Europe
    { location: [34.0479, 100.6197], size: 0.1 }, // Asia
    { location: [-8.7832, -55.4915], size: 0.1 }, // South America
    { location: [9.1021, 18.2812], size: 0.1 }, // Africa
    { location: [-25.2744, 133.7751], size: 0.1 }, // Australia
    { location: [61.524, 105.3188], size: 0.1 }, // Russia
    { location: [20.5937, 78.9629], size: 0.1 }, // India
    { location: [35.8617, 104.1954], size: 0.1 }, // China
    { location: [-14.235, -51.9253], size: 0.1 }, // Brazil
  ],
  heatmapData: [
    { location: [37.0902, -95.7129], value: 1 }, // North America
    { location: [54.526, 15.2551], value: 0.8 }, // Europe
    { location: [34.0479, 100.6197], value: 0.9 }, // Asia
    { location: [-8.7832, -55.4915], value: 0.6 }, // South America
    { location: [9.1021, 18.2812], value: 0.5 }, // Africa
    { location: [-25.2744, 133.7751], value: 0.7 }, // Australia
  ],
}

