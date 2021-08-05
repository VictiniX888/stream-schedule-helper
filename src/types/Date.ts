// Returns positive if date1 > date2, 0 if ==, negative if <
export function compareDate(date1: Date, date2: Date): number {
  return date1.getTime() - date2.getTime();
}

export function getDayOfWeek(date: Date) {
  switch (date.getDay()) {
    case 0:
      return 'Sun';
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
  }
}
