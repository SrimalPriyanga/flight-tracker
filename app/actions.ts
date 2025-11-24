

import { MOCK_FLIGHTS, Flight } from '@/lib/mockData';

export async function searchFlights(query: string): Promise<Flight[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!query) return [];

  const normalizedQuery = query.toUpperCase().trim();

  return MOCK_FLIGHTS.filter((flight) =>
    flight.flightNumber.includes(normalizedQuery)
  );
}
