const findMultiples = (z, lim) => { return Array.from({ length: Math.floor(lim / z) }, (_, i) => (z*(i+1))); }

const findMultiples = (z, lim) => { return Array(Math.floor(lim / z)).fill().map((_, i) => z * (i + 1)); }