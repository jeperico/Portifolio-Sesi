function countdown(time: number, isFirst: boolean) {
    if (isFirst) console.log(`[COUNTDOWN] <${time}>`)
    setTimeout(() => {
        console.log(`[COUNTDOWN] <${time - 1}>`);
        time = time -1;
        if (time <= 0) return
        countdown(time, false);
    }, 1000);
}

countdown(10, true);