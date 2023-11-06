  
function encrypt(text, n) {
    if (n <= 0 || !text) return text;
    const [even, odd] = text.split('').reduce((acc, e, i) => {  acc[i % 2].push(e); return acc; }, [[], []]);
    return encrypt(odd.join('').concat(even.join('')), n - 1);
  }

function decrypt(text, n) {
    if (n <= 0) return text;

    const [mid, even, odd] = text.splitInHalf()
    let decryptedText = '';
    const minLength = Math.min(even.length, odd.length);

    for (let i = 0; i < minLength; i++) {
        decryptedText += odd[i] + even[i];
    }

    decryptedText += even.slice(minLength);
    decryptedText += odd.slice(minLength);

    return decrypt(decryptedText, n - 1);
  };

String.prototype.splitInHalf = function() {
    const mid = Math.floor(this.length / 2);
    const firstHalf = this.slice(0, mid);
    const secondHalf = this.slice(mid);
    return [mid, firstHalf, secondHalf];
  };