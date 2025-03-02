# Maze Pathfinding Visualization

### Objective

Given a maze in the form of a 2D array (grid) where:

Find the shortest path from a starting point to a target point using an algorithm of your choice. You must visualize the pathfinding process step-by-step as it dynamically explores the maze.

#### Input:
- A 2D array grid representing the maze.
  - `1` represents walls (border or obstacles that cannot be crossed).
  - `0` represents open paths that can be navigated.

- Coordinates start and end, where:
  - `start = [x1, y1]` is the starting position in the maze.
  - `end = [x2, y2]` is the destination point.

#### Output:
A visualization of the maze exploration as the algorithm searches for the shortest path. The algorithm highlights shortest path and displays "Maze is solved" message. If there is no path between two coordinates program doesn't highlight any path and display "Maze is not solvable" message"

### Algorithm Choice:
- BFS(Breadth-first search) obtains shortest path between two nodes by searching all adjacent cells a current cell.

#### Visualization:
- White box - free cells which are marked with `0` 
- Black box - wall cells whick are marked with `1`
- Grey box - visited cells which are marked(during the search process with the selected Algorithm) with `2`.
- Green box - final path between two nodes once found by replacing cells with `3`.

#### Edge cases:
- Minumum maze grid size 2x2 
- Maximum maze grid size 45x45
- Maze can be generated without any walls



