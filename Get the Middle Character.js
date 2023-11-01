function getMiddle(s)
{
    const n = s.length
    const mid = n/2
    return n%2? s[Math.floor(mid)] : s.slice(mid-1, mid+1);
}