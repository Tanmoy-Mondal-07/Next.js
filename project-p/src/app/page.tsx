import ParticleCanvas from "@/components/ParticleCanvas";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ParticleCanvas />
      <Spline scene="https://prod.spline.design/e9FijfUkjE6I9kqF/scene.splinecode" />
    </div>
  );
}
