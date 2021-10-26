import styled from "styled-components";
import { motion } from "framer-motion"

export const ListContainerWrapper = styled.main`
max-width: 1140px;
padding: 20px 15px;
margin: auto;
`;

export const ListHeader = styled(motion.h1)`
cursor: pointer;
position: relative;
&:after {   
background: none repeat scroll 0 0 transparent;
bottom: 0;
content: "";
display: block;
height: 4px;
position: absolute;
background: #f8dd42;
transition: width 0.2s ease 0s, left 0.1s ease 0s;
width: 0;
}
  &:hover:after { 
  width: 365px; 
  left: 0; 
}
`;

export const StoryWrapper = styled.section`
padding-top: 10px;
margin-bottom: 20px;
border-top: 1px solid #cccccc;
&:first-of-type {
    border-top: 0;
}
&:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
}
`;

export const StoryTitle = styled(motion.h1)`
margin-bottom: 5px;
font-size: 18px;
line-height: 1.8;
margin: 0;
text-decoration: none;
a {
    color: #2e2e2c;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
font-size: 12px;
display: flex;
> span:first-child {
    margin-right: 9px;
  }
`;

export const StoryAuthor = styled(motion.div)`
cursor: pointer;
color: grey;
`

export const StoryMetaEl = styled(motion.span)`
color: grey;
font-weight: bold;
`;

export const SkeletonPulse = styled.div`
display: inline-block;
height: 100%;
width: 100%;
background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
background-size: 400% 400%;
animation: pulse 1.2s ease-in-out infinite;
@keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;


type Props = {
  full?: boolean
}

export const SkeletonLoader = (props: Props) => {
  const { full = false } = props
  return (
    <div data-testid={`skeleton-loader-wrapper`}>
      {!full ? (<>
        <SkeletonWrapperLong>
          <SkeletonPulse />
        </SkeletonWrapperLong>
        < SkeletonWrappershort>
          <SkeletonPulse />
        </SkeletonWrappershort>
      </>) : ([...Array(12)].map((_, i) => (
        <>
          <SkeletonWrapperLong>
            <SkeletonPulse />
          </SkeletonWrapperLong>
          < SkeletonWrappershort>
            <SkeletonPulse />
          </SkeletonWrappershort>
        </>
      )))
      }
    </div>
  )
};

const SkeletonWrapperLong = styled.div`
width: 1000px;
height: 30px;
margin-bottom: 10px;
`

const SkeletonWrappershort = styled.div`
width: 400px;
height: 20px;
margin-bottom: 20px;
`

export const FullPageErrorFallback = ({ error }: any) => {
  return (
    <ErrorFallbackWrapper>
      <p>Uh oh... There's a problem. Try refreshing the page.</p>
      <pre>{error.message}</pre>
    </ErrorFallbackWrapper>
  )
}

const ErrorFallbackWrapper = styled.div`
color: red;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

