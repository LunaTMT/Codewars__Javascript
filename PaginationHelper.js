class PaginationHelper {
    constructor(arr, max) {
      this.arr = arr;
      this.max = max;
      this.n = arr.length;
  
      this.remainder = this.n % max;
      this.minPages = Math.floor(this.n / max);
      this.maxPages = this.remainder >= 1 ? this.minPages + 1 : this.minPages;
   
      this.pages = arr.map(e => Math.floor(e / max));
    }
    
    itemCount() {
      return this.n;
    }
    
    pageCount() {
      return this.maxPages;
    }
  
    pageItemCount(page) {
      if (page >= this.maxPages || page < 0) {
        return -1;
      }
      
      const itemsOnPage = page < this.minPages ? this.max : this.remainder;
      return itemsOnPage;
    }
    
    pageIndex(idx) {
      return (idx >= 0 && idx < this.n) ? Math.floor(idx / this.max) : -1;
    }
  }