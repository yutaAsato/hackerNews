import { motion } from 'framer-motion';
import { memo } from 'react';
import { titleVariant, linkVariant, authorVariant } from '../../constants/listItems';
import {
    StoryWrapper,
    StoryTitle,
    StoryMeta,
    StoryMetaEl,
    StoryAuthor,
    SkeletonLoader,
} from '../lib';
import { StoriesArray, Stories } from '../types'

type Props = {
    stories: StoriesArray
    isFetching: boolean
}

export const ListItems = memo((props: Props) => {
    const { stories, isFetching } = props

    return (
        <>
            {stories?.map(((post: Stories) => (
                isFetching ? <SkeletonLoader /> :
                    (<StoryWrapper data-testid={"story-wrapper"}>
                        <StoryTitle data-testid={'story-title-wrapper'} variants={titleVariant} whileHover='hover' >
                            <motion.a data-testid={'link-wrapper'} variants={linkVariant} initial='initial' whileHover='hover' animate='visible'
                                target="_blank" href={post.url} rel="noreferrer">{post.title}</motion.a>
                        </StoryTitle>
                        <StoryMeta>
                            <StoryMetaEl variants={linkVariant} initial='initial' animate='visible' >By:</StoryMetaEl >
                            <StoryAuthor data-testid={'story-author-wrapper'} variants={authorVariant} initial='initial' whileHover='hover' animate='visible'>{post.by}</StoryAuthor>
                        </StoryMeta >
                    </StoryWrapper >)
            )))
            }
        </>
    );
})




