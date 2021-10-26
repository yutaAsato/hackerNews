import React, { useEffect, useState } from 'react';
import { fetchStories } from '../../api/api';
import { ListItems } from '../ListItems';
import { StoriesArray } from '../types'
import {
    ListContainerWrapper,
    ListHeader,
    SkeletonLoader
} from '../lib';
import { useInfiniteScroll } from '../../hooks/useInfinteScroll';
import { containerVariants } from '../../constants/list';

export const List = () => {
    const { count } = useInfiniteScroll();
    const [stories, setStories] = useState<StoriesArray>([])
    const [isFetching, setIsFetching] = useState<boolean>(false)


    useEffect(() => {
        fetchStories(count, setStories, setIsFetching);
    }, [count]);

    return (
        <>
            <ListContainerWrapper data-test-id="list-container">
                <ListHeader data-testid={'list-header-wrapper'}
                    variants={containerVariants}
                    initial='initial'
                    animate='visible'
                >
                    Hacker News Stories
                </ListHeader>
                {isFetching && <SkeletonLoader full={true} />}
                <ListItems stories={stories} isFetching={isFetching} />
            </ListContainerWrapper>
        </>
    );
};

