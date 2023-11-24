from typing import List
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        
        rows = len(grid)
        columns = len(grid[0])
        res = 0

        def dfs(r, c):
            if not (0 <= r < rows) or not (0 <= c < columns) or grid[r][c] == "0":
                return
            grid[r][c] = "0"
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)


        for i in range(rows):
            for j in range(columns):
                if grid[i][j] == "1":
                    dfs(i, j)
                    res += 1
        return res