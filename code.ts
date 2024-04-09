const fn = () => {
    const name = 'tom';
    return () => {
        return name;
    }
}

const g = fn();
console.log('g>>', g);
