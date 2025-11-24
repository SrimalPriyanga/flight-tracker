import { Flight } from '@/lib/mockData';
import { Plane, Clock, MapPin, ArrowRight } from 'lucide-react';

interface FlightCardProps {
  flight: Flight;
}

export function FlightCard({ flight }: FlightCardProps) {
  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: Flight['status']) => {
    switch (status) {
      case 'On Time':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30';
      case 'Delayed':
        return 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/30';
      case 'Cancelled':
        return 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/20 dark:text-rose-400 dark:border-rose-500/30';
      case 'Arrived':
        return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-500/30';
      default:
        return 'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-500/20 dark:text-zinc-400 dark:border-zinc-500/30';
    }
  };

  return (
    <div className="w-full max-w-lg bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl dark:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20 transition-all duration-500 group relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-600/20 transition-colors duration-500" />

      {/* Header */}
      <div className="relative flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 dark:bg-white/5 rounded-xl border border-blue-100 dark:border-white/10">
              <Plane className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {flight.flightNumber}
            </h3>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium pl-1">{flight.airline}</p>
        </div>
        <span
          className={`px-4 py-1.5 rounded-full text-xs font-bold border tracking-wide uppercase ${getStatusColor(
            flight.status
          )}`}
        >
          {flight.status}
        </span>
      </div>

      {/* Route Visualization */}
      <div className="relative flex justify-between items-center mb-10 px-2">
        {/* Departure */}
        <div className="text-center z-10">
          <div className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">{flight.departure.code}</div>
          <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{flight.departure.city}</div>
        </div>

        {/* Flight Path Line */}
        <div className="flex-1 mx-6 relative h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 p-2 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-lg">
            <Plane className="w-4 h-4 text-zinc-400 rotate-90" />
          </div>
        </div>

        {/* Arrival */}
        <div className="text-center z-10">
          <div className="text-4xl font-black text-zinc-900 dark:text-white mb-2 tracking-tighter">{flight.arrival.code}</div>
          <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{flight.arrival.city}</div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-zinc-50 dark:bg-white/5 rounded-2xl p-4 border border-zinc-100 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-bold tracking-wider mb-2">
            <Clock className="w-3 h-3" /> DEPARTURE
          </div>
          <div className="text-xl text-zinc-900 dark:text-white font-bold mb-1">{formatTime(flight.departure.time)}</div>
          <div className="text-zinc-500 text-xs font-medium">{formatDate(flight.departure.time)}</div>
        </div>
        <div className="bg-zinc-50 dark:bg-white/5 rounded-2xl p-4 border border-zinc-100 dark:border-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-xs font-bold tracking-wider mb-2">
            <Clock className="w-3 h-3" /> ARRIVAL
          </div>
          <div className="text-xl text-zinc-900 dark:text-white font-bold mb-1">{formatTime(flight.arrival.time)}</div>
          <div className="text-zinc-500 text-xs font-medium">{formatDate(flight.arrival.time)}</div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex justify-between items-center pt-6 border-t border-zinc-100 dark:border-white/5 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <span className="font-medium">T{flight.departure.terminal} • Gate {flight.departure.gate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
          <span className="font-medium">{flight.duration}</span>
        </div>
      </div>
    </div>
  );
}
