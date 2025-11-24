export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  status: 'On Time' | 'Delayed' | 'Cancelled' | 'Arrived';
  departure: {
    city: string;
    code: string;
    time: string; // ISO string
    terminal: string;
    gate: string;
  };
  arrival: {
    city: string;
    code: string;
    time: string; // ISO string
    terminal: string;
    gate: string;
  };
  duration: string;
}

export const MOCK_FLIGHTS: Flight[] = [
  {
    id: '1',
    flightNumber: 'AA123',
    airline: 'American Airlines',
    status: 'On Time',
    departure: {
      city: 'New York',
      code: 'JFK',
      time: '2025-11-24T14:00:00-05:00',
      terminal: '8',
      gate: 'B12',
    },
    arrival: {
      city: 'London',
      code: 'LHR',
      time: '2025-11-25T02:00:00+00:00',
      terminal: '5',
      gate: 'A10',
    },
    duration: '7h 00m',
  },
  {
    id: '2',
    flightNumber: 'BA456',
    airline: 'British Airways',
    status: 'Delayed',
    departure: {
      city: 'London',
      code: 'LHR',
      time: '2025-11-24T10:00:00+00:00',
      terminal: '5',
      gate: 'C22',
    },
    arrival: {
      city: 'New York',
      code: 'JFK',
      time: '2025-11-24T13:30:00-05:00',
      terminal: '7',
      gate: '14',
    },
    duration: '8h 30m',
  },
  {
    id: '3',
    flightNumber: 'DL789',
    airline: 'Delta Air Lines',
    status: 'On Time',
    departure: {
      city: 'Los Angeles',
      code: 'LAX',
      time: '2025-11-24T08:00:00-08:00',
      terminal: '2',
      gate: '24A',
    },
    arrival: {
      city: 'Tokyo',
      code: 'HND',
      time: '2025-11-25T12:00:00+09:00',
      terminal: '3',
      gate: '112',
    },
    duration: '12h 00m',
  },
  {
    id: '4',
    flightNumber: 'UA101',
    airline: 'United Airlines',
    status: 'Cancelled',
    departure: {
      city: 'San Francisco',
      code: 'SFO',
      time: '2025-11-24T09:00:00-08:00',
      terminal: '3',
      gate: 'F11',
    },
    arrival: {
      city: 'Chicago',
      code: 'ORD',
      time: '2025-11-24T15:00:00-06:00',
      terminal: '1',
      gate: 'B6',
    },
    duration: '4h 00m',
  },
];
