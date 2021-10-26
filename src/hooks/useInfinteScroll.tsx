import { useState, useEffect } from 'react';

enum Stories {
    Increment = 20,
    Max = 100
}

export const useInfiniteScroll = (): { count: number } => {
    const [isBottom, setIsBottom] = useState<Boolean>(false);
    const [count, setCount] = useState<number>(Stories.Increment);

    const handleScroll = debounce(() => {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        if (scrollTop + window.innerHeight + 30 >= scrollHeight) {
            setIsBottom(true);
        }
    }, 300)

    useEffect(() => {
        if (!isBottom) return;
        if (count + Stories.Increment >= Stories.Max) {
            setCount(Stories.Max);
        } else {
            setCount(count + Stories.Increment);
        }
        setIsBottom(false);
    }, [count, isBottom]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { count };
};


const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const debounced = (...args: Parameters<F>) => {
        if (timeout !== null) {
            clearTimeout(timeout);
            timeout = null;
        }
        timeout = setTimeout(() => func(...args), waitFor);
    };
    return debounced as (...args: Parameters<F>) => ReturnType<F>;
};