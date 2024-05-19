use super::super::structs::{SortingInput, SortingOutput, Step};

pub fn bubble_sort(input: SortingInput) -> SortingOutput {
    let mut arr = input.arr;
    let n = arr.len();
    let mut steps = Vec::new();

    for i in 0..n {
        let mut swapped = false;
        for j in 0..n - i - 1 {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
                swapped = true;
                steps.push(Step {
                    swapped: vec![(j, j + 1)],
                });
            }
        }
        if !swapped {
            break;
        }
    }

    SortingOutput {
        sort: "Bubble".to_string(),
        steps: steps,
    }
}
