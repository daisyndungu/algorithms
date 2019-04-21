
const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp;
}

const pivot = (arr, start = 0, end=arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;
    for (i = start + 1; i < end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            // swaps the current index the former item that was larger than the pivot
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
