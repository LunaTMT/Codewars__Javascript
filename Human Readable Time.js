function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remaining_seconds = seconds % 60;
  
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    remaining_seconds = String(remaining_seconds).padStart(2, "0");
    
    return `${hours}:${minutes}:${remaining_seconds}`;
  }
  
  