class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        
        rows = len(grid)
        columns = len(grid[0])
        
        queue = deque((i,j) for i in range(rows) for j in range(columns) if grid[i][j]==2)
        fresh = sum(row.count(1) for row in grid)
        if fresh == 0: return 0

        count = 0
        while queue:
            breadth_size = len(queue)

            for _ in range(breadth_size):
                r, c = queue.popleft()
                
                for dr, dc in ( (1,0), (-1, 0), (0, 1), (0, -1) ):
                    row = r + dr
                    col = c + dc

                    if (0 <= row < rows) and (0 <= col < columns) and grid[row][col] == 1:
                        grid[row][col] = 2
                        queue.append((row,col))
                        fresh -= 1
            count += 1
        return count-1 if fresh == 0 else -1
        