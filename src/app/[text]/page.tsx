import Image from "next/image";

export default function Text({ params }: { params: { text: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.text}
    </main>
  );
}
