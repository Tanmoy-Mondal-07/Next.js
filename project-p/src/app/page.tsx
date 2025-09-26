import ParticleCanvas from "@/components/ParticleCanvas";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ParticleCanvas />
      <div>
        <Spline scene="https://prod.spline.design/e9FijfUkjE6I9kqF/scene.splinecode" className="absolute inset-0 z-50" />
      </div>
    </div>
  );
}
