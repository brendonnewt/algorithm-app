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
        cycles.push(Cycle { cycle: steps });
        if !swapped {
            break;
        }
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

        arr[(j + 1) as usize] = key;

        cycles.push(Cycle { cycle: steps });
    }

    SortingOutput {
        sort: "Insertion".to_string(),
        cycles: cycles,
    }
}
