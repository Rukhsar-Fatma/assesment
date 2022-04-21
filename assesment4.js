var jump = function(X, Y, D) {
    let i = 0;
    while (X < Y) {
        X += D;
        i++;
    }
    return i;
};

jump(10, 85, 30);