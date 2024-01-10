function loop_size(node){
  let slow = node;
  let fast = node;
  let loopLength = 1;
  
  while (fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast){
      break;
    }
  }
  fast = fast.next
  while (slow !== fast){
    fast = fast.next
    loopLength += 1
  }
  return loopLength
    
}