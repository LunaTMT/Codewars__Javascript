const pigIt = str => str.replace(/\b\w+\b|[.,!?;]/g, match => /^\w+$/.test(match)? match.slice(1) + match[0] + "ay" : match);               


