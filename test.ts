function fibo(n: number) {
    if (n  === 0) return 0;
    let fn: number = 0, nextFn: number = 1;
    let tmp_fn: number = 0, tmp_nextFn: number = 1;
    for (let i: number = 0; i < n; i++) {
        tmp_fn = nextFn;
        tmp_nextFn = nextFn  + fn;
        fn = tmp_fn;
        nextFn = tmp_nextFn;
    }
    return tmp_fn;
}

console.log(fibo(13));