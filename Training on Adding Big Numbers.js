function recoverSecret(triplets) {
    const AL = {};
  
    // Build AL between characters based on triplets
    triplets.forEach(triplet => {
      const [a, b, c] = triplet;
  
      if (!AL[a]) {
        AL[a] = [];
      }
      AL[a].push(b);
  
      if (!AL[b]) {
        AL[b] = [];
      }
      AL[b].push(c);
    });
  
    const visited = {};
    let result = '';
  
    // Function to perform depth-first search (DFS) for string reconstruction
    function dfs(node) {
      if (!visited[node]) {
        visited[node] = true;
  
        if (AL[node]) { //Are there any adjacency nodes that this node has a relationship with (does it exist in AL)
          AL[node].forEach(next => {
            dfs(next);
          });
        }
  
        result = node + result;
      }
    }
  
    // Perform DFS starting from each unique character in the AL
    Object.keys(AL).forEach(letter => {
      if (!visited[letter]) {
        dfs(letter);
      }
    });
  
    return result;
};
  

let t = [
['t','u','p'],
['w','h','i'],
['t','s','u'],
['a','t','s'],
['h','a','p'],
['t','i','s'],
['w','h','s']
];

recoverSecret(t)