import { SearchForm } from '@/components/SearchForm';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white selection:bg-blue-500/30 overflow-hidden transition-colors duration-500">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-[150px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-indigo-400/10 dark:bg-indigo-600/5 blur-[150px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>

        <div className="w-full max-w-2xl mb-16 text-center space-y-6 animate-in fade-in slide-in-from-top-8 duration-1000">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-500 dark:from-white dark:via-white dark:to-white/40 pb-2">
            Flight<br />Tracker
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-xl font-medium max-w-md mx-auto leading-relaxed">
            Real-time flight status with precision and elegance.
          </p>
        </div>

        <SearchForm />
        
        <footer className="absolute bottom-8 text-zinc-500 dark:text-zinc-600 text-sm font-medium tracking-wide">
          <p>© 2025 Flight Tracker Inc.</p>
        </footer>
      </div>
    </main>
  );
}
