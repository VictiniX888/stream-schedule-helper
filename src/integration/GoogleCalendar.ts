import Event from '../types/Event';

export async function getEvents(calendarId: string) {
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const API_ENDPOINT = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?singleEvents=true&orderBy=startTime&key=${GOOGLE_API_KEY}`;

  const res = await fetch(API_ENDPOINT);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const json = await res.json();

  const eventsRaw = json.items ?? [];
  const events: Event[] = eventsRaw.map((event: any) => {
    return {
      title: event.summary,
      time: new Date(event.start.dateTime),
    } as Event;
  });

  return events;
}
