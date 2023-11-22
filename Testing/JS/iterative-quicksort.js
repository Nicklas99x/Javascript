function iterativeQuickSort(arr) {
    let stack = [{ left: 0, right: arr.length - 1 }];
    let temp, pivotIndex, pivotValue, i;

    while (stack.length > 0) {
        let { left, right } = stack.pop();
        if (left < right) {
            pivotValue = arr[right]; i = left - 1;
            for (let j = left; j < right; j++) {
                if (arr[j] <= pivotValue) {
                i++;
                temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                }
            }
            temp = arr[i + 1]; arr[i + 1] = arr[right]; arr[right] = temp;
            pivotIndex = i + 1;
            stack.push({ left, right: pivotIndex - 1 });
            stack.push({ left: pivotIndex + 1, right });
        }
    }
}

module.exports = { iterativeQuickSort }