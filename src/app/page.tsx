import { WelcomeScreen } from "@/components/welcome-screen";

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col relative">
      <WelcomeScreen />
      <div className="pt-10 sm:pt-16 pb-28 sm:pb-36 flex flex-col gap-16 sm:gap-24">
      </div>
    </main>
  );
}
