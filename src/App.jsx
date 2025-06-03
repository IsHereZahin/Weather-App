import Header from "./components/sections/header";
import WeatherBoard from "./components/sections/WeatherBoard";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <section className="w-full max-w-4xl">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
