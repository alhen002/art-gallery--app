import { Spotlight } from "@/components/Spotlight/Spotlight";

export default function SpotLightPage({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p>No data available</p>;
  }
  const randomItem = data[Math.floor(Math.random() * data.length)];

  return (
    <Spotlight
      image={randomItem.imageSource}
      artist={randomItem.artist}
      title={randomItem.name}
      dimensions={randomItem.dimensions}
    />

  );
}
