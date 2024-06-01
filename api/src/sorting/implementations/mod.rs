use super::super::structs::{Cycle, SortingInput, SortingOutput, Step};

/// Bubble Sort
///
/// Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
/// The pass through the list is repeated until the list is sorted.
///
/// Time Complexity:
/// - Best: O(n)
/// - Average: O(n^2)
/// - Worst: O(n^2)
///
/// Space Complexity: O(1)
///
/// Stable: Yes
///
/// # Arguments
///
/// * `input` - A SortingInput object that contains the array to be sorted
///
/// # Returns
///
/// * A SortingOutput object that contains the sorted array and other information
pub fn bubble_sort(input: SortingInput) -> SortingOutput {
    // Initialize variables
    let mut arr = input.arr;
    let n = arr.len();
    let mut cycles: Vec<Cycle> = Vec::new();

    // Iterate through the array
    for i in 0..n {
        // Initialize variables
        let mut steps = Vec::new();
        let mut swapped = false;
        // Compare adjacent elements and swap if they are in the wrong order, stopping one element shorter each loop
        for j in 0..n - i - 1 {
            // If the element is greater than the next element, swap them
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
                swapped = true;
                // Add the step to the cycle
                steps.push(Step {
                    swapped: true,
                    compared: vec![(j, j + 1)],
                });
            // If the element is not greater than the next element, do not swap them
            } else {
                // Add the step to the cycle
                steps.push(Step {
                    swapped: false,
                    compared: vec![(j, j + 1)],
                });
            }
        }

        // If the steps are not empty, add the cycle to the cycles
        if !steps.is_empty() {
            cycles.push(Cycle { cycle: steps });
        }

        // If no swaps were made, the array is already sorted
        if !swapped {
            break;
        }
    }

    // If no cycles were made, add an empty cycle
    if cycles.is_empty() {
        cycles.push(Cycle { cycle: Vec::new() });
    }

    // Return the output
    SortingOutput {
        sort: "Bubble".to_string(),
        cycles: cycles,
    }
}

/// Insertion Sort
///
/// Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
/// It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
///
/// Time Complexity:
/// - Best: O(n)
/// - Average: O(n^2)
/// - Worst: O(n^2)
///
/// Space Complexity: O(1)
///
/// Stable: Yes
///
/// # Arguments
///
/// * `input` - A SortingInput object that contains the array to be sorted
///
/// # Returns
///
/// * A SortingOutput object that contains the sorted array and other information
pub fn insertion_sort(input: SortingInput) -> SortingOutput {
    // Initialize variables
    let mut arr = input.arr;
    let n = arr.len();
    let mut cycles: Vec<Cycle> = Vec::new();

    // Iterate through the array, starting at the second element
    for i in 1..n {
        // Initialize variables
        let mut steps = Vec::new();
        let key = arr[i]; // The key is the current element
        let mut j: isize = i as isize - 1;
        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while j >= 0 && arr[j as usize] > key {
            // Shift the element to the right
            arr[j as usize + 1] = arr[j as usize];
            // Add the step to the cycle
            steps.push(Step {
                swapped: true,
                compared: vec![(j as usize, j as usize + 1)],
            });
            // Move to the next element
            j = j - 1;
        }

        // If no swaps were made, add the comparison to the cycle
        if steps.is_empty() {
            // Add the step to the cycle
            steps.push(Step {
                swapped: false,
                compared: vec![(j as usize, i)],
            });
        }

        // Insert the key into the correct position
        arr[(j + 1) as usize] = key;

        // Add cycle to cycles
        cycles.push(Cycle { cycle: steps });
    }

    // If no cycles were made, add an empty cycle
    if cycles.is_empty() {
        cycles.push(Cycle { cycle: Vec::new() });
    }

    // Return the output
    SortingOutput {
        sort: "Insertion".to_string(),
        cycles: cycles,
    }
}

/// Selection Sort
///
/// Selection sort is a simple sorting algorithm that repeatedly finds the minimum element from the unsorted part of the array and swaps it with the first element of the unsorted part.
/// The pass through the list is repeated until the list is sorted.
///
/// Time Complexity:
/// - Best: O(n^2)
/// - Average: O(n^2)
/// - Worst: O(n^2)
///
/// Space Complexity: O(1)
///
/// Stable: No
///
/// # Arguments
///
/// * `input` - A SortingInput object that contains the array to be sorted
///
/// # Returns
///
/// * A SortingOutput object that contains the sorted array and other information
pub fn selection_sort(input: SortingInput) -> SortingOutput {
    // Initialize variables
    let mut arr = input.arr;
    let n = arr.len();
    let mut cycles: Vec<Cycle> = Vec::new();

    // Iterate through the array
    for i in 0..n {
        // Initialize variables
        let mut steps = Vec::new();
        let mut min_index = i;

        steps.push(Step {
            swapped: false,
            compared: vec![(i, min_index)],
        });

        // Find the minimum element in the unsorted part of the array
        for j in i + 1..n {
            if arr[j] < arr[min_index] {
                min_index = j;
            }
            steps.push(Step {
                swapped: false,
                compared: vec![(j, min_index)],
            });
        }

        // Swap the minimum element with the first element of the unsorted part
        if min_index != i {
            arr.swap(i, min_index);
        }

        // Add the step to the cycle
        steps.push(Step {
            swapped: true,
            compared: vec![(i, min_index)],
        });

        // Add cycle to cycles
        cycles.push(Cycle { cycle: steps });
    }

    // If no cycles were made, add an empty cycle
    if cycles.is_empty() {
        cycles.push(Cycle { cycle: Vec::new() });
    }

    // Return the output
    SortingOutput {
        sort: "Selection".to_string(),
        cycles: cycles,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_bubble_sort_normal() {
        let input = SortingInput {
            sort: "bubble".to_string(),
            arr: vec![5, 3, 8, 4, 2],
        };
        let output = bubble_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .swapped,
            true
        );

        // Tests a step in the second cycle
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.get(1).unwrap().compared,
            vec![(1, 2)]
        );
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.get(1).unwrap().swapped,
            true
        );

        // Tests that last step is correct
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().swapped,
            true
        );
        assert_eq!(output.sort, "Bubble".to_string());
    }

    #[test]
    fn test_bubble_sort_already_sorted() {
        let input = SortingInput {
            sort: "bubble".to_string(),
            arr: vec![1, 2, 3, 4, 5],
        };
        let output = bubble_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .swapped,
            false
        );

        // Tests that only one cycle is run
        assert_eq!(output.cycles.len(), 1);
        assert_eq!(output.sort, "Bubble".to_string());
    }

    #[test]
    fn test_bubble_sort_reverse_sorted() {
        let input = SortingInput {
            sort: "bubble".to_string(),
            arr: vec![5, 4, 3, 2, 1],
        };
        let output = bubble_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .swapped,
            true
        );

        // Tests a step in the second cycle
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.get(1).unwrap().compared,
            vec![(1, 2)]
        );
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.get(1).unwrap().swapped,
            true
        );

        // Tests that last step is correct
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().swapped,
            true
        );
        assert_eq!(output.sort, "Bubble".to_string());
    }

    #[test]
    fn test_bubble_sort_single_element() {
        let input = SortingInput {
            sort: "bubble".to_string(),
            arr: vec![1],
        };
        let output = bubble_sort(input);

        // Tests that there is only one cycle
        assert_eq!(output.cycles.len(), 1);
        assert_eq!(output.sort, "Bubble".to_string());
    }

    #[test]
    fn test_insertion_sort_normal() {
        let input = SortingInput {
            sort: "insertion".to_string(),
            arr: vec![5, 3, 8, 4, 2],
        };
        let output = insertion_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .swapped,
            true
        );

        // Tests a step in the middle
        assert_eq!(
            output
                .cycles
                .get(1)
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .compared,
            vec![(1, 2)]
        );
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.first().unwrap().swapped,
            false
        );

        // Tests that last step is correct
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().swapped,
            true
        );
        assert_eq!(output.sort, "Insertion".to_string());
    }

    #[test]
    fn test_insertion_sort_already_sorted() {
        let input = SortingInput {
            sort: "insertion".to_string(),
            arr: vec![1, 2, 3, 4, 5],
        };
        let output = insertion_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .swapped,
            false
        );

        // Tests that every cycle is run
        assert_eq!(output.cycles.len(), 4);
        assert_eq!(output.sort, "Insertion".to_string());
    }

    #[test]
    fn test_insertion_sort_reverse_sorted() {
        let input = SortingInput {
            sort: "insertion".to_string(),
            arr: vec![5, 4, 3, 2, 1],
        };
        let output = insertion_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .first()
                .unwrap()
                .swapped,
            true
        );

        // Tests a step in the middle
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.get(1).unwrap().compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.get(1).unwrap().swapped,
            true
        );

        // Tests that last step is correct
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().compared,
            vec![(0, 1)]
        );
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().swapped,
            true
        );
        assert_eq!(output.sort, "Insertion".to_string());
    }

    #[test]
    fn test_insertion_sort_single_element() {
        let input = SortingInput {
            sort: "insertion".to_string(),
            arr: vec![1],
        };
        let output = insertion_sort(input);

        // Tests that there is only one cycle
        assert_eq!(output.cycles.len(), 1);
        assert_eq!(output.sort, "Insertion".to_string());
    }

    #[test]
    fn test_selection_sort_normal() {
        let input = SortingInput {
            sort: "selection".to_string(),
            arr: vec![5, 3, 8, 4, 2],
        };
        let output = selection_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .last()
                .unwrap()
                .compared,
            vec![(0, 4)]
        );
        assert_eq!(
            output.cycles.first().unwrap().cycle.last().unwrap().swapped,
            true
        );

        // Tests a step in the middle
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.last().unwrap().compared,
            vec![(1, 1)]
        );
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.last().unwrap().swapped,
            true
        );

        // Tests that last step is correct
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().compared,
            vec![(4, 4)]
        );
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().swapped,
            true
        );
        assert_eq!(output.sort, "Selection".to_string());
    }

    #[test]
    fn test_selection_sort_already_sorted() {
        let input = SortingInput {
            sort: "selection".to_string(),
            arr: vec![1, 2, 3, 4, 5],
        };
        let output = selection_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .last()
                .unwrap()
                .compared,
            vec![(0, 0)]
        );
        assert_eq!(
            output.cycles.first().unwrap().cycle.last().unwrap().swapped,
            true
        );

        // Tests that every cycle is run
        assert_eq!(output.cycles.len(), 5);
        assert_eq!(output.sort, "Selection".to_string());
    }

    #[test]
    fn test_selection_sort_reverse_sorted() {
        let input = SortingInput {
            sort: "selection".to_string(),
            arr: vec![5, 4, 3, 2, 1],
        };
        let output = selection_sort(input);

        // Tests that first step is correct
        assert_eq!(
            output
                .cycles
                .first()
                .unwrap()
                .cycle
                .last()
                .unwrap()
                .compared,
            vec![(0, 4)]
        );
        assert_eq!(
            output.cycles.first().unwrap().cycle.last().unwrap().swapped,
            true
        );

        // Tests a step in the middle
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.last().unwrap().compared,
            vec![(1, 3)]
        );
        assert_eq!(
            output.cycles.get(1).unwrap().cycle.last().unwrap().swapped,
            true
        );

        // Tests that last step is correct
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().compared,
            vec![(4, 4)]
        );
        assert_eq!(
            output.cycles.last().unwrap().cycle.last().unwrap().swapped,
            true
        );
        assert_eq!(output.sort, "Selection".to_string());
    }

    #[test]
    fn test_selection_sort_single_element() {
        let input = SortingInput {
            sort: "selection".to_string(),
            arr: vec![1],
        };
        let output = selection_sort(input);

        // Tests that there is only one cycle
        assert_eq!(output.cycles.len(), 1);
        assert_eq!(output.sort, "Selection".to_string());
    }
}
