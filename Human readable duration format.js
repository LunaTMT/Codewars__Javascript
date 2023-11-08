function formatDuration (seconds) {
  if (seconds == 0) return "now";
  
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365;

  const years = Math.floor(seconds / year);
  const days = Math.floor((seconds % year) / day);
  const hours = Math.floor((seconds % day) / hour);
  const minutes = Math.floor((seconds % hour) / minute);
  const remainingSeconds = seconds % minute;
  
  const timeSegments = [
    formatUnit(years, "year"),
    formatUnit(days, "day"),
    formatUnit(hours, "hour"),
    formatUnit(minutes, "minute"),
    formatUnit(remainingSeconds, "second")].filter(e => e !== "");
  
  if (timeSegments.length === 1) {
    return timeSegments[0];
  } else {
    const lastSegment = timeSegments.pop();
    return `${timeSegments.join(", ")} and ${lastSegment}`;
  }
  
}

  const formatUnit = (value, unit) => {
    if (value === 0) return "";
    if (value === 1) return `${value} ${unit}`;
    return `${value} ${unit}s`;
  };