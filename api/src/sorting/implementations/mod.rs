use super::super::structs::{Cycle, SortingInput, SortingOutput, Step};

pub fn bubble_sort(input: SortingInput) -> SortingOutput {
    let mut arr = input.arr;
    let n = arr.len();
    let mut cycles: Vec<Cycle> = Vec::new();

    for i in 0..n {
        let mut steps = Vec::new();
        let mut swapped = false;
        for j in 0..n - i - 1 {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
                swapped = true;
                steps.push(Step {
                    swapped: true,
                    compared: vec![(j, j + 1)],
                });
            } else {
                steps.push(Step {
                    swapped: false,
                    compared: vec![(j, j + 1)],
                });
            }
        }

        if !steps.is_empty() {
            cycles.push(Cycle { cycle: steps });
        }

        if !swapped {
            break;
        }
    }

    if cycles.is_empty() {
        cycles.push(Cycle { cycle: Vec::new() });
    }

    SortingOutput {
        sort: "Bubble".to_string(),
        cycles: cycles,
    }
}

pub fn insertion_sort(input: SortingInput) -> SortingOutput {
    let mut arr = input.arr;
    let n = arr.len();
    let mut cycles: Vec<Cycle> = Vec::new();

    for i in 1..n {
        let mut steps = Vec::new();
        let key = arr[i];
        let mut j: isize = i as isize - 1;
        while j >= 0 && arr[j as usize] > key {
            arr[j as usize + 1] = arr[j as usize];
            steps.push(Step {
                swapped: true,
                compared: vec![(j as usize, j as usize + 1)],
            });
            j = j - 1;
        }

        if steps.is_empty() {
            steps.push(Step {
                swapped: false,
                compared: vec![(j as usize, i)],
            });
        }

        arr[(j + 1) as usize] = key;

        cycles.push(Cycle { cycle: steps });
    }

    if cycles.is_empty() {
        cycles.push(Cycle { cycle: Vec::new() });
    }

    SortingOutput {
        sort: "Insertion".to_string(),
        cycles: cycles,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_bubble_sort_normal() {
        let input = SortingInput {
            sort: "BubbleSort".to_string(),
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
            sort: "BubbleSort".to_string(),
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
            sort: "BubbleSort".to_string(),
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
            sort: "BubbleSort".to_string(),
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
            sort: "InsertionSort".to_string(),
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
            sort: "InsertionSort".to_string(),
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
            sort: "InsertionSort".to_string(),
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
            sort: "InsertionSort".to_string(),
            arr: vec![1],
        };
        let output = insertion_sort(input);

        // Tests that there is only one cycle
        assert_eq!(output.cycles.len(), 1);
        assert_eq!(output.sort, "Insertion".to_string());
    }
}
