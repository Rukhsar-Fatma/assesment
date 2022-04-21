var rotate = function(A, K) {
    let i = 0;
    while (i < K) {
        A.unshift(A.pop());
        i++;
    }
    return A;
};

rotate([1, 2, 3, 4, 5], 2);